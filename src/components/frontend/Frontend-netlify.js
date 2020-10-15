import React from 'react';
import '../main-css.css';

import netlify1 from '../../media/netlify-01.png';
import netlify2 from '../../media/netlify-02.png';

const netlify = [
    {
        'title': 'Step 1: Add new site',
        'explanation':'some explanation',
        'src': netlify1,
        'alt': 'sample screenshot'
    },
    {
        'title': 'Step 2: do something',
        'explanation':'some explanation',
        'src': netlify2,
        'alt': 'sample screenshot'
    }
]

class FrontendNetlify extends React.Component {

    render() {
        return (
        <div className="section-container" id="Using Netlify">
            <div className="section-title">
                Using Netlify
            </div>
            <div className="cheatsheet-column">
                {netlify.map(instruction => {
                    return (
                        <div className="cheatsheet-box">
                            <p id="cheatsheet-header">{instruction.title}</p>
                            <p>{instruction.explanation}</p>
                            <div className="frontend-netlify-img-container" id="div-inter-clickable">
                                <img src={instruction.src} alt={instruction.alt} onClick={() => this.props.showModalImage(instruction.title, instruction.src, instruction.alt)}/>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        );
    }
}


export default FrontendNetlify;