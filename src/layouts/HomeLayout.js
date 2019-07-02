import React from 'react';

import Header from '../components/Header/Header'

const home_layout = (props) => {
  return (
    <div>
      <Header />
      <h1>HOME LAYOUT</h1>
      {props.children}
    </div>
  )
}

export default home_layout;
