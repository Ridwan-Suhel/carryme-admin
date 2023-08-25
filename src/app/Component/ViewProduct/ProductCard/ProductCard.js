"use client"
import React from 'react';


const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex mb-3">
      <img src={product.productImage} alt={product.productName} className="w-24 max-h-24 h-24 mr-4" />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{product.productName}</h2>
        <p className="text-gray-600">{product.productDescription}</p>
        <div className="flex justify-end items-center gap-3 mt-4">
          <button
            onClick={() => onEdit(product)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
