import {Component, ViewEncapsulation} from '@angular/core';
import {MapPointServiceService} from "./map-point-service.service";
import {ExportService} from "./export.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MapPointServiceService, ExportService]
})
export class AppComponent {
  title = 'app';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
