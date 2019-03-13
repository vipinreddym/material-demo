import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public id:any;
  public user:any;

  constructor(
    public appService: AppService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      
      this.id = params['id'];
      console.log(this.id);
    this.userData(this.id)
    });
  }
  userData(id) {
    console.log(id);

    this.appService.userDetails(id)
      .subscribe(
        (response: any) => {
          console.log(response);

          this.user = response.data;

        })

  }

}
