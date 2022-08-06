import { Component } from "@angular/core";
import { truncate } from "fs";

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

  rightBorder= false
  leftBorder = false
  topBorder = false
  bottomBorder = false

  takeOffEnabled: boolean = true;

xPosition = '115px'
yPosition = '0px'

  takeOff() {
    confirm("Confirm that the shuttle is ready for takeoff.");
    if (true) {
      this.flightStatus = "Shuttle in flight";
      this.shuttleHeight = 10000;
      this.boxColor = "blue";
     
    }
  }

  land(rocketImage) {
    alert("The shuttle is landing. Landing gear engaged.")
    this.flightStatus = "The shuttle has landed.";
      this.shuttleHeight = 0;
      this.boxColor = "green";
      this.flight = false;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';

  }
  abortMission(rocketImage){
    confirm("Confirm you would like to abort the mission")
    if (true) {
      this.flightStatus = "Mission aborted.";
      this.shuttleHeight = 0;
      this.boxColor = "red";
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';

    }
  }
  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
       let movement = parseInt(rocketImage.style.left) + 10 + 'px';
       rocketImage.style.left = movement;
       this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width= this.width - 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.shuttleHeight = this.shuttleHeight - 10000;
    } else {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.shuttleHeight = this.shuttleHeight + 10000;
    } 
 } 

}

