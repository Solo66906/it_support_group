import React from "react";
import ArrowRight from "../img/arrow_right.svg"

const styles = {
  p: {
    fontWeight: 400,
    fontSize: 60,
    lineHeight: 1.06667,
    width:600,
  },
  img: {
    marginRight:15,
  },
}

export default function HeaderSlider(){
  return (
    <div className="headerBackground_slider">
      <div className="wrapperDesctop">
        <p style={styles.p} className="white">Сантехника и мебель для ванной комнаты</p>
        <ul className="slider">
          <li><img style={styles.img} src={ArrowRight}/>О компании</li>
          <li><hr className="line"/></li>
          <li><img style={styles.img} src={ArrowRight}/>О продукции</li>
          <li><hr className="line"/></li>
          <li><img style={styles.img} src={ArrowRight}/>Каталог товаров</li>
        </ul>
      </div>
    </div>
  )
}