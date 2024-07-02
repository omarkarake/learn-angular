import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "./../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input({
    required: true, //by default is false, so this will will make our input required when set to true, if we don't provide it it will give compilation error instead of runtime error
  })
  course: Course;
  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}
  onCourseViewed() {
    console.log("course card clicked...");
    this.courseSelected.emit(this.course);
  }
}
