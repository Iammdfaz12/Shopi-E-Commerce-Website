import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const FilterPopup = ({ onClose }) => {
  const { setFilterCategory, setFilterPriceRange } = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleApplyFilter = () => {
    if (setFilterCategory) setFilterCategory(selectedCategory);
    if (setFilterPriceRange) setFilterPriceRange({ min: minPrice, max: maxPrice }); // ✅ Check if function exists
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ffffffaa] bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg w-80 shadow-lg z-50">
        <h2 className="text-lg font-bold mb-3">Filter Products</h2>

        {/* Category Filter */}
        <label className="block font-medium">Category</label>
        <select
          className="w-full border p-2 rounded-md mb-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
        </select>

        {/* Price Range Filter */}
        <label className="block font-medium">Price Range ($)</label>
        <div className="flex gap-2 mb-3">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 border p-2 rounded-md"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 border p-2 rounded-md"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-3 py-2 border rounded-md">
            Cancel
          </button>
          <button
            onClick={handleApplyFilter}
            className="px-3 py-2 bg-blue-500 text-white rounded-md"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
