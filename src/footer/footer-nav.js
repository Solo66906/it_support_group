import React from "react";
import Logo from "../img/logo.svg"
import ArrowRight from "../img/arrow_right.svg"
import Mail from "../img/mail.svg"
import phone from "../img/iphoneFooter.svg"
import instagram from "../img/instagram.svg"

const styles = {
  img: {
    marginRight: 12,
  },
  li: {
    marginBottom: 20,
  },
  p: {
    marginBottom: 20,
  },
}

export default function FooterBtn(){
  return (
    <div className="footer-nav wrapperDesctop">
      <div className="footer-top">
        <img src={Logo}/>
        <div className="navigation">
          <ul>
            <li style={styles.li}><img src={ArrowRight} style={styles.img}/>О компании</li>
            <li style={styles.li}><img src={ArrowRight} style={styles.img}/>Сотрудничество</li>
            <li><img src={ArrowRight} style={styles.img}/>Покупателям</li>
          </ul>
          <ul>
            <li style={styles.li}><img src={ArrowRight} style={styles.img}/>Где купить</li>
            <li style={styles.li}><img src={ArrowRight} style={styles.img}/>Сервисное обслуживание</li>
            <li><img src={ArrowRight} style={styles.img}/>Контакты</li>
          </ul>
        </div>
        <div className="FAQ">
          <p style={styles.p}>Есть вопросы?</p>
          <p style={styles.p} className="mask"><img className="footerImg" src={Mail}/>hello@orangemixers.ru</p>
          <p className="mask"><img className="footerImg" src={phone}/>+7 (495) 543 23 45</p>
        </div>
        <div className="social">
          <p style={styles.p}>Мы в соцсетях</p>
          <img src={instagram}/>
        </div>
      </div>
    </div>
  )
}