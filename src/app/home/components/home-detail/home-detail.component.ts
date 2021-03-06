import { Component, OnInit } from '@angular/core';
import { ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  imageSliders:ImageSlider[] = [{
    imgUrl: 'http://seopic.699pic.com/photo/50039/8500.jpg_wh1200.jpg',
    link: '',
    caption: ''
  },{
    imgUrl:'http://seopic.699pic.com/photo/50034/3889.jpg_wh1200.jpg',
    link: '',
    caption: ''
  },{
    imgUrl: 'http://seopic.699pic.com/photo/50032/3300.jpg_wh1200.jpg',
    link: '',
    caption: ''
  },{
    imgUrl: 'http://seopic.699pic.com/photo/50029/8534.jpg_wh1200.jpg',
    link: '',
    caption: ''
  },{
    imgUrl: 'http://seopic.699pic.com/photo/50008/9194.jpg_wh1200.jpg',
    link: '',
    caption: ''
  },{
    imgUrl: 'http://seopic.699pic.com/photo/50007/0704.jpg_wh1200.jpg',
    link: '',
    caption: ''
  }];
  selectTabLink;
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params =>{
      this.selectTabLink = params.get('tabLink');
    })
  }

}
