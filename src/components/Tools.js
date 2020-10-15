import React from 'react';
import './main-css.css';

import coolors from '../media/coolors-logo.jpg';
import digitalocean from '../media/digitalocean-logo.svg';
import favicon from '../media/favicon-logo.jpeg';
import github from '../media/github-logo.png';
import netlify from '../media/netlify-logo.png';
import optimizilla from '../media/optimizilla-logo.svg';

import { ExternalLink } from 'react-external-link';

const toolsList = [
  {
    'name': 'Coolors',
    'logo': coolors,
    'url': 'https://coolors.co/',
    'description': 'A useful site to find color palette for website theme'
  },
  {
    'name': 'Digital Ocean',
    'logo': digitalocean,
    'url': 'https://www.digitalocean.com/',
    'description': 'A provider for hosting and deployment online'
  },
  {
    'name': 'Favicon',
    'logo': favicon,
    'url': 'https://favicon.io/emoji-favicons/',
    'description': 'Favicon.io is a great source for free icons.'
  },
  {
    'name': 'Github',
    'logo': github,
    'url': 'https://github.com/',
    'description': 'something something'
  },
  {
    'name': 'Netlify',
    'logo': netlify,
    'url': 'https://www.netlify.com/',
    'description': 'A platform for hosting of frontend applications.'
  },
  {
    'name': 'Optimizilla',
    'logo': optimizilla,
    'url': 'https://imagecompressor.com/',
    'description': 'A great site for compressing images for free.'
  },
]

class Tools extends React.Component {
  render() {
    return (
      <div className="section-container" id="tools">
        <div className="section-title">
            Tools
        </div>
        <div className="tools-container-main">
          {toolsList.map((tool, index) => {
            return (
              <div className="tools-container-sub" key={index}>
                <div className="tools-img-container">
                  <ExternalLink href={tool.url}>
                    <img src={tool.logo} alt={tool.name} />
                  </ExternalLink>
                </div>
                <div>
                  {tool.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Tools;