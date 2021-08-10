import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genie } from './genie';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AreaManagerService {

  constructor(private http:HttpClient) { }

  public login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:9190/login",{headers,responseType: 'text' as 'json'})
  }
  public getAllGenie(){
    
    return this.http.get("http://localhost:9190/genie");
  }

  public getGenieById(id:number):Observable<Genie>
{
    return this.http.get<Genie>("http://localhost:9190/genies/"+id);
}

public updateGenie(genie:Genie,id1:number):Observable<Genie>
{
  
    return this.http.put<Genie>("http://localhost:9190/genie/"+id1,genie,{responseType:'text' as 'json'});
}

  // public updateGenie(genie){
  //   return this.http.put("http://localhost:9190/",genie);
  // }
  getGeniesOfPerticularLocation(email:string):Observable<any>
{
    
    let url="http://localhost:9190/genie/areamanager/";
    return this.http.get<any>(`${url}${email}`);
}

  public getCurrentUser():Observable<any>
{
    return this.http.get<any>("http://localhost:9190/currentuser");
}
  
  public getAllUser(email:string):Observable<any>{
    let url="http://localhost:9190/areamanager/";
    return this.http.get<any>(`${url}${email}`);
  }

  public updateAreaManagerPassword(email:string,user:User):Observable<User>
{
  
    return this.http.put<User>("http://localhost:9190/areamanager/"+email,user);
}
}
