export interface AdventDay {
  year: number;
  day: number;
  part1: (input: string) => unknown;
  part2: (input: string) => unknown;
}
