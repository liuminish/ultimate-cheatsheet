import React from 'react';
import '../main-css.css';

import Softskills from './Softskills';
import Tools from './Tools';
import Git from './Git'

class Others extends React.Component {

  render() {
    return (
      <div id="others">
        <Softskills />
        <Git copyText={this.props.copyText} />
        <Tools />
      </div>
    );
  }
}


export default Others;
