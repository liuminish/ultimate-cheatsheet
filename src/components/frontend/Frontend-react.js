import React from 'react';
import '../main-css.css';

import { TextboxCopy } from '../utils/Utils'

class FrontendReact extends React.Component {

    render() {
        return (
        <div className="section-container" id="React">
            <div className="section-title">
                React
            </div>
            <div className="cheatsheet-column">

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Create React App</p>
                    <div className="frontend-react-row">
                        <div className="frontend-react-expl">
                            To install:
                        </div>
                        <TextboxCopy
                        content="npm install create-react-app"
                        copyText={this.props.copyText}
                    /></div>
                    <div className="frontend-react-row">
                        <div className="frontend-react-expl">
                            To create:
                        </div>
                        <TextboxCopy
                        content="create-react-app new-app-directory"
                        copyText={this.props.copyText}
                    /></div>
                </div>

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Useful React Packages</p>
                    <div className="frontend-react-row">
                        <div className="frontend-react-expl">
                            React Icons:
                        </div>
                        <TextboxCopy
                        content="npm install react-icons"
                        copyText={this.props.copyText}
                    /></div>
                    <div className="frontend-react-row">
                        <div className="frontend-react-expl">
                            External Links:
                        </div>
                        <TextboxCopy
                        content="npm install react-external-link"
                        copyText={this.props.copyText}
                    /></div>
                    <div className="frontend-react-row">
                        <div className="frontend-react-expl">
                            React Router
                        </div>
                        <TextboxCopy
                        content="npm install react-router"
                        copyText={this.props.copyText}
                    /></div>
                </div>

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Export and Import of Modules</p>
                    <div className="frontend-react-row">
                        <div className="frontend-react-expl">
                            Export:
                        </div>
                        <TextboxCopy
                        content="export default Module"
                        keyword="Module"
                        copyText={this.props.copyText}
                    /></div>
                    <div className="frontend-react-row">
                        <div className="frontend-react-expl">
                            Import:
                        </div>
                        <TextboxCopy
                        content="import Module from './Module'"
                        keyword="Module"
                        copyText={this.props.copyText}
                    /></div>
                </div>

            </div>
        </div>
        );
    }
}


export default FrontendReact;
