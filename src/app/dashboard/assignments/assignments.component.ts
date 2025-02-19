import { Component } from '@angular/core';
import { AssignFlowTableComponent } from '../shared/components/assign-flow-table/assign-flow-table.component';

@Component({
  selector: 'app-assignments',
  imports: [AssignFlowTableComponent],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent {
  icons = {
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" viewBox="0 0 24 24" stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="stroke-purple-400"><path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/></svg>`,
    view: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
    delete: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`,
    edit: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`,
  };
  assignments = [
    {
      '#': 1,
      Name: 'John Doe',
      Course: 'CS',
      Status: 'Submitted',
      File: 'file1.pdf',
    },
    {
      '#': 2,
      Name: 'Jane Smith',
      Course: 'Math',
      Status: 'Pending',
      File: 'file2.pdf',
    },
  ];

  actions = [
    { label: this.icons.download, callback: this.downloadFile() },
    { label: 'Edit', callback: this.editUser() },
    { label: 'Delete', callback: this.deleteUser() },
  ];
  lol = [];
  editUser() {
    console.log('well');
  }
  deleteUser() {}
  downloadFile() {}
}
