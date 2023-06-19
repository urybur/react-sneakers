import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://647e583eaf984710854b2ec7.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const onAddClickToCard = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => {
            setCartOpened(false);
          }}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" className="" alt="поиск кросовок" />
            <input className="search__input" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex justify-between flex-wrap">
          {items.map((item) => (
            <Card
              key={item.title + item.imageUrl}
              name={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={onAddClickToCard}
              onClickFavorite={() => console.log("Нажали в закладки", item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
