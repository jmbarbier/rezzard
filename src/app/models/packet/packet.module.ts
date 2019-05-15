import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PacketDisplayComponent} from './packet-display/packet-display.component';
import {PacketInfosComponent} from './packet-infos/packet-infos.component';

@NgModule({
  declarations: [PacketDisplayComponent, PacketInfosComponent],
  exports: [PacketDisplayComponent, PacketInfosComponent],
  imports: [
    CommonModule
  ]
})
export class PacketModule {
}
