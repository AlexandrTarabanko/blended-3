import "./styles/normalize.css";
import "./styles/index.css";
import { getALLProducts, getProductById } from "./requests/products";
import { createMarkupAllProducts, createMarkupProduct } from "./services/markupService";

const listProducts = document.querySelector("#allProducts");
const FormProductById = document.querySelector("#singleProductForm");
const productByIdRef = document.querySelector("#singleProduct");

FormProductById.addEventListener("submit", onSubmit) 
async function renderListProducts() {
	const {
		data: { products },
	} = await getALLProducts();
	listProducts.innerHTML = createMarkupAllProducts(products);
}
// renderListProducts();

async function onSubmit(e) {
e.preventDefault();
const idProduct = e.target.elements.id.value.trim();
const {
	data: product,
} = await getProductById(idProduct);
renderProductById(product);

}

async function renderProductById(product) {
	productByIdRef.innerHTML = createMarkupProduct(product);
}