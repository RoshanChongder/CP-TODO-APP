import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Routing Configuration */
const routes: Routes = [
  { path: '', redirectTo: "user/login", pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
