import { requester } from '../requester';
import asteroidListSlice from '../components/AsteroidList/model/AsteroidListModel';
import { configureStore } from '@reduxjs/toolkit';


export function createReduxStore() {

  return configureStore({
    reducer: { asteroidList: asteroidListSlice.reducer },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: { extraArgument: requester } }),
  });
}

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
