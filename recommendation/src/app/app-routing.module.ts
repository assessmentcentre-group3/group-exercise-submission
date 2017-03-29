import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ChatcomponentComponent } from './chatcomponent/chatcomponent.component';

const appRoutes: Routes = [

  { path: 'chat',   component: ChatcomponentComponent },
  { path: '',   redirectTo: '/chat', pathMatch: 'full' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}