import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignFlowTableComponent } from '../../../shared/components/assign-flow-table/assign-flow-table.component';

@Component({
  selector: 'app-view-assignment',
  imports: [AssignFlowTableComponent],
  templateUrl: './view-assignment.component.html',
  styleUrl: './view-assignment.component.css',
})
export class ViewAssignmentComponent implements OnInit {
  currentRoute: string | null = null;
  route = inject(ActivatedRoute);

  assignments = [
    {
      '#': '1',
      Name: 'John Doe',
      Course: 'CS',
      Status: 'Done',
      File: 'file1.pdf',
    },
    {
      '#': '2',
      Name: 'Jane Smith',
      Course: 'Math',
      Status: 'Done',
      File: 'file2.pdf',
    },
    {
      '#': '3',
      Name: 'Alice Johnson',
      Course: 'Physics',
      Status: 'Done',
      File: 'file3.pdf',
    },
    {
      '#': '4',
      Name: 'Bob Brown',
      Course: 'Biology',
      Status: 'Done',
      File: 'file4.pdf',
    },
    {
      '#': '5',
      Name: 'Charlie Davis',
      Course: 'Chemistry',
      Status: 'Done',
      File: 'file5.pdf',
    },
    {
      '#': '6',
      Name: 'David Wilson',
      Course: 'History',
      Status: 'Done',
      File: 'file6.pdf',
    },
    {
      '#': '7',
      Name: 'Ella Martinez',
      Course: 'Philosophy',
      Status: 'Done',
      File: 'file7.pdf',
    },
    {
      '#': '8',
      Name: 'Frank Clark',
      Course: 'Political Science',
      Status: 'Done',
      File: 'file8.pdf',
    },
    {
      '#': '9',
      Name: 'Grace Lewis',
      Course: 'Economics',
      Status: 'Done',
      File: 'file9.pdf',
    },
    {
      '#': '10',
      Name: 'Hank Walker',
      Course: 'Statistics',
      Status: 'Done',
      File: 'file10.pdf',
    },
    {
      '#': '11',
      Name: 'Ivy Allen',
      Course: 'Literature',
      Status: 'Done',
      File: 'file11.pdf',
    },
    {
      '#': '12',
      Name: 'Jack Hall',
      Course: 'Art',
      Status: 'Done',
      File: 'file12.pdf',
    },
    {
      '#': '13',
      Name: 'Kelly Young',
      Course: 'Music',
      Status: 'Done',
      File: 'file13.pdf',
    },
    {
      '#': '14',
      Name: 'Leo King',
      Course: 'Engineering',
      Status: 'Done',
      File: 'file14.pdf',
    },
    {
      '#': '15',
      Name: 'Mia Wright',
      Course: 'Psychology',
      Status: 'Done',
      File: 'file15.pdf',
    },
    {
      '#': '16',
      Name: 'Noah Scott',
      Course: 'Nursing',
      Status: 'Done',
      File: 'file16.pdf',
    },
    {
      '#': '17',
      Name: 'Olivia Green',
      Course: 'Physics',
      Status: 'Done',
      File: 'file17.pdf',
    },
    {
      '#': '18',
      Name: 'Paul Adams',
      Course: 'Geology',
      Status: 'Done',
      File: 'file18.pdf',
    },
    {
      '#': '19',
      Name: 'Quinn Baker',
      Course: 'Astronomy',
      Status: 'Done',
      File: 'file19.pdf',
    },
    {
      '#': '20',
      Name: 'Ryan Carter',
      Course: 'Anthropology',
      Status: 'Done',
      File: 'file20.pdf',
    },
  ];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentRoute = params['id'];
    });
  }

  donwloadFile = () => {};
}
