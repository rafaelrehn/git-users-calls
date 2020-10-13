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
    this.checkRouter()
  }

  voltar(){
    this.router.navigate(['home'])
  }

  private checkRouter(){
    let urlName = this.router.url.slice(6)
    if(this.service.user &&  this.service.user.login == urlName){
      this.setObjects()
    }else{
      this.voltar()
    }
  }

  private setObjects(){
    // if(this.arrayObjects)
    this.arrayObjects = Object.keys(this.service.user)
  }

}
