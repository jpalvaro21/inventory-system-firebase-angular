import { FirebaseAppConfig } from '@angular/fire';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: EnvironmentModel = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyCG5Dy4PbvOhHpuitxfxJlaiJAA6DaAvs0',
    authDomain: 'inventory-system-jp-dev.firebaseapp.com',
    databaseURL: 'https://inventory-system-jp-dev.firebaseio.com',
    projectId: 'inventory-system-jp-dev',
    storageBucket: 'inventory-system-jp-dev.appspot.com',
    messagingSenderId: '967381251622'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


export interface EnvironmentModel {
  production: boolean;
  firebaseConfig: FirebaseAppConfig;
}
