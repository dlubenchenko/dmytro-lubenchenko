import { LanguageToggle, ThemeToggle } from ".";
import { useGoogleSheetData } from "../../hooks";
import { useLanguage } from "../../state/LanguageContext";
import type { SheetItem } from "../../types/GoogleSheetsData";

export const Layout = () => {
    const { language } = useLanguage();
    const { data, loading } = useGoogleSheetData("https://script.google.com/macros/s/AKfycbzE90iK9rG1K_i0r-7RaOeiUhnZ55jV2YmGR0bW4FVrBnYB58MkY8TsNBKK6H1VKi2o/exec");

    // Вибір даних по мові
    const header: SheetItem[] | undefined = data?.[`header_${language}`];
    const contacts: SheetItem[] | undefined = data?.[`contacts_${language}`];

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-3 color-white text-gray-darker dark:bg-gray-darkest dark:text-gray-lighter">
            <div className="flex justify-between mb-8 w-full">
                <ThemeToggle />
                <LanguageToggle />
            </div>
            <div className="text-2xl font-bold mb-4">
                {loading ? "Loading…" : `${header?.find(item => item.id === "name")?.details} ${header?.find(item => item.id === "surname")?.details}`}
            </div>
            <div className="mb-4">
                {contacts?.map(item => (
                    <div key={item.id} className="mb-2">
                        <span className="font-semibold">{item.item}: </span>
                        <span>{item.details}</span>
                    </div>
                ))}
            </div>
            {/* Далі секції: Experience, Projects, Skills, ... */}
        </div>
    );
};