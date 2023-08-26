import { FC, useEffect, useState } from "react";
import { fetchAllVehicles } from "../services/VehicleService";
import VehicleGridList from "./VehicleGridList";
import VehicleHeader from "./VehicleHeader";

const VehicleContainer: FC = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(()=>{
      let unmounted  = false;

      if( !unmounted ){
        fetchAndSetVehicles();
      }

      return () =>{
        unmounted = true;
      }
    },[])

    const fetchAndSetVehicles = async () =>{
      const response = await fetchAllVehicles();
      if( response.success ){
        setVehicles(response.data);
      }else{
        console.error(response.data);
      }
    }

    return(
       <div>
        <VehicleHeader/>
        <VehicleGridList 
          vehicles={vehicles}
        />
       </div>
    )
};

export default VehicleContainer;