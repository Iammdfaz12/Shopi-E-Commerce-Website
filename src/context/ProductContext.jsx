import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPriceRange, setFilterPriceRange] = useState({
    min: "",
    max: "",
  });

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filterCategory) {
      filtered = filtered.filter(
        (product) => product.category.name === filterCategory
      );
    }

    if (filterPriceRange.min || filterPriceRange.max) {
      filtered = filtered.filter(
        (product) =>
          (!filterPriceRange.min || product.price >= filterPriceRange.min) &&
          (!filterPriceRange.max || product.price <= filterPriceRange.max)
      );
    }

    setFilteredProducts(filtered);
  }, [filterCategory, filterPriceRange, products]);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        setFilterCategory,
        setFilterPriceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
