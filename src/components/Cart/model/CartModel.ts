import { ICartProducts } from '../type/CartType';
import { createSlice } from '@reduxjs/toolkit';


const name = 'cart';


const initialState: ICartProducts = { products: [] };

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export default cartSlice;
export const { actions: cartActions } = cartSlice;
