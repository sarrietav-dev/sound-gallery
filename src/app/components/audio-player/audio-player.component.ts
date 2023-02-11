import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
})
export class AudioPlayerComponent {
  @Input() title: string = 'Audio Player';
  @Input() audioNumber: number = 0;
  @Input() src: string = '';
  @ViewChild('player') player!: ElementRef<HTMLAudioElement>;
  isPlaying: boolean = false;

  constructor() {}

  handleClicked() {
    if (this.src === '') return;

    if (this.isPlaying) {
      this.player.nativeElement.pause();
    } else {
      this.player.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  handlePaused() {
    this.isPlaying = false;
  }

  handleEnded() {
    this.isPlaying = false;
  }
}
