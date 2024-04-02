import React from "react";
import ecolog from "../../img/ecolog.svg";
import production from "../../img/production.svg";
import O from "../../img/О.svg"

const styles = {
  img: {
    height: 53,
  },
  p: {
    marginTop: 24,
  },
  div: {
    marginTop: 36,
  }
}

export default function Info(){
  return (
    <div className="info">
      <div className="wrapperDesctop">
        <div className="Flex">
          <div className="text">
            <div className="Heading">
              <img src={O} className="float" style={styles.img}/>
                <div><span className="Orange">range</span> – немецкая торговая марка. Главный офис и основное производство<br/> расположены в Германии. Производим смесители,  душевые кабины,</div>
            </div>
            ванны и мебель для ванных комнат.
              <p style={styles.p}>Мы предлагаем качественную продукцию немецкого производства, которая<br/>полностью адаптирована к реалиям российскиого рынка.</p>
          </div>
          <div className="right">
            <div className="Flex">
              <img className="info_logo" src={production}/>
              <div className="Info_text">
                <h3 className="info_left">Cобственное производство</h3>
                Выский уровнень технологий позволяет гарантировать качество продукции на протяжении 10 лет
              </div>
            </div>
            <div className="Flex" style={styles.div}>
              <img className="info_logo" src={ecolog}/>
              <div className="Info_text">
                <h3 className="info_left">Экологичность и доступность</h3>
                Уникальный состав сплава делает продукцию Orange безопасной для потребителя
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}