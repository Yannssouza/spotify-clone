import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/all";

const Searchbar = () => (
  <form
    autoComplete="off"
    className="p-2 text-gray-400 focus-within:text-gray-600"
  >
    <label htmlFor="search-field" className="sr-only">
      Search all songs
    </label>
    <div className="flex flex-row items-center justify-start">
      <FiSearch className="ml-4 h-5 w-5"></FiSearch>
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="Search"
        type="search"
        value=""
        onChange={() => {}}
        className="flex-1 border-none bg-transparent p-4 text-base text-white placeholder-gray-500 outline-none"
      />
    </div>
  </form>
);

export default Searchbar;
