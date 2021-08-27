import useAppContext from "../../data/hook/useAppContext";
import Conteudo from "./Conteudo";
import MenuLateral from "./ManuLateral";
import TopBar from "./TopBar";

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

function Layout(props: LayoutProps) {
  const { theme } = useAppContext()

  return (
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
  )
}

export default Layout;