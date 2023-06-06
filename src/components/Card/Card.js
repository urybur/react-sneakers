import { useState } from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";

function Card(props) {
  const [isAdded, setisAdded] = useState(false);

  const onClickPlus = () => {
    setisAdded(!isAdded);
  };
  const cx = classNames.bind(styles);
  return (
    <div className={cx("card")}>
      <img className={cx("favorite")} src="/img/heart-empty.svg" alt="лайк кроссовок" />
      <img className={cx("img")} src={props.imageUrl} alt={props.name} />
      <h5 className={cx("title")}>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <div className={cx("price")}>Цена:</div>
          <div className="fw-bold">{props.price} руб.</div>
        </div>
        <img
          className={cx("btn")}
          src={isAdded ? "/img/check.svg" : "/img/plus.svg"}
          alt="добавить кроссовки"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
