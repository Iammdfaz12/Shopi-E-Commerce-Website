import { useContext, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { ProductContext } from "../context/ProductContext";
import FilterPopup from "./FilterPopup"; // Import Filter Popup Component

export const Header = () => {
  const { setSearchQuery, setSortOption } = useContext(ProductContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="w-full md:w-1/2 mx-auto flex justify-center gap-3 md:justify-between mt-7">
      <div className="search-bar w-2/3 gap-2 flex border-2 items-center p-1.5">
        <IoSearchSharp size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full border-none focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-10">
        <select
          className="border p-1 rounded-md"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <FaFilter
          size={20}
          onClick={() => setShowFilter(true)}
          className="cursor-pointer"
        />
      </div>

      {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}
    </div>
  );
};
