
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    getDataByName()
  }
  titles = ["Username", "Url", "Date"];
  users = [{
    name: "Jim",
    url: "localhost:9000",
    date: new Date(),
    place: "Dubai",
    course: "Angular"
  },
  {
    name: "rock",
    url: "localhost:2000",
    date: new Date(),
    place: "UK",
    course: "Node"
  },
  {
    name: "steav",
    url: "localhost:8000",
    date: new Date(),
    place: "US",
    course: "React"
  }]

  user = {
    name : null,
    url:null,
    date:null,
    place:null,
    course:null
  };

  

    

  //  hello = "Hello world";
  loadAllData(user) {
    //  console.log(user);
    this.user = user;
  }
  hideAllData() {
    this.user = {
      name: null,
      url: null,
      date: null,
      place: null,
      course: null
    };
  }
  

}
function getDataByName(){
 var filteredUsers = [{
    name: "Jim",
    url: "localhost:9000",
    date: new Date(),
    place: "Dubai",
    course: "Angular"
  },
  {
    name: "rock",
    url: "localhost:2000",
    date: new Date(),
    place: "UK",
    course: "Node"
  },
  {
    name: "steav",
    url: "localhost:8000",
    date: new Date(),
    place: "US",
    course: "React"
  }];

  var Users = filteredUsers.filter(function(el){
    return el.name =="Jim"
  })

  console.log(filteredUsers);
  console.log(Users);
}
