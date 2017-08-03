import { Injectable } from '@angular/core';
import {UUID} from "angular2-uuid";

@Injectable()
export class GeneratorService {

  constructor() { }

  applyGenerators(templateString: string): string {
    var result = templateString;
    for (let entry of GENERATORS) {
      result = result.replace("${gen:" + entry.placeholder + "}", entry.generator.generate());
    }
    return result;
  }

}

class UUIDGenerator implements Generator {
  generate(): string {
    return UUID.UUID();
  }
}

class FallbackGenerator implements Generator {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  generate(): string {
    return this.value;
  }
}

export interface Generator {
  generate() : string;
}

export const GENERATORS = [
  { placeholder: "uuid", generator: new UUIDGenerator() },
  { placeholder: "seq", generator: new UUIDGenerator() }
];
