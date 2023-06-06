import styles from "./Header.module.css";
import classNames from "classnames/bind";

function Header(props) {
  const cx = classNames.bind(styles);
  return (
    <header className={cx("header")}>
      <div className="d-flex align-center">
        <img className={cx("logo")} src="/img/logo.png" alt="Логотип Реакт кроссовки" />
        <div>
          <h3 className={cx("title")}>React Sneakers</h3>
          <p className="text">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li onClick={props.onClickCart} className="d-flex align-center mr-30 cu-p">
          <img className="mr-10" src="/img/cart.svg" alt="корзина" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="личный кабинет" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
