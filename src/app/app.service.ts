import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  public serverUrl = environment.apiURl;
  constructor(
    private http: HttpClient
  ) { }

  registerData(postData) {
    return this.http.post(this.serverUrl + "/api/register", postData)

  }
  loginDetails(postData) {
    return this.http.post(this.serverUrl + "/api/login", postData)

  }
  usersList(data) {
    return this.http.get(this.serverUrl + "/api/users/", { params: data })

  }
  addUser(postData) {
    return this.http.post(this.serverUrl + "/api/users", postData)

  }
  updateUser(postData,id) {
    return this.http.put(this.serverUrl + "/api/users/"+id, postData)

  }
  deleteUser(id) {
    return this.http.delete(this.serverUrl + "/api/users/"+id)

  }
  userDetails(id) {
    return this.http.get(this.serverUrl + "/api/users/"+id)

  }

}
