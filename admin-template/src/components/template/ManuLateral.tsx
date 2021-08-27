import router from 'next/router'

import { IconAdJustments, IconBell, IconExit, IconHome } from "../Icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface MenuLateralProps {
  children?: any
}

function MenuLateral(props: MenuLateralProps) {
  return (
    <aside className={`
    flex flex-col 
    bg-gray-200 text-gray-700
    dark:bg-gray-900 
    `}>
      <div className={`
        flex items-center justify-center
        bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Inicio" icone={IconHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconAdJustments} />
        <MenuItem url="/notificacoes" texto="Notificaçoes" icone={IconBell} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconExit}
          className={`
            text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white dark:hover:text-white
          `}
          onClick={(props) => {
            router.push('/autenticacao')
          }}
        />
      </ul>
    </aside>
  )
}

export default MenuLateral;