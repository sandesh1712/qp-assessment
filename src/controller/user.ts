import { Request, Response } from "express";
import UserService from "../services/user";

export default class UserController{
    userService :UserService;

    constructor(){
        this.userService = new UserService();
    }



    async getActiveBasketForUser(req:Request,res:Response){
        const {id} = req.params;
        try{
            const basket = await this.userService.getBasket(id);
            res.status(200).send(basket);
        }catch(err){
            res.status(500).send(err.message)
         }
    }

    async getAllOrders(req:Request,res:Response){
        const {id} = req.params;
        try{
            const orders = await this.userService.getOrders(id);
            res.status(200).send(orders);
        }catch(err){
            res.status(500).send(err.message)
         }
    }
}
