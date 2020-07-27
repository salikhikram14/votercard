import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationserviceService } from '../service/registrationservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('f') register: NgForm;
  public selectedFile: any = File;

  constructor(private registrationService: RegistrationserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    const file = event.target.files[0];
    this.selectedFile = file;
  }

  onSubmit() {

    const voter = this.register.value;
    const formData = new FormData();
    formData.append('voter', JSON.stringify(voter));
    formData.append('photo', this.selectedFile);
    this.registrationService.addVoter(formData).subscribe(() => window.alert("voter registered successfully!!!"));
    this.router.navigate(['/']);
  }
}
