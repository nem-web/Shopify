import React, { useState } from "react";

const ProductZoom = ({ image }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      className="w-[400px] h-[500px] border overflow-hidden rounded-xl bg-no-repeat bg-center bg-cover transition-all duration-300"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "200%",
        backgroundPosition,
      }}
    >
      <img
        src={image}
        alt="Product"
        className="w-full h-full object-cover opacity-0"
      />
    </div>
  );
};

export default ProductZoom;
