import React from 'react';
import PropTypes from 'prop-types'; // подключение библиотеки проверки типов получаемых пропсов
import styles from './Notification.module.css';

// const Notification = ({ text }) => (<p className={styles.success}>{text}</p>);
// или
const Notification = ({ text, type }) => <p className={styles[type]}>{text}</p>;

Notification.defaultProps = {
  type: 'success',
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
};

export default Notification;
