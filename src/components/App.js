import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const API = "http://localhost:3001/pizzas";

function App() {
  const [pizzas, setPizzas] = useState([]);

  // Initial collection of pizzas
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setPizzas);
  }, []);

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export default App;
