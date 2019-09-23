import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ConfigsComponent } from './configs/configs.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'configs', component: ConfigsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
