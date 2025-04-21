import products from "../data/products.js";

const getAlProducts = (request, response) => {
	response.json(products);
};

export default getAlProducts;
