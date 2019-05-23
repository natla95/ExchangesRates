import { AuthService } from './../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signInForm: FormGroup;
  urlToReturn: string;
  isFormSubmitted = false;

  @ViewChild('loginError') loginError: ElementRef;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    console.log(';');
    this.signInForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.urlToReturn = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    const login = this.signInForm.value.login;
    const password = this.signInForm.value.password;
    this.isFormSubmitted = true;

    if (this.signInForm.valid) {
      const isSuccess = this.authService.signIn(login, password);
      if (isSuccess) {
        this.router.navigate([this.urlToReturn]);
        this.renderer.removeClass(this.loginError.nativeElement, 'visible');
      } else {
        this.renderer.addClass(this.loginError.nativeElement, 'visible');
      }
    }
  }
}
