import { Component, OnInit } from '@angular/core';
import { Audio } from './models/Audio';
import { AudioStorageService } from './services/audio-storage/audio-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sound-gallery';
  audios: Audio[] = []

  constructor(private audioService: AudioStorageService) { }

  ngOnInit(): void {
    this.audioService.getAudios().subscribe(audios => {
      this.audios = audios
    });
  }
}
