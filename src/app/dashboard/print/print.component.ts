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
import { PrintService } from '../shared/services/print.service';

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
  pageCount: number | null = null;

  constructor(private fb: FormBuilder, private printService: PrintService) {
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

  async handleFileInput(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.printService.getPageCount(file).subscribe({
        next: (count) => {
          this.pageCount = count.pageCount;
        },
        error: (error) => {
          console.error(error);
        },
      });
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
