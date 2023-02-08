import express from 'express'
import { createProduct, getAllProducts, getProducts } from '../controllers/productController';

const router = express.Router();

router.get('/products',getAllProducts)
router.get('/products/all',getProducts)

router.post('/admin/product/new',createProduct)

export default router;