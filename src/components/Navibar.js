import React from 'react';
import './main-css.css';

import { Link } from "react-scroll";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const menuList = [
    {
        'main': 'introduction',
        'sub': []
    },
    {
        'main': 'frontend',
        'sub': ['React','CSS Flexbox','CSS Images','REST APIs','Using Netlify']
    },
    {
        'main': 'backend',
        'sub': ['NodeJS','Ruby','Ruby on Rails','SQL','SQLite']
    },
    {
        'main': 'Others',
        'sub': ['Soft skills']
    },
    {
        'main':'tools',
        'sub': ['Git']
    }
]
const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Navibar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            nextElement: menuList[1].main
        }

        this.updateMenu = this.updateMenu.bind(this);
    }

    updateMenu(currentIndex, nextElement) {
        this.setState({
            currentIndex: currentIndex,
            nextElement: nextElement
        })
    }

    render() {
        return (
            <div className="navibar-container">
                <div className="navibar-container-main">
                        <Link activeClass="active-disappear" to={menuList[0].main} spy={true} smooth={true} offset={0} duration={500} onSetActive={() => this.updateMenu(0, menuList[1].main)}>
                            <div className="navibar-item" id="arrow-logo"><RiArrowUpSLine /></div>
                        </Link>
                        {menuList.map((item, index) => {
                            let nextIndex = index === menuList.length-1 ? index : index + 1;
                            return (
                                <Link activeClass="active" to={item.main} spy={true} smooth={true} offset={0} duration={500} onSetActive={() => this.updateMenu(index, menuList[nextIndex].main)} key={index}>
                                    <div className="navibar-item">{capitalizeFirstLetter(item.main)}</div>
                                </Link>
                            )
                        })}
                        <Link activeClass="active-disappear" to={this.state.nextElement} spy={true} smooth={true} offset={0} duration={500}>
                            <div className="navibar-item" id="arrow-logo"><RiArrowDownSLine /></div>
                        </Link>
                </div>
                <div className="navibar-container-sub">
                        {menuList[this.state.currentIndex].sub.map((item, index) => {
                            return (
                                <Link activeClass="active" to={item} spy={true} smooth={true} offset={0} duration={500} key={index}>
                                    <div className="navibar-item-sub">{capitalizeFirstLetter(item)}</div>
                                </Link>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default Navibar;
