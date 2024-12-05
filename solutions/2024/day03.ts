import type { AdventDay } from "../../types.ts";

const MUL_REGEX = /(?<mul>mul\((?<num1>\d{1,3}),(?<num2>\d{1,3})\))|(?<do>do\(\))|(?<dont>don't\(\))/gu;

const day03: AdventDay = {
  year: 2024,
  day: 3,
  part1: (input) => {
    let sum = 0;
    for (const match of input.matchAll(MUL_REGEX)) {
      if (typeof match.groups?.num1 === "string" && typeof match.groups.num1 === "string") {
        const num1 = Number(match.groups.num1);
        const num2 = Number(match.groups.num2);
        sum += num1 * num2;
      }
    }
    return sum;
  },
  part2: (input) => {
    let sum = 0;
    let canDo = true;
    for (const match of input.matchAll(MUL_REGEX)) {
      if (typeof match.groups?.do === "string") {
        canDo = true;
      } else if (typeof match.groups?.dont === "string") {
        canDo = false;
      } else if (canDo && typeof match.groups?.num1 === "string" && typeof match.groups.num2 === "string") {
        const num1 = Number(match.groups.num1);
        const num2 = Number(match.groups.num2);
        sum += num1 * num2;
      }
    }
    return sum;
  },
};

export default day03;
