import type {
    GoogleSheetRow,
    Lang,
    ResumeData,
    ResumeItem,
    ResumeSection,
    ResumeSheets,
    SheetBoolean,
    SheetNumber,
} from "../types";

const SECTION_MAP: Record<string, ResumeSection> = {
    header: "header",
    contacts: "contacts",
    social: "socials",
    socials: "socials",
    language: "languages",
    languages: "languages",
    about: "about",
};

function createEmptySheets(): ResumeSheets {
    return { header: {}, contacts: {}, socials: {}, languages: {}, about: {} };
}

function normalizeComponent(value: unknown): ResumeSection | null {
    if (typeof value !== "string") return null;
    return SECTION_MAP[value.trim().toLowerCase()] ?? null;
}

function isEnabled(value: SheetBoolean): boolean {
    if (value === undefined || value === null || value === "") return true;
    if (typeof value === "boolean") return value;
    return value.toLowerCase() === "true";
}

function toOrder(value: SheetNumber, fallback: number): number {
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string" && value.trim() !== "") {
        const parsed = Number(value);
        if (Number.isFinite(parsed)) return parsed;
    }
    return fallback;
}

function buildByLang(rows: GoogleSheetRow[], lang: Lang): ResumeSheets {
    const grouped = createEmptySheets();

    rows.forEach((row, index) => {
        if (!row.id || !isEnabled(row.enable)) return;

        const section = normalizeComponent(row.component);

        if (!section) {
            console.warn("Unknown component, skipping row:", row);
            return;
        }

        const item: ResumeItem = {
            id: row.id,
            item: lang === "en" ? row.item_en : row.item_ua,
            details: lang === "en" ? row.desc_en : row.desc_ua,
            img: row.img || undefined,
            link: row.link || undefined,
            color: row.color || undefined,
            imgColor: row.imgColor || undefined,
            radius: row.radius || undefined,
            order: toOrder(row.order, index),
        };

        grouped[section][item.id] = item;
    });

    return grouped;
}

// Приймає GoogleSheetRow[] — без зайвої обгортки
export function transformData(rows: GoogleSheetRow[]): ResumeData {
    return {
        en: buildByLang(rows, "en"),
        ua: buildByLang(rows, "ua"),
    };
}