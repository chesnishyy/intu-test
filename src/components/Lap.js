import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {milliToTime} from '../service_functions';

class Lap extends Component {

	static propTypes = {
		lap: PropTypes.object.isRequired,
	};

	render() {
		const {lap} = this.props;
		return (
			<div className="lap">
				<div className="number">Lap {lap.number}</div>
				<div className="split">{milliToTime(lap.split)}</div>
				<div className="total">{milliToTime(lap.total)}</div>
			</div>
		);
	}
}

export default Lap;