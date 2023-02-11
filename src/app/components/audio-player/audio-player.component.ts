import { Component, Input } from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html'
})
export class AudioPlayerComponent {
  @Input() title: string = "Audio Player";
  @Input() audioNumber: number = 0;
}
