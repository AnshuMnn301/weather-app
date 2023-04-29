/**
 * @format
 */
import {Button, Text} from 'react-native'
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import Country from '../src/components/Country';
import {shallow } from 'enzyme';
import fetchMock from 'fetch-mock-jest'

test('render Country Component corrcetly', () => {
    const tree = renderer.create(<Country/>).toJSON()
    expect(tree).toMatchSnapshot()
})

describe('Test Country component', () => {
    let wrapper
    afterEach(() => {
        fetchMock.mockReset()
    })
    beforeEach(() => {
        const props =  {"imageSource": "https://flagcdn.com/w320/us.png", "latlng": [38.89, -77.05], "title": "United States", "capital": "Washington, D.C."}
        fetchMock.get(`http://api.weatherstack.com/current?access_key=8c483281e15083c4d1a2bb16bccf1736&query=${props.capital}`,{"cloudcover": 75, "feelslike": 39, "humidity": 67, "is_day": "yes", "observation_time": "04:36 PM", "precip": 0, "pressure": 1013, "temperature": 32, "uv_index": 8, "visibility": 10, "weather_code": 116, "weather_descriptions": ["Partly cloudy"], "weather_icons": ["https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"], "wind_degree": 100, "wind_dir": "E", "wind_speed": 28})
        wrapper = shallow(<Country {...props}/>)
    })
    it('Test getting weather data', async() => {
       
        const getWeatherButton = wrapper.find(Button)
        getWeatherButton.props().onPress();
        await act(() => new Promise(setImmediate));
        wrapper.update()
    })
})