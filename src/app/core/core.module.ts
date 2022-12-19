import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    PageNotFoundComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
