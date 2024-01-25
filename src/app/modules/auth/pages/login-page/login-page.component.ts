import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email,
        ]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ),
    });
  }

  sendLogin() {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password).subscribe({
      next: (response) => {
        console.log('Session iniciada correctamente');
        this.router.navigate(['/', 'tracks']);
      },
      error: (err) => {
        this.errorSession = true;
        const { error } = err;
        console.log('Ocurrio error con credenciales enviadas', error);
      }
    });
  }

}
