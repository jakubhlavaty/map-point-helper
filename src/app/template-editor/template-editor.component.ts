import { Component, OnInit } from '@angular/core';
import {MapPointServiceService} from "../map-point-service.service";
import {ExportService} from "../export.service";

const EXAMPLE_TEMPLATE:string = '{\n   index: ${i},\n   lat: "${lat}",\n   lng: "${lng}",\n   UUID: "${gen:uuid}"\n }';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss']
})
export class TemplateEditorComponent implements OnInit {
  result: string = '';
  templateString: string = EXAMPLE_TEMPLATE;

  constructor(private mapService: MapPointServiceService, private exportService: ExportService) { }

  ngOnInit() {
  }

  export() {
    this.result = this.exportService.export(this.mapService.markers, this.templateString, "\n");
  }

}
