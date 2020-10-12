import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  queryString: string = ''

  constructor(
    public service: GithubService
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    this.service.getUserByName(this.queryString)
  }

}
