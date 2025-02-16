import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignflow';

   private toastService = inject(HotToastService);

  showToast() {
    this.toastService.show('Hello World!')
  }
}
