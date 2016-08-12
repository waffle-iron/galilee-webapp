// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'materialize-css': 'materialize-src',
  'materialize': 'vendor/angular2-materialize',
  'angular2-materialize': 'vendor/angular2-materialize',
  'ng2-file-upload': 'vendor/ng2-file-upload/ng2-file-upload.js',
  'dragula': 'vendor/dragula/dist/dragula.js',
  'ng2-dragula': 'vendor/ng2-dragula',
  'ng2-pagination': 'vendor/ng2-pagination/index.js',
  'angular2-moment': 'vendor/angular2-moment/index.js',
  'moment': 'vendor/moment/moment.js'
};

/** User packages configuration. */
const packages: any = {
  'materialize-src': {
    'main': 'js/bin/materialize.min.js'
  },
  'materialize': {
    'main': 'dist/materialize-directive.js',
    //'defaultExtension': 'js'
  },
  'vendor/ng2-file-upload': {
    defaultExtension: 'js'
  },
  'vendor/dragula': {
    defaultExtension: 'js'
  },
  'vendor/ng2-dragula': {
    defaultExtension: 'js'
  },
  'vendor/ng2-pagination': {
    defaultExtension: 'js'
  },
  'vendor/angular2-moment': {
    defaultExtension: 'js'
  }
  ,
  'vendor/moment': {
    defaultExtension: 'js'
  }
};




////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/admin',
  'app/end-user',
  'app/end-user/reading-practice',
  'app/end-user/readings',
  //'app/admin/side-nav',
  'app/admin/content-management/edit-reading-resources',
  'app/admin/content-management/update-practices',
  //'app/admin/update-practices-modal',
  'app/admin/content-management/update-practice-item',
  'app/admin/content-management/update-resources',
  'app/admin/content-management/update-resource-item',
  'app/admin/content-management/upload-resource',
  'app/end-user/reading-item',
  'app/end-user/practice-item',
  'app/end-user/resource-item',
  'app/end-user/reading-resource',
  'app/admin/content-management/update-resource-collection',
  'app/authentication/login',
  'app/authentication/signup',
  'app/admin/user-management/manage-users',
  'app/admin/user-management/edit-user',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
