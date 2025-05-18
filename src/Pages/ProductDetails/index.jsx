import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import { LuHeart } from "react-icons/lu";
import { GoGitCompare } from "react-icons/go";
import ProductItem from "../../components/ProductItem";
import ProductSlider from "../../components/ProductSlider";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
    else setQuantity(0); // return to 'Add to Cart' if 1 is decremented
  };

  const product = {
    title: "Men Alias-N Regular Fit Spread Collar Shirt",
    brand: "RARE RABBIT",
    rating: 4.5,
    reviews: 16,
    price: 1500,
    oldPrice: 2500,
    stock: "In Stock",
    description:
      "This premium casual shirt from RARE RABBIT combines style and comfort, perfect for any occasion. Made with breathable fabric and a sleek fit, it’s designed to elevate your wardrobe.",
    image:
      "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
  };

  const products = [
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 2000",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1000",
      rating: 5,
    },
    // Add more products...
  ];

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" className="mb-6">
          <Link to="/" className="text-gray-500 hover:underline">
            Home
          </Link>
          <Link to="/" className="text-gray-500 hover:underline">
            Fashion
          </Link>
        </Breadcrumbs>

        {/* Product layout */}
        <div className="flex flex-row gap-8 mr-[2rem]">
          {/* Image */}
          <div className="w-[350px] h-[480px] overflow-hidden border rounded-xl">
            <div
              className="w-full h-full bg-no-repeat bg-center bg-cover transition-all duration-300 max-w-[350px] max-h-[500px]"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: "100%",
              }}
              onMouseMove={(e) => {
                const { left, top, width, height } =
                  e.currentTarget.getBoundingClientRect();
                const x = ((e.pageX - left) / width) * 100;
                const y = ((e.pageY - top) / height) * 100;
                e.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
                e.currentTarget.style.backgroundSize = "200%";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "center";
                e.currentTarget.style.backgroundSize = "100%";
              }}
            ></div>
          </div>

          {/* Details */}
          <div className="space-y-5 ml-[6rem]">
            <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
            <div className="text-sm text-gray-600">
              Brand:{" "}
              <span className="text-black font-medium">{product.brand}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-yellow-500">
              ⭐ {product.rating}{" "}
              <span className="text-gray-600">({product.reviews} Reviews)</span>
            </div>

            <div className="text-xl font-semibold text-red-600">
              Rs. {product.price}
              <span className="ml-3 line-through text-gray-400 text-base">
                Rs. {product.oldPrice}
              </span>
            </div>

            <div className="text-green-600 font-medium">{product.stock}</div>

            {/* Sizes */}
            <div className="flex items-center gap-[1rem]">
              <span className="text-[16px]"> Sizes : </span>
              <Button className="!min-w-[40px] !border-1 !border-[#000]">
                S
              </Button>
              <Button className="!min-w-[40px] !border-1 !border-[#000]">
                M
              </Button>
              <Button className="!min-w-[40px] !border-1 !border-[#000]">
                L
              </Button>
              <Button className="!min-w-[40px] !border-1 !border-[#000]">
                XL
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              {quantity === 0 ? (
                <Button
                  onClick={() => setQuantity(1)}
                  className="btn-org px-6 py-2 rounded-full hover:bg-pink-700 transition btn-org"
                >
                  Add to Cart
                </Button>
              ) : (
                <div className="flex items-center gap-3 border px-4 py-2 rounded-full">
                  <button onClick={decrement} className="text-xl px-2">
                    −
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button onClick={increment} className="text-xl px-2">
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="containers pt-[2rem] mb-[2rem]">
          <div className="flex items-center gap-[1rem]">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "!text-[#77059d]"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "!text-[#77059d]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "!text-[#77059d]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {/* Description Tab */}
          {activeTab === 0 && (
            <div className="shadow-md w-full p-[1rem] rounded-[10px]">
              <p>
                Symbol of lightness and delicacy, the hummingbird evokes
                curiosity and joy. Studio Design' PolyFaune collection features
                classic products with colorful patterns, inspired by the
                traditional japanese origamis. To wear with a chino or jeans.
                The sublimation textile printing process provides an exceptional
                color rendering and a color, guaranteed overtime.
              </p>
              <h4>The standard Lorem Ipsum passage, used since the 1500</h4>
              <p>
                Fashion has been creating well-designed collections since 2010.
                The brand offers feminine designs delivering stylish separates
                and statement dresses which has since evolved into a full
                ready-to-wear collection in which every item is a vital part of
                a woman's wardrobe. The result? Cool, easy, chic looks with
                youthful elegance.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full p-[1rem] rounded-[10px]">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] p-[1rem] rounded-[10px]">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer QnA</h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap[0.7rem]">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-[100%]">
                        <img
                          className=" w-[100px] h-[100px]"
                          src="https://srassociate.org/wp-content/uploads/2024/05/0.jpg"
                          alt=""
                        />
                      </div>

                      <div className="w-[80%] ml-[1rem]">
                        <h4 className="text-[16px] mb-[2px] font-[500]">
                          Rinki Yadav
                        </h4>
                        <h5 className="text-[13px] mt-[1px] mb-[0px]">
                          2025-01-25
                        </h5>
                        <p className="mt-[0px] text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Animi incidunt molestiae perferendis iusto,
                          quisquam ea voluptate doloribus non unde nobis.
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap[0.7rem]">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-[100%]">
                        <img
                          className=" w-[100px] h-[100px]"
                          src="https://srassociate.org/wp-content/uploads/2024/05/0.jpg"
                          alt=""
                        />
                      </div>

                      <div className="w-[80%] ml-[1rem]">
                        <h4 className="text-[16px] mb-[2px] font-[500]">
                          Rinki Yadav
                        </h4>
                        <h5 className="text-[13px] mt-[1px] mb-[0px]">
                          2025-01-25
                        </h5>
                        <p className="mt-[0px] text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Animi incidunt molestiae perferendis iusto,
                          quisquam ea voluptate doloribus non unde nobis.
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap[0.7rem]">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-[100%]">
                        <img
                          className=" w-[100px] h-[100px]"
                          src="https://srassociate.org/wp-content/uploads/2024/05/0.jpg"
                          alt=""
                        />
                      </div>

                      <div className="w-[80%] ml-[1rem]">
                        <h4 className="text-[16px] mb-[2px] font-[500]">
                          Rinki Yadav
                        </h4>
                        <h5 className="text-[13px] mt-[1px] mb-[0px]">
                          2025-01-25
                        </h5>
                        <p className="mt-[0px] text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Animi incidunt molestiae perferendis iusto,
                          quisquam ea voluptate doloribus non unde nobis.
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap[0.7rem]">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-[100%]">
                        <img
                          className=" w-[100px] h-[100px]"
                          src="https://srassociate.org/wp-content/uploads/2024/05/0.jpg"
                          alt=""
                        />
                      </div>

                      <div className="w-[80%] ml-[1rem]">
                        <h4 className="text-[16px] mb-[2px] font-[500]">
                          Rinki Yadav
                        </h4>
                        <h5 className="text-[13px] mt-[1px] mb-[0px]">
                          2025-01-25
                        </h5>
                        <p className="mt-[0px] text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Animi incidunt molestiae perferendis iusto,
                          quisquam ea voluptate doloribus non unde nobis.
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap[0.7rem]">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-[100%]">
                        <img
                          className=" w-[100px] h-[100px]"
                          src="https://srassociate.org/wp-content/uploads/2024/05/0.jpg"
                          alt=""
                        />
                      </div>

                      <div className="w-[80%] ml-[1rem]">
                        <h4 className="text-[16px] mb-[2px] font-[500]">
                          Rinki Yadav
                        </h4>
                        <h5 className="text-[13px] mt-[1px] mb-[0px]">
                          2025-01-25
                        </h5>
                        <p className="mt-[0px] text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Animi incidunt molestiae perferendis iusto,
                          quisquam ea voluptate doloribus non unde nobis.
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-[1rem] rounded-[10px]">
                  <h2 className="text-[18px]">Add Review</h2>
                  <div className="w-full mt-[1.2rem]">
                    <TextField
                      className="w-full"
                      id="outlined-multiline-flexible"
                      label="Write a review"
                      multiline
                      rows={5}
                    />

                    <br />
                    <br />
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>
                  <br />
                  <Button className="btn-org mt-[2rem]">Submit Review</Button>
                </div>
              </div>
            </div>
          )}

          {/* Product Details Tab */}
        </div>

        <h2>Related Products</h2>
        <ProductSlider items={6} />
      </div>
    </section>
  );
};

export default ProductDetails;
