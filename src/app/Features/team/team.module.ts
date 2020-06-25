import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ProviderAst } from '@angular/compiler';
import { TeamService } from './team.service';


@NgModule({
  declarations: [TeamComponent, TeamListComponent],
  imports: [
    CommonModule,
    TeamRoutingModule
  ],
  providers:[
    TeamService
  ]
})
export class TeamModule { }
