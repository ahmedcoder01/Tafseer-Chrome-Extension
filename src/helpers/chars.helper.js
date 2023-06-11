export function removeDiacritics(text) {
  const arabicDiacritics =
    /[\u064B-\u065B\u065D-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u08D4-\u08E1\u0640]/g;
  return text.replace(arabicDiacritics, "");
}
