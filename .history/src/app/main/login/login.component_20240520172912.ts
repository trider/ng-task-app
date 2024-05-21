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
    password: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpClientService,
  ) { }

  ngOnInit(): void {

  
  }

  // onSubmit() {
	// 	this.httpService.postServiceData('http://127.0.0.1:5000/api/users/login/user',this.loginForm.value).subscribe(resp => {
	// 		if (resp.status === 'User Authenticated') {
  //       alert(JSON.stringify(resp));
	// 			localStorage.setItem('user', JSON.stringify(resp))
	// 			this.router.navigate(["accounts"])
	// 		} else {
	// 			alert("Invalid credentials");
	// 		}
	// 		});

	// }


  onSubmit() {    

    this.user = this.users.filter((user:any) => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password)[0];
    if(this.user !== null ){
      alert(this.user.userName + ' logged in')
      console.log('User found\n\n', this.user);
      sessionStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/home']);

    }
  
  }



}
