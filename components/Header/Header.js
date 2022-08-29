import TopBar from "./TopBar/TopBar"
import MenuWeb from "./Menu/MenuWeb"

export default function Header() {
    return (
      <div className='header'>
  
          <TopBar/>
          <MenuWeb/>
      </div>
    )
  }