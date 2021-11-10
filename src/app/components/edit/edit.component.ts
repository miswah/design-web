import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DesignManagementService } from 'src/app/services/design-management/design-management.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  title: any;
  description: any;
  type: any;
  private id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private designService: DesignManagementService
  ) {}

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    this.route.paramMap.subscribe((prams) => {
      this.id = prams.get('id');
      console.log(this.id);
    });
  }

  update(value: any) {
    this.designService.updateDesign(this.id, value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['../..']);
    });
  }
}
