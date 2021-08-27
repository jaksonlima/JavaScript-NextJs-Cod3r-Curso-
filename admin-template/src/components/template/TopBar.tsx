import useAppContext from "../../data/hook/useAppContext";
import AvatarUser from "./AvatarUser";
import BottomChangeTheme from "./BottomChangeTheme";
import Title from "./Title";

interface TopBarProps {
  title: string
  subtitle: string
  children?: any
}

function TopBar(props: TopBarProps) {
  const { theme, onChangeTheme } = useAppContext()

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <BottomChangeTheme theme={theme} onChangeTheme={onChangeTheme} />
        <AvatarUser className={`ml-3`} />
      </div>
    </div>
  )
}

export default TopBar;