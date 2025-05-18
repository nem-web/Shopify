import React from "react";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

export const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-[15px] cursor-pointer relative">
        <img
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
          alt="blog-image"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1 duration-300"
        />
        <span className="flex items-center justify-center text-[#fff] absolute bottom-[9px] right-[6px] z-50 bg-[#8b14c3] text-[11px] font-[500] px-[10px] py-[5px] rounded-[6px]">
          <MdAccessTime className="text-[16px]" /> 5 April, 2023
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[15px] font-[600] text-[#000] mb-[-0.8rem]">
          <Link className="link" to="/">Lorem ipsum dolor sit</Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(46, 44, 44, 0.6)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat
          eligendi voluptate perspiciatis, modi architecto............
        </p>
        <Link className="link font-[500] text-[15px]" to="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;