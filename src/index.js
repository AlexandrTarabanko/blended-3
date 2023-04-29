import "./styles/normalize.css";
import "./styles/index.css";
import {
  getALLProducts,
  getProductById,
  addNewProduct,
} from "./requests/products";
import {
  createMarkupAllProducts,
  createMarkupProduct,
  createMarkupNewProduct,
} from "./services/markupService";

const listProducts = document.querySelector("#allProducts");
const FormProductById = document.querySelector("#singleProductForm");
const productByIdRef = document.querySelector("#singleProduct");
const formNewProduct = document.querySelector("#FormNewProduct");
const newProductSection = document.querySelector("#newProductSection");

formNewProduct.addEventListener("submit", onFormNewProductSubmit);
FormProductById.addEventListener("submit", onSubmit);

async function renderListProducts() {
  try {
    const {
      data: { products },
    } = await getALLProducts();
    listProducts.innerHTML = createMarkupAllProducts(products);
  } catch (error) {
    console.log(error.message);
  }
}
// renderListProducts();

async function onSubmit(e) {
  e.preventDefault();
  const idProduct = e.target.elements.id.value.trim();
  try {
    const { data: product } = await getProductById(idProduct);
    renderProductById(product);
  } catch (error) {
    console.log(error.message);
  }
}

async function renderProductById(product) {
  productByIdRef.innerHTML = createMarkupProduct(product);
}

async function onFormNewProductSubmit(e) {
  e.preventDefault();
  const title = e.target.elements.title.value.trim();
  const description = e.target.elements.description.value.trim();
  const price = e.target.elements.price.value.trim();
  const { data } = await addNewProduct({ title, description, price });
  newProductSection.innerHTML = createMarkupNewProduct(data);
}
