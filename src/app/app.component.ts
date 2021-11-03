import { Component, OnInit } from '@angular/core';
import { PService } from './p.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProJSON';
  constructor (private p:PService) {}
  l:any
  ngOnInit(){
    this.p.all().subscribe((data:any)=>{/*alert(data.entries[0].API)*/this.l=data})
   /* this.l=this.p.j
    this.l=this.l.data
    this.l=Object.keys(this.l)*/
  }


}
