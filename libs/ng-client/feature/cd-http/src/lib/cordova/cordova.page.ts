import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cs-demo-multipart-cordova',
  templateUrl: './cordova.page.html',
  styleUrls: ['./cordova.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CordovaPage implements OnInit {
  uploadForm: FormGroup;
  formData = new FormData();

  constructor(private http: HttpClient) {
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
    this.http.post('/api/file', this.formData)
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
}
