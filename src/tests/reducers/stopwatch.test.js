import {stopwatch, initialState} from '../../reducers/stopwatch';
import * as types from '../../constants/ActionTypes';

const start_stopwatch_result = stopwatch(undefined, {type: types.START_STOPWATCH});

describe('stopwatch reducer', () => {

	it('should return the initial state', () => {
		expect(stopwatch(undefined, {})).toEqual(initialState)
	});

	it('RESET_STOPWATCH should return the initial state', () => {
		expect(stopwatch(undefined, {
			type: types.RESET_STOPWATCH
		})).toEqual(initialState)
	});

	it('START_STOPWATCH', () => {
		const reducer_result = stopwatch(undefined, {type: types.START_STOPWATCH});

		expect(reducer_result.started).toEqual(true);

		expect(reducer_result.stopped).toEqual(false);

		expect(reducer_result.laps.length).toBeGreaterThan(0);

		expect(reducer_result.start_time).toBeGreaterThan(0);
	});

	it('SET_TOTAL_TIME', () => {
		const reducer_result = stopwatch(start_stopwatch_result, {type: types.SET_TOTAL_TIME});

		expect(reducer_result.total).toBeGreaterThan(0);
	});

	it('STOP_STOPWATCH', () => {
		const reducer_result = stopwatch(undefined, {type: types.STOP_STOPWATCH});

		expect(reducer_result.stopped).toEqual(true);

		expect(reducer_result.stop_time).toBeGreaterThan(0);
	});

	it('SET_LAP', () => {
		const reducer_result = stopwatch(start_stopwatch_result, {type: types.SET_LAP});
		const laps = reducer_result.laps;

		expect(laps.length).toEqual(start_stopwatch_result.laps.length + 1);

		expect(laps[laps.length - 2].lap_time).toBeGreaterThan(0);

		expect(laps[laps.length - 1].lap_time).toEqual(0);

	});
});