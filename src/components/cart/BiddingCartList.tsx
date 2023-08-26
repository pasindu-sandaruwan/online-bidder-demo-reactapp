import CustomPopup from "../common/CustomPopup";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { onHideBiddingCart } from "../../store/BiddingCartSlice";
import { IVehicle } from "../vehicles/IVehicleModel";
import BiddingCartItem from "./BiddingCardItem";

const BiddingCartList = () => {
    const dispatch = useDispatch();
    const showList = useSelector((state: any) => state.biddingCart.showCart);
    
    const bids : IVehicle[] = useSelector((state : any) => state.biddingCart.items );
    const total : number = useSelector((state : any) =>state.biddingCart.total);

    const onHideList = () => {
        dispatch(onHideBiddingCart());
    };

    return (
        <CustomPopup show={showList} title="Biddings" hide={onHideList}>
              <Grid container spacing={2}>
                {bids.map((object : IVehicle, key : number)=>{
                    return(
                        <BiddingCartItem vehicle={object} key={key}/>
                    )
                })}
              </Grid>
        </CustomPopup>
    );
};

export default BiddingCartList;
