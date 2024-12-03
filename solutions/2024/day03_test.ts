import { describe, test } from "@std/testing/bdd";
import day03 from "./day03.ts";
import { expect } from "@std/expect";

const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

describe("Year 2024 Day 3", () => {
  test("Part 1 scans for valid multiplication instructions, and sums their results", () => {
    expect(day03.part1(input)).toBe(161);
  });
});
