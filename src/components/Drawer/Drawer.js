import styles from "./Drawer.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Drawer({ onClose, items = [] }) {
  return (
    <div className={cx("overlay")}>
      <div className={cx("root")}>
        <h2 className={cx("title")}>
          Корзина
          <img className={cx("cart_item_remove")} src="/img/remove.svg" alt="закрыть корзину" onClick={onClose} />
        </h2>
        <div className={cx("cart_items")}>
          {items.map((obj) => (
            <div key={obj.imageUrl + obj.name} className={cx("cart_item")}>
              <img className={cx("cart_item_img")} src={obj.imageUrl} alt={obj.name} />
              <div>
                <h5 className={cx("cart_item_title")}>{obj.name}</h5>
                <div className={cx("cart_item_price")}>{obj.price} руб.</div>
              </div>
              <img className={cx("cart_item_remove")} src="/img/remove.svg" alt="" />
            </div>
          ))}
        </div>
        <div className={cx("cart_total")}>
          <ul>
            <li className="d-flex mb-20">
              <span>Итого:</span>
              <div className={cx("dashed_line")}></div>
              <span>21 498 руб.</span>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div className={cx("dashed_line")}></div>
              <span>1074 руб.</span>
            </li>
          </ul>
          <button className="green__btn">
            Оформить заказ <img src="/img/arrow.svg" alt="Оформить заказ" className="green__btn_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
