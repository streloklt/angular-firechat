// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCW6SCDdfTKgFrkOpMhYotKrXb0O7wuZQ8',
    authDomain: 'firechat-8c95b.firebaseapp.com',
    databaseURL: 'https://firechat-8c95b.firebaseio.com',
    projectId: 'firechat-8c95b',
    storageBucket: 'firechat-8c95b.appspot.com',
    messagingSenderId: '546460189427'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
