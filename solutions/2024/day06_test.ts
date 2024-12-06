import { describe, test } from "@std/testing/bdd";
import day06 from "./day06.ts";
import { expect } from "@std/expect";

// Source: Made up a simple grid that will test all directions and allow an infinite loop to occur
const input = `....#.....
........#.
....^.....
.......#..`;

describe("Year 2024 Day 6", () => {
  test("Part 1 tracks distinct Guard movements following Guard Rules in puzzle", () => {
    expect(day06.part1(input)).toBe(12);
  });
  test("Part 2 finds the number of locations to place an obstacle to send the Guard into an infinite loop", () => {
    expect(day06.part2(input)).toBe(1);
  });
});
