import { instance } from "../services/api";

export async function getALLProducts() {
  return await instance("/products");
}

export async function getProductById(id) {
  return await instance(`/product/${id}`);
}

export async function addNewProduct(newProduct) {
  return await instance.post(`/products/add`, newProduct);
}
