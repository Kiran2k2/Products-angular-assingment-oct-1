import { Component } from '@angular/core';
import { UsersListService } from '../../Services/users-list.service';
import { UserList } from '../../Model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user:UserList={
    id:0,
    email:'',
    password:'',
    username:'',
    phone:'',
    name:{
      firstname:'',
      lastname:'',
    },
    address:{
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    }
  
  }
  constructor(private userService:UsersListService,){}
  
  
  
  
  
    createUser(){
  
     
      
        this.userService.addUser(this.user).subscribe({next:(res)=>{
          alert(" User created successfully")
          console.log("response",res);
  
        },error:(error)=>{
          console.log("error happen",error);
        },complete:()=>{
          console.log("completed");
        }
      
      
      })
      
    }
}
