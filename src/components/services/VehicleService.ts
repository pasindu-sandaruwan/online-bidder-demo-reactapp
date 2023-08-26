import { buildResponse } from "../../utils/ResponseBuilder";
import { getApi } from "../../utils/axios";

const API_PREFIX = "/vehicles";

export const fetchAllVehicles = async () => {
    return await getApi()
        .get(`${API_PREFIX}`)
        .then((res) => {
            return buildResponse(true, res.data, res.status);
        })
        .catch((err) => {
            return buildResponse(false, err.response.data, err.response.status);
        });
};

export const fetchVehiclesFilteredByBrand = async (brand: string) => {
    return await getApi()
        .get(`${API_PREFIX}?details.brand=${brand}`)
        .then((res) => {
            return buildResponse(true, res.data, res.status);
        })
        .catch((err) => {
            return buildResponse(false, err.response.data, err.response.status);
        });
};
