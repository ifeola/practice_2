import products from "../data/products.js";

const getAlProducts = (request, response) => {
	const {
		query: { category, in_stock },
	} = request;

	let newProducts = products;
	if (!category && !in_stock) return response.json(newProducts);

	if (category) {
		newProducts = newProducts.products.filter((product) => {
			return product.category.toLowerCase() === category.toLowerCase();
		});
	}

	if (in_stock) {
		newProducts = newProducts.filter((product) => {
			return product.in_stock === JSON.parse(in_stock.toLowerCase());
		});
	}

	return response.json(newProducts);
};

export default getAlProducts;
