import { Component, OnInit, Optional, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-iframes',
  templateUrl: './iframes.component.html',
  styleUrls: ['./iframes.component.css']
})
export class IframesComponent implements OnInit {

  urlId = "https://www.youtube.com/embed/"
  newUrlID:any = " ";

  constructor(public sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<IframesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

      this.newUrlID = data   //or data.pageValue;

    }

  ngOnInit(): void {
    this.urlId = this.urlId + this.newUrlID;   //"Y4Lfcm3V4yY"
    
    this.newUrlID = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlId);
  }

}
