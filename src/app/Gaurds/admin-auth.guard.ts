import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route: Router){}
  canActivate(){
     if(this.auth.IsAdminLoggedIn()){
          return true;
     }
     else{
          this.route.navigate(['/admin']);
          return false;
     }
  }

}
