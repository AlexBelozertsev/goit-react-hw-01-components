import React from 'react'; //обязательно! подключение реакта к модулю
import './Container.css';

const Container = ({ children }) => <div className="Container">{children}</div>;

export default Container;
