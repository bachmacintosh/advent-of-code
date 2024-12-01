import type { AdventDay } from "../../types.ts";

const day01: AdventDay = {
  year: 2024,
  day: 1,
  part1: (input) => {
    const locationList1: number[] = [];
    const locationList2: number[] = [];
    input.split("\n").filter((line) => line.length).map((line) =>
      line.split("   ").map((numberString) => Number(numberString))
    ).forEach((item, itemIdx) => {
      if (isNaN(item[0]) || isNaN(item[1])) {
        throw new TypeError(`Invalid numerical input in Location IDs, row ${itemIdx + 1}`);
      }
      locationList1.push(item[0]);
      locationList2.push(item[1]);
    });
    locationList1.sort((itemA, itemB) => itemA - itemB);
    locationList2.sort((itemA, itemB) => itemA - itemB);
    if (locationList1.length !== locationList2.length) {
      throw new Error("Location ID List is unbalanced; we aren't missing any Locations, are we?");
    }
    let sum = 0;
    locationList1.forEach((loc1, locIdx) => {
      if (loc1 >= locationList2[locIdx]) {
        sum += loc1 - locationList2[locIdx];
      } else {
        sum += locationList2[locIdx] - loc1;
      }
    });
    return sum;
  },
  part2: (_input) => null,
};

export default day01;
