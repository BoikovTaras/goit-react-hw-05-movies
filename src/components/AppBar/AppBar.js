import s from './AppBar.module.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';

const AppBar = () => (
  <div className={s.bar}>
    <Navigation />
  </div>
);

export default AppBar;
