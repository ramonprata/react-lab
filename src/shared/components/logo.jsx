import React from 'react';
import logo from '../../../src/logo.svg';

const Logo = (props) => {
  const { height } = props;
  return <img src={logo} className="app-logo" alt="logo" style={{ height }} />;
};
Logo.defaultProps = {
  height: 40,
};
export default Logo;
