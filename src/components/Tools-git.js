import React from 'react';
import './main-css.css';

import { TextboxCopy } from './utils/Utils'

const gitList = [
  {
    'code': 'Git stash',
    'explanation': 'Git stash temporarily stashes away the changes made to repository.'
  },
  {
    'code': 'Git stash pop',
    'explanation': 'This will restore the changes previously stashed away.'
  },
  {
    'code': 'Git pull',
    'explanation': 'Pulls all changes from remote to local.'
  },
  {
    'code': 'Git log --oneline',
    'explanation': 'Calls up a log of all git activities.'
  },
  {
    'code': 'Git reset --hard HEAD',
    'explanation': 'Restores all git files to "head" position. Hard = all changes will be discarded. Soft = changes will be kept. "HEAD" can be replaced with codes found in Git log.'
  },
  {
    'code': 'Git push --force',
    'explanation': 'Forcibly push, even if remote is a few commits ahead.'
  },
]

class ToolsGit extends React.Component {

  render() {
    return (
      <div className="section-container" id="Git">
        <div className="section-title">
          Git
            </div>
        <div className="cheatsheet-column">

          <div className="cheatsheet-box">
            <p id="cheatsheet-header">Git commands</p>
            {gitList.map(gitItem => {
              return (
                <div className="frontend-react-row">
                  <TextboxCopy
                    content={gitItem.name}
                    copyText={this.props.copyText}
                  />
                  <div className="frontend-react-expl">
                    {gitItem.explanation}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    );
  }
}


export default ToolsGit;
