export interface IVehicle{
    id : number,
    name : string,
    details : {
        currency : string;
        price : number;
        color : string;
        brand : string;
        manufactureYear : number;
        image : string;
        description : string;
    }
}