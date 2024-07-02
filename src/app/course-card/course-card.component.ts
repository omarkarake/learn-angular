import { Course } from "./../model/course";
import { Component, Input } from "@angular/core";

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
}
