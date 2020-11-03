import React from 'react';
import '../main-css.css';

import { TextboxCopy } from '../utils/Utils';

const rorStructure = {
  'Model': {
    'Used for': '',
    'Structure': [
      {
        'name': 'Callbacks',
        'example': []
      },
      {
        'name': 'Scope',
        'explanation': 'Can only accept array.'
      }
    ],
  },
  'View': {
    'Used for': '',
    'Structure': [

    ],
  },
  'Controller': {
    'Used for': 'Controlling (or routing) data. This is the connection point between backend(model) and frontend(view).',
    'Structure': [
      {
        'name': 'Callbacks',
        'example': 'before_action',
      },
      {
        'name': 'Methods',
        'example': ['index','show','new','edit','destroy'],
      }
    ],
  },
}

const rorCommands = [
  {
    'title': 'rails generate migration NameOfMigration',
    'explanation': 'Generates a rails migration file (which can be editted before running migration).'
  },
  {
    'title': 'rails db:migrate',
    'explanation': 'Run migration, will run any migration file which has not been run since last migration. Can check last migration date in Schema'
  },
  {
    'title': 'rails db:rollback',
    'explanation': 'Undo a migration'
  },
  {
    'title': 'rails db:reset',
    'explanation': '*Need to stop server from running. This resets database according to seed, and also clears any migration data which might be stored on local. Best to run this before migration'
  },
]

const rorGems =  {
  'Serializer': 'Creates a json in Ruby, part of linkage between front and backend.',
  'Administrate': 'Creates an "administrator" dashboard capable of manipulating backend data, mainly for non-developers. Edited via "dashboards" folder.',
  'Filterrific': '',
}

const rorPayboy = [
  {
    'title': 'Organization of Admin, Employee and Manager views',
    'explanation': 'Files in views folder are for Admin views, Employee specific views are in "employee" subfolder. Manager specific views are in "subordinates", subfolder of "employee".'
  }
]

class BackendRor extends React.Component {

  render() {
    return (
      <div className="section-container" id="Ruby on Rails">
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


export default BackendRor;
