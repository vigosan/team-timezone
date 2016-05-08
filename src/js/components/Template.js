import React from 'react';
import Header from './Header';

export default ( props ) => {
  return (
    <div className="container">
      <Header></Header>
      { props.children }
    </div>
  );
};
