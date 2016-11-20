require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';
import ComponentFactory from '../logic/ComponentFactory'


class AppComponent extends React.Component {
  constructor(props){
      super(props)
  }
  getComponent(name){
      var props = {child : "text"}
      var Factory = new ComponentFactory().getComponent(name,props)
      console.dir(Factory);
      return Factory
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
