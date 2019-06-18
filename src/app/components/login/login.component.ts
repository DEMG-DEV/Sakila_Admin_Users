import { Component, OnInit } from '@angular/core';
import { SakilaService } from '../../Services/sakila.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  response: any;
  error: string;

  constructor(private sakilaService: SakilaService, private router: Router) { }

  checarUsuario(username: string, password: string) {
    this.response = this.sakilaService.getUserByUsernameAndPassword(username, password)
      .subscribe(
        (data) => {
          console.log(data);
          if (data['error'] !== true) {
            if (data['data'].active === 1) {
              this.error = '';
              this.router.navigate(['home']);
            }
          }
          else {
            this.error = 'Usuario invalido!';
          }
        }
      );
  }

  ngOnInit() {
  }
}
