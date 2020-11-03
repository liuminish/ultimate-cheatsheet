import React from 'react';
import '../main-css.css';

import BackendSql from './Backend-sql';
import BackendNodejs from './Backend-node';
import BackendSqlite from './Backend-sqlite';
import BackendRuby from './Backend-ruby';
import BackendRor from './Backend-ror'

class Backend extends React.Component {
  render() {
    return (
      <div id="backend">
        <BackendNodejs copyText={this.props.copyText} />
        <BackendRuby />
        <BackendRor />
        <BackendSql copyText={this.props.copyText} />
        <BackendSqlite copyText={this.props.copyText} />
      </div>
    );
  }
}

export default Backend;
