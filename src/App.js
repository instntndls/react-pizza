import logo from './logo.svg';
import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function PizzaRender(amount) {
    const arr = [];
    for (let i = 0; i < amount; i++) {
        arr.push(<PizzaBlock/>)
    }
    return arr
}


function App() {
  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {PizzaRender(10)}
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
