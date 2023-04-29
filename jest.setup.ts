import 'react-native'
import 'jest-enzyme'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.useFakeTimers()
configure({ adapter: new Adapter() });