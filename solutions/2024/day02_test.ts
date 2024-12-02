import { describe, test } from "@std/testing/bdd";
import day02, { getReports } from "./day02.ts";
import { expect } from "@std/expect";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

describe("Year 2024 Day 2", () => {
  test("getReports turns the input list into an array of number arrays", () => {
    expect(getReports(input)).toEqual([[7, 6, 4, 2, 1], [1, 2, 7, 8, 9], [9, 7, 6, 2, 1], [1, 3, 2, 4, 5], [
      8,
      6,
      4,
      4,
      1,
    ], [1, 3, 6, 7, 9]]);
  });
  test("getReports throws an error with invalid numerical data", () => {
    expect(() => getReports(`1 2 lol`)).toThrow();
  });
  test("Part 1 returns number of safe reports based on their level data", () => {
    expect(day02.part1(input)).toBe(2);
  });
  test("Part 1 throws an error when there isn't enough data in a report to determine if it's safe", () => {
    expect(() => day02.part1(`1 2 3\n4`)).toThrow();
  });
});
