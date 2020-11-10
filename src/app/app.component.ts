import { Component } from '@angular/core';
import { Satellite } from './satellite'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    
    this.displayList = [];
    
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          for (let i = 0; i < fetchedSatellites.length; i += 1) {
            let tempSatellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type,
              fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            this.sourceList.push(tempSatellite);
          }
          ;
          // make a copy of the sourceList to be shown to the user
          this.displayList = this.sourceList.slice(0);
          
 
       }.bind(this));
    }.bind(this));
 
 }
}


