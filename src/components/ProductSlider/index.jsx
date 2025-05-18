import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";

const ProductSlider = (props) => {
  return (
    <>
      <section className="productSlider py-[1rem] ml-[-6.2rem] mr-[-6.2rem]">
        <div className="container">
          <Swiper
            slidesPerView={props.items}
            navigation={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductItem
                id={1}
                img1={
                  "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                }
                img2={
                  "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                }
                title={"A-Line Kurti With Sharara & Dupatta"}
                brand={"Sangria"}
                oldPrice={"$58.00"}
                newPrice={"$40.00"}
                rating={4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                id={2}
                img1={
                  "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                }
                img2={
                  "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                }
                title={"Chikankari Woven Kurta"}
                brand={"House of Chikankari"}
                oldPrice={"Rs: 1350"}
                newPrice={"Rs: 1200"}
                rating={5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                id={3}
                img1={
                  "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                }
                title={"Men Alias-N Regular Fit Spread Collar Shirt"}
                brand={"RARE RABBIT"}
                oldPrice={"Rs: 2500"}
                newPrice={"Rs: 1500"}
                rating={5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                id={4}
                img1={
                  "https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg"
                }
                title={"POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone"}
                brand={"POCO"}
                oldPrice={"Rs: 25000"}
                newPrice={"Rs: 20000"}
                rating={5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                id={5}
                img1={
                  "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                }
                title={"A-Line Kurti With Sharara & Dupatta"}
                brand={"Sangria"}
                oldPrice={"$58.00"}
                newPrice={"$40.00"}
                rating={4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                id={6}
                img1={
                  "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                }
                title={"A-Line Kurti With Sharara & Dupatta"}
                brand={"Sangria"}
                oldPrice={"$58.00"}
                newPrice={"$40.00"}
                rating={4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                id={7}
                img1={
                  "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                }
                title={"A-Line Kurti With Sharara & Dupatta"}
                brand={"Sangria"}
                oldPrice={"$58.00"}
                newPrice={"$40.00"}
                rating={4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                id={8}
                img1={
                  "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                }
                title={"A-Line Kurti With Sharara & Dupatta"}
                brand={"Sangria"}
                oldPrice={"$58.00"}
                newPrice={"$40.00"}
                rating={4}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProductSlider;
