import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react';

import './FoodList.css';

class FoodList extends Component {
  renderList = foodsConsumed => {
    const foodItems = foodsConsumed.map(({ food, quantity }) => {
      return (
        <Segment textAlign="left">
          <Icon name="close" style={{ margin: '0 1em 0 0' }} />
          <strong>{food.name}</strong>
          <span className="prep-method">{food.prepMethod}</span>
        </Segment>
      );
    });

    return foodItems;
  };

  render() {
    const foodsConsumed = this.props.foodsConsumed;

    return <div className="food-list">{this.renderList(foodsConsumed)}</div>;
  }
}

const mapStateToProps = state => {
  return { foodsConsumed: state.foodsConsumed };
};

export default connect(mapStateToProps)(FoodList);
