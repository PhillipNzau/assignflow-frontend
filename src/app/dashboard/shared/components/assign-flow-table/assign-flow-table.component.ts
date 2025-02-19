import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-assign-flow-table',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  templateUrl: './assign-flow-table.component.html',
  styleUrl: './assign-flow-table.component.css',
})
export class AssignFlowTableComponent {
  @Input() title: string = '';
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Input() actions: { label: string; callback: (row: any) => void }[] = [];
  @Input() pageSize: number = 5;
  @Input() isViewAll: boolean = true;

  @Output() searchChange = new EventEmitter<string>();

  sanitizer = inject(DomSanitizer);

  searchTerm: string = '';
  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
  sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  isSvg(label: string): boolean {
    return label.trim().startsWith('<svg');
  }
}
