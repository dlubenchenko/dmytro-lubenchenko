export function getLocal<T = string>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

export function setLocal<T = string>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // handle quota exceeded, etc.
  }
}