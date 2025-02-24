import { Component, inject } from '@angular/core';
import { AssignFlowTableComponent } from '../shared/components/assign-flow-table/assign-flow-table.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-assignments',
  imports: [AssignFlowTableComponent, RouterModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent {
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

  constructor(private router: Router) {}
  // router = inject(Router);

  editUser() {
    console.log('well', this.router);
    this.router.navigate(['/assignments']);
  }
  viewUser = (row: any) => {
    this.router.navigate(['/assignments/' + row['#']]);
  };
  deleteUser() {}
  downloadFile() {}
}
