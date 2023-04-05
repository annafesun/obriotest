import { Box, Typography } from "@mui/material"
import Page from "shared/components/Page"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "store"
import { DECISION } from "constants/routes"
import Button from "shared/components/Button"
import { useActions } from "hooks/useActions"
import { singleProblems, relationshipProblems, WeddingStatus, ParentStatus } from "store/reducers/user/types"

const SingleProblem = () => {
  const {
    UserActs: { setUserInfo },
  } = useActions()
  const navigate = useNavigate()

  const { gender, birthdate, problem, weddingStatus, parent } = useAppSelector((state) => state.user)

  const age = birthdate?.getFullYear() && new Date().getFullYear() - birthdate?.getFullYear()
  const problems = weddingStatus === WeddingStatus.single ? singleProblems : relationshipProblems

  const handleSave = (problem: string) => {
    setUserInfo({ problem })
    navigate(DECISION)
  }

  return (
    <Page>
      {weddingStatus === WeddingStatus.relationship && (
        <Typography sx={{ textAlign: "left" }} variant="h1" mb={9}>
          <Box component="span" sx={{ textTransform: "capitalize" }}>
            {gender}
          </Box>{" "}
          {age} {parent === ParentStatus.yes && "who have children"} need a slightly different approach to improve their
          relationship. Which statement best describes you?
        </Typography>
      )}
      {weddingStatus === WeddingStatus.single && (
        <Typography sx={{ textAlign: "left" }} variant="h1" mb={9}>
          Single{" "}
          <Box component="span" sx={{ textTransform: "capitalize" }}>
            {gender}{" "}
          </Box>
          {age} {parent === ParentStatus.yes && "who have children"} need a slightly different approach to find their
          perfect partner. But first, how did you feel in your last relationship?
        </Typography>
      )}

      {problems.map((pb, i) => (
        <Button
          smallText
          sx={{ mb: 6 }}
          key={pb}
          variant="contained"
          color={pb === problem ? "primary" : "secondary"}
          fullWidth
          onClick={() => handleSave(pb)}
        >
          {pb}
        </Button>
      ))}

      <Typography component="p" variant="h5" color="black.401" mt="auto">
        Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default SingleProblem
