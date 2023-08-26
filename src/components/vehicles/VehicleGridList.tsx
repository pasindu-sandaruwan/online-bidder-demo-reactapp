import Grid from "@mui/material/Grid";
import { IVehicle } from "./IVehicleModel";
import VehicleCardItem from "./VehicleCardItem";

type Props = {
    vehicles: IVehicle[];
};

const VehicleGridList = (props: Props) => {
    return (
        <Grid container spacing={2}>
            {props.vehicles.map((object: IVehicle, key: number) => {
                return (
                    <Grid item md={4} key={key}>
                        <VehicleCardItem
                            vehicle={object}
                            key={key}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default VehicleGridList;
