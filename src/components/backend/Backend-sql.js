import React from 'react';
import '../main-css.css';

import { TextboxCopyDetailed } from '../utils/Utils'

class BackendSql extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCopied: false
        }
        this.copyText = this.copyText.bind(this)
        this.removeCopy = this.removeCopy.bind(this)

    }

    copyText() {
        this.setState({isCopied: true})
        setTimeout(this.removeCopy, 1000);
    }

    removeCopy() {
        this.setState({isCopied: false})
    }

    render() {
        return (
        <div className="section-container" id="SQL">
            {this.state.isCopied ? <div className="textbox-copied">Copied!</div> : null}
            <div className="section-title">
                SQL
            </div>
            <div className="cheatsheet-column">
                <div className="cheatsheet-box">
                    <TextboxCopyDetailed 
                        explanation="SELECT Statement" 
                        explanationDetailed="Select all columns from movies table."
                        content={`SELECT * \nFROM movies;`}
                        copyText={this.copyText} 
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="AS Clause" 
                        explanationDetailed="Select name column aliased as movie_title from movies table."
                        content={`SELECT name AS 'movie_title' \nFROM movies;`}
                        copyText={this.copyText} 
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="WHERE Clause" 
                        explanationDetailed="Select title column from library table, where pub_year is 2017."
                        content={`SELECT title\nFROM library\nWHERE pub_year = 2017;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                </div>
                <div className="cheatsheet-box">
                    <TextboxCopyDetailed 
                        explanation="AND Operator" 
                        explanationDetailed="Select model column from cars table, where color is blue and year more than 2014."
                        content={`SELECT model \nFROM cars \nWHERE color = 'blue' \n\tAND year > 2014;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="OR Operator" 
                        explanationDetailed="Select model column from cars table, where color is blue or year more than 2014."
                        content={`SELECT model \nFROM cars \nWHERE color = 'blue' \n\OR year > 2014;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="LIKE Operator" 
                        explanationDetailed="Select name column from movies table, where name starts with 'Star'. Can also use 'NOT LIKE'."
                        content={`SELECT name\nFROM movies\nWHERE name LIKE 'Star%';`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="% Wildcard" 
                        explanationDetailed="'%' can be placed before, after or before and after a keyword with LIKE operator.'"
                        content={`SELECT name\nFROM movies\nWHERE name LIKE '%star%';`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="_ Wildcard" 
                        explanationDetailed="Select name column from movies table, where name starts with any character followed by 'tar'."
                        content={`SELECT name\nFROM movies\nWHERE name LIKE '_tar';`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="NULL Values" 
                        explanationDetailed="Select address column from records table, where address is not null(can also be 'IS NULL')."
                        content={`SELECT address\nFROM records\nWHERE address IS NOT NULL;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="BETWEEN Operator" 
                        explanationDetailed="Select all columns from movies table, where year is between 1980 and 1990 inclusive."
                        content={`SELECT *\nFROM movies\nWHERE year BETWEEN 1980 AND 1990;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                </div>
                <div className="cheatsheet-box">
                    <TextboxCopyDetailed 
                        explanation="ORDER BY Clause" 
                        explanationDetailed="Select all columns from contacts table, order by birth_date descending. Can also be 'ASC'"
                        content={`SELECT *\nFROM contacts\nORDER BY birth_date DESC;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="LIMIT Clause" 
                        explanationDetailed="Select all columns from movies table, limit result to 5 rows."
                        content={`SELECT *\nFROM movies\nLIMIT 5;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                    <TextboxCopyDetailed 
                        explanation="DISTINCT Clause" 
                        explanationDetailed="Select city columns (only unique values will appear) from contact_details table."
                        content={`SELECT DISTINCT city\nFROM contact_details;`} 
                        copyText={this.copyText}
                        width="100%"
                    />
                </div>
            </div>
        </div>
        );
    }
}


export default BackendSql;