"use client";
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function Add_Product() {
    const [formData, setFormData] = useState({
        productName: '',
        productDescription: '',
        productImage: null,
        productPrice: '',
        productRating: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleImageDrop = (acceptedFiles) => {
        setFormData((prevData) => ({
          ...prevData,
          productImage: acceptedFiles[0],
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        handleAddProduct(); // Call the function to save to localStorage
      };
    
      const handleImageLinkChange = (event) => {
        const imageUrl = event.target.value;
        setFormData((prevData) => ({
          ...prevData,
          productImage: imageUrl,
        }));
      };
    
      const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleImageDrop,
        accept: 'image/*',
        maxFiles: 1,
      });
    
      const handleAddProduct = () => {
        const newProduct = {
          id: Date.now(), // A simple way to generate a unique ID
          ...formData,
        };
    
        const existingProducts = JSON.parse(localStorage.getItem('productData')) || [];
        existingProducts.push(newProduct);
    
        localStorage.setItem('productData', JSON.stringify(existingProducts));
    
        // Clear the form data (optional)
        setFormData({
          productName: '',
          productDescription: '',
          productImage: null,
          productPrice: '',
          productRating: '',
        });
    
        // Log the updated product list
        console.log('Updated Product List:', existingProducts);
      };


    return (
        <>
            <div className="wrapper">
            <h1 className='text-xl pt-8 pb-5'>Please add a product</h1>
                <div className="w-full min-w-[650px] p-6 bg-white rounded shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold text-gray-600" htmlFor="productName">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="productName"
                                name="productName"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                                value={formData.productName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold text-gray-600" htmlFor="productDescription">
                                Product Description
                            </label>
                            <textarea
                                id="productDescription"
                                name="productDescription"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                                value={formData.productDescription}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold text-gray-600" htmlFor="productImage">
                                Product Image
                            </label>
                            <div
                                {...getRootProps()}
                                className="w-full h-32 border border-gray-300 rounded cursor-pointer flex justify-center items-center"
                            >
                                <input {...getInputProps()} />
                                {formData.productImage ? (
                                    formData.productImage instanceof File ? (
                                        <img
                                            src={URL.createObjectURL(formData.productImage)}
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img src={formData.productImage} alt="Product" className="w-full h-full object-cover" />
                                    )
                                ) : (
                                    <p className="text-gray-500">Drag 'n' drop an image here, or click to select one</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold text-gray-600" htmlFor="productImageLink">
                                Paste Product Image Link
                            </label>
                            <input
                                type="text"
                                id="productImageLink"
                                name="productImageLink"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.productImage}
                                onChange={handleImageLinkChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold text-gray-600" htmlFor="productPrice">
                                Product Price
                            </label>
                            <input
                                type="number"
                                id="productPrice"
                                name="productPrice"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                                value={formData.productPrice}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold text-gray-600" htmlFor="productRating">
                                Product Rating
                            </label>
                            <input
                                type="number"
                                id="productRating"
                                name="productRating"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                                value={formData.productRating}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Add_Product
