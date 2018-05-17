import React from 'react';
import PropTypes from 'prop-types';

class Html extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    const {title, children} = this.props;
    return (
      <html className='no-js' lang='en'>
      <head>
        <title>{title}</title>
        <link href="/css-blocks.css" rel="stylesheet"/>
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={{__html: children}}/>
      </body>
      </html>
    );
  }
}

export default Html;
