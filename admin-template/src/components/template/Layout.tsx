import Conteudo from "./Conteudo";
import MenuLateral from "./ManuLateral";
import TopBar from "./TopBar";

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

function Layout(props: LayoutProps) {
  return (
    <div>
      <MenuLateral />
      <TopBar title={props.title} subtitle={props.subtitle} />
      <Conteudo >
        {props.children}
      </Conteudo>
    </div>
  )
}

export default Layout;