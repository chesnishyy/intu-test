import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {StopWatch} from '../../containers/StopWatch'

Enzyme.configure({ adapter: new Adapter() });

describe('StopWatch - Shallow Render REACT COMPONENTS', () => {

	it('should render self and its child', () => {
		const wrapper = shallow(<StopWatch />);

		expect(wrapper.find('.stopwatch').children().length).toEqual(3);
	})
});