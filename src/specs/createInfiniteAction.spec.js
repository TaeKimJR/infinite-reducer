import createInfiniteAction from '../createInfiniteAction';

describe('createInfiniteAction', () => {
	describe('infiniteAction', () => {
		test('should wrap the action when given a key and the action', () => {
			const infiniteKey = 'INFINITE_KEY';
			const individualAction = payload => ({
				type: 'ACTION_TYPE',
				payload,
			});

			const infiniteAction = createInfiniteAction(infiniteKey, individualAction);

			expect(typeof infiniteAction).toBe('function');
		});
	});

	describe('actionCreator', () => {
		test('should take in a reducer key', () => {
			const infiniteKey = 'INFINITE_KEY';
			const individualAction = payload => ({
				type: 'ACTION_TYPE',
				payload,
			});

			const infiniteActionCreator = createInfiniteAction(infiniteKey, individualAction);

			const reducerKey = 'REDUCER_KEY';

			const actionCreator = infiniteActionCreator(reducerKey);

			expect(typeof actionCreator).toBe('function');
		});
	});

	describe('action', () => {
		test('should take in a reducer key', () => {
			const infiniteKey = 'INFINITE_KEY';
			const individualAction = payload => ({
				type: 'ACTION_TYPE',
				payload,
			});

			const infiniteActionCreator = createInfiniteAction(infiniteKey, individualAction);

			const reducerKey = 'REDUCER_KEY';

			const actionCreator = infiniteActionCreator(reducerKey);

			const payload = { foo: 'bar' };

			expect(actionCreator(payload)).toEqual({
				type: 'INFINITE_ACTION_TYPE_INFINITE_KEY',
				reducerKey: 'REDUCER_KEY',
				individualAction: {
					type: 'ACTION_TYPE',
					payload: {
						foo: 'bar',
					},
				},
			});
		});
	});
});