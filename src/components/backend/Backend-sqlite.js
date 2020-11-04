import React from 'react';
import '../main-css.css';

import { TextboxCopy } from '../utils/Utils';

class BackendSqlite extends React.Component {

    render() {
        return (
        <div className="section-container" id="SQLite">
            <div className="section-title">
                SQLITE
            </div>
            <div className="cheatsheet-container">
                <div className="cheatsheet-card-big">
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">Step 1: Import SQLITE</p>
                        </div>
                        <TextboxCopy
                            content={`const sqlite3 = require('sqlite3');\nconst db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');`}
                            copyText={this.props.copyText}

                        />
                    </div>
                </div>

                <div className="cheatsheet-card-big">
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">Step 2: Create a migration.js</p>
                            <p>This create tables for data which will be stored in future.</p>
                        </div>
                        <TextboxCopy
                            content={`db.serialize(() => {
    db.run('DROP TABLE IF EXISTS Employee')
    db.run('CREATE TABLE Employee (
        id INTEGER NOT NULL,
        name TEXT NOT NULL,
        position TEXT NOT NULL,
        contact-number INTEGER NOT NULL,
        PRIMARY KEY (id)
        )')

    db.run('DROP TABLE IF EXISTS Timesheet')
    db.run('CREATE TABLE Timesheet (
        timesheet-id int NOT NULL,
        date TEXT NOT NULL,
        employee-id int,
        PRIMARY KEY (timesheet-id),
        FOREIGN KEY (employee-id) REFERENCES Employee(id)
        )')
})`}
                            copyText={this.props.copyText}

                        />
                        <p>Take note of syntax for tables with foreign key. Also note that DB serialize is used under the assumption that more than one table will be created</p>
                    </div>

                </div>

                <div className="cheatsheet-card-big">
                    <div className="backend-sql-row">
                        <div className="backend-sql-expl">
                            <p id="textbox-header">Step 3: Create a seed.js</p>
                            <p>This creates dummy data for testing purposes.</p>
                        </div>
                        <TextboxCopy
                            content={`db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='Employee'", (error, table) => {
    if (error) {
        throw new Error(error);
    }

    if (table) {
        db.run('INSERT INTO Employee (name, position, contact-number)
        VALUES ('Jane Doe', 'manager', 1234567)'
        );
    };
});`}
                            copyText={this.props.copyText}

                        />
                        <p>Note that this can be created together in migration.js</p>
                    </div>

                </div>

            </div>
        </div>
        );
    }
}


export default BackendSqlite;
