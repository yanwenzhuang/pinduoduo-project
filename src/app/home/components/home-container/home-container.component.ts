import { Component, OnInit } from '@angular/core';
import { TopMenu, ImageSlider } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent  {
  constructor(private router: Router){

  }

  topMenus: TopMenu[] = [{
    title: '热门',
    link: 'hot',
    id: 1
  },{
    title: '男装',
    link: 'men',
    id: 2
  },{
    title: '百货',
    link: 'store',
    id: 3
  },{
    title: '运动',
    link: 'sport',
    id: 4
  },{
    title: '手机',
    link: 'phone',
    id: 5
  },{
    title: '家纺',
    link: 'home',
    id: 6
  },{
    title: '食品',
    link: 'food',
    id: 7
  },{
    title: '电器',
    link: 'eletrical',
    id: 8
  },
  {
    title: '鞋包',
    link: 'shoes',
    id: 9
  },{
    title: '水果',
    link: 'fruit',
    id: 10
  },{
    title: '汽车',
    link: 'car',
    id: 11
  },{
    title: '电脑',
    link: 'computer',
    id: 12
  },{
    title: '内衣',
    link: 'wear',
    id: 13
  },{
    title: '家装',
    link: 'decoration',
    id: 14
  },{
    title: '母婴',
    link: 'mom',
    id: 15
  },{
    title: '美妆',
    link: 'beauty',
    id: 16
  },{
    title: '家具',
    link: 'furniture',
    id: 17
  }];
 
  handleTabSelected(topMenu: TopMenu){
    this.router.navigate(['home',topMenu.link]);
  }

}
