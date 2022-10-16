import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, LoginForm } from '../interfaces/usuario.interface';
import { Usuario } from '../models/usuario.model';

const url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public usuario!: Usuario;
  
  constructor(private http: HttpClient) { }

  login(loginForm:LoginForm): Observable<Login> {    
    return this.http.post<Login>(`${url}/auth/login`,loginForm
    ).pipe(
      tap((resp) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }


  validarToken(): Observable<boolean> {
    return this.http.get<Login>(`${url}/auth/refresh`
    ).pipe(
      map(resp => {
        const { email, puntaje } = resp.usuario;
        this.usuario = new Usuario(email, puntaje);
        localStorage.setItem('token',resp.token);
        localStorage.setItem('email', email);
        return true;
      }),
      catchError(error => of(false))
    );
  }

  logout(){
    return this.http.get(`${url}/auth/logout`).pipe(
      tap((resp) => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');        
      })
    );
  }
}
