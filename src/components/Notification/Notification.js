import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ text }) => (
  <h2 className={styles.notification}>{text}</h2>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
