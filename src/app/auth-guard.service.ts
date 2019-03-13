import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
@Injectable()

export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
        console.log('no token.................');
    }

    canActivate(): boolean {


        if (this.authService.isAuthenticated()) {
            console.log('authguard....................', this.authService.isAuthenticated());
            return true;
        } else {
            console.log('no token.................');
            this.router.navigate(['/login'])
            return false
        }

    }



}
