import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../services/course.service';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {

  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.courseService.getCourseById(id).subscribe(data => {
        this.course = data;
      });
    }
  }

  addToCart() {
    this.cartService.addToCart(this.course);
  }
}