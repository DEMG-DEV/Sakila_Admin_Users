import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IUser } from '../Models/IUser';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SakilaService {
  [x: string]: any;
  public indexes: Array<IUser> = [];

  urlHost: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  getUserByUsernameAndPassword(username: string, password: string): Observable<any> {
    return this.http.get(this.urlHost + '/user/' + username + '&' + password)
      .pipe(
        map((response: Response) => response),
        catchError((e: Response) => throwError(e))
      );
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.urlHost + '/users');
  }

  getUserById(user_id: number): Observable<any> {
    return this.http.get(this.urlHost + '/user/' + user_id)
      .pipe(
        map((response: Response) => response),
        catchError((e: Response) => throwError(e))
      );
  }

  addUser(usuario: IUser) {
    return this.http.post(this.urlHost + '/add', usuario, httpOptions)
      .subscribe(
        data => {
          this.router.navigate(['home']);
        }
      );
  }

  updateUser(usuario: IUser) {
    return this.http.put(this.urlHost + '/update', usuario, httpOptions)
      .subscribe(
        data => {
          this.router.navigate(['home']);
        }
      );
  }

  deleteUser(staff_id: number) {
    return this.http.delete(this.urlHost + '/delete/' + staff_id)
      .subscribe(
        data => {
        }
      )
  }
}
