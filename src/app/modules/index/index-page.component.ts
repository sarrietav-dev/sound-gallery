import { Component } from '@angular/core';
import { AudioStorageService } from '@core/services/audio-storage/audio-storage.service';
import { Audio } from '@core/models/Audio';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent {
  title = 'sound-gallery';
  audios: Audio[] = [];

  constructor(private audioService: AudioStorageService) {}

  ngOnInit(): void {
    this.audioService.getAudios().subscribe((audios) => {
      this.audios = audios;
    });
  }
}
