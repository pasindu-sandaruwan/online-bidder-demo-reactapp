import { IVehicle } from "../vehicles/IVehicleModel";

export interface IBiddingCart{
    items : IVehicle [],
    total : number,
    showCart : boolean
}