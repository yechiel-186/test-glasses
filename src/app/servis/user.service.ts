import { Injectable } from '@angular/core';
import { User_selection_model } from '../glassModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User_selection:User_selection_model={
    glasses:[],
    lens:"",
    numbers:[]
  }
  

  constructor() {
console.log(this.User_selection)
   }
   
}
