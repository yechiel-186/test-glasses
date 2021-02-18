import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servis/user.service';

@Component({
  selector: 'app-lens',
  templateUrl: './lens.component.html',
  styleUrls: ['./lens.component.css']
})
export class LensComponent implements OnInit {
lensList:string[];
  constructor(private User_selection:UserService) { 
    this.lensList=["Multifocal","Reading lenses","Remote vision lenses"]
  }

  ngOnInit(): void {
  }
  update(lens:string){
    this.User_selection.User_selection.lens=lens
   }
}
