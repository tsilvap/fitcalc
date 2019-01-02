// Add food to FoodsConsumed.
export const addFood = (food, quantity) => {
  return {
    type: 'ADD_FOOD',
    payload: { food, quantity }
  };
};

// Remove food from FoodsConsumed.
export const removeFood = food => {
  return {
    type: 'REMOVE_FOOD',
    payload: food
  };
};
