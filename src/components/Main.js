require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';
import ComponentFactory from '../logic/ComponentFactory'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props){
      super(props)
      console.dir('inside')
  }
  getComponent(name){
      let Factory = new ComponentFactory().getComponent('div')
      return <div> Text </div>
  }
  render() {
    return (
      //getComponent(name)
        this.getComponent('div')
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
