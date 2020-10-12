import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './github.service';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { SearchIconComponent } from './home/search-icon/search-icon.component';
import { RefreshIconComponent } from './home/refresh-icon/refresh-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    HomeComponent,
    UserBoxComponent,
    SearchIconComponent,
    RefreshIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
