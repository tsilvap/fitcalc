import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import { calculateAmount } from '../helpers';

// FoodTotals Component
class FoodTotals extends Component {
  calculateTotals = () => {
    const foodsConsumed = this.props.foodsConsumed;
    const totals = { calories: 0, protein: 0, lipid: 0, carb: 0 };

    if (foodsConsumed.length === 0) {
      return totals;
    }

    for (let objId in foodsConsumed) {
      totals.calories += calculateAmount(
        foodsConsumed[objId].quantity,
        foodsConsumed[objId].food.calories
      );
      totals.protein += calculateAmount(
        foodsConsumed[objId].quantity,
        foodsConsumed[objId].food.protein
      );
      totals.lipid += calculateAmount(
        foodsConsumed[objId].quantity,
        foodsConsumed[objId].food.lipid
      );
      totals.carb += calculateAmount(
        foodsConsumed[objId].quantity,
        foodsConsumed[objId].food.carb
      );
    }

    return totals;
  };

  render() {
    const totals = this.calculateTotals();
    return (
      <div className="food-totals" style={{ textAlign: 'left' }}>
        <h1>Total</h1>
        <Divider />
        <h2>Calorias:</h2> {totals.calories.toFixed(1)} kcal
        <h2>Proteínas:</h2> {totals.protein.toFixed(1)} g<h2>Lipídios:</h2> {totals.lipid.toFixed(1)}{' '}
        g<h2>Carboidratos:</h2> {totals.carb.toFixed(1)} g
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { foodsConsumed } = state;

  return { foodsConsumed };
};

export default connect(mapStateToProps)(FoodTotals);
