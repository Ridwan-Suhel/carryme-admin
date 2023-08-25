"use client"
import React from 'react';
import ProductCard from './ProductCard/ProductCard';

const productData = JSON.parse(localStorage.getItem('productData')) || [];

const ViewProduct = () => {
    const onEditProduct = (product) => {
        console.log('Editing product:', product);
        // Implement your edit logic here
      };
    
      const onDeleteProduct = (product) => {
        console.log('Deleting product:', product);
        // Implement your delete logic here
      };

  return (
    <div className="h-auto w-full">
    <h1 className='text-xl pt-8 pb-5'>Product Lists</h1>
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEditProduct}
          onDelete={onDeleteProduct}
        />
      ))}
    </div>
  );
};

export default ViewProduct;
