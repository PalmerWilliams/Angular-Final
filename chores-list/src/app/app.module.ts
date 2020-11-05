import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoreTasksComponent } from './chore-tasks/chore-tasks.component';
import { ChoreAddComponent } from './chore-add/chore-add.component';
import { NavComponent } from './nav/nav.component';
import { ChoreEditComponent } from './chore-edit/chore-edit.component';

@NgModule({
  declarations: [AppComponent, ChoreTasksComponent, ChoreAddComponent, NavComponent, ChoreEditComponent, ChoreEditComponent
  
    ],
  
    imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule 
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
