import React from "react";
import { useParams } from "react-router-dom";

const DetailsProduct = () => {
  const { productId } = useParams(); // Lấy productId từ URL
  const allProducts = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (i + 1) * 10,
  }));

  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600">Price: ${product.price}</p>
      <p className="mt-4">This is the detailed information for {product.name}.</p>
    </div>
  );
};

export default DetailsProduct;
