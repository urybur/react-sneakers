import styles from "./Card.module.scss";
import classNames from "classnames/bind";

function Card(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("card")}>
      <img className={cx("favorite")} src="/img/heart-empty.svg" alt="" />
      <img className={cx("img")} src={props.imageUrl} alt="" />
      <h5 className={cx("title")}>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <div className={cx("price")}>Цена:</div>
          <div className="fw-bold">{props.price} руб.</div>
        </div>
        <button className={cx("btn")} onClick={props.onClick}>
          <img className="" src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
