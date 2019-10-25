import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Layout from '../../components/Layout/Layout';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';

class BurgerBuilder extends Component {
  state = {
    burgerIngredients: {
      'bread-top': 1,
      bacon: 2,
      cheese: 2,
      meat: 2,
      salad: 1,
      'bread-bottom': 1
    }
  };

  render() {
    const { burgerIngredients } = this.state;
    return (
      <>
        <BurgerConstructor burgerIngredients={burgerIngredients} />
        <Burger burgerIngredientsList={burgerIngredients} />
      </>
    );
  }
}

export default BurgerBuilder;
