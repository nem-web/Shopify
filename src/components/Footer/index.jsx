import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebook } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-[1.6rem] pb-[2rem] bg-[#fafafa] border-t-[1px] border-[#eaeaea]">
        <div className="container bg-[#fafafa] mb-[2rem]">
          <div className="flex items-center justify-center gap-[5rem]">
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <MdOutlineLocalShipping className="text-[42px] cursor-pointer" />
              <h3 className="text-[16px] font-[500] mt-[.1rem]">
                Free Shipping
              </h3>
              <p className="text-[12px] font-[400] mt-[-0.5rem]">
                For all Orders over Rs. 499
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <TbTruckReturn className="text-[42px] cursor-pointer" />
              <h3 className="text-[16px] font-[500] mt-[.1rem]">
                30 Days Returns
              </h3>
              <p className="text-[12px] font-[400] mt-[-0.5rem]">
                For an Exchange Product
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <IoWalletOutline className="text-[42px] cursor-pointer" />
              <h3 className="text-[16px] font-[500] mt-[.1rem]">
                Secured Payment
              </h3>
              <p className="text-[12px] font-[400] mt-[-0.5rem]">
                Payment Cards Accepted
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <IoGiftSharp className="text-[42px] cursor-pointer" />
              <h3 className="text-[16px] font-[500] mt-[.1rem]">
                Special Gifts
              </h3>
              <p className="text-[12px] font-[400] mt-[-0.5rem]">
                Our First Product Order
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <BiSupport className="text-[42px] cursor-pointer" />
              <h3 className="text-[16px] font-[500] mt-[.1rem]">
                Support 24/7
              </h3>
              <p className="text-[12px] font-[400] mt-[-0.5rem]">
                Contact us Anytime
              </p>
            </div>
          </div>
          <hr />
        </div>
        <br />

        <div className="footer flex py-[.5rem] ml-[2rem]">
          <div className="part1 w-[25%] border-r-[2px] border-[#eaeaea] pr-[2rem]">
            <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
            <p className="text-[13px] font-[400] pb-4">
              CLassyShop - Mega Super Store <br /> 507-Union Trade Centre France
            </p>

            <Link
              className="link mb-[5px] text-13px]"
              to="mailto:kathariyanemchandra@gmail.com"
            >
              sales@yourcompany.com
            </Link>
            <span className=".contactNumber text-[16px] font-[500] block w-full mt-[.5rem] text-[#a206d5]">
              (+91) 9170-959-866
            </span>

            <div className="flex items-center gap-[0.9rem] mt-[1rem]">
              <IoChatboxOutline className="text-[35px] text-[#a206d5]" />
              <span className="text-[15px] font-[600]">
                Online Chat <br />
                Get Expert Help
              </span>
            </div>
          </div>

          <div className="part2 w-[50%] flex pl-[2rem] ml-[2rem]">
            <div className="part2-col1">
              <h2 className="text-[18px] font-[600] mb-[1rem]">Products</h2>
              <ul className="list ml-[-2.5rem]">
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Price drop
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    New Products
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Best Sellers
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Contact us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Sitemap
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Stores
                  </Link>
                </li>
              </ul>
            </div>
            <div className="part2-col2 pl-[6rem] ml-[6rem]">
              <h2 className="text-[18px] font-[600] mb-[1rem]">Our Company</h2>
              <ul className="list ml-[-2.5rem]">
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Delivery
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Legal Notice
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Terms & Conditions of use
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    About us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Secure Payment
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-[0.5rem]">
                  <Link className="link" to="/">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="part3 w-[35%] flex pl-[1rem] flex-col pr-[1rem]">
            <h2 className="text-[18px] font-[600] mb-[1rem]">
              Subscribe to newsletter
            </h2>
            <p className="text-[13px]">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>

            <form action="" className="mt-[1rem]">
              <input
                type="text"
                className="w-[80%] h-[45px] border outline-none pl-[1rem] pr-[1rem] rounded-[5px] mb-[1rem] !focus:border-[#000]"
                placeholder="Your Email Address"
              />

              <Button className="btn-org">SUBSCRIBE</Button>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="I agree to the terms and conditions and the privacy policy"
                className="text-[10px] font-[300] text-[#000] mt-[.6rem]"
              />
            </form>
          </div>
        </div>
      </footer>

      <div className="bg-[#fafafa] border-t-[1px] border-[#eaeaea] py-[0.4rem]">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-[1rem]">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-[100%] border-[rgba(0,0,0,0.1)] flex items-center justify-center link group hover:bg-[#a206d5] transition-all duration-300 ease-in-out"
              >
                <FaFacebook className="text-[30px] group-hover:text-[#fff]" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-[100%] border-[rgba(0,0,0,0.1)] flex items-center justify-center link group hover:bg-[#a206d5] transition-all duration-300 ease-in-out"
              >
                <TbBrandYoutubeFilled className="text-[30px] group-hover:text-[#fff]" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-[100%] border-[rgba(0,0,0,0.1)] flex items-center justify-center link group hover:bg-[#a206d5] transition-all duration-300 ease-in-out"
              >
                <FaInstagram className="text-[30px] group-hover:text-[#fff]" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-[100%] border-[rgba(0,0,0,0.1)] flex items-center justify-center link group hover:bg-[#a206d5] transition-all duration-300 ease-in-out"
              >
                <BsTwitterX className="text-[30px] group-hover:text-[#fff]" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-[100%] border-[rgba(0,0,0,0.1)] flex items-center justify-center link group hover:bg-[#a206d5] transition-all duration-300 ease-in-out"
              >
                <FaPinterest className="text-[30px] group-hover:text-[#fff]" />
              </Link>
            </li>
          </ul>
          <p className="text-[13px] !text-center">@2024 - Ecommerce software by PrestaShop™</p>

          <div className="flex items-center">
            <img src="/carte_bleue.png" alt="image" />
            <img src="/visa.png" alt="image" />
            <img src="/master_card.png" alt="image" />
            <img src="/american_express.png" alt="image" />
            <img src="/paypal.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
