import { Component, OnInit } from '@angular/core';
import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: '1de145ed205343158978d23130bdadc8'});


@Component({
  selector: 'app-chatcomponent',
  templateUrl: './chatcomponent.component.html',
  styleUrls: ['./chatcomponent.component.css']
})
export class ChatcomponentComponent implements OnInit {

  threads: any;
  constructor() {
    this.threads = [{'name':'gg'}]
   }

  ngOnInit() {
    

    
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void{
    var temp ;
    client.textRequest('Hello!')
    .then((response) => {console.log(response.result.speech)})
    .catch((error) => {/* do something here too */})
   
  }

}
