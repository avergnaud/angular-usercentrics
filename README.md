Notes :
 * attention aux extensions navigateur du type "I still don't care about cookies". La requête vers [https://app.usercentrics.eu/browser-ui/latest/loader.js](https://app.usercentrics.eu/browser-ui/latest/loader.js) est bloquée.

Pistes KO :
 * angular standard avec `[attr.uc-src]="videoUrl"` [branche](https://github.com/avergnaud/angular-usercentrics/tree/ko-1)
 * angular standard avec `[src]="videoUrl"` [branche](https://github.com/avergnaud/angular-usercentrics/tree/ko-2)
 * [https://termageddon.freshdesk.com/support/solutions/articles/66000515704-improving-page-load-speed-when-using-the-usercentrics-cookie-consent-tool](https://termageddon.freshdesk.com/support/solutions/articles/66000515704-improving-page-load-speed-when-using-the-usercentrics-cookie-consent-tool) [branche](https://github.com/avergnaud/angular-usercentrics/tree/ko-3)
 * Appel à l'API usercentrics `window.UC_UI.restartEmbeddings()` et/ou `window.UC_UI.enableScriptsForServicesWithConsent()` dans les hooks ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked.

Seule solution trouvée :
 * unsafeHtml  dans [youtube-video.component.ts](https://github.com/avergnaud/angular-usercentrics/blob/feature/video-id-dynamique/src/app/youtube-video/youtube-video.component.ts) et `<div [innerHTML]="trustedHtml"></div>`

![demo](./docs/dynamic_demo.gif?raw=true)

# AngularUsercentrics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
