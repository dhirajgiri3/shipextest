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

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Home/FirstSection/FirstSection */ \"(app-pages-browser)/./Components/Home/FirstSection/FirstSection.jsx\");\n/* harmony import */ var _Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Home/CompanyLogo/CompanyLogo */ \"(app-pages-browser)/./Components/Home/CompanyLogo/CompanyLogo.jsx\");\n/* harmony import */ var _Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Home/Mockup1/Mockup1 */ \"(app-pages-browser)/./Components/Home/Mockup1/Mockup1.jsx\");\n/* harmony import */ var _Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Home/Timeline/Timeline */ \"(app-pages-browser)/./Components/Home/Timeline/Timeline.jsx\");\n/* harmony import */ var _Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Home/Services/Services */ \"(app-pages-browser)/./Components/Home/Services/Services.jsx\");\n/* harmony import */ var _Components_Home_Glance_Glance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Home/Glance/Glance */ \"(app-pages-browser)/./Components/Home/Glance/Glance.jsx\");\n/* harmony import */ var _Components_Home_Card_Blog_Blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Home/Card/Blog/Blog */ \"(app-pages-browser)/./Components/Home/Card/Blog/Blog.jsx\");\n/* harmony import */ var _Components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Common/Footer/Footer */ \"(app-pages-browser)/./Components/Common/Footer/Footer.jsx\");\n/* harmony import */ var _Components_Home_Newsletter_Newsletter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Components/Home/Newsletter/Newsletter */ \"(app-pages-browser)/./Components/Home/Newsletter/Newsletter.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  background-color: \",\n        \";\\n  transition: background-color 1s ease-in-out;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  min-height: 40vh;\\n  transition: background-color 0.3s ease-in-out;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n    displayName: \"page__HomeContainer\",\n    componentId: \"sc-797a36f4-0\"\n})(_templateObject(), (props)=>props.bgColor || \"transparent\");\n_c = HomeContainer;\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n    displayName: \"page__SectionContainer\",\n    componentId: \"sc-797a36f4-1\"\n})(_templateObject1());\n_c1 = SectionContainer;\nfunction Page() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const containerRefs = sectionContent.map(_s1(()=>{\n        _s1();\n        return (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    }, \"J9pzIsEOVEZ74gjFtMkCj+5Po7s=\"));\n    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const colors = [\n        \"#5065f9\",\n        \"#fff\",\n        \"#fff\",\n        \"#fff\",\n        \"#fff\",\n        \"#fff\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY;\n            const sectionTops = containerRefs.filter((ref)=>ref.current !== null).map((ref)=>ref.current.offsetTop);\n            for(let i = 0; i < sectionTops.length; i++){\n                if (scrollTop >= sectionTops[i] && (i === sectionTops.length - 1 || scrollTop < sectionTops[i + 1])) {\n                    setActiveSection(i);\n                    gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.to(mainRef.current, {\n                        backgroundColor: colors[i],\n                        duration: 0.3,\n                        ease: \"power2.inOut\",\n                        yoyo: true\n                    });\n                    break;\n                }\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeContainer, {\n                ref: mainRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    containerRefs.map((ref, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SectionContainer, {\n                            ref: ref,\n                            style: {\n                                backgroundColor: activeSection === index ? colors[index] : \"transparent\"\n                            },\n                            children: sectionContent[index]\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"eCehuI9D5NOoKGhCxNeL2GvJb/4=\");\n_c2 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomeContainer\");\n$RefreshReg$(_c1, \"SectionContainer\");\n$RefreshReg$(_c2, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUyRDtBQUNwQjtBQUNYO0FBQzJDO0FBQ0g7QUFDWjtBQUNHO0FBQ0E7QUFDTjtBQUNEO0FBQ0c7QUFDVTtBQUVqRSxNQUFNZSxnQkFBZ0JYLDBEQUFNQSxDQUFDWSxHQUFHOzs7c0JBR1YsQ0FBQ0MsUUFBVUEsTUFBTUMsT0FBTyxJQUFJO0tBSDVDSDtBQU9OLE1BQU1JLG1CQUFtQmYsMERBQU1BLENBQUNZLEdBQUc7Ozs7TUFBN0JHO0FBTU4sU0FBU0M7OztJQUNQLE1BQU1DLGdCQUFnQkMsZUFBZUMsR0FBRyxLQUFDOztRQUFNdEIsT0FBQUEsNkNBQU1BLENBQUM7SUFBSTtJQUMxRCxNQUFNdUIsVUFBVXZCLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQ3dCLGVBQWVDLGlCQUFpQixHQUFHdkIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTXdCLFNBQVM7UUFBQztRQUFZO1FBQVE7UUFBUTtRQUFRO1FBQVE7S0FBTztJQUVuRXpCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTTBCLGVBQWU7WUFDbkIsTUFBTUMsWUFBWUMsT0FBT0MsT0FBTztZQUNoQyxNQUFNQyxjQUFjWCxjQUNqQlksTUFBTSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLE9BQU8sS0FBSyxNQUNoQ1osR0FBRyxDQUFDLENBQUNXLE1BQVFBLElBQUlDLE9BQU8sQ0FBQ0MsU0FBUztZQUVyQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsWUFBWU0sTUFBTSxFQUFFRCxJQUFLO2dCQUMzQyxJQUNFUixhQUFhRyxXQUFXLENBQUNLLEVBQUUsSUFDMUJBLENBQUFBLE1BQU1MLFlBQVlNLE1BQU0sR0FBRyxLQUFLVCxZQUFZRyxXQUFXLENBQUNLLElBQUksRUFBRSxHQUMvRDtvQkFDQVgsaUJBQWlCVztvQkFFakJoQyx1Q0FBSUEsQ0FBQ2tDLEVBQUUsQ0FBQ2YsUUFBUVcsT0FBTyxFQUFFO3dCQUN2QkssaUJBQWlCYixNQUFNLENBQUNVLEVBQUU7d0JBQzFCSSxVQUFVO3dCQUNWQyxNQUFNO3dCQUNOQyxNQUFNO29CQUNSO29CQUNBO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBYixPQUFPYyxnQkFBZ0IsQ0FBQyxVQUFVaEI7UUFFbEMsT0FBTztZQUNMRSxPQUFPZSxtQkFBbUIsQ0FBQyxVQUFVakI7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNiO2dCQUFjbUIsS0FBS1Y7O2tDQUNsQiw4REFBQ2xCLGtGQUFZQTs7Ozs7a0NBQ2IsOERBQUNDLGdGQUFXQTs7Ozs7b0JBQ1hjLGNBQWNFLEdBQUcsQ0FBQyxDQUFDVyxLQUFLWSxzQkFDdkIsOERBQUMzQjs0QkFDQ2UsS0FBS0E7NEJBRUxhLE9BQU87Z0NBQ0xQLGlCQUNFZixrQkFBa0JxQixRQUFRbkIsTUFBTSxDQUFDbUIsTUFBTSxHQUFHOzRCQUM5QztzQ0FFQ3hCLGNBQWMsQ0FBQ3dCLE1BQU07MkJBTmpCQTs7Ozs7Ozs7Ozs7MEJBVVgsOERBQUNqQyx5RUFBTUE7Ozs7Ozs7QUFHYjtHQTNEU087TUFBQUE7QUE2RFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0ZpcnN0U2VjdGlvbi9GaXJzdFNlY3Rpb25cIjtcbmltcG9ydCBDb21wYW55TG9nbyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvQ29tcGFueUxvZ28vQ29tcGFueUxvZ29cIjtcbmltcG9ydCBNb2NrdXAxIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9Nb2NrdXAxL01vY2t1cDFcIjtcbmltcG9ydCBUaW1lbGluZSBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvVGltZWxpbmUvVGltZWxpbmVcIjtcbmltcG9ydCBTZXJ2aWNlcyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvU2VydmljZXMvU2VydmljZXNcIjtcbmltcG9ydCBHbGFuY2UgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0dsYW5jZS9HbGFuY2VcIjtcbmltcG9ydCBCbG9nIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9DYXJkL0Jsb2cvQmxvZ1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9Db21wb25lbnRzL0NvbW1vbi9Gb290ZXIvRm9vdGVyXCI7XG5pbXBvcnQgTmV3c2xldHRlciBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvTmV3c2xldHRlci9OZXdzbGV0dGVyXCI7XG5cbmNvbnN0IEhvbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5iZ0NvbG9yIHx8IFwidHJhbnNwYXJlbnRcIn07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XG5gO1xuXG5jb25zdCBTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogNDB2aDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuYDtcblxuXG5mdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBjb250YWluZXJSZWZzID0gc2VjdGlvbkNvbnRlbnQubWFwKCgpID0+IHVzZVJlZihudWxsKSk7XG4gIGNvbnN0IG1haW5SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uLCBzZXRBY3RpdmVTZWN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjb2xvcnMgPSBbXCIjNTA2NWY5XCIsICBcIiNmZmZcIiwgXCIjZmZmXCIsIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjZmZmXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wcyA9IGNvbnRhaW5lclJlZnNcbiAgICAgICAgLmZpbHRlcigocmVmKSA9PiByZWYuY3VycmVudCAhPT0gbnVsbClcbiAgICAgICAgLm1hcCgocmVmKSA9PiByZWYuY3VycmVudC5vZmZzZXRUb3ApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25Ub3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gc2VjdGlvblRvcHNbaV0gJiZcbiAgICAgICAgICAoaSA9PT0gc2VjdGlvblRvcHMubGVuZ3RoIC0gMSB8fCBzY3JvbGxUb3AgPCBzZWN0aW9uVG9wc1tpICsgMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oaSk7XG5cbiAgICAgICAgICBnc2FwLnRvKG1haW5SZWYuY3VycmVudCwge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaV0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIixcbiAgICAgICAgICAgIHlveW86IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SG9tZUNvbnRhaW5lciByZWY9e21haW5SZWZ9PlxuICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgIDxDb21wYW55TG9nbyAvPlxuICAgICAgICB7Y29udGFpbmVyUmVmcy5tYXAoKHJlZiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2VjdGlvbkNvbnRhaW5lclxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24gPT09IGluZGV4ID8gY29sb3JzW2luZGV4XSA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3Rpb25Db250ZW50W2luZGV4XX1cbiAgICAgICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9Ib21lQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJnc2FwIiwiRmlyc3RTZWN0aW9uIiwiQ29tcGFueUxvZ28iLCJNb2NrdXAxIiwiVGltZWxpbmUiLCJTZXJ2aWNlcyIsIkdsYW5jZSIsIkJsb2ciLCJGb290ZXIiLCJOZXdzbGV0dGVyIiwiSG9tZUNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiYmdDb2xvciIsIlNlY3Rpb25Db250YWluZXIiLCJQYWdlIiwiY29udGFpbmVyUmVmcyIsInNlY3Rpb25Db250ZW50IiwibWFwIiwibWFpblJlZiIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwiY29sb3JzIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsInNlY3Rpb25Ub3BzIiwiZmlsdGVyIiwicmVmIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImkiLCJsZW5ndGgiLCJ0byIsImJhY2tncm91bmRDb2xvciIsImR1cmF0aW9uIiwiZWFzZSIsInlveW8iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImluZGV4Iiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});