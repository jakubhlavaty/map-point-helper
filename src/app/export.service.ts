import { Injectable } from '@angular/core';
import {marker} from "./map-point-service.service";
import {GeneratorService} from "./generator.service";
const LAT = "${lat}";
const LNG = "${lng}";
const INDEX = "${i}";

@Injectable()
export class ExportService {

  constructor(private generatorService: GeneratorService) { }

  export(markers: marker[], itemTemplate: string, separator: string) {
    let itemList: string[] = [],
      i: number = 0;

    for (var marker of markers) {
      let lat = marker.lat;
      let lng = marker.lng;

      let item = itemTemplate;
      while (item.indexOf(LAT) > -1) {
        item = item.replace(LAT, lat.toString());
      }
      while (item.indexOf(LNG) > -1) {
        item = item.replace(LNG, lng.toString());
      }
      while (item.indexOf(INDEX) > -1) {
        item = item.replace(INDEX, String(i));
      }

      item = this.generatorService.applyGenerators(item);

      itemList.push(item);
      i++;
    }
    return itemList.join(separator);
  }
}
