import React from "react";
import Button from "@mui/material/Button";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import "../Navigation/style.css";

export const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-[8px]">
          <div className="col-1 w-[18%]">
            <Button
              className="!text-[black] gap-[3px] w-full"
              onClick={openCategoryPanel}
            >
              <HiMenuAlt1 className="text-[18px]" />
              Shop By Categories
              <FaAngleDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>
          <div className="col-2 w-[62%]">
            <ul className="flex items-center gap-[.7rem] nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] ">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[100%] left-[0%] min-w-[160px] bg-white shadow-md p-[0%] opacity-0 transition-all duration-300 ease-in-out rounded-[10px]">
                  <ul className="!pl-0 !ml-0 list-none">
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none text-[500]">
                          Men
                        </Button>

                        <div className="submenu absolute top-[0%] left-[100%] min-w-[160px] bg-white shadow-md p-[0%] opacity-0 transition-all duration-300 ease-in-out rounded-[10px]">
                          <ul className="!pl-0 !ml-0 list-none">
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none text-[500]">
                                  Men
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Women
                              </Button>
                            </li>
                            <li className="list-none w-full">
                              <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Kids
                              </Button>
                            </li>
                            <li className="list-none w-full">
                              <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Girls
                              </Button>
                            </li>
                            <li className="list-none w-full">
                              <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Boys
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                        Women
                      </Button>
                    </li>
                    <li className="list-none w-full">
                      <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                        Kids
                      </Button>
                    </li>
                    <li className="list-none w-full">
                      <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                        Girls
                      </Button>
                    </li>
                    <li className="list-none w-full">
                      <Button className="link !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                        Boys
                      </Button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Footware
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Bag
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Jwellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-[.5rem] mb-0 mt-0 ml-[2rem]">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      {/* Category Panel component */}
      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
