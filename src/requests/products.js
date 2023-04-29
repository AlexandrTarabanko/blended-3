import { instance } from "../services/api";

export async function getALLProducts() {
	return await instance("/products");
}
