import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "#15af39";
  height = 0;
  width = 0;

  flightStatus: string = "Space shuttle ready for takeoff!";
  shuttleHeight: number = 0;
  flight = true
  
  boxColor= "#15af39"

  takeOff() {
    confirm("Confirm that the shuttle is ready for takeoff.");
    if (true) {
      this.flightStatus = "Shuttle in flight";
      this.shuttleHeight = 10000;
      this.boxColor = "blue";
    }
  }

  land() {
    alert("The shuttle is landing. Landing gear engaged.")
    this.flightStatus = "The shuttle has landed.";
      this.shuttleHeight = 0;
      this.boxColor = "green";
  }
  abortMission(){
    confirm("Confirm you would like to abort the mission")
    if (true) {
      this.flightStatus = "Mission aborted.";
      this.shuttleHeight = 0;
      this.boxColor = "red";
    }
  }
}
