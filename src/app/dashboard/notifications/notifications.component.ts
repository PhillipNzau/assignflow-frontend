import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule, RouterModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  notifications = [
    {
      icon: 'T',
      title: 'Tim',
      message: 'invited you to join the Events.inc organization',
      time: '2:30 AM',
      date: 'July 17, 2016',
      action: { confirm: true, decline: true },
    },
    {
      icon: 'OC',
      title: 'Objective C',
      message: 'will be closed in 3 days. Finish your remaining tasks.',
      time: '4:02 PM',
      date: 'September 17, 2016',
      action: { link: '#' },
    },
    {
      icon: 'J',
      title: 'John',
      message: 'commented on the Healthcare challenge.',
      time: '6:45 PM',
      date: 'July 17, 2016',
      action: { link: '#' },
    },
    {
      icon: 'Py',
      title: 'Python',
      message: 'will be closed in 3 days. Finish your remaining tasks.',
      time: '1:15 AM',
      date: 'September 17, 2016',
      action: { link: '#' },
    },
    {
      icon: 'M',
      title: 'Max',
      message: 'invited you to join the Microsoft organization',
      time: '9:30 AM',
      date: 'July 17, 2016',
      action: { confirm: true, decline: true },
    },
    {
      icon: 'JM',
      title: 'Javascript MD',
      message: 'will be closed in 3 days. Finish your remaining tasks.',
      time: '3:20 PM',
      date: 'September 17, 2016',
      action: { link: '#' },
    },
  ];
}
