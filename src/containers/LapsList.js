import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Lap from '../components/Lap';

export class LapsList extends Component {

	static propTypes = {
		laps_list: PropTypes.array.isRequired
	};

	render() {
		const {laps_list} = this.props;
		return (
			<div className="laps-list">
				<div className="lap">
					<div className="number">LAP NO.</div>
					<div className="split">SPLIT</div>
					<div className="total">TOTAL</div>
				</div>

				{laps_list && laps_list.map((lap, index) =>
					<Lap
						key={index}
						lap={lap}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {

	return {
		laps_list: [...state.stopwatch.laps].reverse()
	}
};

export default connect(mapStateToProps)(LapsList);
