import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chore } from '../chore';
import { ChoreDataService } from '../chore-data.service';

@Component({
  selector: 'app-chore-edit',
  templateUrl: './chore-edit.component.html',
  styleUrls: ['./chore-edit.component.css']
})
export class ChoreEditComponent implements OnInit {

  editChores: Chore = new Chore()

  saveChore() {
    this.choreDataService.editChore(this.editChores)
    .subscribe(p => this.router.navigate(["list"]));
  }

  constructor(private choreDataService: ChoreDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.choreDataService.getChore(+param["id"])
      .subscribe(p => (this.editChores = p));
    });
  }

}
