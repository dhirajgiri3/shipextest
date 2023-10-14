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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"(app-pages-browser)/./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 50vh;\\n  position: relative;\\n  z-index: 0;\\n  margin: 5rem 0;\\n  overflow: hidden;\\n  background: #f1f1f1;\\n\\n  @media screen and (max-width: 1024px) {\\n    height: 30vh;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    margin: 3rem 0;\\n    height: 60vh;\\n  }\\n\\n  .bgvideo {\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    z-index: 1;\\n    top: 0;\\n    left: 0;\\n\\n    video {\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover;\\n    }\\n  }\\n\\n  .content {\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 1rem;\\n    padding: 0 10rem;\\n    position: absolute;\\n    z-index: 2;\\n    top: 0;\\n    left: 0;\\n\\n    @media screen and (max-width: 1024px) {\\n      padding: 0 5rem;\\n    }\\n\\n    @media screen and (max-width: 768px) {\\n      padding: 0 2rem;\\n    }\\n\\n    .title {\\n      font-size: var(--heading);\\n      font-family: var(--bold);\\n      color: var(--text-color);\\n      text-align: center;\\n\\n      @media screen and (max-width: 768px) {\\n        font-size: var(--heading-small);\\n      }\\n    }\\n\\n    .subtitle {\\n      font-size: var(--para);\\n      font-family: var(--light-font);\\n      color: var(--text-grey);\\n      text-align: center;\\n    }\\n\\n    .form {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      gap: 1rem;\\n      margin-top: 2rem;\\n\\n      @media screen and (max-width: 768px) {\\n        flex-direction: column;\\n      }\\n\\n      input {\\n        width: 30rem;\\n        height: 4rem;\\n        border: none;\\n        outline: none;\\n        border-radius: 100px;\\n        padding: 1rem;\\n        font-size: var(--para);\\n        font-family: var(--light-font);\\n        color: var(--text-grey);\\n        background: #fff;\\n\\n        @media screen and (max-width: 768px) {\\n          width: 90vw;\\n        }\\n      }\\n\\n      button {\\n        background: var(--primary-color);\\n        font-size: 0.8rem;\\n        color: var(--white-bg);\\n        border-radius: 100px;\\n        text-decoration: none;\\n        transition: background 0.3s ease-in-out;\\n        font-family: var(--font);\\n        position: relative;\\n        overflow: hidden;\\n        z-index: 0;\\n        height: 4rem;\\n        border: none;\\n        outline: none;\\n        width: 10rem;\\n        cursor: pointer;\\n\\n        @media screen and (max-width: 768px) {\\n          font-size: 1rem;\\n        }\\n\\n        &::before {\\n          content: \"\";\\n          position: absolute;\\n          top: 0;\\n          left: 0;\\n          width: 0%;\\n          height: 100%;\\n          background: var(--secondary-color);\\n          border-radius: 100px;\\n          transition: width 0.5s ease-in-out;\\n          z-index: -1;\\n          transform-origin: right;\\n        }\\n\\n        &:hover {\\n          &::before {\\n            width: 100%;\\n          }\\n        }\\n      }\\n    }\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst HomeNewsletterContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = HomeNewsletterContainer;\nfunction Newsletter() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeNewsletterContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: \"Let's Grow Together\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                        lineNumber: 156,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"subtitle\",\n                        children: \"Stay informed about all developments and product updates at Shipex India!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                        lineNumber: 157,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Enter your email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                                lineNumber: 162,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: \"Subscribe\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                                lineNumber: 163,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n                lineNumber: 155,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n            lineNumber: 153,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Newsletter\\\\Newsletter.jsx\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Newsletter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Newsletter);\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeNewsletterContainer\");\n$RefreshReg$(_c1, \"Newsletter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9OZXdzbGV0dGVyL05ld3NsZXR0ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1g7QUFFMUIsTUFBTUUsMEJBQTBCRix1REFBTUEsQ0FBQ0csR0FBRztLQUFwQ0Q7QUFrSk4sU0FBU0U7SUFDUCxxQkFDRSw4REFBQ0Q7a0JBQ0MsNEVBQUNEO3NCQUVHLDRFQUFDQztnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNGO3dCQUFJRSxXQUFVO2tDQUFROzs7Ozs7a0NBQ3ZCLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FBVzs7Ozs7O2tDQUkxQiw4REFBQ0Y7d0JBQUlFLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsYUFBWTs7Ozs7OzBDQUMvQiw4REFBQ0M7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7TUFuQlNMO0FBcUJULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvSG9tZS9OZXdzbGV0dGVyL05ld3NsZXR0ZXIuanN4PzkwODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvbWVOZXdzbGV0dGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDNyZW0gMDtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICB9XHJcblxyXG4gIC5iZ3ZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgdmlkZW8ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwIDEwcmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLXNtYWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYSk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1saWdodC1mb250KTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtZ3JleSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhKTtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbGlnaHQtZm9udCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZ3JleSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtYmcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gTmV3c2xldHRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhvbWVOZXdzbGV0dGVyQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+TGV0J3MgR3JvdyBUb2dldGhlcjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgU3RheSBpbmZvcm1lZCBhYm91dCBhbGwgZGV2ZWxvcG1lbnRzIGFuZCBwcm9kdWN0IHVwZGF0ZXMgYXQgU2hpcGV4XHJcbiAgICAgICAgICAgICAgSW5kaWEhXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+U3Vic2NyaWJlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSG9tZU5ld3NsZXR0ZXJDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJIb21lTmV3c2xldHRlckNvbnRhaW5lciIsImRpdiIsIk5ld3NsZXR0ZXIiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Newsletter/Newsletter.jsx\n"));

/***/ })

});