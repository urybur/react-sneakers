import styles from "./Drawer.module.scss";
import classNames from "classnames/bind";

function Drawer() {
  const cx = classNames.bind(styles);
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className={cx("drawer")}>
        <h2 className={cx("drawer__title")}>
          Корзина
          <img className={cx("cart__item_remove")} src="/img/remove.svg" alt="" />
        </h2>

        <div className={cx("cart__items")}>
          <div className={cx("cart__item")}>
            <img className={cx("cart__item_img")} src="/img/sneakers/1.jpg" alt="" />
            <div>
              <h5 className={cx("cart__item_title")}>Мужские Кроссовки Nike Air Max 270</h5>
              <div className={cx("cart__item_price")}>12 905 руб.</div>
            </div>
            <img className={cx("cart__item_remove")} src="/img/remove.svg" alt="" />
          </div>
        </div>
        <div className={cx("cart__total")}>
          <ul>
            <li className="d-flex mb-20">
              <span>Итого:</span>
              <div className={cx("dashed__line")}></div>
              <span>21 498 руб.</span>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div className={cx("dashed__line")}></div>
              <span>1074 руб.</span>
            </li>
          </ul>
          <button className="green__btn">
            Оформить заказ <img src="/img/arrow.svg" alt="" className="green__btn_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
