import React from 'react';
import '../main-css.css';

import FrontendReact from './Frontend-react';
import FrontendCssFlex from './Frontend-cssflex';
import FrontendCssImg from './Frontend-cssimg';
import FrontendNetlify from './Frontend-netlify';

class Frontend extends React.Component {

    render() {
        return (
            <div id="frontend">
                <FrontendReact
                    copyText={this.props.copyText}
                />
                <FrontendCssFlex
                    copyText={this.props.copyText}
                    showModal={this.props.showModal}
                />
                <FrontendCssImg
                    copyText={this.props.copyText}
                    showModal={this.props.showModal}
                />
                <FrontendNetlify
                    showModalImage={this.props.showModalImage}
                />
            </div>
        );
    }
}


export default Frontend;
