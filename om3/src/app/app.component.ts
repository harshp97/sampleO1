import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { IframesComponent } from "./iframes/iframes.component";
import { MphotoComponent } from "./mphoto/mphoto.component";

//2019
import data2019_1 from '../assets/y2019/year2019_1.json';
import data2019_2 from '../assets/y2019/year2019_2.json';
import data2019_3 from '../assets/y2019/year2019_3.json';
import data2019_4 from '../assets/y2019/year2019_4.json';
import data2019_5 from '../assets/y2019/year2019_5.json';
import data2019_6 from '../assets/y2019/year2019_6.json';
import data2019_7 from '../assets/y2019/year2019_7.json';
import data2019_8 from '../assets/y2019/year2019_8.json';
import data2019_9 from '../assets/y2019/year2019_9.json';
import data2019_10 from '../assets/y2019/year2019_10.json';
import data2019_11 from '../assets/y2019/year2019_11.json';
import data2019_12 from '../assets/y2019/year2019_12.json';

//2020
import data2020_1 from '../assets/y2020/year2020_1.json';
import data2020_2 from '../assets/y2020/year2020_2.json';
import data2020_3 from '../assets/y2020/year2020_3.json';
import data2020_4 from '../assets/y2020/year2020_4.json';
import data2020_5 from '../assets/y2020/year2020_5.json';
import data2020_6 from '../assets/y2020/year2020_6.json';
import data2020_7 from '../assets/y2020/year2020_7.json';
import data2020_8 from '../assets/y2020/year2020_8.json';
import data2020_9 from '../assets/y2020/year2020_9.json';
import data2020_10 from '../assets/y2020/year2020_10.json';
import data2020_11 from '../assets/y2020/year2020_11.json';
import data2020_12 from '../assets/y2020/year2020_12.json';


//2021
import data2021_1 from '../assets/y2021/year2021_1.json';
import data2021_2 from '../assets/y2021/year2021_2.json';
import data2021_3 from '../assets/y2021/year2021_3.json';
import data2021_4 from '../assets/y2021/year2021_4.json';
import data2021_5 from '../assets/y2021/year2021_5.json';
import data2021_6 from '../assets/y2021/year2021_6.json';
import data2021_7 from '../assets/y2021/year2021_7.json';
import data2021_8 from '../assets/y2021/year2021_8.json';
import data2021_9 from '../assets/y2021/year2021_9.json';
import data2021_10 from '../assets/y2021/year2021_10.json';
import data2021_11 from '../assets/y2021/year2021_11.json';
import data2021_12 from '../assets/y2021/year2021_12.json';

