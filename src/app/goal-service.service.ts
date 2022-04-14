import { Injectable } from '@angular/core';
import { Goals } from './goalList';

@Injectable()
export class GoalServiceService {
  getGoals(){
    return Goals;
  }
  //method to retrieve one goal
  getGoal(id){
    //error not all code paths return a value,fixed by "noImplicitReturns": false,
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}
