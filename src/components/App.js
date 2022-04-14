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

  function handleEditClick(id, topping, size, veg) {
    setIdState(id);
    setVegState(veg);
    setToppingState(topping);
    setSizeState(size);
  }

  function handleSubmitClick(e, id) {
    e.preventDefault();
    console.log(id, e.target[0].value, e.target[1].value, e.target[2].checked);
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
