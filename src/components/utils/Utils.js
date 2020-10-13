import React from 'react';
import '../main-css.css';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiFileCopyLine, RiRefreshLine } from "react-icons/ri";

import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

// simple textbox with no copy function
class Textbox extends React.Component {
    render() {
        return (
            <div className="textbox-copy">
                <div className="textbox-copy-expl" style={{width: this.props.width}}>
                    {this.props.property}:
                </div>
                <div className="textbox-copy-field">
                    {this.props.values}
                </div>
            </div>
        )
        
    }
}

// codemirror textbox with explanation and copy function
class TextboxCopy extends React.Component {
    render() {
        return (
            <div className="textbox-copy">
                <div className="textbox-copy-expl" style={{width: this.props.width}}>
                    {this.props.explanation}:
                </div>
                <CodeMirror
                    value={this.props.content}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        lineNumbers: false
                    }}
                />
                <div className="textbox-copy-logo">
                    <CopyToClipboard text={this.props.content} onCopy={this.props.copyText}>
                        <RiFileCopyLine />
                    </CopyToClipboard>
                </div>
            </div>
        )
    }
}


// codemirror textbox with detailed explanation and copy function
class TextboxCopyDetailed extends React.Component {
    render() {
        return (
            <div className="textbox-copy-detailed" style={{width: this.props.width}}>
                <div className="textbox-copy-expl">
                    <p id="textbox-header">{this.props.explanation}</p>
                    <p>{this.props.explanationDetailed}</p>
                </div>
                <div className="textbox-copy-detailedbody">
                    <CodeMirror
                        value={this.props.content}
                        options={{
                            mode: 'javascript',
                            theme: 'material',
                            lineNumbers: false
                        }}
                    />
                    <div className="textbox-copy-logo">
                        <CopyToClipboard text={this.props.content} onCopy={this.props.copyText}>
                            <RiFileCopyLine />
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
            
        )
    }
}

// codemirror textbox with copy function, but no explanation
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

// interactive div displaying chosen options
class DivInteractive extends React.Component {
    render() {
        return (
            <div className="div-inter">
                <div className="div-inter-expl" style={{width: this.props.width}}>
                    {this.props.property}:
                </div>
                <div className="div-inter-field">
                    {this.props.values.map((value, index) => {
                        const fieldStatus = value === this.props.flexStyle[this.props.property] ? "div-inter-field-active" : "div-inter-field-inactive";
                        if (index === this.props.values.length - 1) {
                            return (    
                                <span className={fieldStatus} id="div-inter-clickable" onClick={() => this.props.handleClick(this.props.property, value)}>
                                    {value}
                                </span>
                            )
                        } else {
                            return (    
                                <span>
                                    <span className={fieldStatus} id="div-inter-clickable" onClick={() => this.props.handleClick(this.props.property, value)}>
                                    {value} 
                                    </span>
                                    &nbsp;|&nbsp;
                                </span>
                                
                            )
                        }
                        
                    })}
                </div>
                &nbsp;<RiRefreshLine id="div-inter-clickable" onClick={() => this.props.reset(this.props.property)}/>
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


export { Textbox, TextboxCopy, TexboxCodeCopy, TextboxCopyDetailed, DivInteractive, DropdownMenu };