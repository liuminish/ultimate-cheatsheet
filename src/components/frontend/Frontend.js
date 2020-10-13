import React from 'react';
import '../main-css.css';

import FrontendReact from './Frontend-react';
import FrontendCss from './Frontend-css';
import FrontendRest from './Frontend-rest';
import FrontendNetlify from './Frontend-netlify';

class Frontend extends React.Component {

    render() {
        return (
            <div id="frontend">
                <FrontendReact />
                <FrontendCss />
                <FrontendRest />
                <FrontendNetlify />
            </div>
        );
    }
}


export default Frontend;