import { describe, test } from "@std/testing/bdd";
import day01, { getLocationLists } from "./day01.ts";
import { expect } from "@std/expect";

const input = `3   4
4   3
2   5
1   3
3   9
3   3`;

describe("Year 2024 Day 1", () => {
  test("getLocationLists turns the input list into 2 Location ID lists", () => {
    expect(getLocationLists(input)).toEqual([[3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]]);
  });
  test("getLocationLists throws an error when invalid data is provided", () => {
    expect(() => getLocationLists(`nope   lol`)).toThrow();
  });
  test("Part 1 returns a sum of the distances between the sorted numbers on the left and right lists", () => {
    expect(day01.part1(input)).toBe(11);
  });
  test("Part 2 returns the summed Similarity Scores (how many times a numbeer on the left appears on the right) of all numbers in the left list", () => {
    expect(day01.part2(input)).toBe(31);
  });
});
