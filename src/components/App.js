import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const API = "http://localhost:3001/pizzas";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [vegState, setVegState] = useState("");
  const [toppingState, setToppingState] = useState("");
  const [sizeState, setSizeState] = useState();
  const [idState, setIdState] = useState("");

  // Initial collection of pizzas
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setPizzas);
  }, []);

  // Update states upon click of "Edit Pizza" button
  function handleEditClick(id, topping, size, veg) {
    setIdState(id);
    setVegState(veg);
    setToppingState(topping);
    setSizeState(size);
  }

  // Update backend then call frontend update function upon form submission
  function handleSubmitClick(e) {
    e.preventDefault();

    // Update backend pizza list
    console.log(`${API}/${idState}`);
    fetch(`${API}/${idState}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topping: toppingState,
        size: sizeState,
        vegetarian: vegState,
      }),
    })
      .then(r => r.json())
      .then(updatedPizza => handleUpdatePizza(updatedPizza));
  }

  // Update front list of pizzas
  function handleUpdatePizza(updatedPizza) {
    // Update frontend pizza list
    const newPizzas = pizzas.map(pizza => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza;
      } else {
        return pizza;
      }
    });

    setPizzas(newPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm
        idState={idState}
        vegState={vegState}
        setVegState={setVegState}
        toppingState={toppingState}
        setToppingState={setToppingState}
        sizeState={sizeState}
        setSizeState={setSizeState}
        onSubmitClick={handleSubmitClick}
      />
      <PizzaList pizzas={pizzas} onEditClick={handleEditClick} />
    </>
  );
}

export default App;
