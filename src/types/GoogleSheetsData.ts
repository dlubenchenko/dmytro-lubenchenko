export type SheetItem = {
  id: string;
  item: string;
  details: string;
  img?: string;
}

export type GoogleSheetData = {
  [sheet: string]: SheetItem[];
}