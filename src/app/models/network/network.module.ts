import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NetworkDisplayComponent} from './network-display/network-display.component';
import {NodeModule} from '../node/node.module';
import {LinkModule} from '../link/link.module';
import {PacketModule} from '../packet/packet.module';

@NgModule({
  declarations: [NetworkDisplayComponent],
  exports: [NetworkDisplayComponent],
  imports: [
    CommonModule,
    NodeModule,
    LinkModule,
    PacketModule
  ]
})
export class NetworkModule {
}
