import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface paramsType {
  [key: string]: any
} 

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  apiURL: string = 'http://localhost:2021/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor( private http: HttpClient ) { }

  get<T>(route: string, params?: paramsType) : Observable<T[]> {
    let path = this.apiURL + route;
    if(params) {
      path += "?"
      path += Object.keys(params).reduce((acc: string[], key) => {
        acc.push(key + '=' + params[key])
        return acc
      }, []).join('&')
    }
    return this.http.get<T[]>(path, this.httpOptions);
  }

  put<T>(route: string, body?: paramsType) : Observable<T> {
    const path = this.apiURL + route
    return this.http.put<T>(path, body, this.httpOptions)
  }

  post<T>(route: string, body?: paramsType) : Observable<T> {
    const path = this.apiURL + route
    return this.http.post<T>(path, body, this.httpOptions)
  }

  delete<T>(route: string, params?: paramsType) : Observable<T> {
    const path = this.apiURL + route
    return this.http.delete<T>(path, this.httpOptions)
  }


}
