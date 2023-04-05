/// <reference types="react-scripts" />

interface Window {}

declare module "*.svg" {
  import * as React from "react"

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
