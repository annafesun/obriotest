import { Typography } from "@mui/material"
import Page from "shared/components/Page/Page"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "store"
import { PROBLEMS } from "constants/routes"
import Button from "shared/components/Button"
import { useActions } from "hooks/useActions"
import { ParentStatus } from "store/reducers/user/types"

const Parent = () => {
  const {
    UserActs: { setUserInfo },
  } = useActions()
  const navigate = useNavigate()

  const { parent } = useAppSelector((state) => state.user)

  const buttons = Object.values(ParentStatus)

  const handleSave = (areYouParent: ParentStatus) => {
    setUserInfo({ parent: areYouParent })
    navigate(PROBLEMS)
  }

  return (
    <Page>
      <Typography sx={{ textAlign: "left" }} variant="h1" mb={9}>
        Are you a single parent?
      </Typography>
      {buttons.map((value) => (
        <Button
          sx={{ mb: 6 }}
          key={value}
          variant="contained"
          color={value === parent ? "primary" : "secondary"}
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

export default Parent
