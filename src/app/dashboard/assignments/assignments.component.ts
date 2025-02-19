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

  constructor(private route: Router) {}
  // route = inject(Router);

  editUser() {
    console.log('well', this.route);
    this.route.navigate(['/assignments']);
  }
  deleteUser() {}
  downloadFile() {}
}
