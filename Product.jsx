const Product = (props) => {

  const { pname, price, qty, pimage } = props.data;

  return (
    <>
      <div className="container w-25 mb-4">
        <div className="card">

          <div className="card-header">
            <img
              src={pimage}
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="card-body text-center fw-bold fs-4">
            {pname}
          </div>

          <div className="card-footer d-flex justify-content-around">
            <span>₹{price}</span>
            <span>{qty}</span>
            <span>₹{price * qty}</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;