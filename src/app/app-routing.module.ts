import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFormComponent } from './app-form/app-form.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';

const routes: Routes = [
  {
    path: '',
    component: DataCollectionComponent
  },
  {
    path: 'form',
    component: AppFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
