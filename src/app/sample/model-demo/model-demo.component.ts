import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-model-demo',
  templateUrl: './model-demo.component.html',
  styleUrls: ['./model-demo.component.css']
})
export class ModelDemoComponent implements OnInit {


  public trailerCoverImageUpload: FileUploader;
  imgFormData: any;
  image: any;
  url: any;
  ngOnInit() {
  }


  public fileOverBase(e: any): void {
    // this.hasBaseDropZoneOver = e;
    console.log(e);

  }
  animal: string;
  name: string;
  public trailerCoverImageURL = 'http://13.233.92.42:3001/api/v1.0/media/';
  constructor(public dialog: MatDialog) {

    this.trailerCoverImageURL = this.trailerCoverImageURL + '5c861cfe85814e0d4a2ac05e' + "/trailerCoverImageUrl";
    this.trailerCoverImageUpload = new FileUploader({ url: this.trailerCoverImageURL, disableMultipart: true });
    console.log(this.trailerCoverImageUpload.queue[0])
    this.trailerCoverImageUpload.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

  }
  public fileOverAnother(event: any): void {
    // this.hasAnotherDropZoneOver = e;
    console.log("eeeeeee", event);
    console.log(event.target.files[0]);
    this.imgFormData = new FormData();
    this.image = event.target.files[0]
    console.log(this.image)

    this.imgFormData.append("coverImage", this.image);
    this.url = '';
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
        var img: any = new Image();
        img.src = reader.result;


        img.onload = () => {

          this.url = event.target.result;
          console.log(this.url);

        };
      }
    }

  }



  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      height: '400px',
      data: { name: this.name, animal: this.animal }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;

    });
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {

    this.dialogRef.close();
    this.data.animal = '';
  }

}