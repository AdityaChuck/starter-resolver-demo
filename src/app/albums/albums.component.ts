import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { IAlbum } from './ialbum';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[]

  constructor( private albumService: AlbumService ) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data
    })
  }

}
