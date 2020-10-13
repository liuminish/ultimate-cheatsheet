import React from 'react';
import '../main-css.css';

import BackendSql from './Backend-sql';
import BackendNodejs from './Backend-node';

class Backend extends React.Component {
  render() {
    return (
      <div id="backend">
        <BackendNodejs />
        <BackendSql />
      </div>
    );
  }
}

export default Backend;