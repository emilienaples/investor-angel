exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4695);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Header = ()=>{
    const [showSideBar, setShowSideBar] = (0,external_react_.useState)(false);
    console.log("nav.........", showSideBar);
    function handleClick(e) {
        e.preventDefault();
        console.log("Clicked me!");
        alert("Clicked me!");
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "custom_header",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "logo",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "./",
                            children: "Investor Angel"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "navLinks",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#about_page",
                                children: "About Us"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#lifeInsurance_page",
                                children: "Life Insurance Basics"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#annuity_page",
                                children: "Annuity\xa0Basics"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `sidebar_mobile ${showSideBar ? "showPanel" : "hidePanel"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "menu_toggle_bar_close",
                        onClick: ()=>setShowSideBar(false),
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 50 50",
                            width: "50px",
                            height: "50px",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        className: "logo",
                        href: "./",
                        children: "Investor Angel"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "navLinksMobile",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#about_page",
                                children: "About Us"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#lifeInsurance_page",
                                children: "Life Insurance Basics"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#annuity_page",
                                children: "Annuity\xa0Basics"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "flowbite-react"
var external_flowbite_react_ = __webpack_require__(7532);
;// CONCATENATED MODULE: ./src/components/Footer/index.js




const FooterDiv = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "custom_footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "social_icons",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 50 50",
                            width: "50px",
                            height: "50px",
                            children: [
                                "    ",
                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 30 30",
                            width: "30px",
                            height: "30px",
                            children: [
                                "    ",
                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 30 30",
                            width: "30px",
                            height: "30px",
                            children: [
                                "    ",
                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer_link",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "#about_page",
                        children: "About Us"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "#lifeInsurance_page",
                        children: "Life Insurance Basics"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "#annuity_page",
                        children: "Annuity\xa0Basics"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: "\xa9 2023 Investor Angel"
            })
        ]
    });
};
/* harmony default export */ const Footer = (FooterDiv);

;// CONCATENATED MODULE: ./src/pages/_document.js




function Document() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(next_document.Head, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Footer, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4695:
/***/ (() => {



/***/ })

};
;