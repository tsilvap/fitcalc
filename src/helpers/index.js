// Calculate amount of calories, protein, etc. in `grams` of food.
export function calculateAmount(grams, amountPerHundredGrams) {
  return Number(((grams * amountPerHundredGrams) / 100).toFixed(1));
}
