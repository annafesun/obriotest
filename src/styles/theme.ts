import { createTheme } from "@mui/material"
import { colors, gradients } from "constants/colors"
import { typography } from "constants/typography"

export const themeOverrides = {
  palette: {
    gradients: gradients,
    background: {
      default: "#FFF0F0",
    },
    ...colors,
  },
  typography: typography,
  spacing: (factor: number) => [0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 80, 120, 160][factor],
  shape: {
    borderRadius: (factor: number) => [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26][factor] + "px",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::after, *::before": {
          boxSizing: "border-box",
        },
        "*::-webkit-scrollbar": {
          zIndex: 2000,
          width: "6px",
          "@media(max-width: 767.9px)": {
            display: "none",
          },
        },
        "*::-webkit-scrollbar-track": {
          background: "#000",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#333",
          borderRadius: "4px",
          "@media(max-width: 767.9px)": {
            background: "#000",
          },
        },
      },
    },
  },
}

export type CustomTheme = typeof theme
export type ThemeOverrides = typeof themeOverrides

export const theme = createTheme(themeOverrides, {})
