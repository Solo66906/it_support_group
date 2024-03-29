import React from "react";
import Logo from "../img/logo.svg"
import Phone from "../img/iphone.svg"
import Search from "../img/search.svg"
const styles = {
  p: {
    marginLeft: 26,
  },
}
export default function HeaderNav(){
  return (
    <header className="wrapperDesctop">
      <nav className="nav">
        <div className="nav">
          <img src={Logo}/>
          <p style={styles.p}>Разработано в Германии. Сделано в России.</p>
        </div>
        <div className="nav">
          <p className="mask"><img src={Phone}/>+7 (905) 543 23 45</p>
          <button className="search">
          <img src={Search}/>
          </button>
        </div>
      </nav>
    </header>
  )
}