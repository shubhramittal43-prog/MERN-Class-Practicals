const Child = (props) => {
  return (
    <>
      <h3 className="text-center">
        Best Grocery Shopping Site
      </h3>

      <h5 className="text-center mb-4">
        {props.sname}
      </h5>
    </>
  );
};

export default Child;