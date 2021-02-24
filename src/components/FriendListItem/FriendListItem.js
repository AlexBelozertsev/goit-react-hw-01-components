import React from 'react';
import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, type }) => {
  if (!isOnline) {
    type = 'offLine';
  }
  return (
    <>
      <span className={style[type]}>{isOnline}</span>
      <img className={style.avatar} src={avatar} alt={name} width="58" />
      <p className={style.name}>{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  type: 'onLine',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['onLine', 'offLine']),
};

export default FriendListItem;
