import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ProviderAst } from '@angular/compiler';
import { TeamService } from './team.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [TeamComponent, TeamListComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers:[
    TeamService
  ]
})
export class TeamModule { }
