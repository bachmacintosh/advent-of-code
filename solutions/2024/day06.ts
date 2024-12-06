import type { AdventDay } from "../../types.ts";
import { getGrid, GRID_DIRECTIONS, type GridDirection } from "./day04.ts";

const day06: AdventDay = {
  year: 2024,
  day: 6,
  part1: (input) => {
    const grid = getGrid(input);
    let currentDirection: GridDirection = "Up";
    const locationSet = new Set<string>();
    let currentRowCol = findStartingPoint(grid);
    while (true) {
      const rowColKey = `${currentRowCol[0]},${currentRowCol[1]}`;
      locationSet.add(rowColKey);
      const nextStep = walkGrid(grid, currentRowCol, currentDirection);
      if (nextStep === null) {
        break;
      }
      [currentRowCol, currentDirection] = nextStep;
    }
    return locationSet.size;
  },
  part2: (input) => {
    let infiniteLoops = 0;
    const grid = getGrid(input);
    for (const [rowIdx, row] of grid.entries()) {
      for (const [colIdx] of row.entries()) {
        if (grid[rowIdx][colIdx] !== "^") {
          const copiedGrid = JSON.parse(JSON.stringify(grid)) as string[][];
          copiedGrid[rowIdx][colIdx] = "#";
          const LOOP_CIRCUIT_BREAKER = 10_000;
          let loopCount = 0;
          let currentRowCol = findStartingPoint(grid);
          let currentDirection: GridDirection = "Up";
          while (true) {
            loopCount += 1;
            if (loopCount > LOOP_CIRCUIT_BREAKER) {
              infiniteLoops += 1;
              break;
            }
            const nextStep = walkGrid(copiedGrid, currentRowCol, currentDirection);
            if (nextStep === null) {
              break;
            }
            [currentRowCol, currentDirection] = nextStep;
          }
        }
      }
    }
    return infiniteLoops;
  },
};

function findStartingPoint(grid: string[][]): [number, number] {
  let currentRowCol: [number, number] = [0, 0];
  grid.forEach((row, rowIdx) => {
    const colIdx = row.findIndex((item) => item === "^");
    if (colIdx !== -1) {
      currentRowCol = [rowIdx, colIdx];
    }
  });
  return currentRowCol;
}

function walkGrid(
  grid: string[][],
  [rowIdx, colIdx]: [number, number],
  direction: GridDirection,
): [[number, number], GridDirection] | null {
  const lastRowIdx = grid.length - 1;
  const lastColIdx = grid[0].length - 1;
  const [directionX, directionY] = GRID_DIRECTIONS[direction];

  const newRowIdx = rowIdx - directionY;
  const newColIdx = colIdx - directionX;

  if (newRowIdx < 0 || newColIdx < 0 || newRowIdx > lastRowIdx || newColIdx > lastColIdx) {
    return null;
  } else if (grid[newRowIdx][newColIdx] === "#") {
    switch (direction) {
      case "Up":
        return [[rowIdx, colIdx], "Left"];
      case "Left":
        return [[rowIdx, colIdx], "Down"];
      case "Down":
        return [[rowIdx, colIdx], "Right"];
      case "Right":
        return [[rowIdx, colIdx], "Up"];
    }
  }
  return [[newRowIdx, newColIdx], direction];
}

export default day06;
