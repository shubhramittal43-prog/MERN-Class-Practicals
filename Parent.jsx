import Child from "./Child";
import Product from "./Product";
import Counter from "./Counter";

const Parent = () => {

  const storeName = "Fresh Grocery Store";

  const product = {
    pname: "Fresh Apples",
    price: 80,
    qty: 1,
    pimage:
      "https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_1280.jpg",
  };

  return (
    <>
      <h1 className="text-center mt-3">
        Welcome to Fresh Grocery Store
      </h1>

      <Child sname={storeName} />

      <Product data={product} />

      <Counter />
    </>
  );
};

export default Parent;