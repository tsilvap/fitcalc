import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

class FoodList extends Component {
  renderList = foodsConsumed => {
    const foodItems = foodsConsumed.map(({ food, quantity }) => {
      return (
        <Card fluid key={food.id}>
          <Card.Content>
            <Card.Header>{food.name}</Card.Header>
            <Card.Description>{food.prepMethod}</Card.Description>
          </Card.Content>
        </Card>
      );
    });

    return foodItems;
  };

  render() {
    const foodsConsumed = this.props.foodsConsumed;

    return (
      <div className="food-list">
        <Card.Group>{this.renderList(foodsConsumed)}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { foodsConsumed: state.foodsConsumed };
};

export default connect(mapStateToProps)(FoodList);
