// Calculate amount of calories, protein, etc. in `grams` of food.
export function calculateAmount(grams, amountPerHundredGrams) {
  // Round to one decimal place.
  return Math.round((grams * amountPerHundredGrams) / 10) / 10;
}