//2022
import data2022_1 from '../assets/y2022/year2022_1.json';
import data2022_2 from '../assets/y2022/year2022_2.json';
import data2022_3 from '../assets/y2022/year2022_3.json';
import data2022_4 from '../assets/y2022/year2022_4.json';
import data2022_5 from '../assets/y2022/year2022_5.json';
import data2022_6 from '../assets/y2022/year2022_6.json';
import data2022_7 from '../assets/y2022/year2022_7.json';
import data2022_8 from '../assets/y2022/year2022_8.json';
import data2022_9 from '../assets/y2022/year2022_9.json';
import data2022_10 from '../assets/y2022/year2022_10.json';
import data2022_11 from '../assets/y2022/year2022_11.json';
import data2022_12 from '../assets/y2022/year2022_12.json';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Upcomming Milan- Raipur(ShivDham)- 18 Jan 2023';
  tableofYear = 2019;
  monthofYear = 'January';

  Users: USERS[] = data2019_1;
  
  constructor(public dialog: MatDialog) { }

  
  // for Year only
  yearmonthButton(selectedYear:number,selectedMonth:string){
    this.tableofYear = selectedYear
    this.monthofYear = selectedMonth

    switch (selectedYear) {
     case 2019:
        this.monthChangeFun19(selectedMonth);
        break;  
     case 2020:
        this.monthChangeFun20(selectedMonth);
        break;
     case 2021:
        this.monthChangeFun21(selectedMonth);
        break;
     case 2022:
        this.monthChangeFun22(selectedMonth);
        break;
      //case 2023:
      // console.log("It is a Wednesday.");
      //   break;
     default:
        this.monthChangeFun19(selectedMonth);
        break;
    }
  }


  //for months of year 2019
  monthChangeFun19(selectedMonth: string){
    if(selectedMonth == 'January'){
      this.Users = data2019_1;
    }
    else if(selectedMonth == 'February'){
      this.Users = data2019_2;
    }
    else if(selectedMonth == 'March'){
      this.Users = data2019_3;
    }
    else if(selectedMonth == 'April'){
      this.Users = data2019_4;
    }
    else if(selectedMonth == 'May'){
      this.Users = data2019_5;
    }
    else if(selectedMonth == 'June'){
      this.Users = data2019_6;
    }
    else if(selectedMonth == 'July'){
      this.Users = data2019_7;
    }
    else if(selectedMonth == 'August'){
      this.Users = data2019_8;
    }
    else if(selectedMonth == 'September'){
      this.Users = data2019_9;
    }
    else if(selectedMonth == 'October'){
      this.Users = data2019_10;
    }
    else if(selectedMonth == 'November'){
      this.Users = data2019_11;
    }
    else{
      this.Users = data2019_12;
    }


  }

  //for months of year 2020
  monthChangeFun20(selectedMonth: string){
    if(selectedMonth == 'January'){
      this.Users = data2020_1;
    }
    else if(selectedMonth == 'February'){
      this.Users = data2020_2;
    }
    else if(selectedMonth == 'March'){
      this.Users = data2020_3;
    }
    else if(selectedMonth == 'April'){
      this.Users = data2020_4;
    }
    else if(selectedMonth == 'May'){
      this.Users = data2020_5;
    }
    else if(selectedMonth == 'June'){
      this.Users = data2020_6;
    }
    else if(selectedMonth == 'July'){
      this.Users = data2020_7;
    }
    else if(selectedMonth == 'August'){
      this.Users = data2020_8;
    }
    else if(selectedMonth == 'September'){
      this.Users = data2020_9;
    }
    else if(selectedMonth == 'October'){
      this.Users = data2020_10;
    }
    else if(selectedMonth == 'November'){
      this.Users = data2020_11;
    }
    else{
      this.Users = data2020_12;
    }


  }

  //for months of year 2021
  monthChangeFun21(selectedMonth: string){
    if(selectedMonth == 'January'){
      this.Users = data2021_1;
    }
    else if(selectedMonth == 'February'){
      this.Users = data2021_2;
    }
    else if(selectedMonth == 'March'){
      this.Users = data2021_3;
    }
    else if(selectedMonth == 'April'){
      this.Users = data2021_4;
    }
    else if(selectedMonth == 'May'){
      this.Users = data2021_5;
    }
    else if(selectedMonth == 'June'){
      this.Users = data2021_6;
    }
    else if(selectedMonth == 'July'){
      this.Users = data2021_7;
    }
    else if(selectedMonth == 'August'){
      this.Users = data2021_8;
    }
    else if(selectedMonth == 'September'){
      this.Users = data2021_9;
    }
    else if(selectedMonth == 'October'){
      this.Users = data2021_10;
    }
    else if(selectedMonth == 'November'){
      this.Users = data2021_11;
    }
    else{
      this.Users = data2021_12;
    }


  }

  //for months of year 2022
  monthChangeFun22(selectedMonth: string){
    if(selectedMonth == 'January'){
      this.Users = data2022_1;
    }
    else if(selectedMonth == 'February'){
      this.Users = data2022_2;
    }
    else if(selectedMonth == 'March'){
      this.Users = data2022_3;
    }
    else if(selectedMonth == 'April'){
      this.Users = data2022_4;
    }
    else if(selectedMonth == 'May'){
      this.Users = data2022_5;
    }
    else if(selectedMonth == 'June'){
      this.Users = data2022_6;
    }
    else if(selectedMonth == 'July'){
      this.Users = data2022_7;
    }
    else if(selectedMonth == 'August'){
      this.Users = data2022_8;
    }
    else if(selectedMonth == 'September'){
      this.Users = data2022_9;
    }
    else if(selectedMonth == 'October'){
      this.Users = data2022_10;
    }
    else if(selectedMonth == 'November'){
      this.Users = data2022_11;
    }
    else{
      this.Users = data2022_12;
    }


  }

  openDialog1(urlid:string) {
    this.dialog.open(IframesComponent, {
      data : urlid,    // or data: { pageValue: this.sendValue }
      height: '90%',
      width: '90%'
    });
  }

  openDialog2() {
    this.dialog.open(MphotoComponent, {
      height: '90%',
      width: '90%'
    });
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
  }

}


interface USERS {
  id: Number;
  date: string;
  place: string;
  ytid_b: string;
  ytid_s: string;
  email: string;
}