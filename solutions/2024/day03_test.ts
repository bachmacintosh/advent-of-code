import { describe, test } from "@std/testing/bdd";
import day03 from "./day03.ts";
import { expect } from "@std/expect";

// Source: Made it up
// You may wish to replace with the sample input/output with that from the puzzle
// (just don't store it in Git if you do)
const input = "cheesemul(8,9)don't()mul(11,10)null(1,1)mul(1,3)do()$mul(128,256)";

describe("Year 2024 Day 3", () => {
  test("Part 1 scans for valid multiplication instructions, and sums their results", () => {
    expect(day03.part1(input)).toBe(32953);
  });
  test("Part 2 does the same, but handles do() and don't() instructions that enable or disable future mul() instructions", () => {
    expect(day03.part2(input)).toBe(32840);
  });
});
