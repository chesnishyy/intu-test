import React, { Component } from 'react';
import Display from './Display';
import ControlButtons from './ControlButtons';
import LapsList from './LapsList';

export class StopWatch extends Component {
	render() {
		return (
			<div className="stopwatch-container">
				<div className="stopwatch">
					<Display />

					<ControlButtons />

					<LapsList />
				</div>
			</div>
		);
	}
}

export default StopWatch;
