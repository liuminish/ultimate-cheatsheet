import React from 'react';
import '../main-css.css';

import netlify1 from '../../media/netlify-01.png';
import netlify2 from '../../media/netlify-02.png';
import netlify3 from '../../media/netlify-03.png';
import netlify4 from '../../media/netlify-04.png';
import netlify5 from '../../media/netlify-05.png';

const netlify = [
    {
        'title': 'Step 1: Add new site in Netlify',
        'explanation':`If you haven't, sign up for a free account on Netlify first. Go to 'Sites' and click 'New site from Git'.`,
        'src': netlify1,
        'alt': `Add new site in Netlify'`
    },
    {
        'title': 'Step 2: Choose the Git provider and authorise access to Netlify',
        'explanation':`For my example, I'm usinging GitHub. A pop-up window will appear prompting you to log in and authorise access. You can select which repository to deploy thereafter.`,
        'src': netlify2,
        'alt': 'Choose the Git provider and authorise access to Netlify'
    },
    {
        'title': 'Step 3: Change domain settings on Netlify',
        'explanation':'Change the default domain and subdomain on Netlify. While the default subdomain is randomly assigned, you can choose to change it for uniformity.',
        'src': netlify3,
        'alt': 'Change domain settings on Netlify'
    },
    {
        'title': 'Step 4: Configure settings in Namecheap',
        'explanation':`For my case, I'm using Namecheap. Click on 'Manage'.`,
        'src': netlify4,
        'alt': 'Configure settings in Namecheap'
    },
    {
        'title': 'Step 5: Add DNS record',
        'explanation':`Under the 'Advanced DNS' tab, add CNAME record. Under the 'Host' column, add the desired address. Adding 'cheatsheet' will mean you are adding a CNAME for the address 'cheatsheet.liumin.dev'. Under 'Value' column, add the site address which you are pointing to. In this case, add the netlify subdomain.`,
        'src': netlify5,
        'alt': 'Add DNS record'
    }
]

class FrontendNetlify extends React.Component {

    render() {
        return (
        <div className="section-container" id="Using Netlify">
            <div className="section-title">
                Using Netlify
            </div>
            <div className="cheatsheet-container">
                {netlify.map((instruction, index) => {
                    return (
                        <div className="cheatsheet-card-medium" key={index}>
                            <p id="cheatsheet-header">{instruction.title}</p>
                            <p id="netlify-explanation">{instruction.explanation}</p>
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
