import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Popup } from 'semantic-ui-react';

import './FoodForm.css';
import foodList from '../data/foodList.json';
import { addFood } from '../actions';

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

class FoodForm extends React.Component {
  state = { popupIsOpen: false };

  foodSelected = { foodId: null, quantity: null };

  handleFoodChange = foodId => {
    this.foodSelected.foodId = foodId;
  };

  handleQuantityChange = quantity => {
    this.foodSelected.quantity = quantity;
  };

  handleSubmit = () => {
    if (!this.foodSelected.foodId || !this.foodSelected.quantity) {
      this.setState({ popupIsOpen: true });
      setTimeout(() => {
        this.setState({ popupIsOpen: false });
      }, 3000);
    } else {
      this.props.addFood(
        foodList.filter(food => food.id === this.foodSelected.foodId)[0],
        this.foodSelected.quantity
      );
    }
  };

  render() {
    return (
      <div className="food-form">
        <Form>
          <Form.Group>
            <div className="form-content">
              <div className="form-select">
                <Form.Select
                  deburr
                  fluid
                  label="Alimento"
                  onChange={(e, { value }) => this.handleFoodChange(value)}
                  options={options.slice(0, 10)}
                  placeholder="Nome do alimento"
                  search
                />
              </div>
              <Form.Field>
                <label>Quantidade</label>
                <Input
                  label="gramas (g)"
                  labelPosition="right"
                  onChange={e => this.handleQuantityChange(e.target.value)}
                  placeholder="Qtd."
                />
              </Form.Field>
              <div className="form-button">
                <Form.Field>
                  <label>Adicionar</label>
                  <Popup
                    content="Preencha o nome do alimento e a quantidade consumida."
                    label="Adicionar"
                    on="click"
                    onOpen={this.handleSubmit}
                    open={this.state.popupIsOpen}
                    position="top right"
                    trigger={<Button content="Adicionar" />}
                  />
                </Form.Field>
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    addFood
  }
)(FoodForm);
