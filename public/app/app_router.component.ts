import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES , ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent } from './app.component'

@Component({
        selector: 'app-router',
        template: '<router-outlet></router-outlet>',
        directives: [ROUTER_DIRECTIVES],
        styles:[],
        providers: [
          ROUTER_PROVIDERS,
        ]
    })
@RouteConfig([
  { path: '/', name: 'App', component: AppComponent }
])
export class AppRouterComponent {}
