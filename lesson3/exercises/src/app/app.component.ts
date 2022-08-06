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

  shuttleMovement(shuttleBackground, direction) : any {
    let maxHeight = parseInt(shuttleBackground.getBoundingClientRect().height);
    let maxWidth = parseInt(shuttleBackground.getBoundingClientRect().width);
    if (direction === "right") {
      if (parseInt(this.xPosition) >= maxWidth - 80) {
         
          this.rightBorder = true;
      } else {
        let movement = parseInt(this.xPosition) + 10 +'px';
        this.xPosition= movement;
        this.leftBorder= false
      }

    } else if (direction === 'left') {
      if (parseInt(this.xPosition) === 0){
        this.leftBorder = true
      } else {
        let movement = parseInt(this.xPosition) - 10 + 'px';
        this.xPosition = movement;
        this.rightBorder = false
      } 
        } else if (direction === 'up') {
          if (parseInt(this.yPosition) >= maxHeight - 80) {
            this.topBorder = true
          } else {
            let movement = parseInt(this.yPosition) + 10 +'px';
            this.yPosition = movement;
            this.shuttleHeight += 1000;
            this.bottomBorder = false;
          }
        }else if (direction === 'down') {
          if (parseInt(this.yPosition)=== 0){
           this.bottomBorder= true; 
          } else {
            let movement = parseInt(this.yPosition)- 10 +'px';
            this.yPosition = movement;
            this.shuttleHeight -= 1000;
            this.topBorder = false;
          }
        }
 

}
}
