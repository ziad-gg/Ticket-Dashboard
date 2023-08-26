exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 26601:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34077))

/***/ }),

/***/ 34077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./config/config.mjs
var config = __webpack_require__(59813);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(52196);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(42050);
// EXTERNAL MODULE: ./context/useInfo.tsx
var useInfo = __webpack_require__(18996);
;// CONCATENATED MODULE: ./components/SideBar.tsx







function SideBar() {
    const data = (0,useInfo/* useInfo */.w)();
    data.page = (0,navigation.usePathname)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-main h-screen w-20 relative  flex-col items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute w-[1.5px] h-full bg-w right-0 opacity-75 z-50"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[20%] w-full flex justify-center pt-4 group",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 1,
                    height: 1,
                    priority: true,
                    src: data.botImage,
                    unoptimized: true,
                    alt: "User",
                    className: "rounded-full w-12 h-12"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[80%] w-full flex flex-col gap-14",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex justify-center items-center relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    className: "text-white w-7 h-7",
                                    icon: free_solid_svg_icons/* faHome */.J9Y
                                })
                            }),
                            data.page === "/dashboard" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " absolute h-[4rem] w-[2.4px] bg-purble right-0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/settings",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    className: "text-white w-7 h-7",
                                    icon: free_solid_svg_icons/* faGear */.gr5
                                })
                            }),
                            data.page === "/dashboard/settings" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " absolute h-[4rem] w-[2.4px] bg-purble right-0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/manage",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    className: "text-white w-7 h-7",
                                    icon: free_solid_svg_icons/* faPlus */.r8p
                                })
                            }),
                            data.page === "/dashboard/manage" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " absolute h-[4rem] w-[2.4px] bg-purble right-0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/embeds",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    className: "text-white w-7 h-7",
                                    icon: free_solid_svg_icons/* faPager */.l2k
                                })
                            }),
                            data.page === "/dashboard/embeds" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " absolute h-[4rem] w-[2.4px] bg-purble right-0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/support",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    className: "text-white w-7 h-7",
                                    icon: free_solid_svg_icons/* faCircleQuestion */.FDd
                                })
                            }),
                            data.page === "/dashboard/support" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " absolute h-[4rem] w-[2.4px] bg-purble right-0"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/joy/node/Tooltip/index.js
var Tooltip = __webpack_require__(28901);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
;// CONCATENATED MODULE: ./components/Header.tsx







function Header() {
    const data = (0,useInfo/* useInfo */.w)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-main h-[5rem] flex flex-row-reverse",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-1/2 h-full flex flex-row-reverse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-[40%] h-full relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " absolute h-full w-[2.3px] left-3 bg-[#110f0f]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Logout",
                                variant: "solid",
                                size: "lg",
                                color: "danger",
                                sx: {
                                    width: 150,
                                    textAlign: "center",
                                    cursor: "pointer"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full h-full flex items-center ps-7",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 1,
                                            height: 1,
                                            priority: true,
                                            src: data.botImage,
                                            unoptimized: true,
                                            alt: "User",
                                            className: "rounded-full w-14 h-14"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-xl text-white ps-4",
                                            children: data.username
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                            icon: free_solid_svg_icons/* faArrowDown */.r5q,
                                            className: "ps-3 text-white text-xl"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[60%] h-full flex items-center justify-end text-white",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/support",
                                    className: "pe-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                            icon: free_solid_svg_icons/* faLifeRing */.uli,
                                            className: "pe-2 text-center"
                                        }),
                                        "Support Server"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/bot",
                                    className: "pe-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                            icon: free_solid_svg_icons/* faPlus */.r8p,
                                            className: "pe-2 text-center"
                                        }),
                                        "Bot invite"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/bot",
                                    className: "pe-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                            icon: free_solid_svg_icons/* faServer */.xf3,
                                            className: "pe-2 text-center"
                                        }),
                                        "servers"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-1/2 h-full text-white flex items-center ps-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: data.serverImage,
                        priority: true,
                        unoptimized: true,
                        height: 1,
                        width: 1,
                        alt: "server",
                        className: "rounded-full w-10 h-10"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "text-md ps-2",
                        children: [
                            data.serverName,
                            " server"
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./public/Loading.gif
/* harmony default export */ const Loading = ({"src":"/_next/static/media/Loading.7295c697.gif","height":1200,"width":1600,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/base/loading.tsx



function loading_Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-screen w-screen bg-[#282828] flex justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: Loading,
            height: 1,
            width: 1,
            className: "w-[70%] h-[70%] bg-black",
            quality: 100,
            alt: "Loading ..."
        })
    });
}

;// CONCATENATED MODULE: ./app/dashboard/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const getData = async ()=>{
    const request = await fetch(config/* default */.Z.api("metadata"), {
        cache: "reload",
        next: {
            revalidate: 5
        }
    });
    const data = await request.json();
    return data;
};
function RootLayout({ children }) {
    const [metadata, setMetadata] = (0,react_.useState)({});
    const [isLoading, setLoading] = (0,react_.useState)(true);
    const Route = (0,navigation.usePathname)();
    (0,react_.useEffect)(()=>{
        getData().then((data)=>{
            data.page = Route;
            setMetadata(data);
            setLoading(false);
            console.log(data);
        });
    }, []);
    if (isLoading) return /*#__PURE__*/ jsx_runtime_.jsx(loading_Loading, {});
    return /*#__PURE__*/ jsx_runtime_.jsx(useInfo/* default */.Z.Provider, {
        value: metadata,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-screen w-screen",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SideBar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col w-[calc(100%-5rem)] ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-[calc(100%-5rem)] ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Suspense, {
                                fallback: /*#__PURE__*/ jsx_runtime_.jsx(loading_Loading, {}),
                                children: children
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 18996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   w: () => (/* binding */ useInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ useInfo,default auto */ 
const InfoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useInfo = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InfoContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoContext);


/***/ }),

/***/ 36452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\zemad\OneDrive\Desktop\ticket-dashboard\app\dashboard\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;