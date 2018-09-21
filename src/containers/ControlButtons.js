import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StartButton from '../components/StartButton';
import StopButton from '../components/StopButton';
import LapButton from '../components/LapButton';
import ResetButton from '../components/ResetButton';
import * as actions from '../actions/StopwatchActions';


export class ControlButtons extends Component {

	static propTypes = {
		startHandler: PropTypes.func.isRequired,
		resetHandler: PropTypes.func.isRequired,
		stopHandler: PropTypes.func.isRequired,
		lapHandler: PropTypes.func.isRequired,
		started: PropTypes.bool.isRequired,
		stopped: PropTypes.bool.isRequired
	};

	render() {
		const {startHandler, resetHandler, lapHandler, stopHandler, started, stopped} = this.props;

		return (
			<div className="control-buttons-container">
				<ResetButton
					resetHandler={resetHandler}
					stopped={stopped}
					started={started}
				/>

				<LapButton
					lapHandler={lapHandler}
					stopped={stopped}
					started={started}
				/>

				<StartButton
					startHandler={startHandler}
					stopped={stopped}
					started={started}
				/>

				<StopButton
					stopHandler={stopHandler}
					stopped={stopped}
					started={started}
				/>
			</div>
		);
	}
}

const mapsDispatchToProps = (dispatch) => {

	let interval_id = 0;

	return {
		startHandler: () => {
			dispatch(actions.startStopwatch());
			interval_id = setInterval(() => {
				dispatch(actions.setTotalTime())
			}, 80);
		},
		resetHandler: () => {
			clearInterval(interval_id);
			dispatch(actions.resetStopwatch());
		},
		stopHandler: () => {
			clearInterval(interval_id);
			dispatch(actions.stopStopwatch())
		},
		lapHandler: () => {
			dispatch(actions.setLap())
		}
	}
};

const mapStateToProps = (state) => ({
	started: state.stopwatch.started,
	stopped: state.stopwatch.stopped
});

export default connect(mapStateToProps, mapsDispatchToProps)(ControlButtons);
