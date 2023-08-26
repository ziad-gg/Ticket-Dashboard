"use strict";
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 27827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   "default": () => (/* binding */ Chart),
/* harmony export */   options: () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69127);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29002);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43223);
/* __next_internal_client_entry_do_not_use__ options,data,default auto */ 



chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Chart */ .kL.register(chart_js__WEBPACK_IMPORTED_MODULE_2__/* .CategoryScale */ .uw, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .LinearScale */ .f$, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .PointElement */ .od, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .LineElement */ .jn, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De);
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: "top",
            align: "start"
        },
        title: {
            display: false,
            text: "Tickets chart"
        }
    }
};
const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
];
const data = {
    labels,
    datasets: [
        {
            label: "Tickets",
            data: labels.map(()=>faker__WEBPACK_IMPORTED_MODULE_1___default().datatype.number({
                    min: -1000,
                    max: 1000
                })),
            borderColor: "rgba(93,79,177,255)",
            backgroundColor: "rgba(93,79,177,255)"
        }
    ]
};
function Chart() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__/* .Line */ .x1, {
        options: options,
        data: data
    });
}


/***/ })

};
;