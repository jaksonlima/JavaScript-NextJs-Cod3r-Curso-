import { createContext, useEffect, useState } from "react"

export enum Theme {
  TYPE = 'theme',
  DARK = 'dark',
  LIGT = 'light'
}

function findThemeToValue(theme: string): Theme {
  for (let themeKey of Object.keys(Theme)) {
    const themeEnum: Theme = Theme[themeKey]
    if (themeEnum === theme) {
      return theme;
    }
  }
}

interface ContextProps {
  theme?: Theme,
  onChangeTheme?: () => void
}

const AppContext = createContext<ContextProps>({})

export function AppProvider(props) {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)

  useEffect(() => {
    let themeCookie = localStorage.getItem(Theme.TYPE)

    if (themeCookie) {
      setTheme(findThemeToValue(themeCookie))
    }
  }, [])

  function onChangeTheme() {
    const findTheme = theme === Theme.DARK ? Theme.LIGT : Theme.DARK
    localStorage.setItem(Theme.TYPE, findTheme)
    setTheme(findTheme)
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
