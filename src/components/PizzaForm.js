import React from "react";

function PizzaForm({
  vegState,
  setVegState,
  toppingState,
  setToppingState,
  sizeState,
  setSizeState,
  onSubmitClick,
}) {
  return (
    <form onSubmit={onSubmitClick}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={toppingState}
            onChange={e => setToppingState(e.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={sizeState}
            onChange={e => setSizeState(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegState === true}
              onChange={() => setVegState(true)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegState === false}
              onChange={() => setVegState(false)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
