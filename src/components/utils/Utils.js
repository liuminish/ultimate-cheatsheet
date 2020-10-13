import React from 'react';
import '../main-css.css';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiFileCopyLine, RiRefreshLine } from "react-icons/ri";

import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

class TextboxCopy extends React.Component {
    render() {
        if (Array.isArray(this.props.content)) {
            return (
                <div className="textbox-copy">
                    <div className="textbox-copy-field">
                        {this.props.content.map(line => {
                            return <p>{line}</p>
                        })}
                    </div>
                    <div className="textbox-copy-logo">
                        <CopyToClipboard text={this.props.content.join('\n')} onCopy={this.props.copyText}>
                            <RiFileCopyLine />
                        </CopyToClipboard>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="textbox-copy">
                    <div className="textbox-copy-expl">
                        {this.props.explanation}:
                    </div>
                    <div className="textbox-copy-field">
                        {this.props.content}
                    </div>
                    <div className="textbox-copy-logo">
                        <CopyToClipboard text={this.props.content} onCopy={this.props.copyText}>
                            <RiFileCopyLine />
                        </CopyToClipboard>
                    </div>
                </div>
            )
        }
        
    }
}

class TexboxCodeCopy extends React.Component {
    render() {
        return (
            <div className="textbox-copy">
                <CodeMirror
                    value={this.props.value}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
                <div className="textbox-copy-logo">
                    <CopyToClipboard text={this.props.value} onCopy={this.props.copyText}>
                        <RiFileCopyLine />
                    </CopyToClipboard>
                </div>
            </div>
        )
    }
}

class TextboxInteractive extends React.Component {
    render() {
        return (
            <div className="textbox-inter">
                <div className="textbox-inter-expl">
                    {this.props.property}:
                </div>
                <div className="textbox-inter-field">
                    {this.props.values.map((value, index) => {
                        const fieldStatus = value === this.props.flexStyle[this.props.property] ? "textbox-inter-field-active" : "textbox-inter-field-inactive";
                        if (index === this.props.values.length - 1) {
                            return (    
                                <span className={fieldStatus} id="textbox-inter-clickable" onClick={() => this.props.handleClick(this.props.property, value)}>
                                    {value}
                                </span>
                            )
                        } else {
                            return (    
                                <span>
                                    <span className={fieldStatus} id="textbox-inter-clickable" onClick={() => this.props.handleClick(this.props.property, value)}>
                                    {value} 
                                    </span>
                                    &nbsp;|&nbsp;
                                </span>
                                
                            )
                        }
                        
                    })}
                </div>
                &nbsp;<RiRefreshLine id="textbox-inter-clickable" onClick={() => this.props.reset(this.props.property)}/>
            </div>
        )
        
    }
}


class Textbox extends React.Component {
    render() {
        return (
            <div className="textbox-inter">
                <div className="textbox-inter-expl">
                    {this.props.property}:
                </div>
                <div className="textbox-inter-field">
                    {this.props.values}
                </div>
            </div>
        )
        
    }
}

class DropdownMenu extends React.Component {
    render() {
        return (
            <select value={this.props.value} onChange={this.props.updateDemoStyle}>
            {this.props.options.map(item => {
                return <option value={item} key={item}>{item}</option>
            })}
        </select>
        )
    }
}


export { TextboxCopy, TexboxCodeCopy, TextboxInteractive, Textbox, DropdownMenu };