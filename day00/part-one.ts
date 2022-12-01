import fs from "fs";

const path = process.cwd();
const buffer = fs.readFileSync(path + "/day00/input.txt").toString();
const ElvesInventories = buffer.split("\n\n");

const maxTotalCalories = ElvesInventories.reduce((max, inventory) => {
  const calories = inventory.split("\n");
  const sumTotalCalories = calories.reduce((sum, calory) => {
    return sum + parseInt(calory);
  }, 0);
  return sumTotalCalories > max ? sumTotalCalories : max;
}, 0);

console.log(maxTotalCalories);
