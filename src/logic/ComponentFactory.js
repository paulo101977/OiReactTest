import React from 'react';



class ComponentFactory{
   
    getComponent(name){
        if(!name) throw Error('Invalid, Component name not could be null');
        
        switch(name){
            case 'div':
                return <div></div>
            case 'p':
                return <p></p>
            default:
                throw new Error('Invalid Component name');
        }
    }
}

export default ComponentFactory;