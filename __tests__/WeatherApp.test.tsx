/**
 * @format
 */

import React from 'react';
import WeatherApp from '../WeatherApp';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<WeatherApp />).toJSON();
  expect(tree).toMatchSnapshot()
});
