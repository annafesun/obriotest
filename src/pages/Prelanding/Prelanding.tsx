import { Box, Button, Link, Typography } from "@mui/material"
import { ReactComponent as Male } from "assets/icons/male.svg"
import { ReactComponent as Female } from "assets/icons/female.svg"
import { ReactComponent as WhiteChevron } from "assets/icons/chevron_white.svg"
import Page from "shared/components/Page"
import { Gender } from "store/reducers/user/types"
import { colors, gradients } from "constants/colors"
import { useActions } from "hooks/useActions"
import { useNavigate } from "react-router-dom"
import { BIRTHDATE } from "constants/routes"

const Prelanding = () => {
  const {
    UserActs: { setUserInfo },
  } = useActions()
  const navigate = useNavigate()

  const buttons = [
    { value: Gender.male, Icon: Male, background: colors.purple[400] },
    { value: Gender.female, Icon: Female, background: gradients.linear.pink },
  ]

  const handleChooseGender = (gender: Gender) => {
    setUserInfo({ gender })
    navigate(BIRTHDATE)
  }

  return (
    <Page>
      <Typography variant="h1" mb={6}>
        Understand Yourself and Improve Relationships With Astrology
      </Typography>
      <Typography component="p" variant="secondH4" mb={11} color="black.400">
        1-Minute Personal Assessment
      </Typography>
      <Typography component="p" variant="secondH3" mb={11} color="black.400">
        Select your gender:
      </Typography>

      <Box sx={{ px: 7, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", mb: "64px" }}>
        {buttons.map(({ value, background, Icon }) => (
          <Button
            onClick={() => handleChooseGender(value)}
            sx={{ display: "block", p: 0, flex: "0 0 48%", borderRadius: "0 0 16px 16px", overflow: "hidden" }}
            key={value}
          >
            <Icon style={{ maxWidth: "100%", height: "160px" }} />
            <Box
              sx={[
                (theme) => ({
                  ...theme.typography.secondH2,
                  background,
                  color: "white.main",
                  textTransform: "capitalize",
                  py: 3,
                  pl: 5,
                  pr: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: "-7px",
                }),
              ]}
            >
              <Box>{value}</Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transform: "rotate(180deg)",
                }}
              >
                <WhiteChevron />
              </Box>
            </Box>
          </Button>
        ))}
      </Box>

      <Typography variant="h5" mb={4} mt="auto" color="black.401">
        By continuing I agree with{" "}
        <Link sx={{ cursor: "pointer" }} color="black.401">
          Privacy policy
        </Link>{" "}
        and{" "}
        <Link sx={{ cursor: "pointer" }} color="black.401">
          Terms of use
        </Link>
        .
      </Typography>
      <Typography variant="h5" color="black.401">
        Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default Prelanding
