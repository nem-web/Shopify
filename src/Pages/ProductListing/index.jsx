import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import { Grid3X3, List, ChevronDown } from "lucide-react";
import { Button, Menu, MenuItem } from "@mui/material";

const ProductListing = () => {
  const [layout, setLayout] = useState("grid");
  const [sortAnchor, setSortAnchor] = useState(null);
  const openSort = Boolean(sortAnchor);

  const handleSortClick = (event) => setSortAnchor(event.currentTarget);
  const handleSortClose = () => setSortAnchor(null);

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
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 500",
      rating: 5,
    },
    {
      img1: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
      img2: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
      title: "Chikankari Woven Kurta",
      brand: "House of Chikankari",
      oldPrice: "Rs: 1350",
      newPrice: "Rs: 1200",
      rating: 2,
    },
    // Add more products...
  ];

  return (
    <section className="py-8">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white mt-4">
        <div className="container flex gap-4">
          {/* Sidebar */}
          <div className="w-[20%]">
            <Sidebar />
          </div>

          {/* Product Section */}
          <div className="w-[80%] bg-white p-4 rounded shadow-sm">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <div className="flex gap-2 items-center">
                <Button
                  variant={layout === "grid" ? "contained" : "outlined"}
                  onClick={() => setLayout("grid")}
                >
                  <Grid3X3 size={18} />
                </Button>
                <Button
                  variant={layout === "list" ? "contained" : "outlined"}
                  onClick={() => setLayout("list")}
                >
                  <List size={18} />
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                Showing {products.length} products
              </div>
              <div>
                <Button
                  variant="outlined"
                  endIcon={<ChevronDown />}
                  onClick={handleSortClick}
                >
                  Sort By
                </Button>
                <Menu
                  anchorEl={sortAnchor}
                  open={openSort}
                  onClose={handleSortClose}
                >
                  <MenuItem onClick={handleSortClose}>
                    Price: Low to High
                  </MenuItem>
                  <MenuItem onClick={handleSortClose}>
                    Price: High to Low
                  </MenuItem>
                  <MenuItem onClick={handleSortClose}>Newest</MenuItem>
                </Menu>
              </div>
            </div>

            {/* Product Grid/List */}
            <div
              className={`${
                layout === "grid"
                  ? "grid grid-cols-5 gap-4"
                  : "flex flex-col gap-4"
              }`}
            >
              {products.map((product, index) => (
                <ProductItem key={index} {...product} layout={layout} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
