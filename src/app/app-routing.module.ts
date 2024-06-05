import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCobrosComponent } from './lista-cobros/lista-cobros.component';
import { RegistrarCobroComponent } from './registrar-cobro/registrar-cobro.component';


const routes: Routes = [
  {path: 'cobros', component:ListaCobrosComponent },
  {path: '', redirectTo: '/cobros', pathMatch: 'full'},
  {path: 'registrar-cobro', component: RegistrarCobroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
