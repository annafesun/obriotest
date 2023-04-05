import { Box, Link } from "@mui/material"
import { breakpoints } from "constants/breakpoints"
import { ReactComponent as ChevronBlack } from "assets/icons/chevron_black.svg"
import { ReactComponent as ChevronWhite } from "assets/icons/chevron_white.svg"
import { ReactComponent as LogoWhite } from "assets/icons/logo_white.svg"
import { ReactComponent as LogoBlack } from "assets/icons/logo_black.svg"
import { useNavigate } from "react-router-dom"
import { memo } from "react"

type Props = { gradientBackground?: boolean }

const Header = ({ gradientBackground }: Props) => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        py: 6,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        maxWidth: breakpoints.md,
        m: "0 auto",
        width: "100%",
      }}
    >
      <Box>
        {gradientBackground ? (
          <Link sx={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
            <ChevronWhite />
          </Link>
        ) : (
          <Link sx={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
            <ChevronBlack />
          </Link>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        {gradientBackground ? <LogoWhite /> : <LogoBlack />}
      </Box>
    </Box>
  )
}

export default memo(Header)
