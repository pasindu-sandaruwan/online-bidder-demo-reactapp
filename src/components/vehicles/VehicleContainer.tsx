import { FC, useEffect, useState } from "react";
import { fetchAllVehicles } from "../services/VehicleService";

const VehicleContainer: FC = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(()=>{
      let mounted = true;

      if( mounted ){
        fetchAndSetVehicles();
      }

      return () =>{
        mounted = false;
      }
    },[])

    const fetchAndSetVehicles = async () =>{
      const response = await fetchAllVehicles();
      if( response.success ){
        console.log(response.data);
        setVehicles(response.data);
      }else{
        console.error(response.data);
      }
    }

    return(
       <div>
         Vehicle Continer rendering 
       </div>
    )
};

export default VehicleContainer;