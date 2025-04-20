import express from "express";
import products from "./data/products.js";

const app = express();
const PORT = 8383;

app.use(express.json());

// This is an example of a get request
app.get("/api/products", (request, response) => {
	response.json(products);
});

// This is an example of a post request
app.post("/api/products", (request, response) => {
	const { body } = request;
	const id = products.products.length + 1;

	const newProduct = { id, ...body };
	products.products.push(newProduct);
	products.total_products = products.products.length;
	response.sendStatus(201);
});

// This is an example of a delete request
app.delete("/api/products/:id", (request, response) => {
	const {
		params: { id },
	} = request;

	const parsedID = parseInt(id);
	if (isNaN(parsedID)) return response.send("ID provided not found");

	const newProducts = products.products.filter(
		(product) => product.id !== parsedID
	);

	return response.json(newProducts);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
