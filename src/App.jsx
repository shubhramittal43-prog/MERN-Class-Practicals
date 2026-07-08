import React, { useState } from "react";
import GroceryCard from "./GroceryCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const groceryData = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 80,
      category: "Fruits",
      image: "https://i.pinimg.com/736x/3a/08/58/3a08585403d20584bb3e92128aa585ae.jpg"
    },
    {
      id: 2,
      name: "Bananas",
      price: 50,
      category: "Fruits",
      image: "https://i.pinimg.com/1200x/89/59/73/895973b47f07f22ea0aabbb2c0f8f2ca.jpg"
    },
    {
      id: 3,
      name: "Mangoes",
      price: 120,
      category: "Fruits",
      image: "https://i.pinimg.com/736x/84/fa/1b/84fa1bc18ea51c2b465cce4c6b65797a.jpg"
    },
    {
      id: 4,
      name: "Tomatoes",
      price: 40,
      category: "Vegetables",
      image: "https://i.pinimg.com/1200x/9e/e5/32/9ee53284046543c2e654d838f5258af0.jpg"
    },
    {
      id: 5,
      name: "Potatoes",
      price: 35,
      category: "Vegetables",
      image: "https://i.pinimg.com/736x/73/f8/da/73f8daa79ec2dbc950d2818df7144a7f.jpg"
    },
    {
      id: 6,
      name: "Carrots",
      price: 60,
      category: "Vegetables",
      image: "https://i.pinimg.com/1200x/d7/81/60/d78160f34adf2a148b9154f5770f063e.jpg"
    },
    {
      id: 7,
      name: "Milk",
      price: 65,
      category: "Dairy",
      image: "https://i.pinimg.com/1200x/53/05/9a/53059a2164a476d1a2675650c05db5c8.jpg"
    },
    {
      id: 8,
      name: "Bread",
      price: 45,
      category: "Bakery",
      image: "https://i.pinimg.com/736x/e1/fe/b4/e1feb42f72cc526b521cbb91bc77514a.jpg"
    },
    {
      id: 9,
      name: "Eggs",
      price: 90,
      category: "Dairy",
      image: "https://i.pinimg.com/1200x/37/19/cc/3719ccbee5f4fd00df53f4579414fb91.jpg"
    }
  ];

  return (
    <div
      className="container-fluid py-4"
      style={{
        backgroundColor: darkMode ? "#212529" : "#f8f9fa",
        minHeight: "100vh",
        color: darkMode ? "white" : "black"
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>🛒 Nature Basket</h2>

          <button
            className="btn btn-success"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="row">
          {groceryData.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <GroceryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;