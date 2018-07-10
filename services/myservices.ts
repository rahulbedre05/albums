import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()

export class myservices
{

    constructor(private _http:Http){
    }
    public getcountryinfo()
    {
        let url='https://jsonplaceholder.typicode.com/users';
        return this._http.get(url);
    }
    public getalbumsdetails()
    {
        let url='https://jsonplaceholder.typicode.com/albums';
        return this._http.get(url);
    }
    public getphotosdetails()
    {
        let url='https://jsonplaceholder.typicode.com/photos';
        return this._http.get(url);
    }
}