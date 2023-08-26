import Grid from "@mui/material/Grid";
import BiddingCartBadge from "../cart/BiddingCartBadge";
import BiddingCartList from "../cart/BiddingCartList";

const VehicleHeader = () => {
    return <Grid container spacing={2}>
        <Grid item md = {8}>

        </Grid>
        <Grid item md = {4}>
            <BiddingCartBadge/>
            <BiddingCartList/>
        </Grid>
    </Grid>;
};

export default VehicleHeader;
