import { Typography } from "@mui/material"
import Page from "shared/components/Page"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "store"
import { PARENT } from "constants/routes"
import Button from "shared/components/Button"
import { useActions } from "hooks/useActions"
import { WeddingStatus as WStatus } from "store/reducers/user/types"

const WeddingStatus = () => {
  const {
    UserActs: { setUserInfo },
  } = useActions()
  const navigate = useNavigate()

  const { weddingStatus } = useAppSelector((state) => state.user)

  const buttons = Object.values(WStatus)

  const handleSave = (status: WStatus) => {
    setUserInfo({ weddingStatus: status })
    navigate(PARENT)
  }

  return (
    <Page>
      <Typography sx={{ textAlign: "left" }} variant="h1" mb={9}>
        So we can get to know you better, tell us about your relationship status.
      </Typography>
      {buttons.map((value) => (
        <Button
          sx={{ mb: 6 }}
          key={value}
          variant="contained"
          color={value === weddingStatus ? "primary" : "secondary"}
          fullWidth
          onClick={() => handleSave(value)}
        >
          {value}
        </Button>
      ))}
      <Typography component="p" variant="h5" color="black.401" mt="auto">
        Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default WeddingStatus
