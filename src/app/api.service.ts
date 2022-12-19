import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMeme } from './interfaces/meme';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadMemes(){
    return this.httpClient.get<IMeme[]>(`${apiURL}/themes`)
  }

  loadComments(limit?: number){
    return this.httpClient.get(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`)
  }
}
