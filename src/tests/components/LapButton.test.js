import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LapButton from '../../components/LapButton';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const props = {
	stopped: [true, false],
	started: [true, false],
	lapHandler: jest.fn()
};

describe('LapButton - Shallow Render REACT COMPONENTS', () => {

	it('should render null', () => {
		wrapper = shallow(
			<LapButton
				lapHandler={props.lapHandler}
				stopped={props.stopped[0]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();
	});

	it('should render self', () => {
		wrapper = shallow(
			<LapButton
				lapHandler={props.lapHandler}
				stopped={props.stopped[1]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.is('.lap-button-container')).toEqual(true);

		expect(wrapper.find('.lap-button-container').hasClass('active')).toEqual(true);

		expect(wrapper.find('.lap-button-container').children('.button').hasClass('active')).toEqual(true);
	});

	it('should render self', () => {
		wrapper = shallow(
			<LapButton
				lapHandler={props.lapHandler}
				stopped={props.stopped[1]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.find('.lap-button-container').hasClass('active')).toEqual(false);

		expect(wrapper.find('.lap-button-container').children('.button').hasClass('active')).toEqual(false);

		wrapper.find('.lap-button-container').children('.button').simulate('click');

		expect(props.lapHandler).toHaveBeenCalled();
	});
});