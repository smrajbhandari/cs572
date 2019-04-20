import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  private signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
      accept: [0]
    });

    // this.signupForm.valueChanges.subscribe(value => console.log(value));
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.signupForm);
    let formValues = this.signupForm.value;

    let user = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password
    };

    this.authService.signup(user).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
