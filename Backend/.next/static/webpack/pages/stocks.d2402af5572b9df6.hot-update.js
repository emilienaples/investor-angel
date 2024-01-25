"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stocks",{

/***/ "./src/pages/stocks/index.js":
/*!***********************************!*\
  !*** ./src/pages/stocks/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_config_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/contants */ \"./src/config/contants.js\");\n/* harmony import */ var src_config_contants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_config_contants__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MaterialTable = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(src_config_contants__WEBPACK_IMPORTED_MODULE_2__.baseUrl, \"/stocks\")) // Replace with your API endpoint\n        .then(function(response) {\n            console.log(\"response\", response.data);\n            setData(response.data);\n        }).catch(function(error) {\n            console.error('Error fetching data: ', error);\n        });\n    }, []);\n    var edit_code = function(evt, id) {\n        var value = evt.target.value;\n        if (value != \"\") {\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(src_config_contants__WEBPACK_IMPORTED_MODULE_2__.baseUrl, \"/stocks/update_code\"), {\n                id: id,\n                code: value\n            }) // Replace with your API endpoint\n            .then(function(response) {\n                console.log(\"response\", response.data);\n                return;\n            // setData(response.data);\n            }).catch(function(error) {\n                console.error('Error fetching data: ', error);\n            });\n        }\n    };\n    var delete_icon = function(id) {\n        if (confirm(\"Do you want to delete?\")) {\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(src_config_contants__WEBPACK_IMPORTED_MODULE_2__.baseUrl, \"/stocks/delete\"), {\n                id: id\n            }) // Replace with your API endpoint\n            .then(function(response) {\n                console.log(\"response\", response.data);\n                var existing_stocks = data;\n                var new_data = existing_stocks.filter(function(s) {\n                    return s.id != id;\n                });\n                console.log(\"existing\", existing_stocks, new_data);\n                setData(new_data);\n            }).catch(function(error) {\n                console.error('Error fetching data: ', error);\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n        component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n        __source: {\n            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n            lineNumber: 57,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            __source: {\n                fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                    __source: {\n                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                        __source: {\n                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Name\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Category\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Image\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Code\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Actions\"\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n                    __source: {\n                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: data.map(function(row, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                            __source: {\n                                fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: row.name\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: row.category\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: src_config_contants__WEBPACK_IMPORTED_MODULE_2__.assetUrl + row.imageId,\n                                        alt: row.name,\n                                        style: {\n                                            width: '50px',\n                                            height: '50px'\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                        value: row.code,\n                                        onDoubleClick: function(e) {\n                                            e.target.readOnly = false;\n                                        },\n                                        onBlur: function(evt) {\n                                            edit_code(evt, row.id);\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 26\n                                        },\n                                        __self: _this1\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        onClick: function() {\n                                            return delete_icon(row.id);\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: \"Delete\"\n                                    })\n                                })\n                            ]\n                        }, index);\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(MaterialTable, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = MaterialTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MaterialTable);\nvar _c;\n$RefreshReg$(_c, \"MaterialTable\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTlCLENBQVBDLEdBQUcsRUFBRyxDQUFDRDs0Q0FBQUEsU0FBUyxDQUFDQyxHQUFHLEVBQUNjLEdBQUcsQ0FBQ2IsRUFBRTt3Q0FBQyxDQUFDOzs7Ozs7Ozs7cUdBQy9DaEIsb0RBQVM7Ozs7Ozs7bUhBQ1A2QyxDQUFNO3dDQUFDQyxPQUFPLEVBQUUsUUFBUTs0Q0FBSnpCLE1BQU0sQ0FBTkEsV0FBVyxDQUFDUSxHQUFHLENBQUNiLEVBQUU7Ozs7Ozs7O2tEQUFHLENBQU07Ozs7MkJBVnJDYyxLQUFLOzs7Ozs7QUFrQmhDLENBQUM7R0EvRUsxQixhQUFhO0tBQWJBLGFBQWE7QUFpRm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0b2Nrcy9pbmRleC5qcz8zOTNmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVGFibGUsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlQm9keSwgVGFibGVSb3csIFRhYmxlQ2VsbCwgUGFwZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgYmFzZVVybCAsYXNzZXRVcmx9IGZyb20gJ3NyYy9jb25maWcvY29udGFudHMnXHJcblxyXG5cclxuXHJcbmNvbnN0IE1hdGVyaWFsVGFibGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L3N0b2Nrc2ApIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEFQSSBlbmRwb2ludFxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIixyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTogJywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gIFxyXG4gICAgY29uc3QgZWRpdF9jb2RlID0gKGV2dCxpZCkgPT57XHJcbiAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgIGlmKHZhbHVlICE9IFwiXCIpe1xyXG4gICAgICAgIGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vc3RvY2tzL3VwZGF0ZV9jb2RlYCx7aWQsY29kZTp2YWx1ZX0pIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEFQSSBlbmRwb2ludFxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIixyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIC8vIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTogJywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlX2ljb24gPSAoaWQpID0+e1xyXG4gICAgICBpZihjb25maXJtKFwiRG8geW91IHdhbnQgdG8gZGVsZXRlP1wiKSl7XHJcbiAgICAgIGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vc3RvY2tzL2RlbGV0ZWAse2lkfSkgLy8gUmVwbGFjZSB3aXRoIHlvdXIgQVBJIGVuZHBvaW50XHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgY29uc3QgZXhpc3Rpbmdfc3RvY2tzID0gZGF0YTtcclxuICAgICAgICAgIGNvbnN0IG5ld19kYXRhID0gZXhpc3Rpbmdfc3RvY2tzLmZpbHRlcigocyk9PntyZXR1cm4gcy5pZCAhPSBpZH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJleGlzdGluZ1wiLGV4aXN0aW5nX3N0b2NrcyxuZXdfZGF0YSlcclxuICAgICAgICAgIHNldERhdGEobmV3X2RhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6ICcsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+TmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPkNhdGVnb3J5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+SW1hZ2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5Db2RlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+QWN0aW9uczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge2RhdGEubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cubmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuY2F0ZWdvcnl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthc3NldFVybCtyb3cuaW1hZ2VJZH0gYWx0PXtyb3cubmFtZX0gc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPjxpbnB1dCB2YWx1ZT17cm93LmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB7IGUudGFyZ2V0LnJlYWRPbmx5ID0gZmFsc2U7IH19IC8vIEFsbG93IGVkaXRpbmcgb24gZG91YmxlIGNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2dCk9PntlZGl0X2NvZGUoZXZ0LHJvdy5pZCl9fS8+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmRlbGV0ZV9pY29uKHJvdy5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbFRhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiVGFibGUiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlQm9keSIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiUGFwZXIiLCJiYXNlVXJsIiwiYXNzZXRVcmwiLCJNYXRlcmlhbFRhYmxlIiwiZGF0YSIsInNldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImVkaXRfY29kZSIsImV2dCIsImlkIiwidmFsdWUiLCJ0YXJnZXQiLCJwb3N0IiwiY29kZSIsImRlbGV0ZV9pY29uIiwiY29uZmlybSIsImV4aXN0aW5nX3N0b2NrcyIsIm5ld19kYXRhIiwiZmlsdGVyIiwicyIsImNvbXBvbmVudCIsIm1hcCIsInJvdyIsImluZGV4IiwibmFtZSIsImNhdGVnb3J5IiwiaW1nIiwic3JjIiwiaW1hZ2VJZCIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsIm9uRG91YmxlQ2xpY2siLCJlIiwicmVhZE9ubHkiLCJvbkJsdXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/stocks/index.js\n");

/***/ })

});