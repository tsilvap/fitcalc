import React, { Component } from 'react';
import { Form, Input, List, Segment } from 'semantic-ui-react';

import foodList from '../data/foodList.json';
import './FoodDropdown.css';

class FoodDropdown extends Component {
  state = { foodItems: [], searchQuery: '', selected: false, value: '' };

  handleChange = e => {
    const searchQuery = e.target.value;
    this.setState({ searchQuery, selected: false, value: searchQuery });
    this.updateFoodItems(searchQuery);
  };

  handleClick = e => {
    // This looks convoluted. Is there a better way to implement this?
    const foodId = e.currentTarget.attributes['data-value'].value;

    // Set value of the input field
    const foodName = e.currentTarget.firstChild.innerHTML;
    const prepMethod = e.currentTarget.lastChild.textContent;
    this.setState({ selected: true, value: `${foodName}, ${prepMethod}` });

    // Call parent event handler
    this.props.handleSelect(foodId);
  };

  updateFoodItems = query => {
    if (query === '') {
      this.setState({ foodItems: [] });
      return;
    }

    const foodItems = foodList
      .filter(food => {
        const foodTerm = `${food.name}, ${food.prepMethod}`;
        return foodTerm.toLowerCase().startsWith(query.toLowerCase());
      })
      .map(food => {
        return (
          <List.Item key={food.id} onClick={this.handleClick} value={food.id}>
            <List.Header>{food.name}</List.Header>
            {food.prepMethod}
          </List.Item>
        );
      });

    this.setState({ foodItems });
    return;
  };

  render() {
    const { foodItems, searchQuery, selected } = this.state;

    return (
      <div className="food-dropdown">
        <Form.Field>
          <label>Alimento</label>
          <Input
            icon="search"
            iconPosition="left"
            onChange={this.handleChange}
            placeholder="Nome do alimento"
            value={this.state.value}
          />
        </Form.Field>
        <Segment
          className="food-suggestions"
          style={
            searchQuery === '' || selected
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          <List selection>{foodItems.slice(0, 10)}</List>
        </Segment>
      </div>
    );
  }
}

export default FoodDropdown;
