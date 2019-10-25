import React from 'react';
import PropTypes from 'prop-types';

const ingredientsProportion = ({ ingredient, quantity }) => {
  return (
    <div>
      <p>{ingredient}</p>
      <div>
        <button>-</button>
        <input type="text" value={quantity} />
        <button readOnly>+</button>
      </div>
    </div>
  );
};

ingredientsProportion.propTypes = {};

export default ingredientsProportion;
