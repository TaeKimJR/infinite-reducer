import * as R from 'ramda';
import { createInfiniteActionType } from './helpers';

const createInfiniteReducer = (infiniteKey, individualReducer) => {
  const infiniteActionType = createInfiniteActionType(infiniteKey);

  return (state = {}, action) => {
    if (!action) {
      return state;
    }

    const { type, reducerKey, individualAction } = action;

    const isInfiniteActionType = type === infiniteActionType;
    if (!isInfiniteActionType) {
      return state;
    }

    const prevState = state[reducerKey];
    const nextState = individualReducer(prevState, individualAction);

    return R.assoc(reducerKey, nextState, state);
  };
};

export default createInfiniteReducer;
