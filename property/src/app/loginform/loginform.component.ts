import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Api1serviceService } from '../api1service.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private toast: ToastrService,
    private fb: FormBuilder,
    private api: Api1serviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get userid() {
    return this.loginForm.get('userid');
  }
  get password() {
    return this.loginForm.get('password');
  }

  saving(Formvalue: any) {
    const login = {
      userid: Formvalue.userid,
      password: Formvalue.password,
      type: 'admin',
    };

    console.log('from form', Formvalue);
    console.log(login);
    this.api.storeData2(Formvalue).subscribe((data) => {
      if (data.docs.length > 0) {
        this.router.navigate(['dashboard'], {});
        this.toast.success('Login successful');
      } else {
        this.toast.error('Failed to login');
      }
      console.log('data returned from server', data);
    });
  }
}