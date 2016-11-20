import React from 'react';

interface AbstractComponentFactory{
    getComponent(name : String) : React.Component
}

class Factory{
    AbstractComponentFactory : AbstractComponentFactory
}

export default Factory;