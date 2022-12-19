import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) { }

  registerHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { username, email, password,  birthDate } = form.value;
    this.authService.register(username!, email!, password!, birthDate!)
      .subscribe(user => {
        this.router.navigate(['/'])
      });
  }
}
