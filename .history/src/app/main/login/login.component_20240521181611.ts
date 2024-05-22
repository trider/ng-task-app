import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariables } from 'src/app/common/global-variables';
import { Users } from '@app/common/data/users';
import { HttpClientService } from '@app/services/http-service/http-service.service';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    

  
  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  appVersion:string = GlobalVariables.appVersion;
  users:any = Users;
  user:any = null

  loginForm = new FormGroup({
    email: new FormControl('jonnygold@gmail.com'),
    password: new FormControl('1234'),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpClientService
  ) { }

  ngOnInit(): void {

  
  }


  onSubmit() {    

    this.httpService.postServiceData('/login', this.loginForm.value).subscribe((response:any) => { 

      console.log('response', response);
      if(response.isLoggedIn){
        sessionStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/home']);
      }
    })
    

  }




}
