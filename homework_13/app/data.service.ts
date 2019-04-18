import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private userData;

  constructor(private http: HttpClient) {
    this.getOnlineData();
  }

  getOnlineData() {
    this.http.get("https://randomuser.me/api/?results=10").subscribe(d => (localStorage.data = JSON.stringify(d)));
  }

  getCachedData(): any[] {
    return JSON.parse(localStorage.data).results;
  }

  isExist(uuid):boolean{
    let user = this.getCachedData().find((user) => user.login.uuid == uuid);
    return user?true:false;
  }
}