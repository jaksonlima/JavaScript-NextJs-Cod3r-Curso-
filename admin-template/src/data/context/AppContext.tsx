import { createContext, useState } from "react"

export type Theme = 'dark' | 'light'

interface ContextProps {
  theme?: Theme,
  onChangeTheme?: () => void
}

const AppContext = createContext<ContextProps>({})

export function AppProvider(props) {
  const [theme, setTheme] = useState<Theme>('dark')

  function onChangeTheme() {
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        onChangeTheme
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export const AppConsumer = AppContext.Consumer

export default AppContext
