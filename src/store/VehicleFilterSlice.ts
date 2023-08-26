import { createSlice } from "@reduxjs/toolkit";

const filterInitialSlice  = {
    brand : ""
};


const VehicleFilterSlice = createSlice({
    name : "biddingCart",
    initialState : filterInitialSlice,
    reducers : {
        onChangeVehicleBrandFilter( state, action ){
            state.brand = action.payload
        }
    }
})

export const {onChangeVehicleBrandFilter} = VehicleFilterSlice.actions;

export default VehicleFilterSlice;