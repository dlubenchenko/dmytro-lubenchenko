import { useEffect, useState } from "react";

export interface GoogleSheetData {
  [sheet: string]: any[];
}

export function useGoogleSheetData(url: string) {
  const [data, setData] = useState<GoogleSheetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (json.result === "success") {
          setData(json.data);
        }
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}