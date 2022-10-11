import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { PagesComponent } from './pages.component';
import { PartidosComponent } from './partidos/partidos.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'partidos',
        component: PartidosComponent,

      },
      {
        path: 'encuestas',
        component: EncuestasComponent
      },
      {
        path: 'rankings',
        component: RankingsComponent
      },
      {
        path: '**',
        redirectTo: 'partidos'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
