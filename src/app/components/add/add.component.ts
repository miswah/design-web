import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignManagementService } from 'src/app/services/design-management/design-management.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  title: any;
  description: any;
  type: any;
  rating: any;
  icon: any;
  selectedFile: any;
  designMade: boolean = false;
  design_Id: any;
  constructor(
    private designService: DesignManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  update(value: any) {
    this.designService.createNewDesign(value).subscribe((res) => {
      console.log(res);
      this.designMade = true;
      this.designService.getAllDesigns().subscribe((res: any) => {
        console.log(res.message[res.message.length - 1]);
        this.design_Id = res.message[res.message.length - 1]._id;
        console.log(this.design_Id);
      });
    });
  }

  //getting the icon set to selectedFile
  onIconUpload(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.icon = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedFile = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  //Form value Data
  setBrand(formValue: any) {
    const fd = new FormData();
    fd.append('image', this.selectedFile);
    this.addImage(fd);
  }

  addImage(fd: any) {
    this.designService.addNewImage(this.design_Id, fd).subscribe((res) => {
      console.log(res);
      this.router.navigate(['..']);
    });
  }

  makeDesign(value: any) {
    this.update(value);
  }
}
