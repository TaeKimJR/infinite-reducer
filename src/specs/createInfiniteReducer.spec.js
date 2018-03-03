import createInfiniteReducer from '../createInfiniteReducer';

const infiniteActionCreator = (infiniteKey, reducerKey, payload) => ({
	type: `INFINITE_ACTION_TYPE_${infiniteKey}`,
	reducerKey,
	individualAction: {
		type: 'TEST_ACTION',
		payload,
	},
});

describe('createInfiniteReducer', () => {
	describe('infiniteReducer', () => {
		test('should wrap a reducer when given a key and the reducer', () => {
			const infiniteKey = 'INFINITE_KEY';
			const individualReducer = (state, action) => {
				switch (action.type) {
				    case 'TEST_ACTION':
				      return action.payload;
				    default:
				      return state;
				}
			};

			const infiniteReducer = createInfiniteReducer(infiniteKey, individualReducer);

			expect(typeof infiniteReducer).toBe('function');
		});
	});

	describe('reducer', () => {
		test('should handle infinite actions', () => {
			const infiniteKey = 'INFINITE_KEY';
			const individualReducer = (state, action) => {
				switch (action.type) {
				    case 'TEST_ACTION':
				      return action.payload;
				    default:
				      return state;
				}
			};

			const infiniteReducer = createInfiniteReducer(infiniteKey, individualReducer);

			const reducerKey = 'REDUCER_KEY';

			const reduced = infiniteReducer(undefined, infiniteActionCreator(infiniteKey, reducerKey, { foo: 'bar' }));

			expect(reduced).toEqual({
				REDUCER_KEY: { foo: 'bar' },
			});
		})
	});
});