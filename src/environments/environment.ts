// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  wp : {
    "serverApiUrl"     : "https://angularxo-wp.mysite4u.net/wp-json/wc/v3/",
    "productsEndPoint" : "products",
    "consumer_key"     : "ck_4be33523cb7786a5440888747fea2519f03b211c",
    "consumer_secret"    : "cs_768a7eb3c80f0039c52efd5f0bcadedf35f175f9"
  },
  endpoints: {
    "products"  : "https://angularxo-wp.mysite4u.net/wp-json/wc/v3/products?consumer_key=ck_4be33523cb7786a5440888747fea2519f03b211c&consumer_secret=cs_768a7eb3c80f0039c52efd5f0bcadedf35f175f9",
    "posts"     : "https://angularxo-wp.mysite4u.net/wp-json/wp/v2/posts",
    "users"     : "https://angularxo-wp.mysite4u.net/wp-json/wp/v2/users"
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
