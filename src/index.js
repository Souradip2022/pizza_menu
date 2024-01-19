import React from "react";
import ReactDom from "react-dom/client"
import "./index.css"

const pizzaName = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return <div className="app">
    <Header/>
    <Menu/>
    <Footer/>
  </div>
}

function Header() {
  return <div>
    <h1>REACT PIZZA COMPANY</h1>
  </div>
}

function Menu() {
  // let a = pizzaName.map((pizza) => {
  //   return pizza;
  // })
  //console.log(a);

  const pizzaNum = pizzaName.length;
  console.log(pizzaNum);

  //return from if statement has higher priority than function return
  // if(pizzaNum === 0) {
  //   return <div>
  //   </div>
  // }

  return (
      <div>
        <main className="main">
          <div className="menu_centre">
            <div className="menu">
              <h2>OUR MENU</h2>
            </div>
          </div>

          <div>
            {(pizzaNum > 0) ? (
                <React.Fragment>
                  <p className="description">
                    Authentic Italian cuisine. 6 creative dishes to choose from our stone
                    oven, all organic, all delicious
                  </p>
                  <ul className="pizzaList">
                    {pizzaName.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
                  </ul>
                </React.Fragment>
            ) : <p className="description">
              We are currently working on our items. Until then wait :)
            </p>
            }
          </div>
        </main>
      </div>
  )
}

function Pizza({pizzaObj}) {
  return <li className={(pizzaObj.soldOut)? "sold" : null}>
    <div>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
    </div>
    <div>
      <h3>{pizzaObj.name}</h3>
      <p className="pDescription">{pizzaObj.ingredients}</p>
      <div className="price">{pizzaObj.price}</div>
    </div>
  </li>
}

function Footer() {
  let hour = new Date().getHours();
  console.log(hour)
  let openHour = 9;
  let closeHour = 22;
  /*if (hour >= openHour && hour < closeHour) {
    return <footer>
      <div>
        We are currently open
      </div>
      <button>Order</button>
    </footer>
  } else {
    return <footer>
      <div>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online
      </div>
    </footer>
  }*/

  return (
      <footer>
        {(hour >= openHour && hour < closeHour) ?
            <Order openHour={openHour} closeHour={closeHour}/> :
            <p>We are happy to welcome you between {openHour}:00 to {closeHour}:00 :) </p>
        }
      </footer>
  );
}

function Order({
                 openHour, closeHour
               }) {
  return (
      <div className="openHour">
        <div>
          <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online</p>
        </div>
        <button>Order</button>
      </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);

// console.log(typeof (React));
// console.log( (ReactDom));
// console.log(typeof (root));
//console.log( ReactDom.createRoot);
// console.log(root.render);
