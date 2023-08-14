import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public videos: string[] = [];
  private VIDEOS_KEY: string = 'videos';
  private fileName = "assets/videoTest/video.mp4"


  constructor() { }

  async loadVideos() {
    this.videos.push(this.fileName)
    console.log('video from videoService', this.videos)
    return this.videos;
  }

  // Load video as base64 from url
  async getVideoUrl(fullPath: any) {
    console.log('fullPath', fullPath)
    const path = fullPath.substr(fullPath.lastIndexOf('/') + 1);
    console.log('path', path)
    // const file = await Filesystem.readFile({
    //   path: path,
    //   directory: Directory.Data
    // });
    // console.log('file.data from video service', file)
    // return `data:video/mp4;base64,${file}`;
    return this.fileName
  }
}
