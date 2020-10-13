import React from 'react';
import '../main-css.css';

import { TextboxInteractive, TexboxCodeCopy, Textbox, DropdownMenu } from '../utils/Utils';

class FrontendCss extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCopied: false,
            flexStyle: {
                'display': 'flex',
                'flex-direction': 'row',
                'flex-wrap': 'wrap',
                'justify-content': 'flex-start',
                'align-items': 'flex-start',
                'align-content': 'flex-start',
            },
            demoStyle: {
                'box-number': 6,
                'box-width': '100px',
                'box-height': '100px'
            },
            flexTextbox: `.parent {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\talign-content: flex-start;\n}`
            
        }
        this.updateFlexStyle = this.updateFlexStyle.bind(this);
        this.resetFlexStyle = this.resetFlexStyle.bind(this);
        this.updateFlexTextbox = this.updateFlexTextbox.bind(this);
        this.updateBoxNumber = this.updateBoxNumber.bind(this);
        this.updateBoxWidth = this.updateBoxWidth.bind(this);
        this.updateBoxHeight = this.updateBoxHeight.bind(this);

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
                newFlexStyle[property] = 'wrap'
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

        return (
            <div className="section-container" id="CSS">
                <div className="section-title">
                    CSS Flexbox
                </div>
                <div className="cheatsheet-container">
                    <div className="cheatsheet-column">

                        <div className="cheatsheet-box">
                            <p id="cheatsheet-header">Flex container properties</p>
                            <p><TextboxInteractive property="display" values={['block', 'flex']} flexStyle={this.state.flexStyle} handleClick={this.updateFlexStyle} reset={this.resetFlexStyle} /></p>
                            <p><TextboxInteractive property="flex-direction" values={['row', 'row-reverse', 'column', 'column-reverse']} flexStyle={this.state.flexStyle} handleClick={this.updateFlexStyle} reset={this.resetFlexStyle} /></p>
                            <p><TextboxInteractive property="flex-wrap" values={['wrap', 'nowrap', 'wrap-reverse']} flexStyle={this.state.flexStyle} handleClick={this.updateFlexStyle}  reset={this.resetFlexStyle} /></p>
                            <p><Textbox property="flex-flow" values="flex-direction flex-wrap" /></p>
                        </div>

                        <div className="cheatsheet-box">
                            <p id="cheatsheet-header">Flex alignment properties</p>
                            <p><TextboxInteractive property="justify-content" values={['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly']} flexStyle={this.state.flexStyle} handleClick={this.updateFlexStyle} reset={this.resetFlexStyle} /></p>
                            <p><TextboxInteractive property="align-items" values={['flex-start', 'flex-end', 'center', 'stretch', 'baseline']} flexStyle={this.state.flexStyle} handleClick={this.updateFlexStyle} reset={this.resetFlexStyle} /></p>
                            <p><TextboxInteractive property="align-content" values={['flex-start', 'flex-end', 'center', 'stretch', 'space-around', 'space-between']} flexStyle={this.state.flexStyle} handleClick={this.updateFlexStyle}  reset={this.resetFlexStyle} /></p>
                        </div>

                        <div className="cheatsheet-box">
                            <TexboxCodeCopy value={this.state.flexTextbox} onChange={this.updateFlexTextbox} />
                        </div>

                    </div>

                    <div className="cheatsheet-column">

                        <div className="css-flex-options">
                            <div className="css-flex-option">
                                Number of boxes: <DropdownMenu value={this.state.demoStyle['box-number']} options={[4, 5, 6, 7, 8, 9, 10]} updateDemoStyle={this.updateBoxNumber} />
                            </div>
                            <div className="css-flex-option">
                                Width of boxes: <DropdownMenu value={this.state.demoStyle['box-width']} options={['50px', '100px', '150px', '200px', '250px']} updateDemoStyle={this.updateBoxWidth} />
                            </div>
                            <div className="css-flex-option">
                                Height of boxes: <DropdownMenu value={this.state.demoStyle['box-height']} options={['50px', '100px', '150px', '200px', '250px']} updateDemoStyle={this.updateBoxHeight} />
                            </div>
                        </div>

                        <div className="css-flex-example" style={this.state.flexStyle}>
                            {boxNumbers.map(number => {
                                return (
                                    <div className={"css-flex-example-div"+number} style={{height: this.state.demoStyle['box-height'], width: this.state.demoStyle['box-width']}}>box {number}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default FrontendCss;