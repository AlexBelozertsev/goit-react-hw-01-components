import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

// const styles = {
//   outline: "1px solid tomato",
// };// in-line style

const Panel = ({ title, children }) => (
  <div className={styles.container}>
    {/* условие рендеринга */}
    {title && <h2>{title}</h2>}

    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
