import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authentifier =false;
  public login(lg: string, pwd:string){
    return (this.authentifier=(lg=='admin' && pwd=='pwd'));
  }

  isAuthenticated(){
    return this.authentifier;
  }

  logout(){
    this.authentifier=false;
  }
}
