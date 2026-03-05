import { transformData } from "../helpers";
import type { GoogleSheetsApiResponse, ResumeData } from "../types";

const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEETS_DATA as string;

export async function fetchGoogleSheetsData(): Promise<ResumeData> {
  const res = await fetch(SHEET_URL);

  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

  const json: GoogleSheetsApiResponse = await res.json();

  if (json.result !== "success" || !json.data) {
    throw new Error(json.message ?? "Fetch error");
  }

  return transformData(json.data.resume);
}