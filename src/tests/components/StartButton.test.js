import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StartButton from '../../components/StartButton';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {
	stopped: [true, false],
	started: [true, false],
	startHandler: jest.fn()
};

describe('Start Button component should render null', () => {

	it('started={false} stopped={true}', () => {
		wrapper = shallow(
			<StartButton
				startHandler={props.startHandler}
				stopped={props.stopped[0]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();
	});

	it('started={true} stopped={false}', () => {
		wrapper = shallow(
			<StartButton
				startHandler={props.startHandler}
				stopped={props.stopped[0]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.get(0)).toBeNull();
	});
});

describe('Start Button - Shallow Render REACT COMPONENTS', () => {

	it('started={true} stopped={true} should render self', () => {
		wrapper = shallow(
			<StartButton
				startHandler={props.startHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.find('.start-button-container').children('.button').text()).toEqual('Start');

		expect(wrapper.find('.start-button-container').children('.button').length).toEqual(1);
	});

	it('started={false} stopped={false} should render self', () => {
		wrapper = shallow(
			<StartButton
				startHandler={props.startHandler}
				stopped={props.stopped[1]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.find('.start-button-container').children('.button').text()).toEqual('Start');

		expect(wrapper.find('.start-button-container').children('.button').length).toEqual(1);
	});

	it('after the click startHandler should be invoked', () => {

		wrapper = shallow(
			<StartButton
				startHandler={props.startHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		wrapper.find('.start-button-container').children('.button').simulate('click');

		expect(props.startHandler).toHaveBeenCalled();

	});
});