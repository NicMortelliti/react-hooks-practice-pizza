import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEditClick }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map(pizzaData => {
          return (
            <Pizza
              key={pizzaData.id}
              pizzaData={pizzaData}
              onEditClick={onEditClick}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default PizzaList;
