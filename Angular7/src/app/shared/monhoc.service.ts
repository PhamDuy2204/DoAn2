import { Injectable } from '@angular/core';
import { Monhoc } from './monhoc.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonhocService {

  formData: Monhoc;
  list: Monhoc[];
  readonly rootURL = "http://localhost:50280/api"

  constructor(private http: HttpClient) { }

  postMon(formData: Monhoc) {
    return this.http.post(this.rootURL + '/MonHoc', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/MonHoc').toPromise().then(res => this.list = res as Monhoc[])
  }

  putSub(formData: Monhoc) {
    return this.http.put(this.rootURL + '/MonHoc/' + formData.MonHocID, formData);
  }

  deleteSub(id: number) {
    return this.http.delete(this.rootURL + '/MonHoc/' + id);
  }
}
