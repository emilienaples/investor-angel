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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_config_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/contants */ \"./src/config/contants.js\");\n/* harmony import */ var src_config_contants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_config_contants__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MaterialTable = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(src_config_contants__WEBPACK_IMPORTED_MODULE_2__.baseUrl, \"/stocks\")) // Replace with your API endpoint\n        .then(function(response) {\n            console.log(\"response\", response.data);\n            setData(response.data);\n        }).catch(function(error) {\n            console.error('Error fetching data: ', error);\n        });\n    }, []);\n    var edit_code = function(evt, id) {\n        var value = evt.target.value;\n        if (value != \"\") {\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(src_config_contants__WEBPACK_IMPORTED_MODULE_2__.baseUrl, \"/stocks/update_code\"), {\n                id: id,\n                code: value\n            }) // Replace with your API endpoint\n            .then(function(response) {\n                console.log(\"response\", response.data);\n                return;\n            // setData(response.data);\n            }).catch(function(error) {\n                console.error('Error fetching data: ', error);\n            });\n        }\n    };\n    var delete_icon = function(id) {\n        if (confirm(\"Do you want to delete?\")) {\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(src_config_contants__WEBPACK_IMPORTED_MODULE_2__.baseUrl, \"/stocks/delete\"), {\n                id: id\n            }) // Replace with your API endpoint\n            .then(function(response) {\n                console.log(\"response\", response.data);\n                var existing_stocks = data;\n                var new_data = existing_stocks.filter(function(s) {\n                    return s.id != id;\n                });\n                console.log(\"existing\", existing_stocks, new_data);\n                setData(new_data);\n            }).catch(function(error) {\n                console.error('Error fetching data: ', error);\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n        component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n        __source: {\n            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n            lineNumber: 57,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            __source: {\n                fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                    __source: {\n                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                        __source: {\n                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Name\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Category\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Image\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Code\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Actions\"\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n                    __source: {\n                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: data.map(function(row, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                            __source: {\n                                fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: row.name\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: row.category\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: src_config_contants__WEBPACK_IMPORTED_MODULE_2__.assetUrl + row.imageId,\n                                        alt: row.name,\n                                        style: {\n                                            width: '50px',\n                                            height: '50px'\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                        value: row.code,\n                                        onDoubleClick: function(e) {\n                                            e.target.value = \"\";\n                                        },\n                                        onBlur: function(evt) {\n                                            edit_code(evt, row.id);\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 26\n                                        },\n                                        __self: _this1\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                    __source: {\n                                        fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        onClick: function() {\n                                            return delete_icon(row.id);\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Hammad Work\\\\finance-project\\\\Backend\\\\src\\\\pages\\\\stocks\\\\index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: \"Delete\"\n                                    })\n                                })\n                            ]\n                        }, index);\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(MaterialTable, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = MaterialTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MaterialTable);\nvar _c;\n$RefreshReg$(_c, \"MaterialTable\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRN0IsQ0FBUEMsR0FBRyxFQUFHLENBQUNEOzRDQUFBQSxTQUFTLENBQUNDLEdBQUcsRUFBQ2MsR0FBRyxDQUFDYixFQUFFO3dDQUFDLENBQUM7Ozs7Ozs7OztxR0FDbkhoQixvREFBUzs7Ozs7OzttSEFDUDRDLENBQU07d0NBQUNDLE9BQU8sRUFBRSxRQUFROzRDQUFKeEIsTUFBTSxDQUFOQSxXQUFXLENBQUNRLEdBQUcsQ0FBQ2IsRUFBRTs7Ozs7Ozs7a0RBQUcsQ0FBTTs7OzsyQkFSckNjLEtBQUs7Ozs7OztBQWdCaEMsQ0FBQztHQTdFSzFCLGFBQWE7S0FBYkEsYUFBYTtBQStFbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3RvY2tzL2luZGV4LmpzPzM5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVCb2R5LCBUYWJsZVJvdywgVGFibGVDZWxsLCBQYXBlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBiYXNlVXJsICxhc3NldFVybH0gZnJvbSAnc3JjL2NvbmZpZy9jb250YW50cydcclxuXHJcblxyXG5cclxuY29uc3QgTWF0ZXJpYWxUYWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBheGlvcy5nZXQoYCR7YmFzZVVybH0vc3RvY2tzYCkgLy8gUmVwbGFjZSB3aXRoIHlvdXIgQVBJIGVuZHBvaW50XHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOiAnLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICBjb25zdCBlZGl0X2NvZGUgPSAoZXZ0LGlkKSA9PntcclxuICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgaWYodmFsdWUgIT0gXCJcIil7XHJcbiAgICAgICAgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9zdG9ja3MvdXBkYXRlX2NvZGVgLHtpZCxjb2RlOnZhbHVlfSkgLy8gUmVwbGFjZSB3aXRoIHlvdXIgQVBJIGVuZHBvaW50XHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgLy8gc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOiAnLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVfaWNvbiA9IChpZCkgPT57XHJcbiAgICAgIGlmKGNvbmZpcm0oXCJEbyB5b3Ugd2FudCB0byBkZWxldGU/XCIpKXtcclxuICAgICAgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9zdG9ja3MvZGVsZXRlYCx7aWR9KSAvLyBSZXBsYWNlIHdpdGggeW91ciBBUEkgZW5kcG9pbnRcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIscmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICBjb25zdCBleGlzdGluZ19zdG9ja3MgPSBkYXRhO1xyXG4gICAgICAgICAgY29uc3QgbmV3X2RhdGEgPSBleGlzdGluZ19zdG9ja3MuZmlsdGVyKChzKT0+e3JldHVybiBzLmlkICE9IGlkfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImV4aXN0aW5nXCIsZXhpc3Rpbmdfc3RvY2tzLG5ld19kYXRhKVxyXG4gICAgICAgICAgc2V0RGF0YShuZXdfZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTogJywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGU+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+Q2F0ZWdvcnk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5JbWFnZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPkNvZGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5BY3Rpb25zPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5jYXRlZ29yeX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0VXJsK3Jvdy5pbWFnZUlkfSBhbHQ9e3Jvdy5uYW1lfSBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICc1MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+PGlucHV0IHZhbHVlPXtyb3cuY29kZX0gb25Eb3VibGVDbGljaz17KGUpPT57ZS50YXJnZXQudmFsdWUgPSBcIlwifX0gb25CbHVyPXsoZXZ0KT0+e2VkaXRfY29kZShldnQscm93LmlkKX19Lz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ZGVsZXRlX2ljb24ocm93LmlkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsVGFibGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJUYWJsZSIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVCb2R5IiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJQYXBlciIsImJhc2VVcmwiLCJhc3NldFVybCIsIk1hdGVyaWFsVGFibGUiLCJkYXRhIiwic2V0RGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZWRpdF9jb2RlIiwiZXZ0IiwiaWQiLCJ2YWx1ZSIsInRhcmdldCIsInBvc3QiLCJjb2RlIiwiZGVsZXRlX2ljb24iLCJjb25maXJtIiwiZXhpc3Rpbmdfc3RvY2tzIiwibmV3X2RhdGEiLCJmaWx0ZXIiLCJzIiwiY29tcG9uZW50IiwibWFwIiwicm93IiwiaW5kZXgiLCJuYW1lIiwiY2F0ZWdvcnkiLCJpbWciLCJzcmMiLCJpbWFnZUlkIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImlucHV0Iiwib25Eb3VibGVDbGljayIsImUiLCJvbkJsdXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/stocks/index.js\n");

/***/ })

});