import React from 'react'; //обязательно! подключение реакта к модулю
import PropTypes from 'prop-types'; // подключение библиотеки проверки типов получаемых пропсов

const Logo = ({ text }) => (
  <div>
    <h2>{text}</h2>
  </div>
);

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
