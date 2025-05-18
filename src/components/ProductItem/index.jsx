import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyContext } from "../../App";

import { LuHeart } from "react-icons/lu";
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = (props) => {
  const { setOpenProductDetailsModal } = useContext(MyContext);
  return (
    <>
      <div className="productItem overflow-hidden border-[2px] border-[rgba(0,0,0,0.1)] rounded-[4px] shadow-[0px_0px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
        <div className="group imgWrapper w-[100%] h-[250px] overflow-hidden rounded-[4px] relative">
          <Link to={`/product/${props.id}`}>
            <div className="img h-[220px]">
              <img
                src={props.img1}
                alt=""
                className="w-full hover:scale-[1.2] w-[213px] h-[269px]"
              />
              <img
                src={props.img2}
                alt=""
                className="w-full hover:scale-[1.2] absolute top-[0px] left-[0px] opacity-[0] group-hover:opacity-[100] transition-all duration-300 w-[213px] h-[269px]"
              />
            </div>
          </Link>

          <span className="discount flex items-center absolute">10%</span>

          <div className="actions absolute top-[-200px] right-[-6px] flex items-center gap-[0.5rem] flex-col w-[80px] group-hover:top-[10px] transition-all duration-300">
            <Button
              className="btn !w-[35px] !h-[35px] !min-w-[35px] group "
              onClick={() => setOpenProductDetailsModal(true)}
            >
              <MdZoomOutMap className="text-[18px] group-hover:text-white" />
            </Button>
            <Button className="btn !w-[35px] !h-[35px] !min-w-[35px] group">
              <GoGitCompare className="text-[18px] group-hover:text-white" />
            </Button>
            <Button className="btn !w-[35px] !h-[35px] !min-w-[35px] group">
              <LuHeart className="text-[18px] group-hover:text-white" />
            </Button>
          </div>
        </div>
        <div className="info p-[3px] !bg-[#f1f1f1] py-[5px]">
          <h6 className="text-[13px] mt-[3px] mb-[2px] text-[rgba(59, 57, 57, 0.5)] font-[400]">
            <Link to="/" className="link transition-all">
              {props.brand}
            </Link>
          </h6>
          <h3 className="title text-[13px] mt-[4px] mb-[2px] font-[600] text-[#000]">
            <Link to="/" className="link transition-all">
              {props.title}
            </Link>
          </h3>
          <Rating
            name="size-small"
            defaultValue={props.rating}
            size="small"
            readOnly
          />
          <div className="flex items-center gap-[1.3rem]">
            <span className="oldPrice">{props.oldPrice}</span>
            <span className="newPrice">{props.newPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
