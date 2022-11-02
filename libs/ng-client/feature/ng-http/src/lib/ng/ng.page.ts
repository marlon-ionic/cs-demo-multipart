import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Environment, ENVIRONMENT }  from '@cs-demo-multipart/shared/environment';

@Component({
  selector: 'cs-demo-multipart-ng',
  templateUrl: './ng.page.html',
  styleUrls: ['./ng.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NGPage implements OnInit {
  uploadForm: FormGroup;
  formData = new FormData();

  constructor(@Inject(ENVIRONMENT) private env: Environment, private http: HttpClient) {
    this.uploadForm = new FormGroup({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      oneImage: new FormControl<File|string|undefined>(undefined),
      anotherImage: new FormControl<File|string|undefined>(undefined)
    });
  }

  async ngOnInit(): Promise<void> {
    this.formData = new FormData();
    // await this.callPost();
  }

  async onSubmit() {
    console.log('submit', this.uploadForm.getRawValue());
    this.formData.set('firstName', this.uploadForm.get('firstName')?.value);
    this.formData.set('lastName', this.uploadForm.get('lastName')?.value);
    this.formData.set('email', this.uploadForm.get('email')?.value);
    this.http.post(`${this.env.apiHost}/file`, this.formData)
    .subscribe(
      {
        next: result => console.log('done', result),
        error: e => console.log('error', e)
      })
  }

  async uploadChange(direction: 'oneImage' | 'anotherImage', e: Event ) {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    console.log('uploadChange', e);
    const file = files.item(0);
    if(files !== null || file !== null) {
      this.formData.set(direction, file as Blob);
      this.uploadForm.patchValue({
        direction: file
      });
      console.log('files', direction, file, this.uploadForm.getRawValue());
    }

  }

  async callPost() {
    console.log('callPost', this.formData);
    try {
      this.formData.set('BlackBoxId', '0720r7tLPnPcgCKsx2OWmy0sImY0isMZ8hr7Ltg9OQL+jzea');
      this.formData.set('CheckAmount', '2.25');
      this.formData.set('Latitude', '80.567');
      this.formData.set('Longitude', '123.456');
      this.formData.set('Trace-Id', 'e68861b2-bea7-4d1b-a688-b65c2212e000');
      this.formData.set('OsVersion', '15.0');
      this.formData.set('ModelNumber', 'iPhone 12');
      this.formData.set('PlatformVersion', 'iOS');
      const response = await this.http.post(`${this.env.apiHost}/file`, this.formData, undefined );
      console.log('response', response);
    } catch(e) {
      console.log('post error', e);
    }}

  }
