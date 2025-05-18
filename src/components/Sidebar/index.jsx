import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-full max-w-xs bg-white shadow-md p-4 rounded-lg overflow-y-auto h-[90vh] sticky top-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Product Categories</h3>
        <ul className="space-y-2">
          {[
            "Men",
            "Women",
            "Laptops",
            "Smart Watch Accessories",
            "Cameras",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                id={item}
                className="accent-purple-600"
              />
              <label htmlFor={item} className="text-sm text-gray-700">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Filter By Price</h3>
        <div className="flex flex-col gap-2">
          <input
            type="range"
            min="100"
            max="100000"
            className="w-full accent-purple-600"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>From: ₹100</span>
            <span>To: ₹100000</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Filter By Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - rating }).map((_, i) => (
                <span key={i} className="text-gray-300 text-lg">
                  ★
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Featured Products</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 border p-2 rounded hover:shadow transition"
            >
              <img
                src={`https://via.placeholder.com/50x50?text=%20${i}`}
                alt="Product"
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="text-sm font-medium">Product {i}</p>
                <p className="text-xs text-green-600 font-semibold">8% Off</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
