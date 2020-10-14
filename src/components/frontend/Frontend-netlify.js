import React from 'react';
import '../main-css.css';

import netlify1 from '../../media/netlify-01.png';
import netlify2 from '../../media/netlify-02.png';

class FrontendNetlify extends React.Component {
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
        <div className="section-container" id="Using Netlify">
            {this.state.isCopied ? <div className="textbox-copied">Copied!</div> : null}
            <div className="section-title">
                Using Netlify
            </div>
            <div className="cheatsheet-column">

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Step 1: Add new site</p>
                    <p>Some explanation</p>
                    <div className="frontend-netlify-img-container">
                        <img src={netlify1} />
                    </div>
                </div>

                <div className="cheatsheet-box">
                    <p id="cheatsheet-header">Step 2: Add new site</p>
                    <p>Some explanation</p>
                    <div className="frontend-netlify-img-container">
                        <img src={netlify2} />
                    </div>
                </div>

            </div>
        </div>
        );
    }
}


export default FrontendNetlify;