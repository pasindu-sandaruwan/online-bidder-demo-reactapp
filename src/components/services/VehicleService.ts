import { buildResponse } from "../../utils/ResponseBuilder";
import { getApi } from "../../utils/axios";

const API_PREFIX = "/vehicles";

export const fetchAllVehicles = async () =>{
    console.log("loading vehicles")
    return await getApi()
        .get(`${API_PREFIX}`)
        .then((res)=>{
            return buildResponse(true, res.data, res.status);
        })
        .catch((err)=>{
            return buildResponse(false, err.response.data, err.response.status );
        })
}