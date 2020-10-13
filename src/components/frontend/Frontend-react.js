import React from 'react';
import '../main-css.css';

import { TextboxCopy } from '../utils/Utils'

class FrontendReact extends React.Component {
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
        <div className="section-container" id="React">
            {this.state.isCopied ? <div className="textbox-copied">Copied!</div> : null}
            <div className="section-title">
                Frontend
            </div>
            <div className="cheatsheet-column">
                <div className="cheatsheet-subtitle">
                    React Cheatsheet
                </div>

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Create React App</p>
                    <p><TextboxCopy explanation="To install" content="npm install create-react-app" keyword="create-react-app" copyText={this.copyText} /></p>
                    <p><TextboxCopy explanation="To create" content="create-react-app new-app-directory" copyText={this.copyText} /></p>
                </div>

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Useful React Packages</p>
                    <p><TextboxCopy explanation="React Icons" content="npm install react-icons" copyText={this.copyText} /></p>
                    <p><TextboxCopy explanation="External Links" content="npm install react-external-link" copyText={this.copyText} /></p>
                    <p><TextboxCopy explanation="React Router" content="npm install react-router" copyText={this.copyText} /></p>
                </div>

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Export and Import of Modules</p>
                    <p><TextboxCopy explanation="Export" content="export default Module" keyword="Module" copyText={this.copyText} /></p>
                    <p><TextboxCopy explanation="Import" content="import Module from './Module'" keyword="Module" copyText={this.copyText} /></p>
                </div>

            </div>
        </div>
        );
    }
}


export default FrontendReact;