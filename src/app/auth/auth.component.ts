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
import { HotToastService } from '@ngxpert/hot-toast';
import { Router } from '@angular/router';
import { passwordMatchValidator } from './service/password-validator.service';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isStudent: boolean = true;
  isLogin: boolean = false;

  authService = inject(AuthService);
  toastService = inject(HotToastService);
  route = inject(Router);
  fb = inject(FormBuilder);

  // Reusable function for common fields
  private createCommonForm(): FormGroup {
    return this.fb.nonNullable.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+'),
          ],
        ],
        password: [
          '',
          [Validators.required, Validators.minLength(6)],
          [this.passwordValidator.bind(this)],
        ],
        confirmPassword: [
          '',
          [Validators.required, Validators.minLength(6)],
          [this.passwordValidator.bind(this)],
        ],
        fName: ['', [Validators.required, Validators.minLength(3)]],
        lName: ['', [Validators.required, Validators.minLength(3)]],
        gender: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator() }
    );
  }

  // Student registration form
  studentRegistrationForm = this.fb.nonNullable.group({
    ...this.createCommonForm().value,
    regNumber: [
      '',
      [Validators.required, Validators.pattern('[0-9]{2}[A-Z]{2}[0-9]{4}')],
    ],
    school: ['', [Validators.required]],
    college: ['', [Validators.required]],
    year: ['', [Validators.required]],
    semester: ['', [Validators.required]],
  });

  // Lecturer registration form
  lecturerRegistrationForm = this.createCommonForm();

  // Login form
  userLoginForm = this.fb.nonNullable.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+'),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)],
        [this.passwordValidator.bind(this)],
      ],
    }
    // { validators: passwordMatchValidator() }
  );

  // Password Validator to check if password has a blank
  passwordValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    const value: string = control.value;

    return new Promise((resolve) => {
      if (!value) {
        resolve(null);
        return;
      }

      const errors: ValidationErrors = {};

      if (/\s/.test(value)) {
        errors['containsSpace'] = true;
      }
      if (!/[A-Z]/.test(value)) {
        errors['missingUppercase'] = true;
      }
      if (!/[0-9]/.test(value)) {
        errors['missingNumber'] = true;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errors['missingSpecialChar'] = true;
      }

      resolve(Object.keys(errors).length > 0 ? errors : null);
    });
  }

  toggleStudent() {
    this.isStudent = !this.isStudent;
  }
  toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(type: string): void {
    if (type === 'student') {
      console.log('Student Form Submitted', this.studentRegistrationForm.value);
    } else if (type === 'login') {
      console.log('Login Form Submitted', this.userLoginForm.value);
    } else {
      console.log(
        'Lecturer Form Submitted',
        this.lecturerRegistrationForm.value
      );
    }
  }

  // simulate Submitted
  submit() {
    const data = {
      email: 'this.email',
      password: 'this.password',
    };
    this.authService.login(data).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
