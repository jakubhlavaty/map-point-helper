import { Component, OnInit } from '@angular/core';

import {
  AgmCoreModule, MouseEvent
} from '@agm/core';
import {MapPointServiceService, marker} from "../map-point-service.service";

@Component({
  selector: 'app-point-map',
  templateUrl: './point-map.component.html',
  styleUrls: ['./point-map.component.scss']
})
export class PointMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  markers: marker[] = [];

  constructor(private mapService: MapPointServiceService) {
    mapService.markerAdded$.subscribe(marker => {
      this.markers.push(marker);
    });
    mapService.markerRemoved$.subscribe(marker => {
      let index: number = this.markers.indexOf(marker);
      if (index !== -1) {
        this.markers.splice(index, 1);
      }
    });
    mapService.markersCleared$.subscribe(() => {
      this.markers = [];
    });
  }

  ngOnInit() {
  }

  mapClicked($event: MouseEvent) {
    this.mapService.addMarker({lat: $event.coords.lat, lng: $event.coords.lng, label: (this.markers.length + 1).toString()});
  }

  markerClicked(marker: marker) {
    this.mapService.removeMarker(marker);
  }
}
