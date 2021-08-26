import Title from "./Title";

interface TopBarProps {
  title: string
  subtitle: string
  children?: any
}

function TopBar(props: TopBarProps) {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
      TopBar
    </div>
  )
}

export default TopBar;