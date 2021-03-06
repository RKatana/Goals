import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2026,3,14) ),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2022,6,9) ),
    new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,1,12) ),
    new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2019,1,18) ),
    new Goal(5, 'Solve math homework','Damn Math',new Date(2019,2,14) ),
    new Goal(6, 'Plot my world domination plan','Cause Just to have fun!',new Date(2019,3,14) ),

]
deleteGoal(isComplete,i){
  if(isComplete){
    this.goals.splice(i,1);
  }
}
toggleDetails(index){
  this.goals[index].showDescription=!this.goals[index].showDescription;
}

addNewGoal(goal){
  let goalLength=this.goals.length;
  goal.id=goalLength+1;
  goal.completeDate=new Date(goal.completeDate)
  this.goals.push(goal)
}
  constructor() { }

  ngOnInit() {
  }

}
