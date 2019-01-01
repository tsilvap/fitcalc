import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import FoodForm from './FoodForm';

const App = () => {
  return (
    <div className="app" style={{ height: '100%' }}>
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: '60rem' }}>
          <Segment>
            <FoodForm />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default App;
