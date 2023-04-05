import { configureStore } from "@reduxjs/toolkit"

import _reducer from "./rootReducer"
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"

const createStore = (reducer = _reducer) => {
  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  })

  return store
}

// creating store for redux Provider
const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store }
