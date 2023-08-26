"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 98789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Czemad%5COneDrive%5CDesktop%5Cticket-dashboard%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\zemad\\OneDrive\\Desktop\\ticket-dashboard\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(98789)));
module.exports = __webpack_exports__;

})();