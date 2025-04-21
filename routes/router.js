import { Router } from "express";
import getAllProducts from "../controllers/getAllProducts.js";
import getProductByID from "../controllers/getProductByID.js";

const router = Router();
router.get("/products", getAllProducts);
router.get("/:id", getProductByID);

export default router;
