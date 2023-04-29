export function createMarkupAllProducts(array) {
	const marcup = array
		.map(
			({ id, title, description, brand, images }) => `<li>
			<h2>${title}</h2>
			<p>${id}</p>
			<p>${description}</p>
            <img src="${images[0]}" alt="${title}">
<p>${brand}</p>
		</li>`,
		)
		.join("");
	return marcup;
}

export function createMarkupProduct({ id, title, description, brand, images }) {
	const marcup =
		`<h2>${title}</h2>
			<p>${id}</p>
			<p>${description}</p>
            <img src="${images[0]}" alt="${title}">
<p>${brand}</p>`
	
	return marcup;
}