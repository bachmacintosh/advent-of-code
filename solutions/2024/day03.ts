import type { AdventDay } from "../../types.ts";

const MUL_REGEX = /mul\((?<num1>\d{1,3}),(?<num2>\d{1,3})\)/gu;

const day03: AdventDay = {
  year: 2024,
  day: 3,
  part1: (input) => {
    let sum = 0;
    for (const match of input.matchAll(MUL_REGEX)) {
      const num1 = Number(match.groups?.num1);
      const num2 = Number(match.groups?.num2);
      sum += num1 * num2;
    }
    return sum;
  },
  part2: () => 0,
};

export default day03;
