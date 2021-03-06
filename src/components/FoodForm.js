import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Popup } from 'semantic-ui-react';

import FoodDropdown from './FoodDropdown';
import './FoodForm.css';
import foodList from '../data/foodList.json';
import { addFood } from '../actions';

class FoodForm extends React.Component {
  state = { foodInput: '', popupIsOpen: false, quantityInput: '' };

  foodSelected = { foodId: null, quantity: null };

  handleFoodChange = foodId => {
    this.foodSelected.foodId = foodId;
  };

  handleFoodInputChange = input => {
    this.setState({foodInput: input});
  };

  handleQuantityChange = quantity => {
    this.setState({quantityInput: quantity});
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
      this.setState({ foodInput: '', quantityInput: '' });
      this.foodSelected.foodId = null;
      this.foodSelected.quantity = null;
    }
  };

  render() {
    return (
      <div className="food-form">
        <Form>
          <Form.Group className="form-content">
            <div className="form-dropdown">
              <FoodDropdown
                handleSelect={this.handleFoodChange}
                handleChange={this.handleFoodInputChange}
                input={this.state.foodInput}
              />
            </div>
            <div className="form-quantity">
              <Form.Field>
                <label>Quantidade</label>
                <Input
                  label="gramas (g)"
                  labelPosition="right"
                  onChange={e => this.handleQuantityChange(e.target.value)}
                  placeholder="Qtd."
                  value={this.state.quantityInput}
                />
              </Form.Field>
            </div>
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
