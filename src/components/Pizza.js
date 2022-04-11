import React from "react";

function Pizza({ pizzaData: { id, topping, size, vegetarian }, onEditClick }) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onEditClick(id, topping, size, vegetarian)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
