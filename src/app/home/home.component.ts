import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  queryString: string = ''
  elMessage: HTMLDivElement;
  @ViewChild('mainInput') mainInput: ElementRef

  constructor(
    public service: GithubService,
  ) { }

  ngOnInit(): void {
  }

  async pesquisar(){
    let res = await this.service.getUserByName(this.queryString)
    if(res.status == 404){
      this.sendMessageError()
      this.focusSearchInput()
    }
  }

  private focusSearchInput(){
    this.mainInput.nativeElement.focus()
  }

  private sendMessageError(){
    this.elMessage = document.createElement('div')
    this.elMessage.classList.add('message__box')
    this.elMessage.innerHTML = 'Usuário não encontrado!'
    document.body.append(this.elMessage)

    setTimeout(()=>{
      this.removeMessageEl()
    }, 3500)
  }

  ngOnDestroy(){
    this.removeMessageEl()
  }

  private removeMessageEl(){
    this.elMessage ? this.elMessage.remove() : null ;
  }
}
