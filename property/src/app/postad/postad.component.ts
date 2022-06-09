import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css'],
})
export class PostadComponent implements OnInit {
  postForm: FormGroup;
  AppService: any;
  static find: any;
  array: any = [];
  userRecord: any = {
    name: '',
    email: '',
    phone: '',
    address: '',
    landmark: '',
    typeofprop: '',
    rent: '',
    description: '',
    upload: '',
    images: '',
  };
  data: any;
  response: any;
  formGroup: any;
  totalUseage: any;
  allUserData: any;
  allUser: any;
  empRecord: any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private api: ApiserviceService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      name: [this.userRecord.name],
      email: [this.userRecord.email],
      phone: [this.userRecord.phone],
      address: [this.userRecord.address],
      landmark: [this.userRecord.landmark],
      typeofprop: [this.userRecord.typeofprop],
      rent: [this.userRecord.rent],
      description: [this.userRecord.description],
      upload: [this.userRecord.upload],
      images: [this.userRecord.upload],
    });
  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]*@gmail.com')],
      ],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]],
      address: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
      typeofprop: ['', [Validators.required]],
      rent: ['', [Validators.required]],
      description: ['', [Validators.required]],
      upload: ['', [Validators.required]],
    });
  }

  get name() {
    return this.postForm.get('name')!;
  }
  get email() {
    return this.postForm.get('email')!;
  }
  get address() {
    return this.postForm.get('address')!;
  }

  get phone() {
    return this.postForm.get('phone')!;
  }
  get landmark() {
    return this.postForm.get('landmark')!;
  }
  get typeofprop() {
    return this.postForm.get('typeofprop')!;
  }
  get rent() {
    return this.postForm.get('rent')!;
  }
  get description() {
    return this.postForm.get('description')!;
  }
  get upload() {
    return this.postForm.get('upload')!;
  }
  get images() {
    return this.postForm.get('images')!;
  }

  saving(Formvalue: any) {
    const d = new Date();
    const property = {
      name: Formvalue.name,
      email: Formvalue.email,
      phone: Formvalue.phone,
      address: Formvalue.address,
      landmark: Formvalue.landmark,
      typeofprop: Formvalue.typeofprop,
      rent: Formvalue.rent,
      description: Formvalue.description,
      upload: Formvalue.upload,
      images: Formvalue.images,
      type: 'property',
      createdBy: d,
    };

    this.api.add('propertydb', property).subscribe(
      (res) => {
        console.log("response",res);
        if(res)
        {
        this.toastr.success('posted successfully');
        this.postForm.reset();
        }
        else{
          this.toastr.error('failed to post');
        }
      }
    );

    
  }
}
