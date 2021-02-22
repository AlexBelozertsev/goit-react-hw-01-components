import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import './Profile.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="Profile">
    <div class="description">
      <img src={avatar} alt="Аватар пользователя" class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

Profile.defaultProps = {
  avatar: defaultImage,
};

export default Profile;
