import "./App.css";
import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ProductZoom from "./components/ProductZoom";

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth] = useState(true);
  const [maxWidth] = useState("lg");

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
    openProductDetailsModal,
    setOpenProductDetailsModal,
  };

  const sampleProduct = {
    title: "Men Alias-N Regular Fit Spread Collar ShirtGHWSRHSFDHFDH",
    brand: "RARE RABBIT",
    originalPrice: 2500,
    discountedPrice: 1500,
    description:
      "Rs: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    image:
      "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={ values }>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route
              path="/productListing"
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path="/product/:id"
              exact={true}
              element={<ProductDetails />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      {/* Product Details Modal */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="product-dialog-title"
        className="productDetailsModal"
      >
        <DialogTitle className="flex justify-between items-center px-4 pt-4 pb-0">
          <span className="text-xl font-semibold">{sampleProduct.title}</span>
          <IconButton onClick={handleCloseProductDetailsModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className="px-6 pb-6 pt-2">
          <div className="flex flex-row gap-6">
            {/* Image Section */}
            <div className="w-full md:w-[45%] flex justify-center">
              <ProductZoom image={sampleProduct.image} />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-[55%] space-y-4">
              <p className="text-sm text-gray-600">
                <strong>Brand:</strong> {sampleProduct.brand}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through">
                  Rs {sampleProduct.originalPrice}
                </span>
                <span className="text-red-600 font-semibold text-lg">
                  Rs {sampleProduct.discountedPrice}
                </span>
                <span className="text-green-600 font-medium text-sm ml-2">
                  IN STOCK
                </span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {sampleProduct.description}
              </p>

              <div>
                <h4 className="font-semibold mb-1">Size:</h4>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border rounded-full hover:bg-gray-100 text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center border rounded">
                  <button className="px-3 py-1 text-lg">−</button>
                  <span className="px-3">1</span>
                  <button className="px-3 py-1 text-lg">+</button>
                </div>

                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                  🛒 Add To Cart
                </button>
              </div>

              <div className="flex gap-4 mt-4">
                <button className="text-sm text-gray-700 hover:underline">
                  ❤️ Add to Wishlist
                </button>
                <button className="text-sm text-gray-700 hover:underline">
                  🔁 Compare
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

export { MyContext };
