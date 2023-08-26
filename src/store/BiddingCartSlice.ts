import { createSlice } from "@reduxjs/toolkit";
import { IBiddingCart } from "../components/cart/IBiddingCartModel";
import { IVehicle } from "../components/vehicles/IVehicleModel";

const cartInitialSlice : IBiddingCart = {
    items : [],
    total : 0
};

const BiddingCartSlice = createSlice({
    name : "biddingCart",
    initialState : cartInitialSlice,
    reducers : {
        addItemToBiddingCart( state, action ){
            const item : IVehicle = action.payload;
            state.items.push(item);

            state.total += item.details.price;
        }
    }
})

export const {addItemToBiddingCart} = BiddingCartSlice.actions;

export default BiddingCartSlice;