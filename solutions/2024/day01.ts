import type { AdventDay } from "../../types.ts";

const day01: AdventDay = {
  year: 2024,
  day: 1,
  part1: (input) => {
    const [leftList, rightList] = getLocationLists(input);
    leftList.sort((itemA, itemB) => itemA - itemB);
    rightList.sort((itemA, itemB) => itemA - itemB);
    let sum = 0;
    leftList.forEach((leftLoc, locIdx) => {
      if (leftLoc >= rightList[locIdx]) {
        sum += leftLoc - rightList[locIdx];
      } else {
        sum += rightList[locIdx] - leftLoc;
      }
    });
    return sum;
  },
  part2: (input) => {
    const [leftList, rightList] = getLocationLists(input);
    let sum = 0;
    leftList.forEach((leftLoc) => {
      sum += leftLoc * rightList.filter((rightLoc) => leftLoc === rightLoc).length;
    });
    return sum;
  },
};

export function getLocationLists(input: string): [number[], number[]] {
  const leftList: number[] = [];
  const rightList: number[] = [];
  input.split("\n").filter((line) => line.length).map((line) =>
    line.split("   ").map((numberString) => Number(numberString))
  ).forEach((item, itemIdx) => {
    if (isNaN(item[0]) || isNaN(item[1])) {
      throw new TypeError(`Invalid numerical input in Location IDs, row ${itemIdx + 1}`);
    }
    leftList.push(item[0]);
    rightList.push(item[1]);
  });
  return [leftList, rightList];
}

export default day01;
