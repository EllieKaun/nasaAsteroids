import { requester } from '../requester';
import asteroidListSlice from '../components/AsteroidList/model/AsteroidListModel';
import cartSlice from '../components/Cart/model/CartModel';
import { configureStore } from '@reduxjs/toolkit';


export function createReduxStore() {

  return configureStore({
    reducer: {
      asteroidList: asteroidListSlice.reducer,
      cart: cartSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: { extraArgument: requester } }),
  });
}

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
