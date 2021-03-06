import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HeaderComponent } from './header/header.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [

  { path: '', component: HeaderComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'data-protection', component: DataProtectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
