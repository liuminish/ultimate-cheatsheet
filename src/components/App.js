import React from 'react';
import './main-css.css';

import Navibar from './Navibar';
import Introduction from './Introduction';
import Frontend from './frontend/Frontend';
import Backend from './backend/Backend';
import Tools from './Tools';
import { Copied, Modal } from './utils/Utils'


import { RiInformationLine } from "react-icons/ri";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCopied: false,
      modal: {
        'display': false,
        'icon': <RiInformationLine />,
        'title': '',
        'content': '',
        'button-content': 'I see'
      },
    }

    this.copyText = this.copyText.bind(this)
    this.removeCopy = this.removeCopy.bind(this)

    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  copyText() {
    this.setState({isCopied: true})
    setTimeout(this.removeCopy, 1000);
  }

  removeCopy() {
    this.setState({isCopied: false})
  }

  showModal(property, explanation) {
    let newModal = {
      'display': true,
      'icon': <RiInformationLine />,
      'title': property,
      'content': explanation,
      'button-content': 'I see'
    }

    this.setState({modal: newModal})
  }

  closeModal() {
    let newModal = {
      'display': false,
      'icon': <RiInformationLine />,
      'title': '',
      'content': '',
      'button-content': 'I see'
    }

    this.setState({modal: newModal})
  }

  render() {
    return (
      <div>
        <Copied 
          isCopied={this.state.isCopied}
        />
        <Modal 
          displayModal={this.state.modal.display}
          modalIcon={this.state.modal.icon}
          modalTitle={this.state.modal.title}
          modalContent={this.state.modal.content}
          modalButton={this.state.modal['button-content']}
          handleClose={this.closeModal}
        />
        <Navibar />
        <Introduction 
          title="introduction"
        />
        <Frontend 
          title="frontend"
          copyText={this.copyText}
          showModal={this.showModal}
        />
        <Backend 
          title="backend"
          copyText={this.copyText}
          showModal={this.showModal}
        />
        <Tools 
          title="tools"
        />
      </div>
    )
  }
}

export default App;
