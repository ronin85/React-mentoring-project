import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import IngredientsProportion from './IngredientsProportion/IngredientsProportion';

const BurgerConstructor = ({ burgerIngredients }) => {
  return (
    <div className={styles.BurgerConstructor}>
      <form action="#">
        {Object.keys(burgerIngredients).map(ingredient => (
          <IngredientsProportion
            ingredient={ingredient}
            quantity={burgerIngredients[ingredient]}
          />
        ))}
      </form>
    </div>
  );
};

BurgerConstructor.propTypes = {};

export default BurgerConstructor;
