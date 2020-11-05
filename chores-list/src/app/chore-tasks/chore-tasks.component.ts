import { Component, OnInit } from '@angular/core';
import { Chore } from '../chore';
import { ChoreDataService } from '../chore-data.service';

@Component({
  selector: 'app-chore-tasks',
  templateUrl: './chore-tasks.component.html',
  styleUrls: ['./chore-tasks.component.css']
})
export class ChoreTasksComponent implements OnInit {
  chores: Chore[];

  getChores() : void {
    this.choreDataService.getChores().subscribe(c => this.chores = c)
  }

  deleateChore(id: number) : void {
    this.choreDataService.deleateChore(id).subscribe(p => this.getChores());
  }

  constructor(private choreDataService : ChoreDataService) { }

  
  ngOnInit(): void {
    this.getChores();
  }

}
