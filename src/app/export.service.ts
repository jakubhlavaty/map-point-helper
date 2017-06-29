import { Injectable } from '@angular/core';
import {marker} from "./map-point-service.service";

@Injectable()
export class ExportService {

  constructor() { }

  export(markers: marker[], itemTemplate: string, separator: string) {
    let itemList: string[] = [];
    for (var marker of markers) {
      let lat = marker.lat;
      let lng = marker.lng;
      itemList.push(itemTemplate.replace("${lat}", lat.toString()).replace("${lng}", lng.toString()));
    }
    return itemList.join(separator);
  }
}
