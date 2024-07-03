import { Component, Input, Output, EventEmitter, input } from "@angular/core";
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
  @Output("courseSelected")
  courseEmmiter = new EventEmitter<Course>();

  @Input({ required: true }) index: number;

  constructor() {}
  onCourseViewed() {
    console.log("course card clicked...");
    this.courseEmmiter.emit(this.course);
  }
}
