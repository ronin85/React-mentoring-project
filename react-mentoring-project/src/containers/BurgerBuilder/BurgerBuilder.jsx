import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    burgerIngredients: {
      'bread-top': 1,
      bacon: 1,
      cheese: 2,
      meat: 3,
      salad: 1,
      'bread-bottom': 1
    }
  };

  render() {
    const { burgerIngredients } = this.state;
    return <Burger burgerIngredientsList={burgerIngredients} />;
  }
}

export default BurgerBuilder;
