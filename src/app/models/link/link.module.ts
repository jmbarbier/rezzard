import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDisplayComponent } from './link-display/link-display.component';

@NgModule({
  declarations: [LinkDisplayComponent],
  exports: [LinkDisplayComponent],

  imports: [
    CommonModule
  ]
})
export class LinkModule { }
