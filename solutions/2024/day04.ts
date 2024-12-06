import type { AdventDay } from "../../types.ts";

export const GRID_DIRECTIONS = {
  Up: [0, 1],
  DiagonalUpRight: [1, 1],
  Right: [1, 0],
  DiagonalDownRight: [1, -1],
  Down: [0, -1],
  DiagonalDownLeft: [-1, -1],
  Left: [-1, 0],
  DiagonalUpLeft: [-1, 1],
} as const;

export type GridDirection = keyof typeof GRID_DIRECTIONS;

const day04: AdventDay = {
  year: 2024,
  day: 4,
  part1: (input) => {
    const XMAS = "XMAS";
    let sum = 0;
    const grid = getGrid(input);
    const lastRowIdx = grid.length - 1;
    const lastColIdx = grid[0].length - 1;

    for (const [rowIdx, row] of grid.entries()) {
      for (const [colIdx] of row.entries()) {
        if (grid[rowIdx][colIdx] === "X") {
          directionLoop: for (const [directionX, directionY] of Object.values(GRID_DIRECTIONS)) {
            for (let xmasIdx = 1; xmasIdx < XMAS.length; xmasIdx++) {
              const newRowIdx = rowIdx + directionX * xmasIdx;
              const newColIdx = colIdx + directionY * xmasIdx;
              if (
                newRowIdx < 0 || newColIdx < 0 || newRowIdx > lastRowIdx || newColIdx > lastColIdx ||
                grid[newRowIdx][newColIdx] !== XMAS[xmasIdx]
              ) {
                continue directionLoop;
              }
            }
            sum += 1;
          }
        }
      }
    }
    return sum;
  },
  part2: (input): number => {
    let sum = 0;
    const grid = getGrid(input);
    const lastRowIdx = grid.length - 1;
    const lastColIdx = grid[0].length - 1;
    for (let rowIdx = 1; rowIdx < lastRowIdx; rowIdx++) {
      for (let colIdx = 1; colIdx < lastColIdx; colIdx++) {
        if (grid[rowIdx][colIdx] === "A") {
          const topLeft = grid[rowIdx - 1][colIdx - 1];
          const topRight = grid[rowIdx - 1][colIdx + 1];
          const bottomLeft = grid[rowIdx + 1][colIdx - 1];
          const bottomRight = grid[rowIdx + 1][colIdx + 1];
          const msCheck1 = `${topLeft}${bottomRight}`;
          const msCheck2 = `${bottomLeft}${topRight}`;
          if ((msCheck1 === "MS" || msCheck1 === "SM") && (msCheck2 === "MS" || msCheck2 === "SM")) {
            sum += 1;
          }
        }
      }
    }
    return sum;
  },
};

export const getGrid = (input: string): string[][] => input.split("\n").map((line) => line.split(""));

export default day04;
