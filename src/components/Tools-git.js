import React from 'react';
import './main-css.css';

import { TextboxCopy } from './utils/Utils'

const gitList = [
  {
    'name': 'Git stash',
    'code': 'Git stash',
    'explanation': 'Git stash temporarily stashes away the changes made to repository.'
  },
  {
    'name': 'Git stash (retrieval)',
    'code': 'Git stash pop',
    'explanation': 'This will restore the changes previously stashed away.'
  },
  {
    'name': 'Git pull',
    'code': 'Git pull',
    'explanation': 'Pulls all changes from remote to local.'
  },
  {
    'name': 'Git log',
    'code': 'Git log --oneline',
    'explanation': 'Calls up a log of all git activities.'
  },
  {
    'name': 'Git reset',
    'code': 'Git reset --hard HEAD',
    'explanation': 'Restores all git files to "head" position. Hard = all changes will be discarded. Soft = changes will be kept. "HEAD" can be replaced with codes found in Git log.'
  },
  {
    'name': 'Git push',
    'code': 'Git push --force',
    'explanation': 'Forcibly push, even if remote is a few commits ahead.'
  },
]

class ToolsGit extends React.Component {

  render() {
    return (
      <div className="section-container" id="Git">
        <div className="section-title">
          Git Commands
            </div>
        <div className="cheatsheet-container">
            {gitList.map(gitItem => {
              return (
                <div className="cheatsheet-card-small">
                  <p id="textbox-header">{gitItem.name}</p>
                    <TextboxCopy
                      content={gitItem.code}
                      copyText={this.props.copyText}
                    />
                  <p>{gitItem.explanation}</p>
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}


export default ToolsGit;
