import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/shared/class.service';
import { Class } from 'src/app/shared/class.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  constructor(private service: ClassService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cls: Class) {
    this.service.formData = Object.assign({}, cls);
  }

  onDelete(id: number) {
    if (confirm('Bạn có chắc muốn xóa không ?')) {
      this.service.deleteClass(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Xóa thành công', 'Lớp');
      })
    }
  }

}
