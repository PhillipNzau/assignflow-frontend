import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-assignements',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './create-assignements.component.html',
  styleUrl: './create-assignements.component.css',
})
export class CreateAssignementsComponent {
  form: FormGroup;
  currentStep = 0;
  steps = ['Personal Info', 'Contact Details', 'Security'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitForm() {
    if (this.form.valid) {
      alert('Form Submitted!');
    } else {
      this.form.markAllAsTouched();
    }
  }
}
