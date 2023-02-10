import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ProductList = ({ products }) => {
  let input = useRef();

  function formSubmit(e) {
    e.preventDefault();
    let inputVal = input.current.value;
    console.log(inputVal);
    input.current.value = "";

    let selectedProducts = [];

    products.map((maxsulot, index) => {
      if (maxsulot.title.toLowerCase().includes(inputVal.toLowerCase())) {
        selectedProducts.push(maxsulot);
      }
    });
    console.log(selectedProducts);
  }
  return (
    <div className="row g-3">
      <form onSubmit={(e) => formSubmit(e)} className="d-flex w-100">
        <input
          ref={input}
          type="text"
          className="ms-auto me-auto mt-4 mb-4 w-50 form-check-input p-4 form-control"
          placeholder="Product..."
        />
      </form>
      {products.map((product, index) => (
        <div className="col-md-6 col-lg-3" key={index}>
          <div className="card" aria-hidden="true">
            <img
              className="placeholder-card-image card-img-top"
              src={product.image}
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.title}</h5>
              <p className="card-text">
                <span className="d-flex justify-content-between">
                  <span>${product.price}</span>
                  <span>
                    <i className="fa-solid fa-star text-warning"></i>
                    {product.rating.rate} / {product.rating.count}
                  </span>
                </span>
                <span className="product-card-description">
                  {product.description}
                </span>
              </p>
              <div className="d-flex gap-1">
                <Link
                  to={`/details/${product.id}`}
                  className="btn btn-primary col-6"
                >
                  Read More...
                </Link>
                <button className="btn btn-success col-6">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
