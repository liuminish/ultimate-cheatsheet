import React from 'react';
import '../main-css.css';

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
    'name': '.first',
    'example': 'array.first',
    'explanation': 'Returns first value in array.'
  },
  {
    'name': '.last',
    'example': 'array.last',
    'explanation': 'Returns last value in array.'
  },
  {
    'name': '.length',
    'example': 'array.length',
    'explanation': 'Returns length of array.'
  },
  {
    'name': '.count',
    'example': 'array.count { |i| i > 5}',
    'explanation': 'Returns number of values in array based on set condition. Can be used without condition as well.'
  },
  {
    'name': '.min',
    'example': 'array.min',
    'explanation': 'Returns minimum value in array.'
  },
  {
    'name': '.max',
    'example': 'array.max',
    'explanation': 'Returns maximum value in array.'
  },
  {
    'name': '.flatten',
    'example': 'array.flatten',
    'explanation': '"Flattens" array, merge any inner arrays into the outer array. Returns only one array.'
  },
  {
    'name': '.sort',
    'example': 'array.sort { |a b| b <=> a }',
    'explanation': 'Default without block is sort by ascending. Can sort by descending. Returns array.'
  },
  {
    'name': '.uniq',
    'example': 'array.uniq',
    'explanation': 'Removes duplicated values in array. Returns array.'
  },
  {
    'name': 'intersect (&), concatenation (+)',
    'example': 'array1 & array2 OR array1 + array2',
    'explanation': 'Returns new array with both array1 and array2. Returns array.'
  },
  {
    'name': 'difference (-)',
    'example': 'array1 - array2',
    'explanation': 'Removes array2 values from array1. Returns array.'
  },
  {
    'name': '.join',
    'example': `array.join(',')`,
    'explanation': `Joins array of values with specified separator ','. Will not add separator if array only has 1 value. Returns string.`
  },
  {
    'name': 'Date initiallizer',
    'example': `Date.new(3,4,2020) or Date.parse('2020-4 - 3')`,
    'explanation': 'Initializes date.'
  },
]

class BackendRuby extends React.Component {

  render() {
    return (
      <div className="section-container" id="Ruby">
        <div className="section-title">
          Ruby
            </div>
        <div className="cheatsheet-container">
          <div className="cheatsheet-card-big">
            <p id="textbox-header">Ruby Operators</p>
              <table class="backend-ruby-operators">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Example</th>
                    <th>Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  {rubyList.map(operator => {
                    return (
                      <tr>
                        <td>{operator.name}</td>
                        <td>{operator.example}</td>
                        <td>{operator.explanation}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
          </div>

          <div className="cheatsheet-card-big">
            <p id="textbox-header">Ruby Methods</p>
            <table class="backend-ruby-operators">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Example</th>
                  <th>Explanation</th>
                </tr>
              </thead>
              <tbody>
                {rubyMethods.map(method => {
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

        </div>
      </div>
    );
  }
}


export default BackendRuby;
