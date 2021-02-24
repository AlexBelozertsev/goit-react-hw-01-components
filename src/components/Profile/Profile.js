import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import style from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={style.Profile}>
    <div className={style.description}>
      <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>

    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

Profile.defaultProps = {
  avatar: defaultImage,
};

export default Profile;
