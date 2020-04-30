import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fitness Tracker';
  constructor(private authService: AuthService){}

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
