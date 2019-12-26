import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/shared/class.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor(private service: ClassService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ClassID: null,
      ClassName: '',
      Amount: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.ClassID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postClass(form.value).subscribe(res => {
      this.toastr.success('Thêm thành công', 'Lớp');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putClass(form.value).subscribe(res => {
      this.toastr.info('Sửa thành công', 'Lớp');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
