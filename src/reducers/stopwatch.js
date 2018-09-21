import {
	START_STOPWATCH,
	SET_TOTAL_TIME,
	RESET_STOPWATCH,
	STOP_STOPWATCH,
	SET_LAP
} from '../constants/ActionTypes';

export const initialState = {
	zero_time: 0,
	start_time: 0,
	stop_time: 0,
	continue_time: 0,
	total: 0,
	laps: [],
	started: false,
	stopped: false
};

export const stopwatch = (state = initialState, action) => {
	switch (action.type) {

		case START_STOPWATCH:
			const new_laps = [...state.laps];
			if (state.laps.length === 0) {
				new_laps.push({
					total: Date.now() - state.start_time,
					split: Date.now() - state.start_time,
					number: 1,
					lap_time: 0
				});
			}
			return {
				...state,
				...{
					start_time: state.start_time + Date.now() - state.stop_time,
					started: true,
					stopped: false,
					laps: new_laps
				}
			};

		case SET_TOTAL_TIME:
			const total_time = Date.now() - state.start_time;
			const new_arr = [...state.laps];
			new_arr[new_arr.length - 1].total = total_time;
			new_arr[new_arr.length - 1].split = total_time - (new_arr[new_arr.length - 2] ? new_arr[new_arr.length - 2].lap_time : 0);
			return {
				...state,
				...{
					total: total_time,
					laps: new_arr
				}
			};

		case RESET_STOPWATCH:
			return initialState;

		case STOP_STOPWATCH:
			return {
				...state,
				...{
					stop_time: Date.now(),
					stopped: true
				}
			};

		case SET_LAP:
			const new_arr1 = [...state.laps];
			new_arr1[new_arr1.length - 1].lap_time = Date.now() - state.start_time;
			new_arr1.push({
				number: state.laps.length + 1,
				lap_time: 0
			});

			return {
				...state,
				...{
					laps: new_arr1
				}
			};

		default:
			return state;
	}
};