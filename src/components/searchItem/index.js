import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import FilterComponent from "../FilterComponent";
import { FilterDiv, SearchInputBox, SearchMainDiv } from "./styledComponents";

const SearchItem = () => {
  const { setSearchItem, moviesData, searchItem, setMoviesData, tempData } = useGlobalContext();
  const searchValue = useRef("");

  const searchMovieName = () => {
    setSearchItem(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchData = moviesData.filter(eachMovie => eachMovie.title.toLowerCase().includes(searchItem.toLowerCase()))
    if (searchItem.length === 0)
    {
      setMoviesData(tempData)
    }
    else {
      setMoviesData(searchData)
    }
      
      setSearchItem('')
    
    
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <SearchMainDiv>
          <label >search your favorite Movie</label>
          <SearchInputBox
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchMovieName}
            placeholder="Enter movie name"
            value={searchItem}
          />
        </SearchMainDiv>
      </form>
      <FilterDiv>
        <label>Filter</label>
        <FilterComponent />
      </FilterDiv>
    </div>
  );
};

export default SearchItem;
