import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user) {
    return this.http.post("http://localhost:3600/api/users/signup", user);
  }

  login(user) {
    return this.http.post("http://localhost:3600/api/users/login", user);
  }
}
