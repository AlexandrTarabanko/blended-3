import { instance } from "../services/api";

export async function getALLProducts() {
	return await instance("/products");
}
// comment
export async function getProductById(id) {
	return await instance(`/product/${id}`);

}