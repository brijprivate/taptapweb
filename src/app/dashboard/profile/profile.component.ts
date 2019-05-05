import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  readonly: boolean = true;
  profiledata: any;
  display_image: String = "";

  name: string;
  city: string;
  address: string;
  country: string;
  zip: string;
  website: string;
  imgid: string;
  baseurl = 'http://ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/'
  constructor(private SharedService: SharedService, public api: LoginService) {
    this.SharedService.profiledata.subscribe(profiledata => {
      console.log('profilepage ', profiledata);
      this.profiledata = profiledata;
    });
  }

  ngOnInit() {
    this.presave();
    this.getimage()
  }

  presave() {
    this.name = this.profiledata.result.name;
    this.city = this.profiledata.result.city;
    this.address = this.profiledata.result.address;
    this.country = this.profiledata.result.country;
    this.zip = this.profiledata.result.zip;
    this.website = this.profiledata.result.website;
    if(this.profiledata.result.imageId!= null){
      this.imgid = this.profiledata.result.imageId._id;

    }

  }

  getimage() {

    if (this.imgid) {
      this.display_image = this.baseurl + 'file/getImage?imageId=' + this.imgid;
      console.log(this.display_image)
    }
  }
  save() {
    let data = {
      name: this.name,
      city: this.city,
      address: this.address,
      country: this.country,
      zip: this.zip,
      website: this.website,
      imageId: this.imgid,
    }
    console.log(data);
    this.api.saveprofile(data).subscribe(result => {
      console.log('saved', result);
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }

  editprofile() {
    this.readonly = false;
  }
  cancel() {
    this.readonly = true;
  }

  selectFile(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      let file: File = fileList[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.display_image = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      console.log("File information :");
      console.log(file);
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.upload(formData);
    }
  }


  upload(file) {
    let _base = this;


    _base.api.upload(file)
      .then(function (success: any) {
        console.log(success.upload._id);
        _base.imgid = (success.upload._id);
      }, function (error) {
        console.log(error);
      });
  }
}
