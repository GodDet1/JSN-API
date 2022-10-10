import { configureStore } from '@reduxjs/toolkit';
import { SuperHeroDataAPI } from '../API middleware/SuperHeroDataAPI';
import superHeroReducer from '../Reducer/superHeroReducer';

const store = configureStore({
  reducer: {
    superHeroReducer,
    [SuperHeroDataAPI.reducerPath]: SuperHeroDataAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    SuperHeroDataAPI.middleware,
  ],
});

export default store;
