import React, { useRef } from "react";

const Search = () => {
  let input = useRef();

  function formSubmit(e) {
    e.preventDefault();
    let inputVal = input.current.value;
    console.log(inputVal);
    input.current.value = "";
  }
  return (
    <form onSubmit={(e) => formSubmit(e)} className="d-flex w-100">
      <input
        ref={input}
        type="text"
        className="ms-auto me-auto mt-4 mb-4 w-50 form-check-input p-4 form-control"
        placeholder="Product..."
      />
    </form>
  );
};

export default Search;
