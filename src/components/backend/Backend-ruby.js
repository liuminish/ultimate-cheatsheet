import React from 'react';
import '../main-css.css';

import { TextboxCopy } from '../utils/Utils';

const rubyList = [
  {
    'name': 'safe navigation operator (&)',
    'example': 'a.method&.method2',
    'explanation': `If method 2 returns an error, '&' will change output to nil instead of error.`
  },
  {
    'name': 'bang (!)',
    'example': 'a.method!',
    'explanation': `If method 2 returns an error, '&' will change output to nil instead of error. *When used in migration (i.e. save!), this will flag any errors out. Without bang, any errors will not be flagged out.`
  },
]

const rubyMethods = [
  {
    'name': '.class',
    'example': 'a.class',
    'explanation': 'Returns the class of a (e.g. string, integer, Trueclass, Falseclass)'
  },
  {
    'name': '.uniq',
    'example': 'array.uniq',
    'explanation': 'Removes duplicated values in array.'
  }
]

const rorMethods = [
  {
    'name': '.present?',
    'example': '',
    'explanation': ''
  },
  {
    'name': '.presence',
    'example': 'a = b.presence || c.presence || d',
    'explanation': 'If b is present, a = b. Else if C is present, a = c. Else a = d.'
  },
  {
    'name': '.compact',
    'example': 'array.compact OR hash.compact',
    'explanation': 'Any nil values will be removed. For hash, entire key-value pair will be removed.'
  }
]

const rorQueryMethods = [
  {
    'name': '.pluck',
    'example': 'Record.pluck(:id, :name)',
    'explanation': 'Returns an array of array [[id, name], [id, name]]. Will be a simple array if plucking only one attribute.'
  },
  {
    'name': '.joins',
    'examples': [
      {
        'example': 'RecordA.joins(:recordbs)',
        'explanation': 'RecordA join with RecordB (which is an association).'
      },
      {
        'example': 'RecordA.joins(:recordb, :recordc)',
        'explanation': 'RecordA join with RecordB and C (which are associations).'
      },
      {
        'example': 'RecordA.joins(recordb: [:recordd])',
        'explanation': 'RecordA join with RecordB (which is an association), with C being nested in B.'
      }
    ]
  }
]

class BackendRuby extends React.Component {

  render() {
    return (
      <div className="section-container" id="Ruby">
        <div className="section-title">
          Ruby
            </div>
        <div className="cheatsheet-column">
          <div className="cheatsheet-box">
            <div className="backend-sql-row">
              <div className="backend-sql-expl">
                <p id="textbox-header">SELECT Statement</p>
                <p>Select all columns from movies table.</p>
              </div>
              <TextboxCopy
                content={`SELECT * \nFROM movies;`}
                copyText={this.props.copyText}

              />
            </div>

            <div className="backend-sql-row">
              <div className="backend-sql-expl">
                <p id="textbox-header">AS Clause</p>
                <p>Select name column aliased as movie_title from movies table.</p>
              </div>
              <TextboxCopy
                content={`SELECT name AS 'movie_title' \nFROM movies;`}
                copyText={this.props.copyText}
              />
            </div>

            <div className="backend-sql-row">
              <div className="backend-sql-expl">
                <p id="textbox-header">WHERE Clause</p>
                <p>Select title column from library table, where pub_year is 2017.</p>
              </div>
              <TextboxCopy
                content={`SELECT title\nFROM library\nWHERE pub_year = 2017;`}
                copyText={this.props.copyText}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default BackendRuby;
