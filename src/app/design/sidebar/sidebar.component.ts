import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  isAdmin: boolean = false;
  routes: any[] = [
    { title: `Dashboard`, icon: '<i class="fa-solid fa-house"></i>', path: 'teacher/dashboard' },
    { title: `Tests`, icon: '<i class="fa-solid fa-flask"></i>', path: 'teacher/test' },
    { title: `Questions`, icon: '<i class="fa-solid fa-question"></i>', path: 'teacher/question' },
    { title: `Reports`, icon: '<i class="fa-solid fa-chart-line"></i>', path: 'reports' },
  ];

  ngOnInit(): void {
    setInterval(() => {
      const teacher = JSON.parse(localStorage.getItem('teacher') || '');
      this.isAdmin = teacher.isAdmin;
    }, 5000)
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
