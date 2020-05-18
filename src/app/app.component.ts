import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topMenus: TopMenu[] = [{
    title: '热门',
    link: ''
  },{
    title: '男装',
    link: ''
  },{
    title: '百货',
    link: ''
  },{
    title: '运动',
    link: ''
  },{
    title: '手机',
    link: ''
  },{
    title: '家纺',
    link: ''
  },{
    title: '食品',
    link: ''
  },{
    title: '电器',
    link: ''
  },
  {
    title: '鞋包',
    link: ''
  },{
    title: '水果',
    link: ''
  },{
    title: '汽车',
    link: ''
  },{
    title: '电脑',
    link: ''
  },{
    title: '内衣',
    link: ''
  },{
    title: '家装',
    link: ''
  },{
    title: '母婴',
    link: ''
  },{
    title: '美妆',
    link: ''
  },{
    title: '家具',
    link: ''
  }];
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
  handleTabSelected(topMenu: TopMenu){
    console.log(topMenu);
  }
}
