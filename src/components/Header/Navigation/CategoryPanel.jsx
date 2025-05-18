import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { RxCross2 } from "react-icons/rx";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const categories = ["Fashion", "Electronics", "Home & Garden", "Health & Beauty"];

  const DrawerList = (
    <Box
      sx={{ width: 290, px: 0 }}
      role="presentation"
      className="category-panel"
    >
      <div className="flex items-center justify-between bg-[#f5f5f5] p-[.9rem] !h-[30px]">
        <h3 className="text-[16px] font-[500]">Shop By Categories</h3>
        <RxCross2
          className="transition hover:bg-[#FFDBDB] rounded-full p-[.4rem] cursor-pointer"
          onClick={() => props.setIsOpenCatPanel(false)}
        />
      </div>

      <div className="scroll px-0">
        <ul className="w-[70%] m-0 p-0">
          {categories.map((cat, index) => (
            <li key={index} className="list-none w-full">
              <div className="flex items-center justify-between px-2 py-2">
                <Button
                  className="!flex !items-center !justify-between !w-full !text-[rgba(0,0,0,.8)] !p-0"
                  onClick={() => openSubmenu(index)}
                >
                  <span className="text-left ml-2">{cat}</span>
                  {submenuIndex === index ? (
                    <FaRegSquareMinus className="text-[18px] text-gray-600 mr-2" />
                  ) : (
                    <FaRegPlusSquare className="text-[18px] text-gray-600 mr-2" />
                  )}
                </Button>
              </div>

              {submenuIndex === index && (
                <ul className="w-[80.5%] ml-4">
                  <li className="list-none">
                    <div className="flex items-center justify-between px-0 py-2">
                      <Button
                        className="!flex !items-center !justify-between !w-full !text-[rgba(0,0,0,.8)] !p-0 ml-2"
                        onClick={() => openInnerSubmenu(index)}
                      >
                        <span className="text-left">Apparel</span>
                        {innerSubmenuIndex === index ? (
                          <FaRegSquareMinus className="text-[18px] text-gray-600 mr-2" />
                        ) : (
                          <FaRegPlusSquare className="text-[18px] text-gray-600 mr-2" />
                        )}
                      </Button>
                    </div>

                    {innerSubmenuIndex === index && (
                      <ul className="ml-6">
                        {[
                          "Smart Tablet",
                          "Men's T-Shirt",
                          "Leather Belt",
                          "Watch",
                        ].map((item, subIndex) => (
                          <li key={subIndex} className="list-none mb-[-.4rem]">
                            <Button className="!text-left !justify-start !p-0 ml-4 !text-[rgba(80,77,77,.9)]">
                              {item}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer
      open={props.isOpenCatPanel}
      onClose={() => props.setIsOpenCatPanel(false)}
    >
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
