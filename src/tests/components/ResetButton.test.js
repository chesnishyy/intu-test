import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ResetButton from '../../components/ResetButton';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {
	stopped: [true, false],
	started: [true, false],
	resetHandler: jest.fn()
};

describe('ResetButton component should render null', () => {

	it('started={false} stopped={true}', () => {
		wrapper = shallow(
			<ResetButton
				resetHandler={props.resetHandler}
				stopped={props.stopped[0]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();
	});

	it('started={true} stopped={false}', () => {
		wrapper = shallow(
			<ResetButton
				resetHandler={props.resetHandler}
				stopped={props.stopped[1]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();
	});

	it('started={false} stopped={false}', () => {
		wrapper = shallow(
			<ResetButton
				resetHandler={props.resetHandler}
				stopped={props.stopped[1]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();
	});
});

describe('Reset Button - Shallow Render REACT COMPONENTS', () => {

	it('started={true} stopped={true} should render self', () => {
		wrapper = shallow(
			<ResetButton
				resetHandler={props.resetHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.is('.reset-button-container')).toEqual(true);


		expect(wrapper.find('.reset-button').text()).toEqual('Reset');
	});

	it('after the click resetHandler should be invoked', () => {
		wrapper = shallow(
			<ResetButton
				resetHandler={props.resetHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		wrapper.find('.reset-button-container').children('.button').simulate('click');

		expect(props.resetHandler).toHaveBeenCalled();
	});

});