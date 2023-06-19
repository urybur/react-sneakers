import { useState } from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Card({ imageUrl, name, price, onClickFavorite, onPlus }) {
  const [isAdded, setisAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, name, price });
    setisAdded(!isAdded);
  };

  return (
    <div className={cx("root")}>
      <img className={cx("favorite")} src="/img/heart-empty.svg" alt="лайк кроссовок" onClick={onClickFavorite} />
      <img className={cx("img")} src={imageUrl} alt={name} />
      <h5 className={cx("title")}>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <div className={cx("price")}>Цена:</div>
          <div className="fw-bold">{price} руб.</div>
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
