import React from 'react';
import { ExternalLink } from 'react-external-link';
import '../main-css.css';

import { TextboxCopyLong } from '../utils/Utils'

class BackendNodejs extends React.Component {

    render() {
        return (
        <div className="section-container" id="NodeJS">
            <div className="section-title">
                NodeJS
            </div>
            <div className="cheatsheet-container">

                <div className="cheatsheet-card-big">
                    <p id="cheatsheet-header">Basic structure of server.js</p>
                    <TextboxCopyLong
                        content={`const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

//standard middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorhandler = require('errorhandler');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(errorhandler());

//mounting apiRouter
const apiRouter = require('./api/api');
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;`}
                        copyText={this.props.copyText}
                    />
                </div>

                <div className="cheatsheet-card-small">
                    <p id="cheatsheet-header">Links to middleware documentation</p>
                    <p id="backend-node-link">Body Parser: <ExternalLink href="http://expressjs.com/en/resources/middleware/body-parser.html">Expressjs documentation</ExternalLink></p>
                    <p id="backend-node-link">Cors: <ExternalLink href="http://expressjs.com/en/resources/middleware/cors.html">Expressjs documentation</ExternalLink></p>
                    <p id="backend-node-link">Error Handler: <ExternalLink href="http://expressjs.com/en/resources/middleware/errorhandler.html">Expressjs documentation</ExternalLink></p>
                    <p id="backend-node-link">Morgan: <ExternalLink href="http://expressjs.com/en/resources/middleware/morgan.html">Expressjs documentation</ExternalLink></p>
                </div>

            </div>
        </div>
        );
    }
}


export default BackendNodejs;
