import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = ({ burgerIngredientsList }) => {
  return (
    <div className={styles.Burger}>
      {Object.keys(burgerIngredientsList).map(ingredient => {
        return [...Array(burgerIngredientsList[ingredient])].map((_, i) => {
          return (
            <BurgerIngredients
              key={ingredient + i}
              burgerIngredient={ingredient}
            />
          );
        });
      })}
    </div>
  );
};

burger.propTypes = {
  burgerIngredientsList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string])
  ).isRequired
};

export default burger;
