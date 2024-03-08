import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage } from '@/utils/localStorage';

const initialState = {
  currentStep: 1,
  formData: null,
  isSaving: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    nextStep(state) {
      if (state.currentStep < 4) { // Assuming two steps
        state.currentStep += 1; 
      }
    },
    previousStep(state) {
      if (state.currentStep > 1) { 
        state.currentStep -= 1; 
      }
    },
    updateFormData(state, action) {
      state.formData = action.payload.data;
    },
  },
});

export const { nextStep, previousStep, updateFormData } = onboardingSlice.actions;
export default onboardingSlice.reducer;
