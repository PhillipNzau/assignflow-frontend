import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  router = inject(Router);
  isRouteActive(routePath: string): boolean {
    return this.router.url.includes(routePath);
  }

  logOut() {
    // Implement logout logic here
    this.router.navigate(['/auth']);
  }
}
