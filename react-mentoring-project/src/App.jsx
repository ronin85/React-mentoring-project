import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import BurgerIngredients from './components/Burger/BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <BurgerIngredients />
      </Layout>
    </div>
  );
}

export default App;
