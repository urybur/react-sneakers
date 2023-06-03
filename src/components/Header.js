function Header() {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img className="header__logo mr-15" src="/img/logo.png" alt="" />
        <div className="header__title_inner">
          <h3 className="header__title text-uppercase">React Sneakers</h3>
          <p className="header__text">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="d-flex align-center mr-30">
          <img className="header__card mr-10" src="/img/card.svg" alt="" />
          <span className="">1205 руб.</span>
        </li>
        <li>
          <img className="header__user" src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
