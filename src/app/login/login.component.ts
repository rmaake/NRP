import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  loading = false;
  submited = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submited = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.form.username.value, this.form.password.value).pipe(
      first()
    ).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
      }
    );
  }
}
