import React from 'react';
import '../main-css.css';

import { TextboxCopy } from '../utils/Utils'

class FrontendRest extends React.Component {

    render() {
        return (
        <div className="section-container" id="REST APIs">
            <div className="section-title">
                REST APIs
            </div>
            <div className="cheatsheet-column">

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Create React App</p>
                    <TextboxCopy explanation="To install" content="npm install create-react-app" keyword="create-react-app" copyText={this.copyText} />
                    <TextboxCopy explanation="To create" content="create-react-app new-app-directory" copyText={this.props.copyText} />
                </div>

            </div>
        </div>
        );
    }
}


export default FrontendRest;