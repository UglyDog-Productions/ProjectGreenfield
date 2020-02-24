import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
// import Share from './ShareOnSocials';

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

// describe('CircleImage', () => {
//   test('snapshot renders', () => {
//     const component = renderer.create(<CircleImage image={'sdf'} />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// describe('CircleImage', () => {
//   test('snapshot renders', () => {
//     const component = renderer.create(<CircleImage />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it('renders the inner Counter', () => {
//     const wrapper = shallow(<CircleImage />);
//     expect(wrapper.find(AvgStar).length).toEqual(0);
//   });
// });

// describe('ProductOverview', () => {
//   test('snapshot renders', () => {
//     const component = renderer.create(<ProductOverview />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it('renders the inner Counter', () => {
//     const wrapper = shallow(<ProductOverview />);
//     expect(wrapper.find(AvgStar).length).toEqual(1);
//   });
// });
