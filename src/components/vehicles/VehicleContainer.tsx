import { FC, useEffect, useState } from "react";
import { fetchAllVehicles } from "../services/VehicleService";
import VehicleGridList from "./VehicleGridList";
import VehicleHeader from "./VehicleHeader";
import { useSelector } from "react-redux";

const VehicleContainer: FC = () => {
    const [vehicles, setVehicles] = useState([]);
    const brand = useSelector((state:any)=>state.vehicleFilter);

    // Use effect to filter all the items
    useEffect(()=>{
      let isUnmounted  = false;

      if( !isUnmounted ){
        fetchAndSetAllVehicles();
      }

      return () =>{
        isUnmounted = true;
      }
    },[])
  
    const fetchAndSetAllVehicles = async () =>{
      const response = await fetchAllVehicles();
      if( response.success ){
        setVehicles(response.data);
      }else{
        console.error(response.data);
      }
    }
    

    // Use effect to filter the vehicles by brand
    useEffect(()=>{
      // let isUnmounted  = false;

      // if( !isUnmounted && brand !== "" ){
      //   fetchAndSetBrandFilteredVehicles();
      // }

      // return () =>{
      //   isUnmounted = true;
      // }
    },[brand])

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