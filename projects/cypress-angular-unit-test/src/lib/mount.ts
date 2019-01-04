import {Type} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {TestingModule} from './testing-module';

/**
 * Mounts a subclass of TestingModule, your 'testing bed', a module containing your declarations, imports,
 * providers and entryComponents needed for your test. You can mock whatever you want using the TestingModule.
 * @param module
 * @param component
 */
export const mount = (module: Type<TestingModule>, component: any) => {
  const html = `
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <app-root></app-root>
      </body>
    `;
  // @ts-ignore
  const document = (cy as any).state('document');
  document.write(html);
  document.close();

  // @ts-ignore
  cy.get('app-root').then(el$ => {
    platformBrowserDynamic()
      .bootstrapModule(module)
      .then(moduleRef => {
        moduleRef.instance.app.bootstrap(component, el$.get(0));
      });
  });
};
