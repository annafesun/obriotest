import { Box, Typography } from "@mui/material"
import Page from "shared/components/Page"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "store"
import { EMAIL } from "constants/routes"
import Button from "shared/components/Button"
import { Decisions } from "store/reducers/user/types"
import { ReactComponent as Hearts } from "assets/icons/hearts.svg"

const Decision = () => {
  const navigate = useNavigate()

  const { decision, zodiac } = useAppSelector((state) => state.user)

  const handleSave = () => {
    navigate(EMAIL)
  }

  return (
    <Page gradientBackground>
      <Hearts style={{ maxWidth: "100%", marginBottom: "47px" }} />
      {decision === Decisions.heart && (
        <Typography variant="h3" mb={12}>
          Based on our data, 49% of{" "}
          <Typography component="span" variant="h2" color="warning.main">
            {zodiac}
          </Typography>{" "}
          people also make decisions with their heart. But don&apos;t worry, we&apos;ll consider that while creating
          your guidance plan.
        </Typography>
      )}
      {decision === Decisions.head && (
        <Typography variant="h3" mb={12}>
          Based on our data, 39% of{" "}
          <Typography component="span" variant="h2" color="warning.main">
            {zodiac}
          </Typography>{" "}
          people also make decisions with their head. But don&apos;t worry, we&apos;ll consider that while creating your
          guidance plan.
        </Typography>
      )}
      {decision === Decisions.both && (
        <Typography variant="h3" mb={12}>
          Wonderful! Based on our data, only the top 17% of{" "}
          <Typography component="span" variant="h2" color="warning.main">
            {zodiac}
          </Typography>{" "}
          people make decisions with their heart and head. Using both in equal measure is the key to feeling harmonious
          in your relationships.
        </Typography>
      )}

      <Box sx={{ alignSelf: "stretch", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <Button smallText smallHeight sx={{ mb: 6 }} variant="outlined" fullWidth onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button
          smallText
          smallHeight
          sx={{ mb: 6 }}
          variant="contained"
          color="info"
          fullWidth
          onClick={() => handleSave()}
        >
          Next
        </Button>
      </Box>

      <Typography component="p" variant="h5" mt="auto" color="black.302">
        Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default Decision
