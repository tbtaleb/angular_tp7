import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentif',
  templateUrl: './authentif.component.html',
  styleUrls: ['./authentif.component.css']
})
export class AuthentifComponent {

  constructor(private authService:AuthService, private router:Router) { }
  seConnecter(lg: string, mdp: string){
    if(this.authService.login(lg,mdp))
    {
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Mot de passe ou login incorrect");
    }
  }
}
