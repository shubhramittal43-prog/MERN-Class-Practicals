import React from "react";

function Card({ children }) {
  return (
    <div
      className="card shadow-sm border-0 h-100"
      style={{ borderRadius: "15px" }}
    >
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;