import { describe, test } from "@std/testing/bdd";
import day05, { getMiddleOfArray, getRulesAndUpdates, rearrangeUpdate } from "./day05.ts";
import { expect } from "@std/expect";

// Source: Numbers from RANDOM.ORG replaced numbers from the input, yielding a similar format, but with different output
const input = `32|62
27|18
27|81
27|32
42|39
81|18
42|62
39|18
27|39
62|39
81|62
27|62
81|39
32|18
42|32
27|42
32|81
42|81
32|39
42|18
62|18

42,32,81,62,39
27,81,62,39,18
42,39,18
42,27,32,81,62
81,18,39
27,18,42,39,32`;

const ruleMap = new Map<number, number[]>([
  [27, [18, 81, 32, 39, 62, 42]],
  [32, [62, 18, 81, 39]],
  [39, [18]],
  [42, [39, 62, 32, 81, 18]],
  [62, [39, 18]],
  [81, [18, 62, 39]],
]);

const updateArray: number[][] = [
  [42, 32, 81, 62, 39],
  [27, 81, 62, 39, 18],
  [42, 39, 18],
  [42, 27, 32, 81, 62],
  [81, 18, 39],
  [27, 18, 42, 39, 32],
];

const outOfOrderUpdate = [42, 27, 32, 81, 62];
const updateInOrder = [27, 42, 32, 81, 62];

describe("Year 2024 Day 5", () => {
  test("Part 1 checks if Page Updates follow Page Rules, and adds up middle pages for those that do", () => {
    expect(day05.part1(input)).toBe(182);
  });
  test("getRulesAndUpdates returns a Rule Map (each occurrance on let as key, and their page numbers on right as values) and Update Array", () => {
    expect(getRulesAndUpdates(input)).toEqual([ruleMap, updateArray]);
  });
  test("getRulesAndUpdates throw on invalid Rules", () => {
    expect(() =>
      getRulesAndUpdates(`lol|no

1,2`)
    ).toThrow();
  });
  test("getRulesAndUpdates throw on invalid Updates", () => {
    expect(() =>
      getRulesAndUpdates(`1|2

1,PSYKE`)
    ).toThrow();
  });
  test("getMiddleOfArray returns the middle item in an odd-number-count array", () => {
    expect(getMiddleOfArray([1, 2, 3, 4, 5])).toBe(3);
  });
  test("getMiddleOfArray returns right-favored middle in an even-number-count array", () => {
    expect(getMiddleOfArray([1, 2, 3, 4])).toBe(3);
  });
  test("Part 2 looks at only the out-of-order Updates, re-orders them to follow the Rules, and sums their middle page numbers", () => {
    expect(day05.part2(input)).toBe(103);
  });
  test("rearrangeUpdate puts the update in the correct order", () => {
    expect(rearrangeUpdate(outOfOrderUpdate, ruleMap)).toEqual(updateInOrder);
  });
  test(
    "rearrangeUpdate returns an array with the number 0 in it if the Update is already in order (so we don't add its middle value)",
    () => {
      expect(rearrangeUpdate(updateInOrder, ruleMap)).toEqual([0]);
    },
  );
});
