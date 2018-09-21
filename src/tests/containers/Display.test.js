import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Display} from '../../containers/Display'

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const props = {
	total: 2741
};

describe('Display - Shallow Render REACT COMPONENTS', () => {

	it('should render itself', () => {
		wrapper = shallow(
			<Display
				total={props.total}
			/>
		);

		expect(wrapper.hasClass('display-container')).toEqual(true);

		expect(wrapper.find('.display-container').text()).toEqual(props.total.toString());
	})
});