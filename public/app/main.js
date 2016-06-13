"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
// import { AppComponent } from './app.component';
var app_router_component_1 = require('./app_router.component');
platform_browser_dynamic_1.bootstrap(app_router_component_1.AppRouterComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS
]);
//# sourceMappingURL=main.js.map