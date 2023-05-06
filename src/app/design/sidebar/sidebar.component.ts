import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  constructor(
    private router: Router
  ) {}

  routes: any[] = [
    { title: `Dashboard`, icon: '<i class="fa-solid fa-house"></i>', path: 'teacher/dashboard' },
    { title: `Tests`, icon: '<i class="fa-solid fa-flask"></i>', path: 'teacher/test' },
    { title: `Questions`, icon: '<i class="fa-solid fa-question"></i>', path: 'teacher/question' },
    // { title: `Reports`, icon: '<i class="fa-solid fa-chart-line"></i>', path: '' },
    // { title: `Profile`, icon: '<i class="fa-regular fa-user"></i>', path: '' },
  ];

  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
