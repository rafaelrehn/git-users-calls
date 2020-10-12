import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  constructor(
    public service: GithubService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewUser(userLogin: string){
    const url = 'user/' + userLogin
    this.router.navigate([url])
  }

}
