import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = [...COURSES];//if we don't have anything it will display the @empty feature stament

  onCourseSelected(course: Course) {
    console.log("card clicked", course);
  }
}
