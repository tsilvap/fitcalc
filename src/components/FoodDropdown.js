import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import foodList from '../data/foodList.json';

const options = foodList.map(food => {
  const option = {
    key: food.id,
    content: food.name,
    description: food.prepMethod,
    value: food.id,
    text: (
      <div>
        {food.name}
        <span className="description">{food.prepMethod}</span>
      </div>
    )
  };

  return option;
});

class FoodDropdown extends Component {
  render() {
    return (
      <div className="food-dropdown">
        <Form.Dropdown
          deburr
          fluid
          label="Alimento"
          onChange={(e, { value }) => this.handleFoodChange(value)}
          options={options.slice(0, 10)}
          placeholder="Nome do alimento"
          search
          selection
        />
      </div>
    );
  }
}

export default FoodDropdown;
