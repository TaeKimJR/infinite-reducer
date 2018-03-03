import * as helpers from '../helpers';

describe('helpers', () => {
	describe('createInfiniteActionType', () => {
		test('should create a action type from the given key', () => {
			const key = 'TEST_KEY';

			expect(helpers.createInfiniteActionType(key)).toBe('INFINITE_ACTION_TYPE_TEST_KEY');
		});
	});
});