import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { AutoCompleteFilterComponent } from './auto-complete-filter/auto-complete-filter.component';



const routes : Routes = [
  
  { path: '', component:UsersComponent},
  { path: ':page', component:UsersComponent},
  { path: 'user-details/:id', component:UserDetailsComponent },
  

  // { path: 'add', component:AddUserComponent},
  // { path: 'edit-user/:id', component:AddUserComponent}
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    FormsModule,
  
  ],
  declarations: [
    UsersComponent,
    // AddUserComponent,
    EditUserComponent,
    UserDetailsComponent,
    NavbarComponent,
    // AutoCompleteFilterComponent,
    
  ]
})
export class UsersModule { }
