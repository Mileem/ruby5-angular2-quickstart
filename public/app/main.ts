import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http'
import {ROUTER_PROVIDERS} from '@angular/router'
// import { AppComponent } from './app.component';
import {AppRouterComponent} from './app_router.component'

bootstrap(
  AppRouterComponent,
  [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]
);
