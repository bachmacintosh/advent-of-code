import { describe, test } from "@std/testing/bdd";
import day02, { getReports, isSafeReport } from "./day02.ts";
import { expect } from "@std/expect";

// Source: RANDOM.ORG
const oldInput = `9 4 8 1 7
2 8 6 6 9
6 5 4 3 1
1 3 5 2 8
5 3 4 2 9
6 6 3 7 1`;

describe("Year 2024 Day 2", () => {
  test("getReports turns the input list into an array of number arrays", () => {
    expect(getReports(oldInput)).toEqual([[9, 4, 8, 1, 7], [2, 8, 6, 6, 9], [6, 5, 4, 3, 1], [1, 3, 5, 2, 8], [
      5,
      3,
      4,
      2,
      9,
    ], [6, 6, 3, 7, 1]]);
  });
  test("getReports throws an error with invalid numerical data", () => {
    expect(() => getReports(`1 2 lol`)).toThrow();
  });
  test("isSafeReport throws an error when there isn't enough data to determine safety", () => {
    expect(() => isSafeReport([1])).toThrow();
  });
  test("Part 1 returns number of safe reports based on their level data", () => {
    expect(day02.part1(oldInput)).toBe(1);
  });
  test("Part 2 returns number of safe reports based on their level data, but allows 1 unsafe level max per report", () => {
    expect(day02.part2(oldInput)).toBe(2);
  });
});
