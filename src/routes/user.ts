import {Router} from "express";
import UserController from "../controller/user";

const router = Router();
const userController = new UserController();

router.get("/:id/basket",(req,res)=>userController.getActiveBasketForUser(req,res))
router.get("/:id/orders",(req,res)=>userController.getAllOrders(req,res))

export default router;



