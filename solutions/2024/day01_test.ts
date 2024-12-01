import day01 from "./day01.ts";
import { expect } from "@std/expect";

Deno.test("Year 2024 Day 1 Part 1", () => {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  expect(day01.part1(input)).toBe(11);
});

Deno.test("Year 2024 Day 1 Part 2", () => {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  expect(day01.part2(input)).toBe(31);
});
