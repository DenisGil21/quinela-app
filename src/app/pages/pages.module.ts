import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { PartidosComponent } from './partidos/partidos.component';
import { RankingsComponent } from './rankings/rankings.component';



@NgModule({
  declarations: [
    PagesComponent,
    EncuestasComponent,
    PartidosComponent,
    RankingsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
