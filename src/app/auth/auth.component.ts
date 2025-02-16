import { Component, inject } from '@angular/core';
import { AuthService } from './service/auth.service';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  imports: [CommonModule, ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isStudent: boolean = false;

  authService = inject(AuthService);
  toastService = inject(HotToastService);
  route = inject(Router);
  fb = inject(FormBuilder);

  // Reusable function for common fields
  private createCommonForm(): FormGroup {
    return this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fName: ['', [Validators.required, Validators.minLength(3)]],
      lName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  // Student registration form
  studentRegistrationForm = this.fb.nonNullable.group({
    ...this.createCommonForm().value,
    regNumber: ['', [Validators.required, Validators.pattern('[0-9]{2}[A-Z]{2}[0-9]{4}')]],
    school: ['', [Validators.required]],
    college: ['', [Validators.required]],
    year: ['', [Validators.required]],
  });

  // Lecturer registration form
  lecturerRegistrationForm = this.createCommonForm();


  submit() {
    const data = {
      email: 'this.email',
      password: 'this.password',
    }
    this.authService.login(data).subscribe({
      next: (response:any) => {
        console.log(response);
      },
      error: (error:any) => {
        console.error(error);
      }
     });
  }

   onSubmit(type: string): void {
    if (type === 'student') {
      console.log('Student Form Submitted', this.studentRegistrationForm.value);
    } else {
      console.log('Lecturer Form Submitted', this.lecturerRegistrationForm.value);
    }
  }
}
