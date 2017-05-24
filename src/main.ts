import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);


return this.http
  .get('url')
  .map((res: Response) => res.json()).subscribe((cos)=> return cos);
