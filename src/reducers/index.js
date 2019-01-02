import { combineReducers } from 'redux';

// List of foods and amounts consumed.
const foodsConsumedReducer = (foods = [], action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      return [...foods, action.payload];

    case 'REMOVE_FOOD':
      return foods.filter(foodConsumed => {
        // Does this work? Testing object equality
        return foodConsumed.food !== action.payload;
      });

    default:
      return foods;
  }
};

export default combineReducers({
  foodsConsumed: foodsConsumedReducer
});
