import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  public cargando: boolean = false;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string): Boolean {
    return this.loginForm.get(campo)!.invalid && this.loginForm.get(campo)!.touched;
  }

  login(): void {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => control.markAllAsTouched());
    }
    this.cargando = true;
    this.userService.login(this.loginForm.value)
      .subscribe({
        next: (resp) => {
          this.cargando = false;
          console.log(resp);
          this.router.navigateByUrl('dashboard')
        },
        error: (err) => {
          this.cargando = false;
          console.log(err);
          Swal.fire('Error', err.error.msj, 'error');
        }
      });
  }
}