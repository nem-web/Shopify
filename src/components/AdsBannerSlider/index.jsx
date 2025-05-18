import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-[5px] w-full ">
      <Swiper
        slidesPerView={props.items}
        navigation={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="smallBtn"
      >
        <SwiperSlide>
          <BannerBox
            img={
              "https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1746640737_HPMC-1.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1746640578_Google_9A_HPMC.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1746640968_HPMC---13.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767225_HPMC_3.jpg?im=Resize=(768,448)"
            }
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
