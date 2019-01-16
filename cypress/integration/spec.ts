// Required for JIT in NG-7
import 'core-js/es7/reflect';
import {AppComponent} from '../../src/app/app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'zone.js';
import {mount, TestingModule} from '../../projects/cypress-angular-unit-test/src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
class AppModule extends TestingModule {}

/* eslint-env mocha */
/* global cy */
describe('AppComponent', () => {
  beforeEach(() => {
    mount(AppModule, AppComponent);
  });

  it('works', () => {
    cy.contains('Welcome to app').should('be.visible');
  });

  it('works again', () => {
    cy.contains('Welcome to app').should('be.visible');
  });
});
