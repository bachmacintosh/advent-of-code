import type { AdventDay } from "../../types.ts";
import day01 from "./day01.ts";
import day02 from "./day02.ts";
import day03 from "./day03.ts";

const year2024: AdventDay[] = [
  day01,
  day02,
  day03,
] as const;

export default year2024;
