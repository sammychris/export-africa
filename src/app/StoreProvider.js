'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store';
// import { Next13ProgressBar } from 'next13-progressbar';
import HeaderContainer from '@/containers/HeaderContainer';

export default function StoreProvider({ children, authData }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <HeaderContainer authData={authData} />
      {children}
      {/* <Next13ProgressBar height="4px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow /> */}
    </Provider>
  )
}