import { Component, OnInit } from '@angular/core';
import { MonhocService } from 'src/app/shared/monhoc.service';
import { Monhoc } from 'src/app/shared/monhoc.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-monhoc-list',
  templateUrl: './monhoc-list.component.html',
  styleUrls: ['./monhoc-list.component.css']
})
export class MonhocListComponent implements OnInit {

  constructor(private service: MonhocService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(sub: Monhoc) {
    this.service.formData = Object.assign({}, sub);
  }

  onDelete(id: number) {
    if (confirm('Bạn có chắc muốn xóa không ?')) {
      this.service.deleteSub(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Xóa thành công', 'Môn Học');
      })
    }
  }

}
