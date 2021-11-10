import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DesignManagementService } from 'src/app/services/design-management/design-management.service';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.scss'],
})
export class EditImageComponent implements OnInit {
  selectedFile: any;
  id: any;
  private img_id: any;
  constructor(
    private designService: DesignManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    this.route.paramMap.subscribe((prams) => {
      this.id = prams.get('id');
      console.log(this.id);
    });

    this.setImage();
  }

  setImage() {
    this.designService.getImageByDesignId(this.id).subscribe((res: any) => {
      this.selectedFile = res.message[0].img_url;
      this.img_id = res.message[0]._id;
      console.log(res);
      console.log(this.img_id);
    });
  }

  //assigning icon to selectedFile
  Upload(event: any) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedFile = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  update(value: any) {
    const fd = new FormData();
    fd.append('image', this.selectedFile);
    console.log(this.img_id);
    this.updateImage(fd);
  }

  updateImage(fd: any) {
    console.log('ye');
    this.designService.deleteImage(this.img_id).subscribe((res) => {
      console.log('deleted');
      this.designService.createImage(this.id, fd).subscribe((res) => {
        console.log(res);
        this.router.navigate(['../..']);
      });
    });
  }
}
