import { Address } from "../address/address";
import { Genie } from "../Genie/genie";
import { Location } from "../location/location";

export class User{
   

    constructor(
        public id:number,
        
        public aadhar:number,
        public  userName:string,
       
        public email:string,
        public  password:string,
        public phone:number,
        public  role:string,
      
        public location:Location,
      
        public  genie:Genie[],
       
        public address:Address
        ){}

    
   
}