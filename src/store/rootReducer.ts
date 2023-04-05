import { combineReducers } from "@reduxjs/toolkit"
//reducers
import { reducer as user } from "./reducers/user"

export default combineReducers({
  user,
})
