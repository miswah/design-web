import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DesignListComponent } from './components/design-list/design-list.component';
import { DesignViewComponent } from './components/design-view/design-view.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { EditComponent } from './components/edit/edit.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'view/:id', component: DesignViewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'edit-image/:id', component: EditImageComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
