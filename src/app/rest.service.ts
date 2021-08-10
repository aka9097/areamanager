import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address/address';
import { Genie } from './Genie/genie';
import { LoginComponent } from './login/login.component';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  

  constructor(private http:HttpClient) { }

  
// public login(username:string,password:string){
//   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//   return this.http.get("http://localhost:8080/login",{headers,responseType: 'text' as 'json'})
// }



// public addaddress(address:Address)
// {
//     return this.http.post("http://localhost:8080/addAddress",address,{responseType:'text' as 'json'});
// }

// public adduser(user:User)
// {
//     return this.http.post("http://localhost:8080/user",user,{responseType:'text' as 'json'});
// }

// public getCurrentUser():Observable<User>
// {
//     return this.http.get<User>("http://localhost:8080/currentuser");
// }



// public getLocation()
// {
//     return this.http.get("http://localhost:8080/location");
// }



// public raisegenie(genie:Genie)
// {
//     return this.http.post("http://localhost:8080/raiseGenie",genie);
// }


// public getGenieById(id:number):Observable<Genie>
// {
//     return this.http.get<Genie>("http://localhost:8080/genies/"+id);
// }

// public updateGenie(genie:Genie,id1:number):Observable<Genie>
// {
  
//     return this.http.put<Genie>("http://localhost:8080/genie/"+id1,genie,{responseType:'text' as 'json'});
// }


// public updateUser(user:User,email:string):Observable<User>
// {
  
//     return this.http.put<User>("http://localhost:8080/userr/"+email,user,{responseType:'text' as 'json'});
// }


// public updateUserPassword(user:User,email:string):Observable<User>
// {
  
//     return this.http.put<User>("http://localhost:8080/user/"+email,user);
// }



// public getGeniesOfPerticularLocation(id:number):Observable<Genie[]>
// {
//     return this.http.get<Genie[]>("http://localhost:8080/geniee/"+id);
// }

// public delete(id:number)
// {
//     return this.http.delete("http://localhost:8080/genie/"+id);
// }



// public getGeniesOfPerticularUser(email:string):Observable<Genie[]>
// {
//     return this.http.get<Genie[]>("http://localhost:8080/genie/"+email);
// }




public login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:8080/login",{headers,responseType: 'text' as 'json'})
  }

  public logout(){
  
    return this.http.get("http://localhost:8080/logout",{responseType: 'text' as 'json'})
  }
  
  
  
  public addaddress(address:Address)
  {
      return this.http.post("http://localhost:8080/address",address,{responseType:'text' as 'json'});
  }
  
  public adduser(user:User)
  {
      return this.http.post("http://localhost:8080/user",user,{responseType:'text' as 'json'});
  }
  
  public getCurrentUser():Observable<User>
  {
      return this.http.get<User>("http://localhost:8080/currentuser");
  }
  
  
  
  public getLocation():Observable<Location[]>
  {
      return this.http.get<Location[]>("http://localhost:8080/location");
  }
  
  
  
  public raisegenie(genie:Genie,email:string):Observable<Genie>
  {
      return this.http.post<Genie>("http://localhost:8080/raiseGenie/"+email,genie);
  }
  
  
  public getGenieById(id:number):Observable<Genie>
  {
      return this.http.get<Genie>("http://localhost:8080/genie/"+id);
  }
  
  public updateGenie(genie:Genie,id1:number):Observable<Genie>
  {
    
      return this.http.put<Genie>("http://localhost:8080/genie/"+id1,genie,{responseType:'text' as 'json'});
  }
  
  
  public updateUser(user:User,email:string):Observable<User>
  {
    
      return this.http.put<User>("http://localhost:8080/user/updateProfile/"+email,user,{responseType:'text' as 'json'});
  }
  
  
  public updateUserPassword(user:User,email:string):Observable<User>
  {
    
      return this.http.put<User>("http://localhost:8080/user/"+email,user);
  }
  
  
  
  public getGeniesOfPerticularLocation(email:string):Observable<Genie[]>
  {
      return this.http.get<Genie[]>("http://localhost:8080/genie/user/"+email);
  }

  public getAllGenies():Observable<Genie[]>
  {
      return this.http.get<Genie[]>("http://localhost:8080/genie");
  }
  
  
  public delete(id:number)
  {
      return this.http.delete("http://localhost:8080/genie/"+id);
  }
  
  
  
  public getGeniesOfPerticularUser(email:string):Observable<Genie[]>
  {
      return this.http.get<Genie[]>("http://localhost:8080/geniee/"+email);
  }


}



