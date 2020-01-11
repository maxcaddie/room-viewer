//Internals
import Map from '../Map'

//Externals
import React from 'react';
import renderer from 'react-test-renderer';


it('renders the same Map as before',()=>{
    var mapComponent = renderer.create(<Map />).toJSON();
    expect(mapComponent).toMatchSnapshot();
});



it('has floor explination text with floor tag',()=>{
    var mapComponent = renderer.create(<Map />);    
    mapComponent.root.findByProps({className:"floor"});
});

describe('images load correctly',()=>{
    it('has an image',()=>{
        var mapComponent = renderer.create(<Map />);    
        mapComponent.root.findByType("img");
    });
    
})