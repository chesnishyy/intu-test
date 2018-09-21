import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StopButton extends Component {

	static propTypes = {
		stopped: PropTypes.bool.isRequired,
		started: PropTypes.bool.isRequired,
		stopHandler: PropTypes.func.isRequired
	};

	render() {
		const {stopHandler, started, stopped} = this.props;
		return !started || stopped ? null : (
			<div className="stop-button-container">
				<div
					className="button stop-button"
					onClick={stopHandler}
				>
					Stop
				</div>
			</div>
		);
	}
}

export default StopButton;
