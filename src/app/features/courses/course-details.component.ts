import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  template: `
    <h2>Detalhes do Curso</h2>

    <div *ngIf="course">
      <h3>{{ course.title }}</h3>
      <p>Preço: {{ course.price }}</p>

      <button (click)="addToCart()">Adicionar ao carrinho</button>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {

  course: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http
        .get(`http://localhost:3000/courses/${id}`)
        .subscribe(data => this.course = data);
    }
  }

  addToCart() {
    console.log('Adicionado ao carrinho');
  }
}