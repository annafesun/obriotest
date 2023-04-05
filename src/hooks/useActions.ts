import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { UserActions } from "../store/reducers/user"

export const useActions = () => {
  const dispatch = useDispatch()

  const UserActs = bindActionCreators(UserActions, dispatch)

  return {
    UserActs,
  }
}
