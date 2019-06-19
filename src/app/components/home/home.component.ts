import { Component, OnInit } from '@angular/core';
import { SakilaService } from '../../Services/sakila.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  users: Array<IUser> = [];

  constructor(private sakilaService: SakilaService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.sakilaService.getAllUsers()
      .subscribe(
        (data) => {
          this.users = data.data;
        }
      );
  }

  addUser() {
    this.router.navigate(['user']);
  }

  deleteUser(userId: number) {
    this.sakilaService.deleteUser(userId);
    location.reload();
  }

  editUser(userId: number) {
    this.router.navigate(['updateUser', userId]);
  }

}
