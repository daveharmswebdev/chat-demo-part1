// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCn52PGnU9BUygoF2357xHDoSM9Xd9bBzM',
    authDomain: 'monopoly-dev.firebaseapp.com',
    databaseURL: 'https://monopoly-dev.firebaseio.com',
    projectId: 'monopoly-dev',
    storageBucket: '',
    messagingSenderId: '319127352528'
  }
};
