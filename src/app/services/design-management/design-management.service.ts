import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DesignManagementService {
  httpOptions: any;
  public designs: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  //New design
  createNewDesign(data: any) {
    return this.http.post(
      environment.apiUrl + '/design/create',
      data,
      this.httpOptions
    );
  }

  //get all designs from list
  getAllDesigns() {
    return this.http.get(environment.apiUrl + '/design/view-all');
  }

  //get images by design_id from list
  getImageByDesignId(design_id: string) {
    return this.http.get(environment.apiUrl + `/image/view/${design_id}`);
  }

  //get all images
  getAllImages() {
    return this.http.get(environment.apiUrl + `/image/view-all`);
  }

  //delete design
  deleteDesign(id: string) {
    return this.http.delete(environment.apiUrl + `/design/delete/${id}`);
  }

  //update Design
  updateDesign(id: string, data: any) {
    return this.http.put(
      environment.apiUrl + `/design/update/${id}`,
      data,
      this.httpOptions
    );
  }

  //update image
  addNewImage(id: string, data: any) {
    return this.http.post(environment.apiUrl + `/image/upload/${id}`, data);
  }

  //get image by desing id
  getImageBydesignid(id: string) {
    return this.http.get(environment.apiUrl + `/image/view/${id}`);
  }

  //delete Image
  deleteImage(id: string) {
    return this.http.delete(environment.apiUrl + `/image/delete/${id}`);
  }

  //new image
  createImage(id: string, data: any) {
    return this.http.post(environment.apiUrl + `/image/upload/${id}`, data);
  }
}
