import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Cursos</h2>

    <div *ngFor="let course of courses">
      <h3>{{ course.title }}</h3>
      <p>Preço: {{ course.price }}</p>

      <a [routerLink]="[course.id]">Ver detalhes</a>
    </div>
  `
})
export class CoursesComponent implements OnInit {

  courses: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any[]>('http://localhost:3000/courses')
      .subscribe(data => this.courses = data);
  }
}