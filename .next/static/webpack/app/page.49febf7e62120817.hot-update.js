"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./Components/Home/Newsletter/Newsletter.jsx":
/*!***************************************************!*\
  !*** ./Components/Home/Newsletter/Newsletter.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"(app-pages-browser)/./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 50vh;\\n  position: relative;\\n  z-index: 0;\\n  margin: 5rem 0;\\n  overflow: hidden;\\n  border: 1px solid #111;\\n\\n  @media screen and (max-width: 1024px) {\\n    height: 30vh;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    margin: 3rem 0;\\n    height: 60vh;\\n  }\\n\\n  .bgvideo {\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    z-index: 1;\\n    top: 0;\\n    left: 0;\\n\\n    video {\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover;\\n    }\\n  }\\n\\n  .content {\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 1rem;\\n    padding: 0 10rem;\\n    position: absolute;\\n    z-index: 2;\\n    top: 0;\\n    left: 0;\\n\\n    @media screen and (max-width: 1024px) {\\n      padding: 0 5rem;\\n    }\\n\\n    @media screen and (max-width: 768px) {\\n      padding: 0 2rem;\\n    }\\n\\n    .title {\\n      font-size: var(--heading);\\n      font-family: var(--bold);\\n      color: var(--text-color);\\n      text-align: center;\\n\\n      @media screen and (max-width: 768px) {\\n        font-size: var(--heading-small);\\n      }\\n    }\\n\\n    .subtitle {\\n      font-size: var(--para);\\n      font-family: var(--light-font);\\n      color: var(--text-grey);\\n      text-align: center;\\n    }\\n\\n    .form {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      gap: 1rem;\\n      margin-top: 2rem;\\n\\n      @media screen and (max-width: 768px) {\\n        flex-direction: column;\\n      }\\n\\n      input {\\n        width: 30rem;\\n        height: 4rem;\\n        border: none;\\n        outline: none;\\n        border-radius: 100px;\\n        padding: 1rem;\\n        font-size: var(--para);\\n        font-family: var(--light-font);\\n        color: var(--text-grey);\\n        background: #f7f7f7;\\n\\n        @media screen and (max-width: 768px) {\\n          width: 90vw;\\n        }\\n      }\\n\\n      button {\\n        background: var(--primary-color);\\n        font-size: 0.8rem;\\n        color: var(--white-bg);\\n        border-radius: 100px;\\n        text-decoration: none;\\n        transition: background 0.3s ease-in-out;\\n        font-family: var(--font);\\n        position: relative;\\n        overflow: hidden;\\n        z-index: 0;\\n        height: 4rem;\\n        border: none;\\n        outline: none;\\n        width: 10rem;\\n        cursor: pointer;\\n\\n        @media screen and (max-width: 768px) {\\n          font-size: 1rem;\\n        }\\n\\n        &::before {\\n          content: \"\";\\n          position: absolute;\\n          top: 0;\\n          left: 0;\\n          width: 0%;\\n          height: 100%;\\n          background: var(--secondary-color);\\n          border-radius: 100px;\\n          transition: width 0.5s ease-in-out;\\n          z-index: -1;\\n          transform-origin: right;\\n        }\\n\\n        &:hover {\\n          &::before {\\n            width: 100%;\\n          }\\n        }\\n      }\\n    }\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst HomeNewsletterContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = HomeNewsletterContainer;\nfunction Newsletter() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeNewsletterContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: \"Let's Grow Together\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                        lineNumber: 157,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"subtitle\",\n                        children: \"Stay informed about all developments and product updates at Shipex India!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                        lineNumber: 158,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Enter your email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                                lineNumber: 163,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: \"Subscribe\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                                lineNumber: 164,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                        lineNumber: 162,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                lineNumber: 156,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n            lineNumber: 154,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Newsletter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Newsletter);\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeNewsletterContainer\");\n$RefreshReg$(_c1, \"Newsletter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9OZXdzbGV0dGVyL05ld3NsZXR0ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0U7QUFDYjtBQUUxQixNQUFNRywwQkFBMEJILHVEQUFNQSxDQUFDSSxHQUFHO0tBQXBDRDtBQWtKTixTQUFTRTtJQUNQLHFCQUNFLDhEQUFDRDtrQkFDQyw0RUFBQ0Q7c0JBRUcsNEVBQUNDO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0Y7d0JBQUlFLFdBQVU7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNGO3dCQUFJRSxXQUFVO2tDQUFXOzs7Ozs7a0NBSTFCLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPQyxhQUFZOzs7Ozs7MENBQy9CLDhEQUFDQzswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtNQW5CU0w7QUFxQlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL05ld3NsZXR0ZXIvTmV3c2xldHRlci5qc3g/OTA4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZU5ld3NsZXR0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICBtYXJnaW46IDVyZW0gMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTE7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gIH1cclxuXHJcbiAgLmJndmlkZW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICB2aWRlbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMTByZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgcGFkZGluZzogMCA1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tYm9sZCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctc21hbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhKTtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWxpZ2h0LWZvbnQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmV5KTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMXJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcmEpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1saWdodC1mb250KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmV5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBOZXdzbGV0dGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SG9tZU5ld3NsZXR0ZXJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5MZXQncyBHcm93IFRvZ2V0aGVyPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICBTdGF5IGluZm9ybWVkIGFib3V0IGFsbCBkZXZlbG9wbWVudHMgYW5kIHByb2R1Y3QgdXBkYXRlcyBhdCBTaGlwZXhcclxuICAgICAgICAgICAgICBJbmRpYSFcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Ib21lTmV3c2xldHRlckNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NsZXR0ZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJtb3Rpb24iLCJSZWFjdCIsIkhvbWVOZXdzbGV0dGVyQ29udGFpbmVyIiwiZGl2IiwiTmV3c2xldHRlciIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Newsletter/Newsletter.jsx\n"));

/***/ })

});