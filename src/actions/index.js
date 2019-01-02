// Add food to FoodsConsumed.
export const addFood = (food, quantity, unit) => {
  return {
    type: 'ADD_FOOD',
    payload: { food, quantity, unit }
  };
};

// Remove food from FoodsConsumed.
export const removeFood = food => {
  return {
    type: 'REMOVE_FOOD',
    payload: food
  };
};
