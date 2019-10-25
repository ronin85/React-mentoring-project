import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <main className={styles.Content}>{children}</main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
