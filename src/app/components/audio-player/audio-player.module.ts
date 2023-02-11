import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPlayComponent } from './components/icon-play/icon-play.component';
import { IconPauseComponent } from './components/icon-pause/icon-pause.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';



@NgModule({
  declarations: [
    IconPlayComponent,
    IconPauseComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AudioPlayerComponent
  ]
})
export class AudioPlayerModule { }
