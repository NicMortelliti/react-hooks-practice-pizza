import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const API = "http://localhost:3001/pizzas";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaEdit, setPizzaEdit] = useState([]);

  // Initial collection of pizzas
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setPizzas);
  }, []);

  function handleEditClick(id, topping, size, vegetarian) {
    setPizzaEdit({
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian,
    });
  }

  function handleSubmitClick(e) {
    e.preventDefault();
    const [topping, size, veg] = [
      e.target[0].value,
      e.target[1].value,
      e.target[2].checked,
    ];
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaEdit={pizzaEdit} onSubmitClick={handleSubmitClick} />
      <PizzaList pizzas={pizzas} onEditClick={handleEditClick} />
    </>
  );
}

export default App;
