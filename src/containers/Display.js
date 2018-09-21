import React, { Component } from 'react';
import {connect} from 'react-redux';
import {milliToTime} from '../service_functions';

export class Display extends Component {
	render() {
		return (
			<div className="display-container">
				{this.props.total}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	total: milliToTime(state.stopwatch.total)
});

export default connect(mapStateToProps)(Display);
