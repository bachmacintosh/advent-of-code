import { describe, test } from "@std/testing/bdd";
import day03 from "./day03.ts";
import { expect } from "@std/expect";

const input1 = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const input2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

describe("Year 2024 Day 3", () => {
  test("Part 1 scans for valid multiplication instructions, and sums their results", () => {
    expect(day03.part1(input1)).toBe(161);
  });
  test("Part 2 does the same, but handles do() and don't() instructions that enable or disable future mul() instructions", () => {
    expect(day03.part2(input2)).toBe(48);
  });
});
