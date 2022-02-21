import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { HeaderEComponent } from './header-e/header-e.component';

const routes: Routes = [
  {path:'header', component:HeaderEComponent},
  {path: '', redirectTo:'/header', pathMatch:'full'},
  {path:'converter', component:ConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
