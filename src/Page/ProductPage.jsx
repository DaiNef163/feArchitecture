import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  // Dữ liệu sản phẩm mẫu
  const allProducts = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (i + 1) * 10,
  }));

  const itemsPerPage = 10; // Số sản phẩm mỗi trang
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán dữ liệu hiển thị theo trang
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const currentProducts = allProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Điều hướng trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            {/* Thêm Link đến trang chi tiết sản phẩm */}
            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-4 py-2 mx-1 ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            } rounded`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
