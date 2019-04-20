import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = formBuilder.group({
      email: ["", [Validators.required]],
      password: ["",[Validators.required]],
      remember: [1,[Validators.required]]
    });

    // this.loginForm.valueChanges.subscribe((data: any) => console.log(data));
  }

  onSubmit() {
    console.log(this.loginForm);
    let login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService
      .login(login)
      .subscribe(
        response => {
          localStorage.setItem('_token',response._token);
          console.log(response);
        },
        error => console.log(error)
      );
  }
}
