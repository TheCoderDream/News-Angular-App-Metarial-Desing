import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../../services/news-api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.getArticles().subscribe((response) => {
      this.articles = response.articles;
    });
    this.newsApiService.articlesWasChanged.subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

}
