import fs from "fs";

const path = process.cwd();
const buffer = fs.readFileSync(path + "/day00/input.txt").toString();
const ElvesInventories = buffer.split("\n\n");

const maxTotalCalories = ElvesInventories.reduce(
  (bestThreeCalories, inventory) => {
    const calories = inventory.split("\n");
    const sumTotalCalories = calories.reduce((sum, calory) => {
      return sum + parseInt(calory);
    }, 0);

    return [...bestThreeCalories, sumTotalCalories]
      .sort((a, b) => b - a)
      .slice(0, 3);
  },
  [0, 0, 0]
);

console.log(maxTotalCalories[0] + maxTotalCalories[1] + maxTotalCalories[2]);
