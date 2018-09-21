import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StartButton extends Component {

	static propTypes = {
		stopped: PropTypes.bool.isRequired,
		started: PropTypes.bool.isRequired,
		startHandler: PropTypes.func.isRequired
	};

	render() {
		const {started, stopped, startHandler} = this.props;

		return (!started || !stopped) && (started || stopped) ? null :
			(
				<div className="start-button-container">
					<div
						className="button start-button"
						onClick={startHandler}
					>
						Start
					</div>
				</div>
			);
	}
}

export default StartButton;
