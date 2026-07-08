import React, { useState } from "react";
import Card from "./Card";

function GroceryCard({
  item = {
    name: "Product",
    price: 0,
    category: "General",
    image: "https://via.placeholder.com/250"
  }
}) {
  const { name, price, category, image } = item;

  const [quantity, setQuantity] = useState(0);

  return (
    <Card>
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="text-center mt-3">
        <h4>{name}</h4>

        <h5 className="text-success">₹{price}</h5>

        <p>{category}</p>

        {quantity === 0 ? (
          <button
            className="btn btn-success"
            onClick={() => setQuantity(1)}
          >
            ADD
          </button>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button
                className="btn btn-success"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>

              <h5>{quantity}</h5>

              <button
                className="btn btn-success"
                onClick={() => {
                  if (quantity < 10) {
                    setQuantity(quantity + 1);
                  }
                }}
              >
                +
              </button>
            </div>

            <h6 className="mt-3">
              Total Price : ₹{price * quantity}
            </h6>

            {quantity === 10 && (
              <p className="text-danger fw-bold">
                You can't add more of these items.
              </p>
            )}
          </>
        )}
      </div>
    </Card>
  );
}

export default GroceryCard;