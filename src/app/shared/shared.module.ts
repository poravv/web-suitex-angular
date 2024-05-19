import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbAlert,
    NgbCarouselModule
  ],
  exports:[
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbAlert,
    NgbCarouselModule
  ]
})
export class SharedModule { }
