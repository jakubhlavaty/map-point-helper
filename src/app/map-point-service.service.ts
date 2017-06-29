import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MapPointServiceService {
  private _markers: marker[] = [];
  private markerAddedSource = new Subject<marker>();
  private markerRemovedSource = new Subject<marker>();
  private markersClearedSource = new Subject<void>();

  markerAdded$ = this.markerAddedSource.asObservable();
  markerRemoved$ = this.markerRemovedSource.asObservable();
  markersCleared$ = this.markersClearedSource.asObservable();

  constructor() { }

  get markers(): marker[] {
    return this._markers;
  }

  addMarker(marker: marker) {
    this._markers.push(marker);
    this.markerAddedSource.next(marker);
  }

  removeMarker(marker: marker) {
    let index: number = this._markers.indexOf(marker);
    if (index !== -1) {
      this._markers.splice(index, 1);
    }
    this.markerRemovedSource.next(marker);
  }

  clearMarkers() {
    this._markers = [];
    this.markersClearedSource.next();
  }
}

export interface marker {
  lat: number;
  lng: number;
  label: string;
}

