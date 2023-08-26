import Grid from "@mui/material/Grid";
import BiddingCartBadge from "../cart/BiddingCartBadge";
import BiddingCartList from "../cart/BiddingCartList";
import VehicleBrandSelector from "./VehicleBrandSelector";

const VehicleHeader = () => {
    return <Grid container spacing={2}>
        <Grid item md = {8}>
            <VehicleBrandSelector/>
        </Grid>
        <Grid item md = {4}>
            <BiddingCartBadge/>
            <BiddingCartList/>
        </Grid>
    </Grid>;
};

export default VehicleHeader;
