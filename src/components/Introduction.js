import React from 'react';
import './main-css.css';

class Introduction extends React.Component {
  render() {
    return (
      <div className="section-container" id="introduction">
        <div className="section-title">
            Introduction
        </div>
        <div className="introduction-body">
            Ultimate Cheatsheet is a website created to hold all the knowledge I've accumulated so far in one place so that it's easier for me to refer to.
        </div>
      </div>
    );
  }
}

export default Introduction;