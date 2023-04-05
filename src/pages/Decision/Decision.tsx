import { Typography } from "@mui/material"
import Page from "shared/components/Page"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "store"
import { ANSWER } from "constants/routes"
import Button from "shared/components/Button"
import { useActions } from "hooks/useActions"
import { Decisions } from "store/reducers/user/types"

const Decision = () => {
  const {
    UserActs: { setUserInfo },
  } = useActions()
  const navigate = useNavigate()

  const { decision } = useAppSelector((state) => state.user)

  const buttons = Object.values(Decisions)

  const handleSave = (decision: Decisions) => {
    setUserInfo({ decision })
    navigate(ANSWER)
  }

  return (
    <Page>
      <Typography sx={{ textAlign: "left" }} variant="h1" mb={9}>
        Do you make decisions with your head or your heart?
      </Typography>

      {buttons.map((b) => (
        <Button
          smallText
          sx={{ mb: 6 }}
          key={b}
          variant="contained"
          color={decision === b ? "primary" : "secondary"}
          fullWidth
          onClick={() => handleSave(b)}
        >
          {b}
        </Button>
      ))}
      <Typography component="p" variant="h5" color="black.401" mt="auto">
        Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default Decision
