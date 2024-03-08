import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  exporters: [],
  currentExporter: null, // For single exporter details
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};


export const exportersSlice = createSlice({
  name: 'exporters',
  initialState,
  reducers: {
    setCurrentExporter(state, action) {
      state.currentExporter = action.payload;
    },
    setExportersLoading(state) {
      state.status = 'loading';
      state.error = null; // Reset any previous error
    },
    setExportersSuccess(state, action) {
      state.status = 'succeeded';
      state.exporters = action.payload;
      state.error = null;  // Reset any previous error
    },
    setExportersFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload; // Store error message
    },
    // Reducers for handling data fetching, updates, etc.
  },
});

export const {
  setCurrentExporter, 
  setExportersLoading,
  setExportersSuccess,
  setExportersFailure, // Action creator for fetching exporters
} = exportersSlice.actions;

export default exportersSlice.reducer;
