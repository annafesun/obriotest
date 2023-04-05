import { Button as MUIButton, styled } from "@mui/material"
import { shouldForwardProp } from "styles/helpers"

type ButtonCustomProps = { smallText?: boolean; smallHeight?: boolean }

const Button = styled(MUIButton, {
  shouldForwardProp: (prop) => shouldForwardProp<ButtonCustomProps>(["smallText", "smallHeight"], prop),
})<ButtonCustomProps>(
  ({
    theme: {
      palette,
      spacing,
      shape: { borderRadius },
      typography: { h2, h4 },
    },
    smallText,
    smallHeight,
  }) => ({
    "&.MuiButton-root": {
      ...h2,
      ...(smallText && h4),
      height: "64px",
      fontWeight: 400,
      padding: spacing(4),
      borderRadius: borderRadius(8),
      textTransform: "capitalize",
      transition: "all .3s ease-in-out",
      ...(smallHeight && { height: "49px" }),
      "&:hover": {
        opacity: 0.9,
      },
      "&.Mui-disabled": {
        color: palette.white.main,
        opacity: 0.6,
      },
    },
    "&.MuiButton-contained": {
      background: palette.gradients.linear.purple,
      color: palette.white.main,
      "&.Mui-disabled": {
        color: palette.white.main,
      },
    },
    "&.MuiButton-containedSecondary": {
      background: palette.lightblue.main,
      color: palette.black.main,
      "&.Mui-disabled": {
        color: palette.black.main,
      },
    },
    "&.MuiButton-containedInfo": {
      background: palette.white.secondary,
      color: palette.purple.main,
      "&.Mui-disabled": {
        color: palette.purple.main,
      },
    },
    "&.MuiButton-outlined": {
      color: palette.white.secondary,
      borderColor: palette.white.secondary,
      "&.Mui-disabled": {
        color: palette.white.secondary,
      },
    },
  })
)

export default Button
