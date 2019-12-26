import { Injectable } from '@angular/core';
import { Class } from './class.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  formData: Class;
  list: Class[];
  readonly rootURL = "http://localhost:50280/api"

  constructor(private http: HttpClient) { }

  postClass(formData: Class) {
    return this.http.post(this.rootURL + '/Class', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Class').toPromise().then(res => this.list = res as Class[])
  }

  putClass(formData: Class) {
    return this.http.put(this.rootURL + '/Class/' + formData.ClassID, formData);
  }

  deleteClass(id: number) {
    return this.http.delete(this.rootURL + '/Class/' + id);
  }
}
