import { Component, OnInit } from '@angular/core';
import { SakilaService } from '../../Services/sakila.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../../Models/IUser';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './updateUser.component.html'
})
export class UpdateUserComponent implements OnInit {

  _user_id: number;
  _user: any;

  constructor(private sakilaService: SakilaService,
    private router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      this._user_id = params.user_id;
    });

    if (this._user_id !== 0) {
      this.sakilaService.getUserById(this._user_id)
        .subscribe(
          (data) => {
            this._user = data.data;
          }
        );
    }
  }

  ngOnInit() { }

  regresarHome() {
    this.router.navigate(['home']);
  }

  guardarUsuario(first_name: string, last_name: string, email: string, active: boolean, username: string, password: string) {
    let usuario: IUser = {} as IUser;
    usuario.staff_id = this._user_id;
    usuario.first_name = first_name;
    usuario.last_name = last_name;
    usuario.address_id = 1;
    usuario.picture = null;
    usuario.email = email;
    usuario.store_id = 1;
    usuario.active = active;
    usuario.username = username;
    usuario.password = password;
    usuario.last_update = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-us');
    this.sakilaService.updateUser(usuario);
  }

}
