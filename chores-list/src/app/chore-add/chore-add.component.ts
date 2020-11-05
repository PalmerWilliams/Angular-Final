import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chore } from '../chore';
import { ChoreDataService } from '../chore-data.service';

@Component({
  selector: 'app-chore-add',
  templateUrl: './chore-add.component.html',
  styleUrls: ['./chore-add.component.css']
})
export class ChoreAddComponent implements OnInit {

  newChore: Chore = new Chore();

  addChore() {
    this.choreDataService.addChore(this.newChore).subscribe(
      p => this.router.navigate(["list"]));
  }

  constructor(private choreDataService: ChoreDataService, private router : Router) { }

  ngOnInit(): void {
  }

}
