import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import * as pdfjsLib from 'pdfjs-dist';
import * as mammoth from 'mammoth';

(
  pdfjsLib as any
).GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.js`;

@Component({
  selector: 'app-print',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],

  templateUrl: './print.component.html',
  styleUrl: './print.component.css',
})
export class PrintComponent {
  form: FormGroup;
  currentStep = 0;
  steps = ['Upload File', 'Delivery Details', 'Payment', 'Complete'];

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
  pageCount: number | null = null;

  async handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const fileType = file.name.split('.').pop()?.toLowerCase();

    if (fileType === 'pdf') {
      console.log('file', await this.countPdfPages(file));

      this.pageCount = await this.countPdfPages(file);
    } else if (fileType === 'docx') {
      this.pageCount = await this.countDocxPages(file);
    } else {
      alert('Invalid file type. Only PDF and DOCX are allowed.');
      input.value = ''; // Reset input
    }
  }

  async countPdfPages(file: File): Promise<number> {
    const reader = new FileReader();
    return new Promise<number>((resolve, reject) => {
      reader.onload = async () => {
        const typedArray = new Uint8Array(reader.result as ArrayBuffer);
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
        resolve(pdf.numPages);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  async countDocxPages(file: File): Promise<number> {
    const reader = new FileReader();
    return new Promise<number>((resolve, reject) => {
      reader.onload = async () => {
        const text = await mammoth.extractRawText({
          arrayBuffer: reader.result as ArrayBuffer,
        });
        const approxPages = Math.ceil(text.value.split(/\n/).length / 40); // Rough estimate
        resolve(approxPages);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }
}
