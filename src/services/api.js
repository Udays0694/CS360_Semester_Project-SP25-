import axios from 'axios';

// Set the base URL for your API (replace with your actual URL)
const API_URL = 'https://api.example.com'; // Replace with backend API URL

// Function to get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error so the calling function can handle it
  }
};

// Function to get a product by its ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};

// Function to add a new product (if needed in the future)
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData);
    return response;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Function to update a product (if needed in the future)
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URL}/products/${productId}`, productData);
    return response;
  } catch (error) {
    console.error(`Error updating product with ID ${productId}:`, error);
    throw error;
  }
};

// Function to delete a product (if needed in the future)
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${productId}`);
    return response;
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    throw error;
  }
};

// Example function to fetch categories (if you have a category feature)
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

