import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  pageCountUrl = environment.getPageCountUrl;

  http = inject(HttpClient);

  constructor() {}

  getPageCount(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.pageCountUrl, formData).pipe(
      map((res: any) => {
        if (res.status === 200) {
          localStorage.setItem('pageCount', res.pageCount);

          return res;
        }
      })
    );
  }
}
