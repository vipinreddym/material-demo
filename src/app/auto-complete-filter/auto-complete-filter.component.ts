import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { Router } from '@angular/router';


export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-auto-complete-filter',
  templateUrl: './auto-complete-filter.component.html',
  styleUrls: ['./auto-complete-filter.component.css']
})
export class AutoCompleteFilterComponent implements OnInit {
  public token:any;

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });
  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  public search: any;
  public data : any =[];
  public noOfItemsToShowInitially: number = 5;
  public itemsToLoad: number = 1;
  public isFullListDisplayed: boolean = false;
  public itemsToShow;
  public display:boolean = false;
  public countries: any = [
    { 'city': 'abbeville', 'state': 'Louisiana' },
    { 'city': 'Aberdeen', 'state': 'Maryland' },
    { 'city': 'Aberdeen', 'state': 'Mississippi' },
    { 'city': 'Aberdeen', 'state': 'South Dakota' },
    { 'city': 'Aberdeen', 'state': 'Washington' },
    { 'city': 'Abilene', 'state': 'Texas' },
    { 'city': 'Abilene', 'state': 'Kansas' },
    { 'city': 'Abingdon', 'state': 'Virginia' },
    { 'city': 'Abington', 'state': 'Massachusetts' },
    { 'city': 'Abington', 'state': 'Massachusetts' },
    { 'city': 'Absecon', 'state': 'New Jersey' },
    { 'city': 'Accokeek', 'state': 'Maryland' },
    { 'city': 'Acton', 'state': 'Massachusetts' },
    { 'city': 'Acushnet', 'state': 'Massachusetts' },
    { 'city': 'Acworth', 'state': 'Georgia' },
    { 'city': 'Ada', 'state': 'Oklahoma' },
    { 'city': 'Adams', 'state': 'Massachusetts' },
    { 'city': 'Addison', 'state': 'Illinois' },
    { 'city': 'Addison', 'state': 'Texas' },
    { 'city': 'Adelanto', 'state': 'California' },
    { 'city': 'Adelphi', 'state': 'Maryland' },
    { 'city': 'Adrian', 'state': 'Michigan' },
    { 'city': 'Affton', 'state': 'Missouri' },
    { 'city': 'Agawam', 'state': 'Massachusetts' },
    { 'city': 'Agoura Hills', 'state': 'California' },
    { 'city': 'Ahuimanu', 'state': 'Hawaii' },
    { 'city': 'Aiea', 'state': 'Hawaii' },
    { 'city': 'Aiken', 'state': 'South Carolina' },
    { 'city': 'Air Force Academy', 'state': 'Colorado' },
    { 'city': 'Airmont', 'state': 'New York' },
    { 'city': 'Akron', 'state': 'Ohio' },
    { 'city': 'Alabaster', 'state': 'Alabama' },
    { 'city': 'Alachua', 'state': 'Florida' },
    { 'city': 'Alameda', 'state': 'California' },
    { 'city': 'Alamo', 'state': 'California' },
    { 'city': 'Alamo', 'state': 'Texas' },
    { 'city': 'Alamo Heights', 'state': 'Texas' },
    { 'city': 'Alamogordo', 'state': 'New Mexico' },
    { 'city': 'Bath', 'state': 'Maine' },
    { 'city': 'Bath', 'state': 'New York' },
    { 'city': 'Baton Rouge', 'state': 'Louisiana' },
    { 'city': 'Battle Creek', 'state': 'Michigan' },
    { 'city': 'Battle Ground', 'state': 'Washington' },
    { 'city': 'Bay City', 'state': 'Texas' },
    { 'city': 'Bay City', 'state': 'Michigan' },
    { 'city': 'Bay Minette', 'state': 'Alabama' },
    { 'city': 'Bay Point', 'state': 'California' },
    { 'city': 'Bay Shore', 'state': 'New York' },
    { 'city': 'Bay St. Louis', 'state': 'Mississippi' },
    { 'city': 'Bay Village', 'state': 'Ohio' },
    { 'city': 'Bayonet Point', 'state': 'Florida' },
    { 'city': 'Cedarhurst', 'state': 'New York' },
    { 'city': 'Cedartown', 'state': 'Georgia' },
    { 'city': 'Celina', 'state': 'Ohio' },
    { 'city': 'Center Line', 'state': 'Michigan' },
    { 'city': 'Center Moriches', 'state': 'New York' },
    { 'city': 'Center Point', 'state': 'Alabama' },
    { 'city': 'Centereach', 'state': 'New York' },
    { 'city': 'Centerville', 'state': 'Ohio' },
    { 'city': 'Centerville', 'state': 'Utah' },
    { 'city': 'Central Falls', 'state': 'Rhode Island' },
    { 'city': 'Central Islip', 'state': 'New York' },
    { 'city': 'Central Manchester', 'state': 'Connecticut' },
    { 'city': 'Central Point', 'state': 'Oregon' }
  ]

  constructor(private fb: FormBuilder,
    public router: Router) { }
  

  ngOnInit() {

    this.token = localStorage.getItem('token');
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );


    this.itemsToShow = this.countries.slice(0, this.noOfItemsToShowInitially);
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

 loadmore(select) {
    if (this.noOfItemsToShowInitially <= this.countries.length) {
      // Update ending position to select more items from the array
      this.noOfItemsToShowInitially += this.itemsToLoad;
      this.itemsToShow = this.countries.slice(0, this.noOfItemsToShowInitially);
    }
    else {
      this.isFullListDisplayed = true;
    } 
  }

  selectCities(event){
    console.log(event);
    // this.search = event;
    console.log("event", event)
     
  }
  onDisplay(){
    // if(this.search){
      this.display = true;
    // }else {
    //   this.display = false;
   
    // }
  
  }
  logOut(){
    localStorage.clear();
    
    this.router.navigate(['/login']);

  }

}
