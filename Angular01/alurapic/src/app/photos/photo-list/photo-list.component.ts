import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];
  
  constructor(
    private PhotoService: PhotoService,
    private activateRoute: ActivatedRoute
    ){}
  
  ngOnInit(): void{
    
    const userName = this.activateRoute.snapshot.params.userName;

    this.PhotoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos, error => alert("DEU MERDA") );
  }

}
