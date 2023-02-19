import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexPageComponent } from './index-page.component';
import { AudioPlayerModule } from '@app/shared/components/audio-player/audio-player.module';

@NgModule({
  declarations: [IndexPageComponent],
  imports: [CommonModule, IndexRoutingModule, AudioPlayerModule],
})
export class IndexModule {}
