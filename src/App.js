import Card from "./components/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";

const arr = [
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999", imageUrl: "img/sneakers/1.jpg" },
  { title: "Мужские Кроссовки Nike Air Max 270", price: "12 999", imageUrl: "img/sneakers/2.jpg" },
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499", imageUrl: "img/sneakers/3.jpg" },
  { title: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999", imageUrl: "img/sneakers/4.jpg" },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" className="" alt="поиск кросовок" />
            <input className="search__input" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex justify-between">
          {arr.map((item) => (
            <Card
              key={item.title + item.imageUrl}
              name={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClick={() => console.log(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
