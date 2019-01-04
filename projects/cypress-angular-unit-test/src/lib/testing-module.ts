/**
 * TestingModule can be used to create your test bed
 */
import {ApplicationRef} from '@angular/core';

export class TestingModule {
  app: ApplicationRef;

  ngDoBootstrap(app: ApplicationRef) {
    this.app = app;
  }
}
