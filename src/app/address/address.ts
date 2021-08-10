import { User } from "../user/user";

export class Address{
   

    constructor(
        public id:number,
        public  flatNo:number,
        public  address1:string,
        public  address2:string,
	     public  users:User
        ){}
    
   
}