import year2024 from "../solutions/2024/index.ts";
const yearArg = Deno.args[0];

if (typeof yearArg !== "string") {
  usage("Year not specified");
}

const year = parseInt(yearArg, 10);

if (isNaN(year)) {
  usage("Year was not a valid number ");
} else if (year < 2024) {
  usage("Year must be 2024 or newer");
}

const dayArg = Deno.args[1];

if (typeof dayArg !== "string") {
  usage("Day was not provided");
}

const day = parseInt(dayArg, 10);

if (isNaN(day)) {
  usage("Day was not a valid number");
} else if (day < 1 || day > 25) {
  usage("Day must be between 1 and 25");
}

const dayString = dayArg.padStart(2, "0");

switch (year) {
  case 2024: {
    const adventToRun = year2024.find((adventDay) => adventDay.year === year && adventDay.day === day);
    if (typeof adventToRun === "undefined") {
      usage(`Advent Day ${day} in Year ${year} not found`);
    }
    try {
      const inputText = await Deno.readTextFile(`./inputs/${year}/day${dayString}.txt`);
      console.log(`Advent Year ${year} Day ${day} Part 1 Output:\n${adventToRun.part1(inputText)}`);
      console.log("\n");
      console.log(`Advent Year ${year} Day ${day} Part 2 Output:\n${adventToRun.part2(inputText)}`);
    } catch (error) {
      if (error instanceof Error) {
        usage(error.message);
      } else {
        usage(`Unknown Error occurred`);
      }
      Deno.exit(1);
    }
  }
}

function usage(issue: string): never {
  console.error(
    [
      "",
      issue,
      "",
      "deno task solve [YEAR] [DAY]",
      "  - YEAR: A year number 2024 or later",
      "  - DAY: A day of the month of December between 1 and 25 (ie one of the days of Advent)",
    ].join("\n"),
  );
  Deno.exit(1);
}
