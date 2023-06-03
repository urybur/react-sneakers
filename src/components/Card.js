function Card() {
  return (
    <div className="card">
      <img className="favorite" src="/img/heart-empty.svg" alt="" />
      <img className="card__img" src="/img/sneakers/1.jpg" alt="" />
      <h5 className="card__title">Мужские Кроссовки Nike Air Max 270</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <div className="card__price">Цена:</div>
          <div className="fw-bold">12 905 руб.</div>
        </div>
        <button className="card__btn">
          <img className="" src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
