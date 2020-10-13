import React from 'react';
import './main-css.css';

import { ExternalLink } from 'react-external-link';

class Tools extends React.Component {
  render() {
    return (
      <div className="section-container" id="tools">
        <div className="section-title">
            Tools
        </div>
        <div className="tools-container">
            <ExternalLink href={'https://favicon.io/emoji-favicons/'}>
                Favicons
            </ExternalLink>
        </div>
      </div>
    );
  }
}

export default Tools;