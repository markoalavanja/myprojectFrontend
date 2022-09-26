import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PrincipalService } from '../services/principal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private principal: PrincipalService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userAuthetificated = this.principal.loggedUser != null;
    if(!userAuthetificated){
      return this.router.parseUrl('/login')
    }
    return userAuthetificated;
  }
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserAuthentificated();
  }

  isUserAuthentificated(){
    return this.principal.loggedUser !=null;
  }
}
