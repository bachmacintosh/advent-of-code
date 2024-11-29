import day01 from "./day01.ts";
import { expect } from "@std/expect";

Deno.test("Year 2024 Day 1 Part 1", () => {
  const input = "Hello World!";
  expect(day01.part1(input)).toBe(input);
});

Deno.test("Year 2024 Day 1 Part 2", () => {
  const input = "Hello World!";
  expect(day01.part2(input)).toBe(input);
});
