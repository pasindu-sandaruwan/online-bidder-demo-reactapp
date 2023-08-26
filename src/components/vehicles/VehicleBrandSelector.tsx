import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const brandList: string[] = ["Volkswagen", "Audi", "Ford", "Mercedes", "BMW"];

const VehicleBrandSelector = () => {
    const [selectedBrand, setSelectedBrand] = useState("");
    const handleChange = (e : any) => {
        setSelectedBrand(e.target.value);
    };

    return (
        <div
            style={{
                marginLeft: 10,
            }}
        >
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedBrand}
                label="Brand"
                placeholder="Please select"
                onChange={handleChange}
            >
                {brandList.map((brand: string, key: number) => {
                    return (
                        <MenuItem value={brand} key={key}>
                            {brand}
                        </MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};
export default VehicleBrandSelector;
