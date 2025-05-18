import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, SyntheticEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

// icons
import { TbTruckDelivery } from "react-icons/tb";
import ProductSlider from "../../components/ProductSlider";
import BlogItem from "../../components/BlogItem";

export const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="bg-[#fff] py-[2rem] px-[2rem]">
        <div className="container">
          <div className="flex items-center justify-between ml-[-2rem]">
            <div className="leftSec w-[40%]">
              <h3 className="text-[20px] font-[600]">Popular Products</h3>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[55%] mr-[-2.3rem] flex items-center justify-end">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 650 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>
          <ProductSlider items={6} />
        </div>
      </section>

      <section className="!py-[16px] bg-[#fff] pt-[2px]">
        <div className="container">
          <div className="freeShipping w-[99.4%] p-[0.2rem] py-[0px] border-2 border-[#8b14c3] flex items-center justify-between rounded-[5px] mb-[2rem]">
            <div className="col-1 flex items-center gap-[1.5rem]">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[16px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col-2 flex items-center gap-[1.5rem]">
              <p className="mb-0 font-[500]">
                Free Delivery Now on Your Order above $200
              </p>
            </div>
            <p className="!font-[600] text-[17px]">- Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-[5px] pt-[1px] mt-[0px] bg-[#fff]">
        <div className="container">
          <h3 className="text-[20px] font-[700]">Latest Products</h3>
          <ProductSlider items={6} className="!ml-[-6.2rem] !mr-[-4.5rem]" />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-[5px] pt-[1px] mt-[0px] bg-[#fff]">
        <div className="container">
          <h3 className="text-[20px] font-[700]">Featured Products</h3>
          <ProductSlider items={6} className="!ml-[-6.2rem] !mr-[-4.5rem]" />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-[5px] pb-[2rem] pt-[0px] pt-[1px] bg-[#fff] blogSection">
        <div className="container">
          <h3 className="text-[20px] font-[700]">From the Blog</h3>
          <Swiper
            slidesPerView={4}
            navigation={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

 

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
