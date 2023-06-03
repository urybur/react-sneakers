function Drawer() {
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className="drawer">
        <h2 className="drawer__title d-flex justify-between ">
          Корзина
          <img className="cart__item_remove cup-p" src="/img/remove.svg" alt="" />
        </h2>

        <div className="cart__items">
          <div className="cart__item">
            <img className="cart__item_img" src="/img/sneakers/1.jpg" alt="" />
            <div>
              <h5 className="cart__item_title mb-5">Мужские Кроссовки Nike Air Max 270</h5>
              <div className="cart__item_price fw-bold">12 905 руб.</div>
            </div>
            <img className="cart__item_remove" src="/img/remove.svg" alt="" />
          </div>
          <div className="cart__item">
            <img className="cart__item_img" src="/img/sneakers/1.jpg" alt="" />
            <div>
              <h5 className="cart__item_title mb-5">Мужские Кроссовки Nike Air Max 270</h5>
              <div className="cart__item_price fw-bold">12 905 руб.</div>
            </div>
            <img className="cart__item_remove" src="/img/remove.svg" alt="" />
          </div>
        </div>
        <div className="cart__total">
          <ul>
            <li className="d-flex mb-20">
              <span>Итого:</span>
              <div className="dashed__line"></div>
              <span>21 498 руб.</span>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div className="dashed__line"></div>
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
