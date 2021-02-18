import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servis/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public userservice:UserService) { }

  ngOnInit(): void {
   
  }

}
