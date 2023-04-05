import { Box } from "@mui/material"
import { PropsWithChildren } from "react"
import Header from "./Page.header"

type Props = PropsWithChildren<{
  gradientBackground?: boolean
}>

const Page = ({ children, gradientBackground }: Props) => {
  return (
    <Box
      sx={[
        (theme) => ({
          minHeight: "100vh",
          px: 5,
          pb: 5,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          ...(gradientBackground && { background: theme.palette.gradients.linear.purple }),
        }),
      ]}
    >
      <Header gradientBackground={gradientBackground} />
      <Box
        sx={{
          maxWidth: "360px",
          width: "100%",
          m: "0 auto",
          color: `${gradientBackground ? "white.main" : "black.main"}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Page
