import React from 'react';
import '../main-css.css';

import { DivInteractive, TextboxCopyLong, DropdownMenu } from '../utils/Utils';
import { RiRefreshLine } from "react-icons/ri";

import cat from '../../media/cat-sample.jpeg';

class FrontendCssImg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            objectPosition: {
                'selected': {
                    'type': 'percent',
                    'x-axis': '50%',
                    'y-axis': '50%'
                },
                'choices': {
                    'text': {
                        'x-axis': ['right','left'],
                        'y-axis': ['top','bottom']
                    },
                    'pixels': {
                        'x-axis': ['10px','20px','30px','40px'],
                        'y-axis': ['10px','20px','30px','40px']
                    },
                    'percent': {
                        'x-axis': ['10%','20%','30%','40%','50%'],
                        'y-axis': ['10%','20%','30%','40%','50%']
                    }
                }
                
            },
            imgContStyle: {
                'height': '300px',
                'width': '500px'
            },
            imgStyle: {
                'height': '100%',
                'width': '100%',
                'object-fit': 'fill',
                'object-position': '50% 50%',
                'image-rendering': 'auto'
            },
            imgTextbox: `.img-container {\n\theight: 300px;\n\twidth: 500px\n}\n\n.img-container img {\n\theight: 100%;\n\twidth: 100%;\n\tobject-fit: fill;\n\tobject-position: 50% 50%;\n\timage-rendering: auto\n}`
            
        }

        this.updateImgStyle = this.updateImgStyle.bind(this)
        this.resetImgStyle = this.resetImgStyle.bind(this)
        this.updateImgTextbox = this.updateImgTextbox.bind(this)

        this.updateObjPosType = this.updateObjPosType.bind(this)
        this.updateObjPosX = this.updateObjPosX.bind(this)
        this.updateObjPosY = this.updateObjPosY.bind(this)
        this.resetObjPos = this.resetObjPos.bind(this)

        this.updateImgContHeight = this.updateImgContHeight.bind(this)
        this.updateImgContWidth = this.updateImgContWidth.bind(this)

    }

    async updateImgStyle(property, value) {
        let newImgStyle = {...this.state.imgStyle};
        newImgStyle[property] = value;
        await this.setState({imgStyle: newImgStyle})
        this.updateImgTextbox();
    }

    async resetImgStyle(property) {
        let newImgStyle = {...this.state.imgStyle};
        switch (property) {
            case 'object-fit':
                newImgStyle[property] = 'fill'
                break;
            case 'object-position':
                newImgStyle[property] = '50% 50%'
                break;
            case 'image-rendering':
                newImgStyle[property] = 'auto'
                break;
            default:
                break;
          }
        await this.setState({imgStyle: newImgStyle})
        this.updateImgTextbox();
    }

    updateObjPosType(e) {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected.type = e.target.value
        newObjectPosition.selected['x-axis'] = this.state.objectPosition.choices[e.target.value]['x-axis'][0]
        newObjectPosition.selected['y-axis'] = this.state.objectPosition.choices[e.target.value]['y-axis'][0]

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle['object-position'] = this.state.objectPosition.selected['x-axis'] + ' ' + this.state.objectPosition.selected['y-axis'] 

        this.setState({
            objectPosition: newObjectPosition,
            imgStyle: newImgStyle
        })
    }

    updateObjPosX(e) {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected['x-axis'] = e.target.value

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle['object-position'] = e.target.value + ' ' + this.state.objectPosition.selected['y-axis']

        this.setState({
            objectPosition: newObjectPosition,
            imgStyle: newImgStyle
        })
    }

    updateObjPosY(e) {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected['y-axis'] = e.target.value

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle['object-position'] = this.state.objectPosition.selected['x-axis'] + ' ' + e.target.value 

        this.setState({
            objectPosition: newObjectPosition,
            imgStyle: newImgStyle
        })
    }

    resetObjPos() {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected = {
            'type': 'percent',
            'x-axis': '50%',
            'y-axis': '50%'
        }
        this.setState({objectPosition: newObjectPosition})
    }

    async updateImgContHeight(e) {
        const newImgContStyle = {...this.state.imgContStyle}
        newImgContStyle['height'] = e.target.value
        await this.setState({imgContStyle: newImgContStyle})
        this.updateImgTextbox();
    }

    async updateImgContWidth(e) {
        const newImgContStyle = {...this.state.imgContStyle}
        newImgContStyle['width'] = e.target.value;
        await this.setState({imgContStyle: newImgContStyle})
        this.updateImgTextbox();
    }

    updateImgTextbox() {
        const {imgStyle, imgContStyle} = this.state;
        const newImgTextbox = `.img-container {\n\theight: ${imgContStyle['height']};\n\twidth: ${imgContStyle['width']}\n}\n\n.img-container img {\n\theight: ${imgStyle['height']};\n\twidth: ${imgStyle['width']};\n\tobject-fit: ${imgStyle['object-fit']};\n\tobject-position: ${imgStyle['object-position']};\n\timage-rendering: ${imgStyle['image-rendering']};\n}`

        this.setState({
            imgTextbox: newImgTextbox
        })
    }

    render() {
        const reactImgStyle = {
            'height': '100%',
            'width': '100%',
            'objectFit': this.state.imgStyle['object-fit'],
            'objectPosition': this.state.imgStyle['object-position'],
            'imageRendering': this.state.imgStyle['image-rendering']
        }

        return (
            <div className="section-container" id="CSS Images">
                <div className="section-title">
                    CSS Images
                </div>
                <div className="cheatsheet-container">
                    <div className="cheatsheet-column">

                        <div className="cheatsheet-box">
                            <p id="cheatsheet-header">Image properties</p>

                            <DivInteractive 
                                property="object-fit" 
                                values={['fill', 'contain', 'cover', 'none', 'scale-down']} 
                                flexStyle={this.state.imgStyle} 
                                handleClick={this.updateImgStyle} 
                                reset={this.resetImgStyle}
                                width="150px"
                            />

                            <div className="css-img-obj-pos">
                                <div className="css-img-obj-pos-title">object-position:</div>
                                <div>
                                    <DropdownMenu value={this.state.objectPosition.selected.type} options={Object.keys(this.state.objectPosition.choices)} onChange={this.updateObjPosType} />
                                    &nbsp;&nbsp;x-axis: <DropdownMenu value={this.state.objectPosition.selected['x-axis']} options={this.state.objectPosition.choices[this.state.objectPosition.selected.type]['x-axis']} onChange={this.updateObjPosX} />
                                    &nbsp;&nbsp;y-axis: <DropdownMenu value={this.state.objectPosition.selected['y-axis']} options={this.state.objectPosition.choices[this.state.objectPosition.selected.type]['y-axis']} onChange={this.updateObjPosY} />
                                    &nbsp;<RiRefreshLine id="div-inter-clickable" onClick={() => this.resetObjPos('object-position')}/>
                                </div>
                            </div>

                            <DivInteractive 
                                property="image-rendering" 
                                values={['auto', 'crisp-edges', 'pixelated']} 
                                flexStyle={this.state.imgStyle} 
                                handleClick={this.updateImgStyle} 
                                reset={this.resetImgStyle}
                                width="150px"
                            />

                        </div>

                        

                        <div className="cheatsheet-box">
                            <TextboxCopyLong 
                                content={this.state.imgTextbox} 
                                onChange={this.updateImgTextbox}
                                copyText={this.props.copyText} 
                            />
                        </div>

                    </div>

                    <div className="cheatsheet-column">

                        <div className="css-img-example">
                            <div className="css-img-options">
                                <div className="css-img-option">
                                    Container height: <DropdownMenu value={this.state.imgContStyle['height']} options={['100px', '200px','300px','400px','500px']} onChange={this.updateImgContHeight} />
                                </div>
                                <div className="css-img-option">
                                    Container width: <DropdownMenu value={this.state.imgContStyle['width']} options={['300px', '400px','500px','600px']} onChange={this.updateImgContWidth} />
                                </div>
                            </div>
                            <div className="css-img-container" style={this.state.imgContStyle}>
                                <img src={cat} style={reactImgStyle} alt='I am a cat' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default FrontendCssImg;