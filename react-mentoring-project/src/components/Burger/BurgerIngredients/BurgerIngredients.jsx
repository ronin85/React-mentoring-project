import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css';

const burgerIngredients = ({ burgerIngredient }) => {
  let ingredient = '';

  switch (burgerIngredient) {
    case 'bread-bottom':
      ingredient = 'BreadBottom';
      break;
    case 'bread-top':
      ingredient = 'BreadTop';
      break;
    case 'meat':
      ingredient = 'Meat';
      break;
    case 'cheese':
      ingredient = 'Cheese';
      break;
    case 'salad':
      ingredient = 'Salad';
      break;
    case 'bacon':
      ingredient = 'Bacon';
      break;
    default:
      ingredient = '';
  }

  return <div className={styles[ingredient]} />;
};

burgerIngredients.propTypes = {
  burgerIngredient: PropTypes.string.isRequired
};

export default burgerIngredients;
