import products from "../data/products.js";

const getProductByID = (request, response) => {
	const {
		params: { id },
	} = request;

	console.log(id);

	const parsedId = parseInt(id);

	if (isNaN(parsedId))
		return response.send(
			"The ID your provided is invalid, please provide a valid ID."
		);

	const newProduct = products.products.find(
		(product) => product.id === parsedId
	);

	if (!newProduct) return response.send("Product not found.");

	return response.json(newProduct);
};

export default getProductByID;
