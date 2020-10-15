import React from 'react';
import './main-css.css';

import { RiErrorWarningLine } from "react-icons/ri";

class Introduction extends React.Component {
  render() {
    return (
      <div className="section-container" id="introduction">
        <div className="section-title">
            Introduction
        </div>
        <div className="introduction-body">
            <p>Ultimate Cheatsheet is a website created to hold all the knowledge I've accumulated so far in one place so that it's easier for me to refer to.</p>
            <p><RiErrorWarningLine id="introduction-logo"/> This is solely based on my personal understanding and might not be accurate. However I strive to make this as accurate and complete as possible!</p>
        </div>
      </div>
    );
  }
}

export default Introduction;