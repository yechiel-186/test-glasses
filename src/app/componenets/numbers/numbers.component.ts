import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servis/user.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
numbers:number[];
  constructor(private User_selection:UserService) { }

  ngOnInit(): void {
  }
  update(rl:number,ll:number,rc:number,lc:number){
    this.User_selection.User_selection.numbers.push(rl,ll,rc,lc)
   }
}
