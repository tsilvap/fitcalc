import React from 'react';
import { Button, Dropdown, Form } from 'semantic-ui-react';

import './FoodForm.css';

const FoodForm = () => {
  return (
    <div className="food-form">
      <Form>
        <Form.Group>
          <div className="form-content">
            <div className="form-select">
              <Form.Select label="Alimento" placeholder="Nome do alimento" />
            </div>
            <Form.Input
              action={<Dropdown button basic />}
              label="Quantidade"
              placeholder="Qtd."
            />
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
