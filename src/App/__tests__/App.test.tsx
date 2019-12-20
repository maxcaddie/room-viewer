//Internals
import App from '../App';
import Map from '../../Map/Map'

//Externals
import React from 'react';
import renderer from 'react-test-renderer';



it('renders app correctly',()=>{
    const appComponent = renderer.create(<App />).toJSON();
    expect(appComponent).toMatchSnapshot();
});

it('the outermost div has the className app',()=>{
    const appComponent = renderer.create(<App />);
    const element = appComponent.root.findByType("div");
    expect(element.props.className.includes("App")).toBeTruthy();
});

it('includes a map component',()=>{
    const appComponent = renderer.create(<App />);
    appComponent.root.findByType(Map);
})