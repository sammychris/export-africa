import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/lib/features/auth/authSlice';
import exportersReducer from '@/lib/features/exporters/exportersSlice';
// import appConfigReducer from '.@/slices/appConfigSlice';
import onboardingReducer from '@/lib/features/onboarding/onboardingSlice';
import categoryReducer from '@/lib/features/categories/categorySlice';
import ProductsReducer from '@/lib/features/products/productsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      onboarding: onboardingReducer,
      exporters: exportersReducer,
      categories: categoryReducer,
      products: ProductsReducer,
      // appConfig: appConfigReducer,
    }
  })
}