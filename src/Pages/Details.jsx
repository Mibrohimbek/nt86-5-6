import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./../Components/Header";

const Details = () => {
  const { id } = useParams();
  const [product, productRender] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => productRender(json));
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="d-flex product-info align-items-center">
          <div className="left mt-5 mb-5 col-6 d-flex">
            <img
              src={product.image}
              alt=""
              className="ms-auto me-auto product-img w-50 h-50"
            />
          </div>
          <div className="rihgt col-6 pe-5">
            <h3 className="">{product.title}</h3>
            <h5 className="text-capitalize mt-3">{product.category}</h5>
            <p className="mt-4">{product.description}</p>
            <h6 className="mt-3">${product.price}</h6>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
