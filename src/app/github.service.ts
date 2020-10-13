import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-info/user.model';

// Endpoint user: https://api.github.com/users/USER_GITHUB
// Endpoint repos: https://api.github.com/users/USER_GITHUB/repos
// Endpoint starred: https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}

const USER_url = "https://api.github.com/users/";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  listRepo: any = []
  listStarred: any = []

  user: User;

  loader = false

  constructor(
    private http: HttpClient
  ) { }


  getUserByName(queryString: string): Promise<any>{
    return new Promise((resolve)=>{
    
      this.loader = true
      const url = USER_url + queryString
      this.http.get(url).subscribe(async (res: any)=>{
        const prom1 = this.getUserRepo(res.login)
        const prom2 = this.getUserStarred(res.login)

        await Promise.all([prom1, prom2]).then(_=>{
          this.loader = false;
          this.user = res
        })

        resolve(res)
      }, err=> {
        this.loader = false
        resolve(err)
      })
    })
  }

  private getUserRepo(username: string) : Promise<any>{
    return new Promise(resolve=>{
      const url = USER_url + username + '/repos'
      this.http.get(url).subscribe(res=>{
        this.listRepo = res;
        resolve()
      }, err=> resolve())
    })
  }

  private getUserStarred(username:string): Promise<any>{
    return new Promise(resolve=>{

      const url = USER_url + username + '/starred'
       this.http.get(url).subscribe(res=>{
        this.listStarred = res;
        resolve()
      }, err=> resolve())
    })
  }
}
