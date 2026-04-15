import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: ':id',
    component: CourseDetailComponent
  }
];