import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import FoodForm from './FoodForm';
import './App.css';

const App = () => {
  return (
    <div className="app" style={{ height: '100%' }}>
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column className="app-container" style={{ height: '100%' }}>
          <Segment>
            <FoodForm />
          </Segment>
          <Segment className="food-output">test</Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default App;
