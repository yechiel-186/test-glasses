import { Component, OnInit } from '@angular/core';
import { glassesModel } from 'src/app/glassModel';
import { UserService } from 'src/app/servis/user.service';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit {
glasses:glassesModel[];


  constructor(private User_selection:UserService) {
    this.glasses=[{
      img: "https://cdn.shopify.com/s/files/1/2041/4771/products/IZI_E_READ_BLACK_PLIEE_CMJN_1200_1024x1024.jpg?v=1506404948",
      about:"Louis XVI style"
    },{ img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8iqE7kUNyqvMoqfNNvh8PeWQGGKDdBohRw&usqp=CAU",
       about:"this for cool people" 
  },{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8L8QErSTDyCgHhfDer1m7eQFusO-f-OXRzQ&usqp=CAU",
    about:"A framework for women" 
  }
]
   }

  ngOnInit(): void {
  }
  update(glass:glassesModel[]){
   this.User_selection.User_selection.glasses=glass
  }
}
