import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs';
import { map }          from 'rxjs/operators';
import { HttpClient }   from '@angular/common/http';
import { environment }  from '../../../environments/environment';
import { isNullOrUndefined, isNull } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  _users: any[];

  constructor(
    private httpClient: HttpClient
  ) { }

  get users():any[] {
    return this._users;
  }

  getUsers() {
    return this.httpClient.get<any[]>(environment.endpoints.users).pipe(
      map( users => {
        if (!isNull(users)) {
          return this._users = users;
        }
        else {
          return null
        }
      })
    );
  }

}
