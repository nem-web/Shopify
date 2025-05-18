import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export const HomeCatSlider = () => {
  return (
    <>
      <div className="homeCatSlider py-[8px] pt-[4px]">
        <div className="container">
          <Swiper
            slidesPerView={8}
            navigation={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Fashion</h4>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525218436_ele.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Electronics</h4>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525231018_bag.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Bags</h4>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525239704_foot.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Footwear</h4>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525248057_gro.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Groceries</h4>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525255799_beauty.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Beauty</h4>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525275367_well.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Wellness</h4>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="link">
                <div className="item py-[1.3rem] px-[.5rem] bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525286186_jw.png"
                    alt=""
                    className="w-[60px] transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <h4 className="font-[500] font-[16px] mt-3">Jewellery</h4>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCatSlider;
