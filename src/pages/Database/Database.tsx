import { Typography } from "@mui/material"
import Page from "shared/components/Page"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "store"
import { useEffect, useRef } from "react"
import { WEDDING_STATUS } from "constants/routes"

const REDIRECT_TIME = 3000

const Database = () => {
  const navigate = useNavigate()
  const ref = useRef<ReturnType<typeof setTimeout>>()

  const { gender, zodiac } = useAppSelector((state) => state.user)

  useEffect(() => {
    ref.current = setTimeout(() => {
      navigate(WEDDING_STATUS)
    }, REDIRECT_TIME)

    return () => {
      if (ref.current) {
        clearTimeout(ref.current)
      }
    }
  }, [navigate])

  return (
    <Page gradientBackground>
      <Typography variant="h2" mb={4}>
        We&apos;ve helped 2,865,756* other{" "}
        <Typography component="span" variant="h2" color="warning.main">
          {zodiac}
        </Typography>{" "}
        {gender} to find their perfect partner and we can&apos;t wait to help you too!
      </Typography>
      <Typography component="p" variant="h4" mb="100px" color="purple.200">
        *as of 24 February 2023
      </Typography>
      <Typography component="p" variant="secondH4" mb={11}>
        Connecting to database...
      </Typography>
      <Typography component="p" variant="h5" mt="auto" color="black.302">
        Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default Database
