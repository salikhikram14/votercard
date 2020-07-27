import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VoterDetails } from '../model/VoterDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor(private http: HttpClient) { }

  addVoter(formData: FormData): Observable<any> {

    return this.http.post(`https://gentle-sands-08708.herokuapp.com/register`, formData);
  }

  getVoters(){
    return this.http.get(`https://gentle-sands-08708.herokuapp.com/getvoters`);
  }
}
