import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import FoodForm from './FoodForm';
import FoodList from './FoodList';
import FoodTotals from './FoodTotals';
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
          <Segment className="food-output">
            <Grid divided style={{ height: '100%' }}>
              <Grid.Column width={10}>
                <FoodList />
              </Grid.Column>
              <Grid.Column width={6}>
                <FoodTotals />
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default App;
