import { breakpoints } from "constants/breakpoints"
import { gradients } from "constants/colors"
import { typography } from "constants/typography"

export type Gradients = typeof gradients
export type Breakpoints = keyof typeof breakpoints
export type Typography = typeof typography
export type TypographyVariants = keyof typeof typography
