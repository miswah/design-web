import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DesignManagementService } from 'src/app/services/design-management/design-management.service';

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrls: ['./design-list.component.scss'],
})
export class DesignListComponent implements OnInit {
  private designs: any;
  private image: any;
  public term: string = '';
  public designData: Array<any> = [];

  constructor(private designService: DesignManagementService) {}

  ngOnInit(): void {
    this.getDesignList();
  }

  getDesignList() {
    this.designService.getAllDesigns().subscribe((res: any) => {
      this.designs = res.message;
      console.log(this.designs);
      this.getAllImage();
    });
  }

  getAllImage() {
    this.designService.getAllImages().subscribe((res: any) => {
      this.image = res.message;
      // console.log(this.image);
      this.setDesignData();
    });
  }

  setDesignData() {
    this.designs.forEach((design: any) => {
      this.image.forEach((image: any) => {
        if (design._id == image.design_id) {
          this.designData.push({
            _id: design._id,
            description: design.description,
            title: design.title,
            type: design.type,
            img_url: image.img_url,
            thumbnail: image.thumbnail_url,
            img_id: image._id,
          });
        }
      });
    });

    console.log(this.designData);
    this.designService.designs = this.designData;
    localStorage.setItem('designData', JSON.stringify(this.designData));
  }
}
