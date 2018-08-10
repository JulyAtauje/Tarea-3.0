import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';



@Injectable()
export class PostService {

    constructor(private http: HttpClient) {

    }

    public getPosts(): Observable<any> {
        return this.http.get(`${environment.api_url}/posts`);
    }

    public addPost(body): Observable<any> {
        return this.http.post(`${environment.api_url}/posts`, body);
    }

    public byIdPost(id): Observable<any> {
        return this.http.get(`${environment.api_url}/posts/${id}`);
    }

    public removePost(id): Observable<any> {
        return this.http.delete(`${environment.api_url}/posts/${id}`);
    }

}
