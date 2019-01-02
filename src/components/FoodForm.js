import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react';

import './FoodForm.css';
import foodList from '../data/foodList.json';

const options = foodList.map(food => {
  const option = {
    key: food.id,
    content: food.name,
    description: food.prepMethod,
    value: `${food.name} ${food.prepMethod}`,
    text: (
      <div>
        {food.name}
        <span className="description">{food.prepMethod}</span>
      </div>
    )
  };

  return option;
});

// FoodForm Component.
const FoodForm = () => {
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
                placeholder="Qtd."
              />
            </Form.Field>
            <div className="form-button">
              <Form.Field
                control={Button}
                content="Adicionar"
                label="Adicionar"
              />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FoodForm;
