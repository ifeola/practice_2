import express, { request } from "express";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 8383;

app.use(express.json());

// This is an example of a get request
// app.use("/api", router);

// Getting a product by id
app.use("/api/products", router);

// This is an example of a get request using query params
app.get("/api/products", (request, response) => {
	const {
		query: { category, in_stock },
	} = request;

	console.log(category, in_stock);
	response.sendStatus(201);
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
