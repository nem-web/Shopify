import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { LuHeart } from "react-icons/lu";
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = ({
  img1,
  img2,
  title,
  brand,
  oldPrice,
  newPrice,
  rating,
  layout,
}) => {
  return (
    <div
      className={`productItem border rounded shadow-sm transition-all bg-white hover:shadow-md ${
        layout === "list" ? "flex gap-4 p-4" : ""
      }`}
    >
      {/* Image Section */}
      <div className={`${layout === "list" ? "w-1/4" : ""}`}>
        <div className="group relative overflow-hidden rounded">
          <Link to="/">
            <div className={`${layout === "list" ? "h-[160px]" : "h-[220px]"}`}>
              <img
                src={img1}
                alt={title}
                className={`w-full object-cover transition-transform duration-300 ${
                  layout === "list" ? "rounded h-full" : "hover:scale-110"
                }`}
              />
              <img
                src={img2}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </Link>
          {layout !== "list" && (
            <span className="discount absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              10%
            </span>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div
        className={`info ${
          layout === "list" ? "w-3/4 px-4" : "p-3 bg-[#f9f9f9]"
        }`}
      >
        <h6 className="text-sm text-gray-500 mb-1 font-medium">{brand}</h6>
        <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
        <Rating name="size-small" defaultValue={rating} size="small" readOnly />
        <div className="flex items-center gap-4 mt-2">
          <span className="line-through text-gray-400">{oldPrice}</span>
          <span className="text-green-600 font-bold">{newPrice}</span>
        </div>

        {layout === "list" && (
          <div className="mt-4 flex gap-3">
            <Button variant="contained" className="!bg-orange-500">
              Add to Cart
            </Button>
            <Button variant="outlined">
              <MdZoomOutMap />
            </Button>
            <Button variant="outlined">
              <GoGitCompare />
            </Button>
            <Button variant="outlined">
              <LuHeart />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
