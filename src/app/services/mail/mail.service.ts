import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MailService {
  constructor( private httpClient: HttpClient) { }
  setMail(data:any):Observable<any> {
    return this.httpClient.post(`https://back.suitex.com.py/send-email`,data);
  }
}
