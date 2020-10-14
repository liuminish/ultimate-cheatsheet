import React from 'react';
import '../main-css.css';

import BackendSql from './Backend-sql';
import BackendNodejs from './Backend-node';
import BackendSqlite from './Backend-sqlite'

class Backend extends React.Component {
  render() {
    return (
      <div id="backend">
        <BackendNodejs />
        <BackendSql />
        <BackendSqlite />
      </div>
    );
  }
}

export default Backend;