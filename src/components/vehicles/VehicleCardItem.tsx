import { IVehicle } from "./IVehicleModel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { formatDisplayPrice } from "../../utils/utilityFunctions";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

type Props = {
    vehicle: IVehicle;
};

const VehicleCardItem = (props: Props) => {
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
                <Typography gutterBottom variant="h5" component="div">
                    {props.vehicle.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.vehicle.details.description}
                </Typography>

                <Typography color="primary" variant="body1" component="div" style = {{
                    marginTop : 5
                }}>
                    LKR {formatDisplayPrice(props.vehicle.details.price)}
                </Typography>

                <Grid container spacing={2}>
                    
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title="Add to bidding cart">
                    <IconButton aria-label="add to favorites">
                        <MonetizationOnIcon/>
                        <Typography color="primary" variant="body2" component="div" style={{
                            marginLeft : 3
                        }}>
                            Add to bidding
                        </Typography>
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default VehicleCardItem;
