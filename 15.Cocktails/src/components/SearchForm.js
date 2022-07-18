import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef(""); // input's focus

  React.useEffect(() => {
    searchValue.current.focus();
  }, []); // input's focus

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue} // input's focus
            onChange={searchCocktail} // SearchTerm's value change
            // affect to fetch url
            // const response = await fetch(`${url}${searchTerm}`);
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
