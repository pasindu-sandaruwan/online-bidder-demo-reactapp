import { IVehicle } from "../vehicles/IVehicleModel";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { formatDisplayPrice } from "../../utils/utilityFunctions";

type Props = {
    vehicle: IVehicle;
};

const BiddingCartItem = (props: Props) => {
    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <Card
                    sx={{ display: "flex" }}
                    style={{
                        padding: 10,
                        margin: 10,
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid item md={5}>
                            <img
                                src={props.vehicle.details.image}
                                width={"200"}
                                style={{
                                    marginLeft: 50,
                                }}
                            />
                        </Grid>
                        <Grid item md={7}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <CardContent sx={{ flex: "1 0 auto" }}>
                                    <Typography component="div" variant="h5">
                                        {props.vehicle.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        component="div"
                                    >
                                        {props.vehicle.details.brand}
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                style={{
                                    float: "right",
                                }}
                            >
                                {formatDisplayPrice(props.vehicle.details.price)}{" "}
                                {props.vehicle.details.currency}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default BiddingCartItem;
