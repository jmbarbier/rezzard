import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeDisplayComponent} from './node-display/node-display.component';

@NgModule({
  declarations: [NodeDisplayComponent],
  exports: [NodeDisplayComponent],
  imports: [
    CommonModule
  ]
})
export class NodeModule {
}
