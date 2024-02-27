import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  //==========| have the indicator on the input once getting to the page |==========
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite Drink</label>
          <input
            type="text"
            ref={searchValue}
            id="name"
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
