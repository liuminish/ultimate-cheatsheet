import React from 'react';
import '../main-css.css';

import FrontendReact from './Frontend-react';
import FrontendCssFlex from './Frontend-cssflex';
import FrontendRest from './Frontend-rest';
import FrontendNetlify from './Frontend-netlify';

class Frontend extends React.Component {

    render() {
        return (
            <div id="frontend">
                <FrontendReact />
                <FrontendCssFlex />
                <FrontendRest />
                <FrontendNetlify />
            </div>
        );
    }
}


export default Frontend;