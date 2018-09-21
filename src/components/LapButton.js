import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LapButton extends Component {

	static propTypes = {
		stopped: PropTypes.bool.isRequired,
		started: PropTypes.bool.isRequired,
		lapHandler: PropTypes.func.isRequired
	};

	get isActiveClass() {
		const {started} = this.props;
		return started ? 'active': '';
	}

	render() {
		const {stopped, lapHandler} = this.props;

		return stopped ? null : (
			<div className={`lap-button-container ${this.isActiveClass}`}>
				<div
					className={`button lap-button ${this.isActiveClass}`}
					onClick={lapHandler}
				>
					Lap
				</div>
			</div>
		);
	}
}

export default LapButton;