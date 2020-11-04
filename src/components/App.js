import React from 'react';
import './main-css.css';

import Navibar from './Navibar';
import Introduction from './Introduction';
import Frontend from './frontend/Frontend';
import Backend from './backend/Backend';
import Others from './others/Others';
import { Copied, Modal, ModalImage, NotSupported } from './utils/Utils'


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
      modalImage : {
        'display': false,
        'title': '',
        'src': '',
        'alt': ''
      }
    }

    this.copyText = this.copyText.bind(this)
    this.removeCopy = this.removeCopy.bind(this)

    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.showModalImage = this.showModalImage.bind(this)
    this.closeModalImage = this.closeModalImage.bind(this)
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

  showModalImage(title, src, alt) {
    let newModalImage ={
      'display': true,
      'title': title,
      'src': src,
      'alt': alt
    }

    this.setState({modalImage: newModalImage})
  }

  closeModalImage() {
    let newModalImage ={
      'display': false,
      'title': '',
      'src': '',
      'alt': ''
    }

    this.setState({modalImage: newModalImage})
  }

  render() {

    if (window.innerWidth < 500) {
      return <NotSupported />
    } else {
      return (
        <div>
          <Copied
            isCopied={this.state.isCopied}
          />
          <Modal
            display={this.state.modal.display}
            icon={this.state.modal.icon}
            title={this.state.modal.title}
            content={this.state.modal.content}
            button={this.state.modal['button-content']}
            handleClose={this.closeModal}
          />
          <ModalImage
            display={this.state.modalImage.display}
            title={this.state.modalImage.title}
            src={this.state.modalImage.src}
            alt={this.state.modalImage.alt}
            handleClose={this.closeModalImage}
          />
          <Navibar />
          <Introduction
            title="introduction"
          />
          <Frontend
            title="frontend"
            copyText={this.copyText}
            showModal={this.showModal}
            showModalImage={this.showModalImage}
          />
          <Backend
            title="backend"
            copyText={this.copyText}
            showModal={this.showModal}
          />
          <Others
            title="others"
            copyText={this.copyText}
          />
        </div>
      )
    }
  }

}

export default App;
