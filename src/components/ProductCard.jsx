import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductCard = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="mt-10">
      <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img
                  className="object-cover w-full h-full"
                  src={product.images[0] || "https://via.placeholder.com/500"}
                  alt={product.title}
                />
              </div>
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.title}
                </h5>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <span className="text-3xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-white hover:bg-slate-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
