import React from 'react';
import './main-css.css';

import Navibar from './Navibar';
import Introduction from './Introduction';
import Frontend from './frontend/Frontend';
import Backend from './backend/Backend';
import Tools from './Tools';
import { Copied } from './utils/Utils'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCopied: false
    }

    this.copyText = this.copyText.bind(this)
    this.removeCopy = this.removeCopy.bind(this)
  }

  copyText() {
    this.setState({isCopied: true})
    setTimeout(this.removeCopy, 1000);
  }

  removeCopy() {
      this.setState({isCopied: false})
  }

  render() {
    return (
      <div>
        <Copied 
          isCopied={this.state.isCopied}
        />
        <Navibar />
        <Introduction 
          title="introduction"
          copyText={this.copyText}
        />
        <Frontend 
          title="frontend"
          copyText={this.copyText}
        />
        <Backend 
          title="backend"
          copyText={this.copyText}
        />
        <Tools 
          title="tools"
          copyText={this.copyText}
        />
      </div>
    )
  }
}

export default App;
