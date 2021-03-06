import React, { Component } from 'react';
import { Form, Input, List, Segment } from 'semantic-ui-react';

import foodList from '../data/foodList.json';
import './FoodDropdown.css';

class FoodDropdown extends Component {
  state = { foodItems: [], searchQuery: '', selected: false };

  handleChange = e => {
    const searchQuery = e.target.value;
    this.setState({ searchQuery, selected: false });
    this.props.handleChange(searchQuery);
    this.updateFoodItems(searchQuery);

    // De-select food in parent component
    this.props.handleSelect(null);
  };

  handleClick = e => {
    // This looks convoluted. Is there a better way to implement this?
    const foodId = e.currentTarget.attributes['data-value'].value;

    // Set value of the input field
    const foodName = e.currentTarget.firstChild.innerHTML;
    const prepMethod = e.currentTarget.lastChild.textContent;
    this.setState({ selected: true });
    this.props.handleChange(`${foodName}${prepMethod.toLowerCase()}`);

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
        const foodTerm = `${food.name}${food.prepMethod.toLowerCase()}`;
        return foodTerm.toLowerCase().startsWith(query.toLowerCase());
      })
      .map(food => {
        return (
          <List.Item key={food.id} onClick={this.handleClick} value={food.id}>
            <strong>{food.name} </strong>
            {food.prepMethod !== 'Não se aplica' ? food.prepMethod.toLowerCase() : ''}
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
            input={this.props.input}
            onChange={this.handleChange}
            placeholder="Nome do alimento"
            value={this.props.input}
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
