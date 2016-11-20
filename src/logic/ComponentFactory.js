import React from 'react';

function factory(name , props){
    return React.createElement(name)
}

class ComponentFactory{
   
    getComponent(name,props){
        if(!name) throw Error('Invalid, Component name not could be null');
        
        switch(name){
            case 'div':
                return <div>{props.child}</div>
            case 'p':
                return <p></p>
            default:
                throw new Error('Invalid Component name');
        }
    }
}

export default ComponentFactory;