import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react';

import { removeFood } from '../actions';
import { calculateAmount } from '../helpers';
import './FoodList.css';

class FoodList extends Component {
  renderList = foodsConsumed => {
    const foodItems = foodsConsumed.map(({ food, quantity }) => {
      return (
        <Segment
          key={food.id}
          textAlign="left"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ flexGrow: 1 }}>
            <strong>{food.name}</strong>
            <span className="prep-method">{food.prepMethod}</span>
            <br />
            <small>
              Calorias: {calculateAmount(quantity, food.calories)}kcal,
              Proteínas: {calculateAmount(quantity, food.protein)}g, Lipídios:{' '}
              {calculateAmount(quantity, food.lipid)}
              g, Carboidratos: {calculateAmount(quantity, food.carb)}g
            </small>
          </div>
          <Icon
            link
            onClick={() => this.props.removeFood(food.id)}
            name="trash"
            style={{ margin: '0 1em 0 1.5em' }}
          />
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

const mapDispatchToProps = { removeFood };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
