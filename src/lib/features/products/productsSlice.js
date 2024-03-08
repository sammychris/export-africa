import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  currentProduct: null, // For single product details
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCurrentProduct(state, action) {
      state.currentProduct = action.payload.data;
    },
    setProductsLoading(state) {
      state.status = 'loading';
      state.error = null; // Reset any previous error
    },
    setProductsSuccess(state, action) {
      state.status = 'succeeded';
      state.products = action.payload;
      state.error = null;  // Reset any previous error
    },
    setUpdateProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex((product) => product.id === action.payload.id);
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex] = action.payload;
        state.status = 'succeeded'; // Consider setting 'idle' if no other actions follow
        state.error = null; 
      }
    },
    setAddProduct: (state, action) => {
      state.products.push(action.payload);
      state.status = 'succeeded'; // Or 'idle' if no further actions follow
      state.error = null; 
    },
    setProductsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload; // Store error message
    },
    // Reducers for handling data fetching, updates, etc.
  },
});

export const {
  setCurrentProduct, 
  setProductsLoading,
  setProductsSuccess,
  setUpdateProduct,
  setAddProduct,
  setProductsFailure, // Action creator for fetching products
} = productsSlice.actions;

export default productsSlice.reducer;
