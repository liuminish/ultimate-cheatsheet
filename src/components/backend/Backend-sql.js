import React from 'react';
import '../main-css.css';

import { TextboxCopy } from '../utils/Utils';

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
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">SELECT Statement</p>
                            <p>Select all columns from movies table.</p>
                        </div>
                        <TextboxCopy
                            content={`SELECT * \nFROM movies;`}
                            copyText={this.copyText} 

                        />
                    </div>

                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">AS Clause</p>
                            <p>Select name column aliased as movie_title from movies table.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT name AS 'movie_title' \nFROM movies;`}
                            copyText={this.copyText} 
                        />
                    </div>

                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">WHERE Clause</p>
                            <p>Select title column from library table, where pub_year is 2017.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT title\nFROM library\nWHERE pub_year = 2017;`} 
                            copyText={this.copyText}
                        />
                    </div>
                </div>

                <div className="cheatsheet-box">
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">AND Operator</p>
                            <p>Select model column from cars table, where color is blue and year more than 2014.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT model \nFROM cars \nWHERE color = 'blue' \n\tAND year > 2014;`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">OR Operator</p>
                            <p>Select model column from cars table, where color is blue or year more than 2014.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT model \nFROM cars \nWHERE color = 'blue' \n\OR year > 2014;`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">LIKE Operator</p>
                            <p>Select name column from movies table, where name starts with 'Star'. Can also use 'NOT LIKE'.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT name\nFROM movies\nWHERE name LIKE 'Star%';`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">% Wildcard</p>
                            <p>'%' can be placed before, after or before and after a keyword with LIKE operator.'</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT name\nFROM movies\nWHERE name LIKE '%star%';`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">_ Wildcard</p>
                            <p>Select name column from movies table, where name starts with any character followed by 'tar'.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT name\nFROM movies\nWHERE name LIKE '_tar';`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">NULL Values</p>
                            <p>Select address column from records table, where address is not null(can also be 'IS NULL').</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT address\nFROM records\nWHERE address IS NOT NULL;`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">BETWEEN Operator</p>
                            <p>Select all columns from movies table, where year is between 1980 and 1990 inclusive.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT *\nFROM movies\nWHERE year BETWEEN 1980 AND 1990;`} 
                            copyText={this.copyText}
                        />
                    </div>
                </div>
                <div className="cheatsheet-box">
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">ORDER BY Clause</p>
                            <p>Select all columns from contacts table, order by birth_date descending. Can also be 'ASC'</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT *\nFROM contacts\nORDER BY birth_date DESC;`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">LIMIT Clause</p>
                            <p>Select all columns from movies table, limit result to 5 rows.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT *\nFROM movies\nLIMIT 5;`} 
                            copyText={this.copyText}
                        />
                    </div>
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">DISTINCT Clause</p>
                            <p>Select city columns (only unique values will appear) from contact_details table.</p>
                        </div>
                        <TextboxCopy 
                            content={`SELECT DISTINCT city\nFROM contact_details;`} 
                            copyText={this.copyText}
                        />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default BackendSql;