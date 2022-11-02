import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Environment, ENVIRONMENT }  from '@cs-demo-multipart/shared/environment';
import { CapacitorCookies } from '@capacitor/core';

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
    //Doesn't appear to set this cookie currently
    await CapacitorCookies.setCookie({
      url: this.env.apiHost,
      key: 'key',
      value: 'helloworld-cap-cookie'
    });
    this.http.post(`${this.env.apiEndpoint}/file`, this.formData, {
      withCredentials: true
    })
    .subscribe(
      {
        next: result => {
          console.log('done', result);
          console.log('cookies', document.cookie);
        },
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
