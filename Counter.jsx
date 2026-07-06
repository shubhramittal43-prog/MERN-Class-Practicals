import { useState } from "react";

const Counter = () => {

  const price = 80;

  const [qty, setQty] = useState(1);

  const plus = () => {
    if (qty >= 5) {
      alert("Quantity cannot be greater than 5");
    } else {
      setQty(qty + 1);
    }
  };

  const minus = () => {
    if (qty <= 1) {
      alert("Quantity cannot be less than 1");
    } else {
      setQty(qty - 1);
    }
  };

  return (
    <>
      <div className="container w-25">
        <div className="card">

          <div className="card-header">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_1280.jpg"
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="card-body text-center fw-bold">
            Fresh Apples
          </div>

          <div className="card-footer">

            <p>Price : ₹{price}</p>

            <button className="btn btn-success w-100">

              <span
                className="mx-3"
                onClick={minus}
                style={{ cursor: "pointer" }}
              >
                -
              </span>

              <span>{qty}</span>

              <span
                className="mx-3"
                onClick={plus}
                style={{ cursor: "pointer" }}
              >
                +
              </span>

            </button>

            <h5 className="text-center mt-3">
              Total Price : ₹{price * qty}
            </h5>

          </div>

        </div>
      </div>
    </>
  );
};

export default Counter;