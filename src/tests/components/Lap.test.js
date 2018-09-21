import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Lap from '../../components/Lap';
import {milliToTime} from '../../service_functions'

Enzyme.configure({ adapter: new Adapter() });

describe('Lap - Shallow Render REACT COMPONENTS', () => {
	let wrapper;
	const lap = {
		total: 2210,
		split: 2210,
		number: 1
	};

	beforeEach(() => {
		wrapper = shallow(<Lap lap={lap} />)
	});

	it('should render self and its children', () => {
		expect(wrapper.find('.lap').hasClass('lap')).toBe(true);

		expect(wrapper.find('.lap').children().length).toEqual(3);
	});

	it('childs values should be equals props', () => {
		expect(wrapper.find('.lap').children('.number').text()).toBe(`Lap ${lap.number}`);

		expect(wrapper.find('.lap').children('.split').text()).toEqual(milliToTime(lap.split));

		expect(wrapper.find('.lap').children('.total').text()).toEqual(milliToTime(lap.total));
	});
});