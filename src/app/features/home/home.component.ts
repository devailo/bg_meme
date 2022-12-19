import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IMeme } from 'src/app/interfaces/meme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  memeList: IMeme[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadMemes().subscribe({
      next: (value) => {
      this.memeList = value;;
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
