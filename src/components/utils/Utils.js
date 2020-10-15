import React from 'react';
import '../main-css.css';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiFileCopyLine, RiRefreshLine, RiCloseCircleFill } from "react-icons/ri";

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

// codemirror textbox with copy function and no line numbers
class TextboxCopy extends React.Component {
    render() {
        return (
            <div className="textbox-copy">
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

// codemirror textbox with copy function and line numbers
class TextboxCopyLong extends React.Component {
    render() {
        return (
            <div className="textbox-copy">
                <CodeMirror
                    value={this.props.content}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        lineNumbers: true
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

// interactive div displaying chosen options
class DivInteractive extends React.Component {
    render() {
        return (
            <div className="div-inter">
                <div className="div-inter-expl" style={{width: this.props.width}}>
                    <span id="div-inter-clickable" onClick={() => this.props.showModal(this.props.property, this.props.explanation)}>{this.props.property}</span>:
                </div>
                <div className="div-inter-field">
                    {this.props.values.map((value, index) => {
                        const fieldStatus = value === this.props.flexStyle[this.props.property] ? "div-inter-field-active" : "div-inter-field-inactive";
                        if (index === this.props.values.length - 1) {
                            return (    
                                <span className={fieldStatus} id="div-inter-clickable" key={index} onClick={() => this.props.handleClick(this.props.property, value)}>
                                    {value}
                                </span>
                            )
                        } else {
                            return (    
                                <span key={index}>
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
            <select value={this.props.value} onChange={this.props.onChange}>
            {this.props.options.map(item => {
                return <option value={item} key={item}>{item}</option>
            })}
        </select>
        )
    }
}

class Modal extends React.Component {
    render() {
        const modalDisplay = { display: this.props.display ? "block" : "none" };
        return (
        <div className="modal-main" style={modalDisplay}>
            <div className="modal-background" onClick={this.props.handleClose} />
            <div className="modal-content">
                <div className="modal-icon">{this.props.icon}</div>
                <div className="modal-title">{this.props.title}</div>
                <div>{this.props.content}</div>
                <div className="modal-button-ok" onClick={this.props.handleClose}>{this.props.button}</div>
            </div>
        </div>
        );
    }
}

class ModalImage extends React.Component {
    render() {
        const modalDisplay = { display: this.props.display ? "block" : "none" };
        return (
        <div className="modal-main" style={modalDisplay}>
            <div className="modal-background" onClick={this.props.handleClose} />
            <div className="modal-img-content">
                <div className="modal-img-container">
                    <img src={this.props.src} alt={this.props.alt} />
                </div>
                <div className="modal-close" onClick={this.props.handleClose}>
                    <RiCloseCircleFill />
                </div>
            </div>
        </div>
        );
    }
}

class Copied extends React.Component {
    render() {
        return (
            <div>
                {this.props.isCopied ? <div className="textbox-copied">Copied!</div> : null}
            </div>
            
        )
    }
}


export { Textbox, TextboxCopy, TextboxCopyLong, DivInteractive, DropdownMenu, Modal, ModalImage, Copied };