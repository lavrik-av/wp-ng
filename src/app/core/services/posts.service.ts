import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs';
import { map }          from 'rxjs/operators';
import { HttpClient }   from '@angular/common/http';
import { environment }  from '../../../environments/environment';
import { isNullOrUndefined, isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  _posts: any[];

  constructor(
    private httpClient: HttpClient
  ) { }

  get posts():any[] {
    return this._posts;
  }

  getPosts():Observable<any[]> {

    return this.httpClient.get<any[]>( environment.endpoints.posts )
      .pipe(
        map(
          posts => {
            if ( !isNull( posts ) ) {
              return this._posts = posts;
            }
            else {
             return this._posts = null;
            }
          }
        ))
  }

}
