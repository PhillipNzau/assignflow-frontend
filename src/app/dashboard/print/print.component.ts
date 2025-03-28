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
  deliveryForm: FormGroup;
  currentStep = 0;
  steps = ['Upload File', 'Delivery Details', 'Payment', 'Complete'];
  pageCount: number | any;
  fileName: string | undefined = undefined;

  locations: string[] = ['Gate A', 'Gate C', 'Gate B'];
  totalPay: number = 0;

  constructor(private fb: FormBuilder, private printService: PrintService) {
    this.deliveryForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],

      location: ['', Validators.required],
      tCode: ['', Validators.required],
    });
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 0:
        return !!this.fileName; // Ensure file is uploaded
      case 1:
        return (
          this.deliveryForm.get('name')!.valid &&
          this.deliveryForm.get('phone')!.valid &&
          this.deliveryForm.get('location')!.valid
        );
      case 2:
        return true; // Payment step does not require form validation
      case 3:
        return this.deliveryForm.get('tCode')!.valid;
      default:
        return false;
    }
  }

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitForm() {
    if (this.deliveryForm.valid) {
      alert('Delivery Form Submitted!');
    } else {
      this.deliveryForm.markAllAsTouched();
    }
  }

  async handleFileInput(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.fileName = file.name;
      this.printService.getPageCount(file).subscribe({
        next: (count) => {
          this.pageCount = count.pageCount;
          this.totalPay = this.pageCount * 20;
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
