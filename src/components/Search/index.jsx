import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative">
      <input
        type="text"
        placeholder="Search for products.."
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
      <Button className="!absolute top-[5px] right-[2px] z-50 w-[37px] !min-w-[35px] h-[37px] !rounded-full !text-balck">
        <FaSearch className="!text-[#4e4e4e] text-[20px]" />
      </Button>
    </div>
  );
};

export default Search;
