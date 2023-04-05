import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { store } from "../store"
import { ThemeProvider } from "@mui/system"
import { theme } from "styles/theme"

type Props = PropsWithChildren

const ProviderWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
}

export default ProviderWrapper
