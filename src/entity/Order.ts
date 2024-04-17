import { Column, JoinTable, ManyToOne, OneToOne } from "typeorm";
import SuperEntity from "./SuperEntity";
import { User } from "./User";
import { Basket } from "./Basket";
import { OrderStatus } from "../types/Order";

export class Order extends SuperEntity{
    @Column({type: 'float',nullable:false})
    orderTotal:number

    @ManyToOne(()=>User,(user)=>user.orders)
    @JoinTable()
    user:User

    @OneToOne(()=>Basket,basket=>basket.order,{nullable:false,eager:true})
    @JoinTable()
    basket: Basket

    @Column({type:'enum',enum:OrderStatus,default:OrderStatus.PENDING})
    status:OrderStatus
}