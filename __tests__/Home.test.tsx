/**
 * @format
 */
import {Button} from 'react-native'
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Home from '../src/pages/Home';

test('render Home Component corrcetly', () => {
    const tree = renderer.create(<Home navigation={{
        navigate: jest.fn()
    }}/>).toJSON()
    expect(tree).toMatchSnapshot()
})
describe('Testing Home components', () => {
    test('Test 1', async () => {
        const navigateMockFn = jest.fn()
        const wrapper = shallow(<Home navigation={{
            navigate: navigateMockFn
        }}/>)
        const button = wrapper.find(Button)
        button.props().onPress()
        wrapper.update()
        expect(navigateMockFn).toHaveBeenCalledWith('Details', {"country": ""})
    })
})


