import jwt_decode from 'jwt-decode';
import { Usuario } from './usuario';
import { TokenService } from '../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuaioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    var token = this.tokenService.retornaToken();
    var strToken = token != null ? token : "" ;
    const usuario = jwt_decode(strToken) as Usuario;
    this.usuaioSubject.next(usuario);
  }

  retornaUsuario(){
    return this.usuaioSubject.asObservable();
  }

  salvaToken(token: string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.retornaToken();
    this.usuaioSubject.next({});
  }

  estaLogado(){
     return this.tokenService.possuiToken();
  }

}


