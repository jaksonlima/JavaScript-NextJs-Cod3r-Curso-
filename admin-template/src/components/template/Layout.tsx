import useAppContext from "../../data/hook/useAppContext";
import Conteudo from "./Conteudo";
import MenuLateral from "./ManuLateral";
import TopBar from "./TopBar";
import ForceAuthentication from '../auth/ForceAuthentication'

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

function Layout(props: LayoutProps) {
  const { theme } = useAppContext()

  return (
    <ForceAuthentication>
      <div className={`
      ${theme}
      flex h-screen w-screen
      `}>
        <MenuLateral />
        <div className={`
        flex flex-col w-full p-7 
        bg-gray-300 dark:bg-gray-800
        `}
        >
          <TopBar title={props.title} subtitle={props.subtitle} />
          <Conteudo>
            {props.children}
          </Conteudo>
        </div>
      </div>
    </ForceAuthentication>
  )
}

export default Layout;