import "./styles/normalize.css";
import "./styles/index.css";
import { getALLProducts } from "./requests/products";
import { createMarkupAllProducts } from "./services/markupService";

const listProducts = document.querySelector("#allProducts");

async function renderListProducts() {
	const {
		data: { products },
	} = await getALLProducts();
	listProducts.innerHTML = createMarkupAllProducts(products);
}
renderListProducts();
