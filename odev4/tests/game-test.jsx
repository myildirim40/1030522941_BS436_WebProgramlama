const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/Game');
const {App}  = require('../src/index');

test("test oluşturuldu",()=>{
    const driver = mount(<Game/>);
    console.log(driver)
});



