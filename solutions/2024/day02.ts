import type { AdventDay } from "../../types.ts";

const day02: AdventDay = {
  year: 2024,
  day: 2,
  part1: (input): number => {
    const reports = getReports(input);
    return reports.filter(isSafeReport).length;
  },
  part2: (input): number => {
    const reports = getReports(input);
    return reports.filter((report) => {
      const dampenedReport = report.map((_level, levelIdx) => report.toSpliced(levelIdx, 1));
      return isSafeReport(report) || dampenedReport.some(isSafeReport);
    }).length;
  },
};

export function getReports(input: string): number[][] {
  const reports = input.split("\n").filter((line) => line.length).map((line) =>
    line.split(" ").map((item) => Number(item))
  );
  reports.forEach((report, reportIdx) => {
    report.forEach((level, levelIdx) => {
      if (isNaN(level)) {
        throw new TypeError(`Invalid numerical data in report, row ${reportIdx} column ${levelIdx}`);
      }
    });
  });
  return reports;
}

export function isSafeReport(report: number[]): boolean {
  if (report.length < 2) {
    throw new Error("Not enough data to determine if Report is safe based on criteria");
  }
  const increasing = report[1] - report[0] > 0;
  const decreasing = report[1] - report[0] < 0;
  for (const [levelIdx] of report.entries()) {
    if (levelIdx >= 1) {
      const delta = report[levelIdx] - report[levelIdx - 1];
      if (
        (Math.abs(delta) < 1 || Math.abs(delta) > 3) || (increasing && delta <= 0) || (decreasing && delta >= 0)
      ) {
        return false;
      }
    }
  }
  return true;
}

export default day02;
