import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserState } from "./types"

export const INITIAL_STATE: UserState = {}

const { actions, reducer } = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload }
    },
  },
})

export { actions as UserActions, reducer }
