import * as types from '../constants/ActionTypes';

export const setTotalTime = () => ({
	type: types.SET_TOTAL_TIME
});

export const startStopwatch = () => ({
	type: types.START_STOPWATCH
});

export const resetStopwatch = () => ({
	type: types.RESET_STOPWATCH
});

export const stopStopwatch = () => ({
	type: types.STOP_STOPWATCH
});

export const setLap = () => ({
	type: types.SET_LAP
});

