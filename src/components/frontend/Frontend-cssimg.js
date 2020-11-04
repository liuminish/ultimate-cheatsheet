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
            filter: {
                'selected': {
                    'type': 'none',
                    'option': 'none'
                },
                'choices': {
                    'none':['none'],
                    'blur': ['0px','1px','2px','3px','4px'],
                    'brightness': ['0%','50%','100%','150%','200%'],
                    'contrast': ['0%','50%','100%','150%','200%'],
                    'grayscale': ['0%','20%','40%','60%','80%','100%'],
                    'hue-rotate': ['0deg','60deg','120deg','180deg'],
                    'invert': ['0%','25%','50%','75%','100%'],
                    'opacity': ['0%','25%','50%','75%','100%'],
                    'saturate': [0,2,4,6,8,10],
                    'sepia': ['0%','25%','50%','75%','100%'],
                    'drop-shadow': ['0px 0px 0px red','0px 5px 5px red','5px 0px 5px blue','5px 5px 5px 0px green','5px 5px 5px green']
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
                'image-rendering': 'auto',
                'filter': null
            },
            imgTextbox: `.img-container {\n\theight: 300px;\n\twidth: 500px\n}\n\n.img-container img {\n\theight: 100%;\n\twidth: 100%;\n\tobject-fit: fill;\n\tobject-position: 50% 50%;\n\timage-rendering: auto;\n}`

        }

        this.updateImgStyle = this.updateImgStyle.bind(this)
        this.resetImgStyle = this.resetImgStyle.bind(this)
        this.updateImgTextbox = this.updateImgTextbox.bind(this)

        this.updateObjPosType = this.updateObjPosType.bind(this)
        this.updateObjPosX = this.updateObjPosX.bind(this)
        this.updateObjPosY = this.updateObjPosY.bind(this)
        this.resetObjPos = this.resetObjPos.bind(this)

        this.updateFilterType = this.updateFilterType.bind(this)
        this.updateFilterOption = this.updateFilterOption.bind(this)
        this.resetFilter = this.resetFilter.bind(this)

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
            case 'image-rendering':
                newImgStyle[property] = 'auto'
                break;
            default:
                break;
          }
        await this.setState({imgStyle: newImgStyle})
        this.updateImgTextbox();
    }

    async updateObjPosType(e) {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected.type = e.target.value
        newObjectPosition.selected['x-axis'] = this.state.objectPosition.choices[e.target.value]['x-axis'][0]
        newObjectPosition.selected['y-axis'] = this.state.objectPosition.choices[e.target.value]['y-axis'][0]

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle['object-position'] = this.state.objectPosition.selected['x-axis'] + ' ' + this.state.objectPosition.selected['y-axis']

        await this.setState({
            objectPosition: newObjectPosition,
            imgStyle: newImgStyle
        })

        this.updateImgTextbox();
    }

    async updateObjPosX(e) {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected['x-axis'] = e.target.value

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle['object-position'] = e.target.value + ' ' + this.state.objectPosition.selected['y-axis']

        await this.setState({
            objectPosition: newObjectPosition,
            imgStyle: newImgStyle
        })

        this.updateImgTextbox();
    }

    async updateObjPosY(e) {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected['y-axis'] = e.target.value

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle['object-position'] = this.state.objectPosition.selected['x-axis'] + ' ' + e.target.value

        await this.setState({
            objectPosition: newObjectPosition,
            imgStyle: newImgStyle
        })

        this.updateImgTextbox();
    }

    async resetObjPos() {
        let newObjectPosition = {...this.state.objectPosition}
        newObjectPosition.selected = {
            'type': 'percent',
            'x-axis': '50%',
            'y-axis': '50%'
        }
        await this.setState({objectPosition: newObjectPosition})

        this.updateImgTextbox();
    }

    async updateFilterType(e) {
        let newFilter = {...this.state.filter}
        newFilter.selected.type = e.target.value

        switch (e.target.value) {
            case 'none':
                newFilter.selected.option = 'none'
                break;
            case 'blur':
                newFilter.selected.option = '0px'
                break;
            case 'brightness':
                newFilter.selected.option = '100%'
                break;
            case 'contrast':
                newFilter.selected.option = '100%'
                break;
            case 'grayscale':
                newFilter.selected.option = '0%'
                break;
            case 'hue-rotate':
                newFilter.selected.option = '0deg'
                break;
            case 'invert':
                newFilter.selected.option = '0%'
                break;
            case 'opacity':
                newFilter.selected.option = '100%'
                break;
            case 'saturate':
                newFilter.selected.option = '1'
                break;
            case 'sepia':
                newFilter.selected.option = '0%'
                break;
            case 'drop-shadow':
                newFilter.selected.option = '0px 0px 0px red'
                break;
            default:
                break;
        }

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle.filter = `${this.state.filter.selected.type}(${this.state.filter.selected.option})`

        await this.setState({
            filter: newFilter,
            imgStyle: newImgStyle
        })

        this.updateImgTextbox();
    }

    async updateFilterOption(e) {
        let newFilter = {...this.state.filter}
        newFilter.selected.option = e.target.value

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle.filter = `${this.state.filter.selected.type}(${this.state.filter.selected.option})`

        await this.setState({
            filter: newFilter,
            imgStyle: newImgStyle
        })

        this.updateImgTextbox();
    }

    async resetFilter(type) {
        let newFilter = {...this.state.filter}

        switch (type) {
            case 'blur':
                newFilter.selected.option = '0px'
                break;
            case 'brightness':
                newFilter.selected.option = '100%'
                break;
            case 'contrast':
                newFilter.selected.option = '100%'
                break;
            case 'grayscale':
                newFilter.selected.option = '0%'
                break;
            case 'hue-rotate':
                newFilter.selected.option = '0deg'
                break;
            case 'invert':
                newFilter.selected.option = '0%'
                break;
            case 'opacity':
                newFilter.selected.option = '100%'
                break;
            case 'saturate':
                newFilter.selected.option = '1'
                break;
            case 'sepia':
                newFilter.selected.option = '0%'
                break;
            case 'drop-shadow':
                newFilter.selected.option = '0px 0px 0px red'
                break;
            default:
                break;
        }

        let newImgStyle = {...this.state.imgStyle}
        newImgStyle.filter = `${this.state.filter.selected.type}(${this.state.filter.selected.option})`

        await this.setState({
            filter: newFilter,
            imgStyle: newImgStyle
        })

        this.updateImgTextbox();
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
        let newImgTextbox = ''
        if (this.state.filter.selected.type === 'none') {
        newImgTextbox = `.img-container {\n\theight: ${imgContStyle['height']};\n\twidth: ${imgContStyle['width']}\n}\n\n.img-container img {\n\theight: ${imgStyle['height']};\n\twidth: ${imgStyle['width']};\n\tobject-fit: ${imgStyle['object-fit']};\n\tobject-position: ${imgStyle['object-position']};\n\timage-rendering: ${imgStyle['image-rendering']};\n}`
        } else {
            newImgTextbox = `.img-container {\n\theight: ${imgContStyle['height']};\n\twidth: ${imgContStyle['width']}\n}\n\n.img-container img {\n\theight: ${imgStyle['height']};\n\twidth: ${imgStyle['width']};\n\tobject-fit: ${imgStyle['object-fit']};\n\tobject-position: ${imgStyle['object-position']};\n\timage-rendering: ${imgStyle['image-rendering']};\n\tfilter: ${imgStyle['filter']}\n}`
        }

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
            'imageRendering': this.state.imgStyle['image-rendering'],
            'filter': this.state.imgStyle['filter']
        }

        return (
            <div className="section-container" id="CSS Images">
                <div className="section-title">
                    CSS Images
                </div>
                <div className="cheatsheet-container">

                    <div className="cheatsheet-card-medium">
                        <p id="textbox-header">Image properties</p>

                        <DivInteractive
                            property="object-fit"
                            values={['fill', 'contain', 'cover', 'none', 'scale-down']}
                            explanation='The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.'
                            flexStyle={this.state.imgStyle}
                            showModal={this.props.showModal}
                            handleClick={this.updateImgStyle}
                            reset={this.resetImgStyle}
                            width="150px"
                        />

                        <div className="css-img-obj-pos">
                            <div className="css-img-obj-pos-title" id="div-inter-clickable" onClick={() => this.props.showModal('object-position', `The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.`)}>object-position:</div>
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
                            explanation='The image-rendering CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.'
                            flexStyle={this.state.imgStyle}

                            showModal={this.props.showModal}
                            handleClick={this.updateImgStyle}
                            reset={this.resetImgStyle}
                            width="150px"
                        />

                        <div className="css-img-obj-pos">
                            <div className="css-img-obj-pos-title" id="div-inter-clickable" onClick={() => this.props.showModal('filter', `The filter property defines visual effects (like blur and saturation) to an element (often <img>).`)}>filter:</div>
                            <div>
                                <DropdownMenu value={this.state.filter.selected.type} options={Object.keys(this.state.filter.choices)} onChange={this.updateFilterType} />
                                <DropdownMenu value={this.state.filter.selected.option} options={this.state.filter.choices[this.state.filter.selected.type]} onChange={this.updateFilterOption} />
                                &nbsp;<RiRefreshLine id="div-inter-clickable" onClick={() => this.resetFilter(this.state.filter.selected.type)}/>
                            </div>
                        </div>

                    </div>



                    <div className="cheatsheet-card-medium">
                        <p id="textbox-header">Image CSS code</p>
                        <TextboxCopyLong
                            content={this.state.imgTextbox}
                            onChange={this.updateImgTextbox}
                            copyText={this.props.copyText}
                        />
                    </div>

                </div>

                <div className="css-img-example">
                    <div className="css-img-options">
                        <div className="css-img-option">
                            Container height: <DropdownMenu value={this.state.imgContStyle['height']} options={['100px', '200px','300px','400px','500px']} onChange={this.updateImgContHeight} />
                        </div>
                        <div className="css-img-option">
                            Container width: <DropdownMenu value={this.state.imgContStyle['width']} options={['300px', '400px','500px','600px','700px']} onChange={this.updateImgContWidth} />
                        </div>
                    </div>
                    <div className="css-img-container" style={this.state.imgContStyle}>
                        <img src={cat} style={reactImgStyle} alt='I am a cat' />
                    </div>
                </div>

            </div>
        );
    }
}


export default FrontendCssImg;
