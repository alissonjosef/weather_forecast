// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    openweathermap: {
      apiKey: '01df6d5f72c0af55b0087816822782a4',
      version: '2.5',
      url: 'https://api.openweathermap.org/data'
    },
    weatherapi: {
      apiKey: '4b53bbf3d9794e8a9d5145608212808',
      url: 'https://api.weatherapi.com',
      version: 'v1'
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
