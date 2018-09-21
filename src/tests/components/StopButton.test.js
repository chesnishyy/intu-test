import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StopButton from '../../components/StopButton';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {
	stopped: [false, true],
	started: [false, true],
	stopHandler: jest.fn()
};

describe('StopButton component should render null', () => {

	it('started={true} stopped={true}', () => {
		wrapper = shallow(
			<StopButton
				stopHandler={props.stopHandler}
				stopped={props.stopped[1]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();

		expect(wrapper.isEmptyRender()).toEqual(true);
	});

	it('started={false} stopped={false}', () => {
		wrapper = shallow(
			<StopButton
				stopHandler={props.stopHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();

		expect(wrapper.isEmptyRender()).toEqual(true);
	});

	it('started={false} stopped={true}', () => {
		wrapper = shallow(
			<StopButton
				stopHandler={props.stopHandler}
				stopped={props.stopped[1]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();

		expect(wrapper.isEmptyRender()).toEqual(true);
	});
});

describe('StopButton - Shallow Render REACT COMPONENTS started={true} stopped={false}', () => {

	it('should render self', () => {
		wrapper = shallow(
			<StopButton
				stopHandler={props.stopHandler}
				stopped={props.stopped[0]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.isEmptyRender()).toEqual(false);

		expect(wrapper.is('.stop-button-container')).toEqual(true);

		expect(wrapper.find('.stop-button').text()).toEqual('Stop');
	});

	it('stopHandler should be called after the click', () => {
		wrapper = shallow(
			<StopButton
				stopHandler={props.stopHandler}
				stopped={props.stopped[0]}
				started={props.started[1]}
			/>
		);

		wrapper.find('.stop-button').simulate('click');
		expect(props.stopHandler).toHaveBeenCalled();
	});
});