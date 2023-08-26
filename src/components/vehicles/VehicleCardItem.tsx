import { IVehicle } from "./IVehicleModel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { formatDisplayPrice } from "../../utils/utilityFunctions";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { addItemToBiddingCart } from "../../store/BiddingCartSlice";
import TextField from "@mui/material/TextField";
import { useState } from "react";

type Props = {
    vehicle: IVehicle;
};

const VehicleCardItem = (props: Props) => {
    const dispatch = useDispatch();
    const [bidPrice, setBidPrice] = useState("");

    const onAddItemtoCart = () => {
        const updatedItem : IVehicle = {...props.vehicle};
        const parsedPrice = parseInt(bidPrice);
        updatedItem.details.price = isNaN(parsedPrice)  ? 0 : parsedPrice;

        dispatch(addItemToBiddingCart(updatedItem));
    };
    return (
        <Card
            style={{
                margin: 10,
            }}
        >
            <CardMedia
                sx={{ height: 200 }}
                image={props.vehicle.details.image}
                title={props.vehicle.name}
                style={{
                    padding: 10,
                }}
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.vehicle.name}
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                backgroundColor: props.vehicle.details.color,
                            }}
                            style={{
                                float: "right",
                            }}
                        />
                    </Grid>
                </Grid>

                <Typography variant="body2" color="text.secondary">
                    {props.vehicle.details.description}
                </Typography>

                <Typography
                    color="primary"
                    variant="body1"
                    component="div"
                    style={{
                        marginTop: 5,
                    }}
                >
                    {props.vehicle.details.currency}{" "}
                    {formatDisplayPrice(props.vehicle.details.price)}
                </Typography>

                <Grid
                    container
                    spacing={2}
                    style={{
                        marginTop: 5,
                    }}
                >
                    <Grid item md={6}>
                        <Typography variant="body2" color="text.secondary">
                            <strong> Brand </strong> : {props.vehicle.details.brand}
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="body2" color="text.secondary">
                            <strong> Year </strong> : {props.vehicle.details.manufactureYear}
                        </Typography>
                    </Grid>
                    <Grid item md={6}></Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <TextField
                    id="outlined-number"
                    label="Your bidding price"
                    type="number"
                    value = {bidPrice}
                    onChange={(e)=>setBidPrice(e.target.value)}
                />
                <Tooltip title="Add to bidding cart">
                    <IconButton onClick={() => onAddItemtoCart()} aria-label="add to favorites">
                        <MonetizationOnIcon />

                        <Typography
                            color="primary"
                            variant="body2"
                            component="div"
                            style={{
                                marginLeft: 3,
                            }}
                        >
                            Add to bidding
                        </Typography>
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default VehicleCardItem;
