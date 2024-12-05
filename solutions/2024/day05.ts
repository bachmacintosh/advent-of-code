import type { AdventDay } from "../../types.ts";

const day05: AdventDay = {
  year: 2024,
  day: 5,
  part1: (input): number => {
    const [rules, updates] = getRulesAndUpdates(input);
    return updates.reduce((accumulator, currentUpdate) => {
      let followsRules = true;
      for (let updateIdx = currentUpdate.length - 1; updateIdx > 0; updateIdx--) {
        const currentNumber = currentUpdate[updateIdx];
        const restOfUpdate = currentUpdate.slice(0, updateIdx);
        const rule = rules.get(currentNumber);
        if (rule && rule.some((digit) => restOfUpdate.includes(digit))) {
          followsRules = false;
          break;
        }
      }
      return followsRules ? (accumulator += getMiddleOfArray(currentUpdate)) : accumulator;
    }, 0);
  },
  part2: (input): number => {
    const [rules, updates] = getRulesAndUpdates(input);
    return updates.reduce((accumulator, currentUpdate) => {
      const newUpdate = rearrangeUpdate(currentUpdate, rules);
      return (accumulator += getMiddleOfArray(newUpdate));
    }, 0);
  },
};

export function getRulesAndUpdates(input: string): [Map<number, number[]>, number[][]] {
  const [ruleStrings, updateStrings] = input.split("\n\n").filter((item) => item.length);

  const ruleMap = new Map<number, number[]>();
  let row = 0;
  const updateArray = updateStrings
    .split("\n")
    .map((updateString) => {
      row += 1;
      return updateString
        .split(",")
        .map((updatePart) => {
          const updateNumber = Number(updatePart);
          if (isNaN(updateNumber)) {
            throw new TypeError(`Invalid number in Updates Row ${row}`);
          }
          return updateNumber;
        });
    });
  row = 0;
  ruleStrings
    .split("\n")
    .map((ruleString) => {
      row += 1;
      return ruleString
        .split("|")
        .map((rulePart) => {
          const ruleNumber = Number(rulePart);
          if (isNaN(ruleNumber)) {
            throw new TypeError(`Invalid number in Rules Row ${row}`);
          }
          return ruleNumber;
        });
    }).forEach(([ruleLeft, ruleRight]) => {
      const currentRule = ruleMap.get(ruleLeft) || [];
      ruleMap.set(ruleLeft, [...currentRule, ruleRight]);
    });
  return [ruleMap, updateArray];
}

export function getMiddleOfArray<T>(array: T[]): T {
  const middleIdx = Math.floor(array.length / 2);
  return array[middleIdx];
}

export function rearrangeUpdate(
  currentUpdate: number[],
  rules: Map<number, number[]>,
  canSkip = true,
): number[] {
  for (let updateIdx = currentUpdate.length - 1; updateIdx > 0; updateIdx--) {
    const currentNumber = currentUpdate[updateIdx];
    const restOfUpdate = currentUpdate.slice(0, updateIdx);
    const rule = rules.get(currentNumber);
    if (rule && rule.some((digit) => restOfUpdate.includes(digit))) {
      currentUpdate.splice(updateIdx, 1);
      currentUpdate.unshift(currentNumber);
      const doNotSkip = false;
      return rearrangeUpdate(currentUpdate, rules, doNotSkip);
    }
  }

  return canSkip ? [0] : currentUpdate;
}

export default day05;
