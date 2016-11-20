import React from 'react';

import Factory from './AbstractComponentFactory';


function factory(name){
    return React.createFactory(name)
}

class ComponentFactory extends Factory.AbstractComponentFactory{
    constructor(){
        super(null)
    }
    
    getComponent(name){
        if(!name) throw Error('Invalid, Component name not could be null');
        
        switch(name){
            case 'div':
                return factory('div');
            default:
                throw new Error('Invalid Component name');
        }
    }
}

export default ComponentFactory;