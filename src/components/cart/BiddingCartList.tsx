import CustomPopup from "../common/CustomPopup";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { onHideBiddingCart } from "../../store/BiddingCartSlice";
import { IVehicle } from "../vehicles/IVehicleModel";
import BiddingCartItem from "./BiddingCardItem";
import Typography from "@mui/material/Typography";

const BiddingCartList = () => {
    const dispatch = useDispatch();
    const showList = useSelector((state: any) => state.biddingCart.showCart);

    const bids: IVehicle[] = useSelector((state: any) => state.biddingCart.items);
    const total: number = useSelector((state: any) => state.biddingCart.total);

    const onHideList = () => {
        dispatch(onHideBiddingCart());
    };

    return (
        <CustomPopup show={showList} title="Biddings" hide={onHideList}>
            <Grid container spacing={2}>
                {bids.map((object: IVehicle, key: number) => {
                    return <BiddingCartItem vehicle={object} key={key} />;
                })}
                <Grid item md={12}>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        style={{
                            float: "right",
                            marginRight : 10
                        }}
                    >
                        <strong> Total : </strong>
                        {" "}
                        {total.toLocaleString()} LKR
                    </Typography>
                </Grid>
            </Grid>
        </CustomPopup>
    );
};

export default BiddingCartList;
