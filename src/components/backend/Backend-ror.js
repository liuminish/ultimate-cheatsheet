import React from 'react';
import '../main-css.css';

const rorStructure = {
  'Model': {
    'Used for': '',
    'Structure': [
      {
        'name': 'Callbacks',
        'example': []
      },
      {
        'name': 'Associations',
        'example': ['belongs_to', 'has_many', 'has_one','dependent: :destroy', 'through: :attribute'],
        'explanation': `delegate attribute (of parent) to current model = letting current model "adopt" parent's attribute`
      },
      {
        'name': 'Validation',
        'example': [],
        'explanation': 'Validate method, validates attributes.'
      },
      {
        'name': 'Scope',
        'example': [],
        'explanation': 'Can only accept array. Will run scope before methods.'
      },
      {
        'name': 'Tagging of items',
        'example': [],
        'explanation': 'Class name',
        'research': true
      },
      {
        'name': 'Attribute accessor',
        'example': [],
        'explanation': 'Temporary attribute'
      },
      {
        'name': 'Accept nested attributes',
        'example': [],
        'explanation': 'passing this attribute (together with current model) to front end as a "package"'
      },
      {
        'name': 'Private methods',
        'explanation': 'Generally used for callbacks or validation methods.'
      }
    ],
  },
  'View': {
    'Used for': 'Displaying',
    'Structure': [],
  },
  'Controller': {
    'Used for': 'Controlling (or routing) data. This is the connection point between backend(model) and frontend(view).',
    'Structure': [
      {
        'name': 'Callbacks',
        'sub': 'before_action',
      },
      {
        'name': 'Methods',
        'sub': [
          {
            'name': 'index',
            'example': '@article = Article.new',
            'explanation': ''
          },
          {
            'name': 'show',
            'example': '@article = Article.find(params[:id])',
            'explanation': ''
          },
          {
            'name': 'new',
            'example': '@article = Article.new',
            'explanation': ''
          },
          {
            'name': 'edit',
            'example': '@article = Article.find(params[:id])',
            'explanation': ''
          },
          {
            'name': 'create',
            'example': `@article = Article.new(article_params)\nif @article.save\n\tredirect_to @article\nelse\n\trender 'new'\nend`,
            'explanation': ''
          },
          {
            'name': 'destroy',
            'example': `@article = Article.find(params[:id])\n@article.destroy\nredirect_to articles_path`,
            'explanation': ''
          }
        ],
      }
    ],
  },
  'Schema': {
    'Used for': '',
    'Structure': [
      'jsonb'
    ],
  },
}

const rorCommands = [
  {
    'name': 'rails generate migration Example',
    'explanation': 'Generates a rails migration file (which can be editted before running migration).',
    'list': ['add_column', 'add_foreign_key', 'add_index', 'add_reference', 'add_timestamps', 'change_column_default(must supply a : from and : to option)', 'change_column_null', 'create_join_table', 'create_table', 'disable_extension', 'drop_join_table', 'drop_table(must supply a block)', 'enable_extension', 'remove_column(must supply a type)', 'remove_foreign_key(must supply a second table)', 'remove_index', 'remove_reference', 'remove_timestamps', 'rename_column', 'rename_index', 'rename_table']
  },
  {
    'name': 'rails generate model Example',
    'explanation': '*Model name must be capitalized, singular. This creates a model and migration file.'
  },
  {
    'name': 'rails db:migrate',
    'explanation': 'Run migration, will run any migration file which has not been run since last migration. Can check last migration date in Schema'
  },
  {
    'name': 'rails db:rollback',
    'explanation': 'Undo a migration'
  },
  {
    'name': 'rails db:reset',
    'explanation': '*Need to stop server from running. This resets database according to seed, and also clears any migration data which might be stored on local. Best to run this before migration'
  },
  {
    'name': 'rails generate controller Examples',
    'explanation': '*Table name must be capitalized, plural. This creates a controller.'
  },
  {
    'name': 'rails destroy xxx',
    'explanation': 'Destroys a rails generation.'
  },
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
  },
  {
    'name': '.transform_values',
    'example': 'hash.transform_values { |x| x * 2 }',
    'explanation': 'Transform only values in hash according to block. Keys will be unchanged.'
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

const rorGems =  {
  'Serializer': 'Creates a json in Ruby, part of linkage between front and backend.',
  'Administrate': 'Creates an "administrator" dashboard capable of manipulating backend data, mainly for non-developers. Edited via "dashboards" folder.',
  'Filterrific': '',
  'Sidekiq': 'schedule.yml file for scheduled tasks, or use .perform_later',
  'Devise': 'used for authentication.',
  'Pundit': 'used for authorization.',
  'cancancan': 'another authorization gem.'
}

const rorPayboy = [
  {
    'name': 'Organization of Admin, Employee and Manager views',
    'explanation': 'Files in views folder are for Admin views, Employee specific views are in "employee" subfolder. Manager specific views are in "subordinates", subfolder of "employee".'
  }
]

class BackendRor extends React.Component {

  render() {
    return (
      <div className="section-container" id="Ruby on Rails">
        <div className="section-title">
          Ruby on Rails
        </div>
        <div className="cheatsheet-container">
          <div className="cheatsheet-card">
            <p id="textbox-header">Rail Methods</p>
            <table class="backend-ruby-operators">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Example</th>
                  <th>Explanation</th>
                </tr>
              </thead>
              <tbody>
                {rorMethods.map(method => {
                  return (
                    <tr>
                      <td>{method.name}</td>
                      <td>{method.example}</td>
                      <td>{method.explanation}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="cheatsheet-card">
            <p id="textbox-header">Rail Queries</p>
            <table class="backend-ruby-operators">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Example</th>
                  <th>Explanation</th>
                </tr>
              </thead>
              <tbody>
                {rorQueryMethods.map(method => {
                  return (
                    <tr>
                      <td>{method.name}</td>
                      <td>{method.example}</td>
                      <td>{method.explanation}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="cheatsheet-card">
            <p id="textbox-header">Rail Structure (MVC)</p>
            {Object.keys(rorStructure).map(main => {
              return (
                <div>
                  {main}
                </div>
              )
            })}
          </div>

          <div className="cheatsheet-card">
            <p id="textbox-header">Rail Commands</p>
            {rorCommands.map(main => {
              return (
                <div>
                  {main.name}
                </div>
              )
            })}
          </div>

          <div className="cheatsheet-card">
            <p id="textbox-header">Rail Gems</p>
            {Object.keys(rorGems).map(main => {
              return (
                <div>
                  {main}
                </div>
              )
            })}
          </div>

          <div className="cheatsheet-card">
            <p id="textbox-header">Rail Others</p>
            {rorPayboy.map(main => {
              return (
                <div>
                  {main.name}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    );
  }
}


export default BackendRor;
