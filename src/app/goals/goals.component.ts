import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalServiceService } from '../goal-service.service';
// import { Goals } from '../goalList';
import { AlertServiceService } from '../alert-service.service';
import { QuoteRequesService } from '../quote-http/quote-reques.service';
import { Quote } from '../quote-class/quote';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  // providers: [GoalServiceService]
})
export class GoalsComponent implements OnInit {
goals:Goal[]
alertService:AlertServiceService;
quote:Quote;
  
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  // toggleDetails(index){
  //   this.goals[index].showDescription = !this.goals[index].showDescription;
  // }
  // deleteGoal(isComplete, index){
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

  //     if (toDelete){
  //       this.goals.splice(index,1)
  //       this.alertService.alertMe("The selected goal has been deleted")
  //     }
  //   }
  // }
  goToUrl(id){
    this.router.navigate(['/goals',id])
  }

  deleteGoal(index){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }

  constructor(private  goalService: GoalServiceService, alertService:AlertServiceService, private http:QuoteRequesService,private router:Router) { 
    this.goals =goalService.getGoals();
    this.alertService = alertService;
    

  }

  ngOnInit(): void {
    // interface ApiResponse{
    //   author:string;
    //   quote:string;
    // }
  //   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(
  //     data=>{
  //     this.quote = new Quote(data.author, data.quote)
  //   },err=>{
  //     this.quote = new Quote("Winston Churchill","Never never give up!")
  //     console.log("An error occurred")
  // }
  //   )

  this.http.quoteRequest()
  this.quote = this.http.quote
  }

}
