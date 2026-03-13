const gridColsMap: Record<string, string> = {
  "1": "md:grid-cols-1",
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-3",
  "4": "md:grid-cols-4",
  "5": "md:grid-cols-5",
  "6": "md:grid-cols-6",
  "7": "md:grid-cols-7",
  "8": "md:grid-cols-8",
  "9": "md:grid-cols-9",
  "10": "md:grid-cols-10",
  "11": "md:grid-cols-11",
  "12": "md:grid-cols-12",
};

export function getGridClass(columnLayout?: string): string {
  return gridColsMap[columnLayout || "1"] || "md:grid-cols-2";
}

const orphanWidthMap: Record<number, string> = {
  2: "md:w-1/2",
  3: "md:w-1/3",
  4: "md:w-1/4",
  5: "md:w-1/5",
  6: "md:w-1/6",
};

export function getOrphanWidth(colCount: number): string {
  return orphanWidthMap[colCount] || "md:w-1/3";
}
