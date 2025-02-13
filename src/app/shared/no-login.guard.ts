import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(private router : Router,
    private AFauth : AngularFireAuth){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
      return this.AFauth.authState.pipe(map(auth => {

        if(auth === null || auth === undefined){
         
         return true;
        }else{
         this.router.navigate(['/folder/Inicio']);
          return false;
        }
 
       }))

  }
}