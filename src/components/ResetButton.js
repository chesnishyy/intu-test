import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResetButton extends Component {

	static propTypes = {
		stopped: PropTypes.bool.isRequired,
		started: PropTypes.bool.isRequired,
		resetHandler: PropTypes.func.isRequired
	};

	render() {
		const {stopped, started, resetHandler} = this.props;

		return !(stopped && started) ? null : (
			<div className="reset-button-container">
				<div
					className="button reset-button"
					onClick={resetHandler}
				>
					Reset
				</div>
			</div>
		);
	}
}

export default ResetButton;