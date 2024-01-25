import { Router } from "express";
import { methods as productController } from '../controllers/product.controller';

const router = Router();

router.get('/', productController.getProduct);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;