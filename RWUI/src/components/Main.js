require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Info from './info.jsx';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          Please edit <code>src/components/Main.js</code> to get started!
          <Info url="http://localhost:5000/api/Values/Calc" />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
