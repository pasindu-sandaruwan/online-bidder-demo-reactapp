import { useState } from "react"
import CustomPopup from "../common/CustomPopup"
import { useSelector } from "react-redux";

const BiddingCartList = () =>{
    // const showList = useSelector((state : any)=>state.cart.showCart);
    const showList = true;

    const onHideList = () =>{

    }

    return(
        <CustomPopup
            show = {showList}
            title="Biddings"
            hide={onHideList}
        >
            The list of the biddings comes here
        </CustomPopup>
    )
}

export default BiddingCartList;