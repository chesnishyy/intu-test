import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {ControlButtons} from '../../containers/ControlButtons'

Enzyme.configure({ adapter: new Adapter() })

let wrapper;
const props = {
	startHandler: jest.fn(),
	resetHandler: jest.fn(),
	stopHandler: jest.fn(),
	lapHandler: jest.fn(),
	started: [false, true],
	stopped: [false, true]
};

describe('ControlButtons - Shallow Render REACT COMPONENTS', () => {

	it('should render itself', () => {
		wrapper = shallow(
			<ControlButtons
				startHandler={props.lapHandler}
				resetHandler={props.lapHandler}
				stopHandler={props.lapHandler}
				lapHandler={props.lapHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.is('.control-buttons-container')).toEqual(true);

		expect(wrapper.find('.control-buttons-container').children().length).toEqual(4);
	});

	it('what child render null with started=false, stopped=false', () => {
		wrapper = shallow(
			<ControlButtons
				startHandler={props.lapHandler}
				resetHandler={props.lapHandler}
				stopHandler={props.lapHandler}
				lapHandler={props.lapHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.find('StartButton').shallow().isEmptyRender()).toEqual(false);

		expect(wrapper.find('LapButton').shallow().isEmptyRender()).toEqual(false);

		expect(wrapper.find('StopButton').shallow().isEmptyRender()).toEqual(true);

		expect(wrapper.find('ResetButton').shallow().isEmptyRender()).toEqual(true);
	});

	it('what child render null with started=true, stopped=true', () => {
		wrapper = shallow(
			<ControlButtons
				startHandler={props.lapHandler}
				resetHandler={props.lapHandler}
				stopHandler={props.lapHandler}
				lapHandler={props.lapHandler}
				stopped={props.stopped[1]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.find('StartButton').shallow().isEmptyRender()).toEqual(false);

		expect(wrapper.find('LapButton').shallow().isEmptyRender()).toEqual(true);

		expect(wrapper.find('StopButton').shallow().isEmptyRender()).toEqual(true);

		expect(wrapper.find('ResetButton').shallow().isEmptyRender()).toEqual(false);
	});

	it('what child render null with started=true, stopped=false', () => {
		wrapper = shallow(
			<ControlButtons
				startHandler={props.lapHandler}
				resetHandler={props.lapHandler}
				stopHandler={props.lapHandler}
				lapHandler={props.lapHandler}
				stopped={props.stopped[0]}
				started={props.started[1]}
			/>
		);

		expect(wrapper.find('StartButton').shallow().isEmptyRender()).toEqual(true);

		expect(wrapper.find('LapButton').shallow().isEmptyRender()).toEqual(false);

		expect(wrapper.find('StopButton').shallow().isEmptyRender()).toEqual(false);

		expect(wrapper.find('ResetButton').shallow().isEmptyRender()).toEqual(true);
	});

	it('its child has props which was thrown', () => {
		wrapper = shallow(
			<ControlButtons
				startHandler={props.lapHandler}
				resetHandler={props.lapHandler}
				stopHandler={props.lapHandler}
				lapHandler={props.lapHandler}
				stopped={props.stopped[0]}
				started={props.started[0]}
			/>
		);

		expect(wrapper.find('LapButton').props().started).toEqual(props.started[0]);

		expect(wrapper.find('LapButton').props().stopped).toEqual(props.stopped[0]);

		expect(wrapper.find('StartButton').props().started).toEqual(props.started[0]);

		expect(wrapper.find('StartButton').props().stopped).toEqual(props.stopped[0]);

		expect(wrapper.find('StopButton').props().started).toEqual(props.started[0]);

		expect(wrapper.find('StopButton').props().stopped).toEqual(props.stopped[0]);

		expect(wrapper.find('ResetButton').props().started).toEqual(props.started[0]);

		expect(wrapper.find('ResetButton').props().stopped).toEqual(props.stopped[0]);
	})

});