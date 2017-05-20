import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/lato-font/css/lato-font.min.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);
