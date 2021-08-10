import { User } from "../user/user";

export class Location{
   

    constructor(
    public id:number,
	public locationName:string,
	public city:string,
	public  state:string,
	public  country:string,
	public  pincode:number,
	public  users:User[]
        ){}
    
   
}