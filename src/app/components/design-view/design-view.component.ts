import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DesignManagementService } from 'src/app/services/design-management/design-management.service';

@Component({
  selector: 'app-design-view',
  templateUrl: './design-view.component.html',
  styleUrls: ['./design-view.component.scss'],
})
export class DesignViewComponent implements OnInit {
  public designs: any;
  public design: any;
  private id: any;
  private img_id: any;

  constructor(
    private designService: DesignManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.designs = this.designService.designs;
  }

  ngOnInit(): void {
    this.setDesign();
  }

  setDesign() {
    //Getting id of the category from list commponent

    this.route.paramMap.subscribe((prams) => {
      this.id = prams.get('id');

      this.setData();
    });
  }

  setData() {
    this.designs.forEach((element: any) => {
      if (element._id == this.id) {
        this.design = element;
        this.img_id = element.img_id;
      }
    });
    console.log(this.design);
    console.log(this.img_id);
  }
  //618a89709aeab8b323fd63c5
  delete(id: string) {
    if (window.confirm('Are you sure to delete ')) {
      this.designService.deleteDesign(id).subscribe((res) => {
        this.designService.deleteImage(this.img_id).subscribe((res) => {
          this.router.navigate(['..']);
        });
      });
    }
  }
}
