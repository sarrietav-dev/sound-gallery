import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexPageComponent } from './index-page.component';
import { AudioPlayerModule } from '@app/shared/components/audio-player/audio-player.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    AudioPlayerModule,
    MatProgressSpinnerModule,
  ],
})
export class IndexModule {}
