import { describe, test } from "@std/testing/bdd";
import day02 from "./day02.ts";
import { expect } from "@std/expect";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

describe("Year 2024 Day 2", () => {
  test("Part 1 returns number of safe reports based on their level data", () => {
    expect(day02.part1(input)).toBe(2);
  });
});
