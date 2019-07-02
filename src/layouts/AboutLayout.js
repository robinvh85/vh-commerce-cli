import React from 'react';

import Header from '../components/Header/Header'

const about_layout = (props) => {
  return (
    <div>
      <Header />
      <h1>ABOUT LAYOUT</h1>
      {props.children}
    </div>
  )
}

export default about_layout;
