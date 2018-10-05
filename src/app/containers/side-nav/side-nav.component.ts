import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsApiService} from '../../services/news-api.service';
import {MatSidenavContainer} from '@angular/material';
import {BridgeService} from '../../services/bridge.service';
import {Commands} from '../../enums/commands.enum';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sidenav') sidenavContainer: MatSidenavContainer;
  sources: Source[];
  commands = Commands;

  constructor(private newsService: NewsApiService, private bridgeService: BridgeService) { }

  ngOnInit() {
    this.newsService.getSources().subscribe((data => {
      this.sources = data['sources'];
    }));
    this.bridgeService.sidenavWasClicked.subscribe((command) => {
      this.controlSidenav(command as string);
    });
  }


  searchArticles(source: string): void {
    let selectedArticlesBySource: Article[] = [];
    this.newsService.getArticlesBySource(source).subscribe((data) => {
      selectedArticlesBySource = data['articles'];
      this.newsService.articlesWasChanged.next(selectedArticlesBySource);
    });
  }
  
  controlSidenav(command: string): void {
    switch (command) {
      case (this.commands.OPEN):
        this.sidenavContainer.open();
        break;
      case (this.commands.CLOSE):
        this.sidenavContainer.close();
        break;
      default:
        throw Error('There is no such a command');
    }
  }

}
