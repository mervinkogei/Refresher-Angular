import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;

constructor(private router:Router, private auth: AuthService, private http: HttpClient){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) =>{
     this.trendingMovies = movies;
     console.log(this.trendingMovies);
    });

  }

 

}
