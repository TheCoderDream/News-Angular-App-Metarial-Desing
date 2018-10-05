import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
  MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SideNavComponent } from './containers/side-nav/side-nav.component';
import { ArticlesComponent } from './components/articles/articles.component';
import {NewsApiService} from './services/news-api.service';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import {BridgeService} from './services/bridge.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    SideNavComponent,
    ArticlesComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [NewsApiService, BridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
