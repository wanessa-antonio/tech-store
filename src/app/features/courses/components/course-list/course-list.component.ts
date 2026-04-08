import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: any[] = [];

  constructor(private courseService: CourseService) {}


    ngOnInit(): void {
      this.courseService.getCourses().subscribe(data => {
       this.courses = data;
  });
}}
