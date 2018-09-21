import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {LapsList} from '../../containers/LapsList'

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const props = {
	laps_list: [
		{number: 1, lap_time: 6892, total: 6780, split: 6780},
		{number: 2, lap_time: 7402, total: 7318, split: 426},
		{number: 3, lap_time: 9526, total: 9461, split: 2059},
		{number: 4, lap_time: 11025, total: 10982, split: 1456},
		{number: 5, lap_time: 12402, total: 12348, split: 1323},
		{number: 6, lap_time: 0, total: 13704, split: 1302}
	]
};

describe('LapsList - Shallow Render REACT COMPONENTS', () => {

	it('should render self and its child', () => {
		wrapper = shallow(<LapsList laps_list={props.laps_list} />);

		expect(wrapper.find('.laps-list').children().length).toEqual(props.laps_list.length + 1);
	})
});