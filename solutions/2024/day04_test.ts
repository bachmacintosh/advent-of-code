import { describe, test } from "@std/testing/bdd";
import day04 from "./day04.ts";
import { expect } from "@std/expect";

// Source: Made it up, albeit using dots to make it easier to see (and no it doesn't check all directions :) )
const input = `S.MXMASM.S
.A.SAMX.A.
S.M..MSM.S
....A.A.A.
...S..MM.S
X.....XX..
M....M....
A...A.....
S..S......`;

describe("Year 2024 Day 4", () => {
  test("Part 1 finds the word XMAS in a grid of letters, stemming from all directions", () => {
    expect(day04.part1(input)).toBe(8);
  });
  test("Part 2 looks for every X-MAS, which occurs where two MAS cross over each other to form an X shape", () => {
    expect(day04.part2(input)).toBe(3);
  });
});
