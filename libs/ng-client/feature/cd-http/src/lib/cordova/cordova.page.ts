
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Environment, ENVIRONMENT }  from '@cs-demo-multipart/shared/environment';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'cs-demo-multipart-cordova',
  templateUrl: './cordova.page.html',
  styleUrls: ['./cordova.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CordovaPage implements OnInit {
  uploadForm: FormGroup;
  formData = new FormData();

  constructor(@Inject(ENVIRONMENT) private env: Environment, private http: HTTP) {
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
    try {
      await this.http.post(`${this.env.apiHost}/file`, this.formData, undefined);
    } catch(e) {
      console.log('error', e);
    }

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
