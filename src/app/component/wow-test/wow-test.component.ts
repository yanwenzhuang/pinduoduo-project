import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wow-test',
  templateUrl: './wow-test.component.html',
  styleUrls: ['./wow-test.component.scss']
})
export class WowTestComponent implements OnInit {
  test: string = "angular scan QR Code of the Campaign Site";
  imgURL: any;
  public imagePath;
  constructor() { }

  ngOnInit() {
  }

  fileChange(files){
    console.log("文件的内容：",files);
    if(files.length === 0){
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () =>{
      this.imgURL = reader.result;
    }
  }
}
