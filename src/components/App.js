import React from 'react';
import './main-css.css';

import Navibar from './Navibar';
import Introduction from './Introduction';
import Frontend from './frontend/Frontend';
import Backend from './backend/Backend';
import Tools from './Tools';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navibar />
        <Introduction 
          title="introduction"
        />
        <Frontend 
          title="frontend"
        />
        <Backend 
          title="backend"
        />
        <Tools 
          title="tools"
        />
      </div>
    )
  }
}

export default App;
