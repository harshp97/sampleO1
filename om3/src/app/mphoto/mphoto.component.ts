import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-mphoto',
  templateUrl: './mphoto.component.html',
  styleUrls: ['./mphoto.component.css']
})
export class MphotoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MphotoComponent>) {

  }


  ngOnInit(): void {
  }

}
