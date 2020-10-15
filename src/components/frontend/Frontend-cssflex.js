import React from 'react';
import '../main-css.css';

import { DivInteractive, TextboxCopyLong, Textbox, DropdownMenu } from '../utils/Utils';

const flexContProp = [
    {
        'property': 'display',
        'values': ['block', 'flex'],
        'explanation': 'This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.'
    },
    {
        'property': 'flex-direction',
        'values': ['row', 'row-reverse', 'column', 'column-reverse'],
        'explanation': 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.'
    },
    {
        'property': 'flex-wrap',
        'values': ['wrap', 'nowrap', 'wrap-reverse'],
        'explanation': 'By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.'
    }
]

const flexAlignProp = [
    {
        'property': 'justify-content',
        'values': ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly'],
        'explanation': 'This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.'
    },
    {
        'property': 'align-items',
        'values': ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
        'explanation': 'This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).'
    },
    {
        'property': 'align-content',
        'values': ['flex-start', 'flex-end', 'center', 'stretch', 'space-around', 'space-between'],
        'explanation': 'This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Note: this property has no effect when there is only one line of flex items.'
    }
]

class FrontendCssFlex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flexStyle: {
                'display': 'flex',
                'flex-direction': 'row',
                'flex-wrap': 'nowrap',
                'justify-content': 'flex-start',
                'align-items': 'flex-start',
                'align-content': 'flex-start',
            },
            demoStyle: {
                'box-number': 6,
                'box-width': '100px',
                'box-height': '100px'
            },
            flexTextbox: `.parent {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\talign-content: flex-start;\n}`,
        }

        this.updateFlexStyle = this.updateFlexStyle.bind(this)
        this.resetFlexStyle = this.resetFlexStyle.bind(this)
        this.updateFlexTextbox = this.updateFlexTextbox.bind(this)
        this.updateBoxNumber = this.updateBoxNumber.bind(this)
        this.updateBoxWidth = this.updateBoxWidth.bind(this)
        this.updateBoxHeight = this.updateBoxHeight.bind(this)

    }

    async updateFlexStyle(property, value) {
        let newFlexStyle = {...this.state.flexStyle};
        newFlexStyle[property] = value;
        await this.setState({flexStyle: newFlexStyle})
        this.updateFlexTextbox();
    }

    async resetFlexStyle(property) {
        let newFlexStyle = {...this.state.flexStyle};
        switch (property) {
            case 'display':
                newFlexStyle[property] = 'flex'
                break;
            case 'flex-direction':
                newFlexStyle[property] = 'row'
                break;
            case 'flex-wrap':
                newFlexStyle[property] = 'nowrap'
                break;
            case 'justify-content':
                newFlexStyle[property] = 'flex-start'
                break;
            case 'align-items':
                newFlexStyle[property] = 'flex-start'
                break;
            case 'align-content':
                newFlexStyle[property] = 'flex-start'
                break;
            default:
                break;
          }
        await this.setState({flexStyle: newFlexStyle})
        this.updateFlexTextbox();
    }

    updateFlexTextbox() {
        const {flexStyle} = this.state;
        const newFlexTextbox = `.parent {\n\tdisplay: ${flexStyle['display']};\n\tflex-direction: ${flexStyle['flex-direction']};\n\tflex-wrap: ${flexStyle['flex-wrap']};\n\tjustify-content: ${flexStyle['justify-content']};\n\talign-items: ${flexStyle['align-items']};\n\talign-content: ${flexStyle['align-content']};\n}`

        this.setState({
            flexTextbox: newFlexTextbox
        })
    }

    updateBoxNumber(e) {
        const newDemoStyle = {...this.state.demoStyle}
        newDemoStyle['box-number'] = e.target.value
        this.setState({demoStyle: newDemoStyle})
    }

    updateBoxWidth(e) {
        const newDemoStyle = {...this.state.demoStyle}
        newDemoStyle['box-width'] = e.target.value
        this.setState({demoStyle: newDemoStyle})
    }

    updateBoxHeight(e) {
        const newDemoStyle = {...this.state.demoStyle}
        newDemoStyle['box-height'] = e.target.value
        this.setState({demoStyle: newDemoStyle})
    }

    render() {
        const boxNumbers = []
        for (let index = 1; index <= this.state.demoStyle['box-number']; index++) {
            boxNumbers.push(index)   
        }

        const reactFlexStyle = {
            'display': this.state.flexStyle['display'],
            'flexDirection': this.state.flexStyle['flex-direction'],
            'flexWrap': this.state.flexStyle['flex-wrap'],
            'justifyContent': this.state.flexStyle['justify-content'],
            'alignItems': this.state.flexStyle['align-items'],
            'alignContent': this.state.flexStyle['align-content'],
        }

        return (
            <div className="section-container" id="CSS Flexbox">
                <div className="section-title">
                    CSS Flexbox
                </div>
                <div className="cheatsheet-container">
                    <div className="cheatsheet-column">

                        <div className="cheatsheet-box">
                            <p id="cheatsheet-header">Flex container properties</p>
                            {flexContProp.map((prop, index) => {
                                return (
                                    <DivInteractive 
                                        property={prop.property} 
                                        values={prop.values} 
                                        explanation={prop.explanation}
                                        flexStyle={this.state.flexStyle} 
                                        handleClick={this.updateFlexStyle} 
                                        reset={this.resetFlexStyle}
                                        showModal={this.props.showModal}
                                        width="110px"
                                        key={index}
                                    />
                                )
                            })}
                            <Textbox 
                                property="flex-flow" 
                                values={`${this.state.flexStyle['flex-direction']} ${this.state.flexStyle['flex-wrap']}`} 
                                width="110px"
                            />
                        </div>

                        <div className="cheatsheet-box">
                            <p id="cheatsheet-header">Flex alignment properties</p>
                            {flexAlignProp.map((prop, index) => {
                                return (
                                    <DivInteractive 
                                        property={prop.property} 
                                        values={prop.values} 
                                        explanation={prop.explanation}
                                        flexStyle={this.state.flexStyle} 
                                        handleClick={this.updateFlexStyle} 
                                        reset={this.resetFlexStyle}
                                        showModal={this.props.showModal}
                                        width="110px"
                                        key={index}
                                    />
                                )
                            })}
                        </div>

                        <div className="cheatsheet-box">
                            <TextboxCopyLong 
                                content={this.state.flexTextbox}
                                copyText={this.props.copyText} 
                            />
                        </div>

                    </div>

                    <div className="cheatsheet-column">

                        <div className="css-flex-options">
                            <div className="css-flex-option">
                                Number of boxes: <DropdownMenu value={this.state.demoStyle['box-number']} options={[2, 3, 4, 5, 6, 7, 8, 9, 10]} onChange={this.updateBoxNumber} />
                            </div>
                            <div className="css-flex-option">
                                Width of boxes: <DropdownMenu value={this.state.demoStyle['box-width']} options={['50px', '100px', '150px', '200px', '250px']} onChange={this.updateBoxWidth} />
                            </div>
                            <div className="css-flex-option">
                                Height of boxes: <DropdownMenu value={this.state.demoStyle['box-height']} options={['50px', '100px', '150px', '200px', '250px']} onChange={this.updateBoxHeight} />
                            </div>
                        </div>

                        <div className="css-flex-example" style={reactFlexStyle}>
                            {boxNumbers.map(number => {
                                return (
                                    <div className={"css-flex-example-div"+number} key={number}style={{height: this.state.demoStyle['box-height'], width: this.state.demoStyle['box-width']}}>box {number}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default FrontendCssFlex;