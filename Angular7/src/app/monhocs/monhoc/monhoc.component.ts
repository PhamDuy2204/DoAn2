import { Component, OnInit } from '@angular/core';
import { MonhocService } from 'src/app/shared/monhoc.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css']
})
export class MonhocComponent implements OnInit {

  constructor(private service: MonhocService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      MonHocID: null,
      MonHocName: '',
      Diem15: '',
      Diem45: '',
      DiemTB: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.MonHocID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postMon(form.value).subscribe(res => {
      this.toastr.success('Thêm thành công', 'Môn Học');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putSub(form.value).subscribe(res => {
      this.toastr.info('Sửa thành công', 'Môn Học');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
