import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  arrayObjects: string[] = []

  constructor(
    public service: GithubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setObjects()
  }

  voltar(){
    this.router.navigate(['home'])
  }

  private setObjects(){
    this.arrayObjects = Object.keys(this.service.user)
  }

}
