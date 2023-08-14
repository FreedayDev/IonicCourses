import { AfterViewInit, Component, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';

import { Capacitor } from '@capacitor/core';
import {CapacitorVideoPlayer} from 'capacitor-video-player'
import { Device } from '@capacitor/device';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  @ViewChild('video')
  captureElement!: ElementRef;
  videoPlayer: any;
  videos: string[] = [];


  constructor(public videoService: VideoService, private changeDetector: ChangeDetectorRef) {}

  async ngAfterViewInit() {
    this.videos = await this.videoService.loadVideos();

    const info = await Device.getInfo();
    console.log(info.platform)
    if (info.platform === "ios" || info.platform === "android") {
      this.videoPlayer = CapacitorVideoPlayer;
    } else {
      this.videoPlayer = CapacitorVideoPlayer
    }
  }

  async play(video: any) {
    // Get the video as base64 data
    const realUrl = await this.videoService.getVideoUrl(video);
    console.log('realUrl', realUrl)
    // Show the player fullscreen
    await this.videoPlayer.initPlayer({
      mode: 'fullscreen',
      url: realUrl,
      playerId: 'fullscreen',
      componentTag: 'app-tab1'
    });    
  }

 

}
