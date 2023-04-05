import { SelectChangeEvent } from "@mui/material"
import { useActions } from "hooks/useActions"
import { useCallback, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "store"
import { daysObj } from "./constants"
import { DATABASE } from "constants/routes"
import { getZodiac } from "utils/getZodiac"

export const useBirthdate = () => {
  const {
    UserActs: { setUserInfo },
  } = useActions()
  const navigate = useNavigate()

  const { birthdate } = useAppSelector((state) => state.user)

  const [month, setMonth] = useState(birthdate?.getMonth() || 0)
  const [day, setDay] = useState(birthdate?.getDate() || 0)
  const [year, setYear] = useState(birthdate?.getFullYear() || 0)

  const days: any = useMemo(() => daysObj[month as keyof typeof daysObj], [month])

  const handlePickMonth = useCallback((event: SelectChangeEvent<number>) => {
    // @ts-ignore
    setMonth(event.target.value)
    setDay(0)
  }, [])

  const handlePickDay = useCallback((event: SelectChangeEvent<number>) => {
    // @ts-ignore
    setDay(event.target.value)
  }, [])

  const handlePickYear = useCallback((event: SelectChangeEvent<number>) => {
    // @ts-ignore
    setYear(event.target.value)
  }, [])

  const handleSave = useCallback(() => {
    const date = new Date(year, month, day)
    setUserInfo({ birthdate: date, zodiac: getZodiac(date.getMonth(), date.getDate()) })
    navigate(DATABASE)
  }, [setUserInfo])

  const isDisabled = !day || !year

  return {
    month,
    day,
    year,
    days,
    handlePickMonth,
    handlePickDay,
    handlePickYear,
    handleSave,
    isDisabled,
  }
}
