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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_component_final_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/component/final-component */ \"(app-pages-browser)/./src/components/component/final-component.tsx\");\n/* harmony import */ var _components_component_initial_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/component/initial-screen */ \"(app-pages-browser)/./src/components/component/initial-screen.tsx\");\n/* harmony import */ var _components_component_loading_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/component/loading-screen */ \"(app-pages-browser)/./src/components/component/loading-screen.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [userPrompt, setUserPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [generating, setGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [ARGenerating, setARGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [generatedImage, setGeneratedImage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const handleSubmit = async (prompt)=>{\n        setGenerating(true);\n        setUserPrompt(prompt);\n        console.log(prompt);\n        // Uncomment this when using API\n        const response = await fetch(\"https://7sfpdw.buildship.run/get-prompt-cloth-image\", // process.env.NEXT_PUBLIC_GET_SCORE_WORKFLOW as string,\n        {\n            method: \"POST\",\n            body: JSON.stringify({\n                prompt: prompt\n            }),\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = {\n            \"generatedImage\": \"https://storage.googleapis.com/buildship-7sfpdw-us-central1/1721044494821.png\"\n        };\n        console.log(\"new one\");\n        // await response.json();\n        setGeneratedImage(data);\n        setGenerating(false);\n    };\n    const handleARSubmit = async ()=>{\n        setARGenerating(true);\n        console.log(\"AR opening\");\n        setARGenerating(false);\n    };\n    const reset = ()=>{\n        setUserPrompt(\"\");\n        setGeneratedImage(undefined);\n    };\n    if (generating) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_loading_screen__WEBPACK_IMPORTED_MODULE_3__.LoadingScreen, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\asus\\\\Desktop\\\\myntra_app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 61,\n        columnNumber: 12\n    }, this);\n    if (generatedImage) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_final_component__WEBPACK_IMPORTED_MODULE_1__.FinalComponent, {\n        image: generatedImage,\n        userPrompt: userPrompt,\n        reset: reset\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\asus\\\\Desktop\\\\myntra_app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 65,\n        columnNumber: 7\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_initial_screen__WEBPACK_IMPORTED_MODULE_2__.InitialScreen, {\n        onSubmit: handleSubmit\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\asus\\\\Desktop\\\\myntra_app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 72,\n        columnNumber: 10\n    }, this);\n// return <LoadingScreen />;\n}\n_s(Home, \"Gj5W3XFgYna3stDEqgt10P3pWlU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXdFO0FBQ0Y7QUFDQTtBQUVyQztBQU1sQixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNRLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQTtJQUVwRCxNQUFNVSxlQUFlLE9BQU9DO1FBQzFCTixjQUFjO1FBQ2RGLGNBQWNRO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixnQ0FBZ0M7UUFDaEMsTUFBTUcsV0FBVyxNQUFNQyxNQUNyQix1REFDQSx3REFBd0Q7UUFDeEQ7WUFDRUMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CUixRQUFRQTtZQUNWO1lBQ0FTLFNBQVM7Z0JBQ1BDLFFBQVE7Z0JBQ1IsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFRixNQUFNQyxPQUFPO1lBQ1gsa0JBQWtCO1FBRXBCO1FBQ0FWLFFBQVFDLEdBQUcsQ0FBQztRQUNaLHlCQUF5QjtRQUN6Qkosa0JBQWtCYTtRQUNsQmpCLGNBQWM7SUFDaEI7SUFFQSxNQUFNa0IsaUJBQWlCO1FBQ3JCaEIsZ0JBQWdCO1FBQ2hCSyxRQUFRQyxHQUFHLENBQUM7UUFFWk4sZ0JBQWdCO0lBQ2xCO0lBRUEsTUFBTWlCLFFBQVE7UUFDWnJCLGNBQWM7UUFDZE0sa0JBQWtCZ0I7SUFDcEI7SUFFQSxJQUFJckIsWUFDRixxQkFBTyw4REFBQ0wsK0VBQWFBOzs7OztJQUV2QixJQUFJUyxnQkFDRixxQkFDRSw4REFBQ1gsaUZBQWNBO1FBQ2I2QixPQUFPbEI7UUFDUE4sWUFBWUE7UUFDWnNCLE9BQU9BOzs7Ozs7SUFJYixxQkFBTyw4REFBQzFCLCtFQUFhQTtRQUFDNkIsVUFBVWpCOzs7Ozs7QUFDaEMsNEJBQTRCO0FBQzlCO0dBN0R3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRmluYWxDb21wb25lbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbXBvbmVudC9maW5hbC1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW5pdGlhbFNjcmVlbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tcG9uZW50L2luaXRpYWwtc2NyZWVuXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTY3JlZW4gfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbXBvbmVudC9sb2FkaW5nLXNjcmVlblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEdlbmVyYXRlZEltYWdlID0ge1xyXG4gIGdlbmVyYXRlZEltYWdlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt1c2VyUHJvbXB0LCBzZXRVc2VyUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtnZW5lcmF0aW5nLCBzZXRHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbQVJHZW5lcmF0aW5nLCBzZXRBUkdlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnZW5lcmF0ZWRJbWFnZSwgc2V0R2VuZXJhdGVkSW1hZ2VdID0gdXNlU3RhdGU8R2VuZXJhdGVkSW1hZ2U+KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChwcm9tcHQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0R2VuZXJhdGluZyh0cnVlKTtcclxuICAgIHNldFVzZXJQcm9tcHQocHJvbXB0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb21wdCk7XHJcbiAgICAvLyBVbmNvbW1lbnQgdGhpcyB3aGVuIHVzaW5nIEFQSVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovLzdzZnBkdy5idWlsZHNoaXAucnVuL2dldC1wcm9tcHQtY2xvdGgtaW1hZ2VcIixcclxuICAgICAgLy8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0VUX1NDT1JFX1dPUktGTE9XIGFzIHN0cmluZyxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgcHJvbXB0OiBwcm9tcHRcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIFwiZ2VuZXJhdGVkSW1hZ2VcIjogXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYnVpbGRzaGlwLTdzZnBkdy11cy1jZW50cmFsMS8xNzIxMDQ0NDk0ODIxLnBuZ1wiLFxyXG4gICAgICAvLyBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9idWlsZHNoaXAtN3NmcGR3LXVzLWNlbnRyYWwxLzE3MjEwNDk2MDg3ODMucG5nXCJcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBvbmVcIik7XHJcbiAgICAvLyBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRHZW5lcmF0ZWRJbWFnZShkYXRhKTtcclxuICAgIHNldEdlbmVyYXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFSU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0QVJHZW5lcmF0aW5nKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJBUiBvcGVuaW5nXCIpO1xyXG4gICAgXHJcbiAgICBzZXRBUkdlbmVyYXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlclByb21wdChcIlwiKTtcclxuICAgIHNldEdlbmVyYXRlZEltYWdlKHVuZGVmaW5lZCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGdlbmVyYXRpbmcpXHJcbiAgICByZXR1cm4gPExvYWRpbmdTY3JlZW4gLz47XHJcblxyXG4gIGlmIChnZW5lcmF0ZWRJbWFnZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGaW5hbENvbXBvbmVudFxyXG4gICAgICAgIGltYWdlPXtnZW5lcmF0ZWRJbWFnZSF9XHJcbiAgICAgICAgdXNlclByb21wdD17dXNlclByb21wdH1cclxuICAgICAgICByZXNldD17cmVzZXR9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gPEluaXRpYWxTY3JlZW4gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz47XHJcbiAgLy8gcmV0dXJuIDxMb2FkaW5nU2NyZWVuIC8+O1xyXG59Il0sIm5hbWVzIjpbIkZpbmFsQ29tcG9uZW50IiwiSW5pdGlhbFNjcmVlbiIsIkxvYWRpbmdTY3JlZW4iLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VyUHJvbXB0Iiwic2V0VXNlclByb21wdCIsImdlbmVyYXRpbmciLCJzZXRHZW5lcmF0aW5nIiwiQVJHZW5lcmF0aW5nIiwic2V0QVJHZW5lcmF0aW5nIiwiZ2VuZXJhdGVkSW1hZ2UiLCJzZXRHZW5lcmF0ZWRJbWFnZSIsImhhbmRsZVN1Ym1pdCIsInByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZGF0YSIsImhhbmRsZUFSU3VibWl0IiwicmVzZXQiLCJ1bmRlZmluZWQiLCJpbWFnZSIsIm9uU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});