import { createInfiniteActionType } from './helpers';

const createInfiniteAction = (infiniteKey, individualAction) => {
  const infiniteActionType = createInfiniteActionType(infiniteKey);

  return reducerKey => (...individualActionArgs) => ({
    type: infiniteActionType,
    reducerKey,
    individualAction: individualAction(...individualActionArgs),
  });
};

export default createInfiniteAction;
