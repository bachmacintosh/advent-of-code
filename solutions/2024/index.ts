import type { AdventDay } from "../../types.ts";
import day01 from "./day01.ts";
import day02 from "./day02.ts";

const year2024: AdventDay[] = [day01, day02] as const;

export default year2024;
