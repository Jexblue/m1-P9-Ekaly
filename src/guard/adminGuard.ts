import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable } from "rxjs"

/*624ee3b4720708c9e53a2603*/

export class AdminGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem("profil")=="624ee3b4720708c9e53a2604"){
      return true;
    }
    return false;
  }

}
