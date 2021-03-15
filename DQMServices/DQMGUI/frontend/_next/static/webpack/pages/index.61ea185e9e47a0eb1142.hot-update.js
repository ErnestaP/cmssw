webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/plot/plotImages/liveModePlotImage.tsx":
/*!****************************************************************!*\
  !*** ./components/plots/plot/plotImages/liveModePlotImage.tsx ***!
  \****************************************************************/
/*! exports provided: LiveModePlotImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveModePlotImage\", function() { return LiveModePlotImage; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/config */ \"./config/config.ts\");\n/* harmony import */ var _contexts_updateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../contexts/updateContext */ \"./contexts/updateContext.tsx\");\n/* harmony import */ var _hooks_useBlink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useBlink */ \"./hooks/useBlink.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils */ \"./components/utils.ts\");\n/* harmony import */ var _errorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errorMessage */ \"./components/plots/errorMessage.tsx\");\n/* harmony import */ var _imageFallbackLive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imageFallbackLive */ \"./components/plots/imageFallbackLive.tsx\");\n/* harmony import */ var _plotsWithLayouts_styledComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../plotsWithLayouts/styledComponents */ \"./components/plots/plot/plotsWithLayouts/styledComponents.ts\");\n/* harmony import */ var _singlePlot_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../singlePlot/utils */ \"./components/plots/plot/singlePlot/utils.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/plot/plotImages/liveModePlotImage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"];\n\n\n\n\n\n\n\n\n\nvar LiveModePlotImage = function LiveModePlotImage(_ref) {\n  _s();\n\n  var imageRef = _ref.imageRef,\n      query = _ref.query,\n      isPlotSelected = _ref.isPlotSelected,\n      params_for_api = _ref.params_for_api,\n      plotURL = _ref.plotURL,\n      plot = _ref.plot;\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"](_contexts_updateContext__WEBPACK_IMPORTED_MODULE_5__[\"store\"]),\n      not_older_than = _React$useContext.not_older_than,\n      addLoader = _React$useContext.addLoader;\n\n  var _useBlink = Object(_hooks_useBlink__WEBPACK_IMPORTED_MODULE_6__[\"useBlink\"])(not_older_than),\n      blink = _useBlink.blink;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](true),\n      _React$useState2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      loader = _React$useState2[0],\n      setLoader = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](),\n      _React$useState4 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      id = _React$useState4[0],\n      setId = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](\"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_4__[\"root_url\"]).concat(plotURL, \";notOlderThan=\").concat(not_older_than)),\n      _React$useState6 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      new_image_url = _React$useState6[0],\n      set_new_image_url = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](\"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_4__[\"root_url\"]).concat(plotURL, \";notOlderThan=\").concat(not_older_than)),\n      _React$useState8 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, 2),\n      old_image_url = _React$useState8[0],\n      set_old_image_url = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](false),\n      _React$useState10 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState9, 2),\n      imageError = _React$useState10[0],\n      setImageError = _React$useState10[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"](function () {\n    set_new_image_url(\"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_4__[\"root_url\"]).concat(plotURL, \";notOlderThan=\").concat(not_older_than));\n  }, [not_older_than, params_for_api.customise, params_for_api.height, params_for_api.width, params_for_api.run_number, params_for_api.dataset_name, params_for_api.lumi, params_for_api.normalize, params_for_api.overlay_plot, params_for_api.plot_name, params_for_api.folders_path, params_for_api.overlay_plot, params_for_api.joined_overlaied_plots_urls, plotURL]);\n  react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"](function () {\n    var id_ = Object(_utils__WEBPACK_IMPORTED_MODULE_7__[\"makeid\"])();\n    setId(id_);\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"](function () {\n    addLoader({\n      value: loader,\n      id: id\n    });\n  }, [loader]);\n  var old_image_display = !loader ? '' : 'none';\n  var new_image_display = !loader ? 'none' : '';\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, imageError ? __jsx(_errorMessage__WEBPACK_IMPORTED_MODULE_8__[\"ErrorMessage\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }) : __jsx(\"div\", {\n    onClick: /*#__PURE__*/Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!imageRef) {\n                _context.next = 9;\n                break;\n              }\n\n              if (!isPlotSelected) {\n                _context.next = 6;\n                break;\n              }\n\n              _context.next = 4;\n              return Object(_singlePlot_utils__WEBPACK_IMPORTED_MODULE_11__[\"removePlotFromRightSide\"])(query, plot);\n\n            case 4:\n              _context.next = 8;\n              break;\n\n            case 6:\n              _context.next = 8;\n              return Object(_singlePlot_utils__WEBPACK_IMPORTED_MODULE_11__[\"addPlotToRightSide\"])(query, plot);\n\n            case 8:\n              scroll(imageRef);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, !imageError && __jsx(_plotsWithLayouts_styledComponents__WEBPACK_IMPORTED_MODULE_10__[\"PlotUpdateIdicator\"], {\n    update: blink.toString() || loader.toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(_imageFallbackLive__WEBPACK_IMPORTED_MODULE_9__[\"ImageFallbackLive\"], {\n    retryTimes: 3,\n    style: {\n      display: new_image_display\n    },\n    onLoad: /*#__PURE__*/Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              setLoader(false);\n              _context2.next = 3;\n              return set_old_image_url(new_image_url);\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    })),\n    alt: plot.name,\n    src: new_image_url,\n    setImageError: setImageError,\n    width: params_for_api.width,\n    height: params_for_api.height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(_imageFallbackLive__WEBPACK_IMPORTED_MODULE_9__[\"ImageFallbackLive\"], {\n    retryTimes: 3,\n    style: {\n      display: old_image_display\n    },\n    alt: plot.name,\n    onLoad: function onLoad() {},\n    src: old_image_url,\n    setImageError: setImageError,\n    width: 'auto',\n    height: 'auto',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }))));\n};\n\n_s(LiveModePlotImage, \"cH3noA7RfjFrcDB9xCttmXRAHaI=\", false, function () {\n  return [_hooks_useBlink__WEBPACK_IMPORTED_MODULE_6__[\"useBlink\"]];\n});\n\n_c = LiveModePlotImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"LiveModePlotImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RJbWFnZXMvbGl2ZU1vZGVQbG90SW1hZ2UudHN4P2E2MDEiXSwibmFtZXMiOlsiTGl2ZU1vZGVQbG90SW1hZ2UiLCJpbWFnZVJlZiIsInF1ZXJ5IiwiaXNQbG90U2VsZWN0ZWQiLCJwYXJhbXNfZm9yX2FwaSIsInBsb3RVUkwiLCJwbG90IiwiUmVhY3QiLCJzdG9yZSIsIm5vdF9vbGRlcl90aGFuIiwiYWRkTG9hZGVyIiwidXNlQmxpbmsiLCJibGluayIsImxvYWRlciIsInNldExvYWRlciIsImlkIiwic2V0SWQiLCJyb290X3VybCIsIm5ld19pbWFnZV91cmwiLCJzZXRfbmV3X2ltYWdlX3VybCIsIm9sZF9pbWFnZV91cmwiLCJzZXRfb2xkX2ltYWdlX3VybCIsImltYWdlRXJyb3IiLCJzZXRJbWFnZUVycm9yIiwiY3VzdG9taXNlIiwiaGVpZ2h0Iiwid2lkdGgiLCJydW5fbnVtYmVyIiwiZGF0YXNldF9uYW1lIiwibHVtaSIsIm5vcm1hbGl6ZSIsIm92ZXJsYXlfcGxvdCIsInBsb3RfbmFtZSIsImZvbGRlcnNfcGF0aCIsImpvaW5lZF9vdmVybGFpZWRfcGxvdHNfdXJscyIsImlkXyIsIm1ha2VpZCIsInZhbHVlIiwib2xkX2ltYWdlX2Rpc3BsYXkiLCJuZXdfaW1hZ2VfZGlzcGxheSIsInJlbW92ZVBsb3RGcm9tUmlnaHRTaWRlIiwiYWRkUGxvdFRvUmlnaHRTaWRlIiwic2Nyb2xsIiwidG9TdHJpbmciLCJkaXNwbGF5IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FPWDtBQUFBOztBQUFBLE1BTnBCQyxRQU1vQixRQU5wQkEsUUFNb0I7QUFBQSxNQUxwQkMsS0FLb0IsUUFMcEJBLEtBS29C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QUFBQTtBQUFBLElBbkJGLENBWEosQ0FKTixDQURGO0FBbURELENBMUdNOztHQUFNdkIsaUI7VUFTT1csd0Q7OztLQVRQWCxpQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGxvdHMvcGxvdC9wbG90SW1hZ2VzL2xpdmVNb2RlUGxvdEltYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGxvdEltYWdlUHJvcHMgfSBmcm9tICcuJztcclxuXHJcbmltcG9ydCB7IHJvb3RfdXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGV4dHMvdXBkYXRlQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUJsaW5rIH0gZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlQmxpbmsnO1xyXG5pbXBvcnQgeyBtYWtlaWQgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL2Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IEltYWdlRmFsbGJhY2tMaXZlIH0gZnJvbSAnLi4vLi4vaW1hZ2VGYWxsYmFja0xpdmUnO1xyXG5pbXBvcnQgeyBQbG90VXBkYXRlSWRpY2F0b3IgfSBmcm9tICcuLi9wbG90c1dpdGhMYXlvdXRzL3N0eWxlZENvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIGFkZFBsb3RUb1JpZ2h0U2lkZSxcclxuICByZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSxcclxufSBmcm9tICcuLi9zaW5nbGVQbG90L3V0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaXZlTW9kZVBsb3RJbWFnZSA9ICh7XHJcbiAgaW1hZ2VSZWYsXHJcbiAgcXVlcnksXHJcbiAgaXNQbG90U2VsZWN0ZWQsXHJcbiAgcGFyYW1zX2Zvcl9hcGksXHJcbiAgcGxvdFVSTCxcclxuICBwbG90LFxyXG59OiBQbG90SW1hZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbm90X29sZGVyX3RoYW4sIGFkZExvYWRlciB9ID0gUmVhY3QudXNlQ29udGV4dChzdG9yZSlcclxuICBjb25zdCB7IGJsaW5rIH0gPSB1c2VCbGluayhub3Rfb2xkZXJfdGhhbilcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbaWQsIHNldElkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKVxyXG5cclxuICBjb25zdCBbbmV3X2ltYWdlX3VybCwgc2V0X25ld19pbWFnZV91cmxdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBgJHtyb290X3VybH0ke3Bsb3RVUkx9O25vdE9sZGVyVGhhbj0ke25vdF9vbGRlcl90aGFufWBcclxuICApO1xyXG4gIGNvbnN0IFtvbGRfaW1hZ2VfdXJsLCBzZXRfb2xkX2ltYWdlX3VybF0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIGAke3Jvb3RfdXJsfSR7cGxvdFVSTH07bm90T2xkZXJUaGFuPSR7bm90X29sZGVyX3RoYW59YFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtpbWFnZUVycm9yLCBzZXRJbWFnZUVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldF9uZXdfaW1hZ2VfdXJsKFxyXG4gICAgICBgJHtyb290X3VybH0ke3Bsb3RVUkx9O25vdE9sZGVyVGhhbj0ke25vdF9vbGRlcl90aGFufWBcclxuICAgICk7XHJcbiAgfSwgW1xyXG4gICAgbm90X29sZGVyX3RoYW4sXHJcbiAgICBwYXJhbXNfZm9yX2FwaS5jdXN0b21pc2UsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS5oZWlnaHQsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS53aWR0aCxcclxuICAgIHBhcmFtc19mb3JfYXBpLnJ1bl9udW1iZXIsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS5kYXRhc2V0X25hbWUsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS5sdW1pLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkubm9ybWFsaXplLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkub3ZlcmxheV9wbG90LFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkucGxvdF9uYW1lLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkuZm9sZGVyc19wYXRoLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkub3ZlcmxheV9wbG90LFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkuam9pbmVkX292ZXJsYWllZF9wbG90c191cmxzLFxyXG4gICAgcGxvdFVSTFxyXG4gIF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaWRfID0gbWFrZWlkKClcclxuICAgIHNldElkKGlkXylcclxuICB9LCBbXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFkZExvYWRlcih7IHZhbHVlOiBsb2FkZXIsIGlkIH0pXHJcbiAgfSwgW2xvYWRlcl0pXHJcblxyXG4gIGNvbnN0IG9sZF9pbWFnZV9kaXNwbGF5ID0gIWxvYWRlciA/ICcnIDogJ25vbmUnO1xyXG4gIGNvbnN0IG5ld19pbWFnZV9kaXNwbGF5ID0gIWxvYWRlciA/ICdub25lJyA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2ltYWdlRXJyb3IgPyAoXHJcbiAgICAgICAgPEVycm9yTWVzc2FnZSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGltYWdlUmVmKSB7XHJcbiAgICAgICAgICAgICAgICBpc1Bsb3RTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICA/IGF3YWl0IHJlbW92ZVBsb3RGcm9tUmlnaHRTaWRlKHF1ZXJ5LCBwbG90KVxyXG4gICAgICAgICAgICAgICAgICA6IGF3YWl0IGFkZFBsb3RUb1JpZ2h0U2lkZShxdWVyeSwgcGxvdCk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwoaW1hZ2VSZWYpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyFpbWFnZUVycm9yICYmIChcclxuICAgICAgICAgICAgICA8UGxvdFVwZGF0ZUlkaWNhdG9yXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU9e2JsaW5rLnRvU3RyaW5nKCkgfHwgbG9hZGVyLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlRmFsbGJhY2tMaXZlXHJcbiAgICAgICAgICAgICAgICAgIHJldHJ5VGltZXM9ezN9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IG5ld19pbWFnZV9kaXNwbGF5IH19XHJcbiAgICAgICAgICAgICAgICAgIG9uTG9hZD17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRlcihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRfb2xkX2ltYWdlX3VybChuZXdfaW1hZ2VfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwbG90Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bmV3X2ltYWdlX3VybH1cclxuICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VFcnJvcj17c2V0SW1hZ2VFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3BhcmFtc19mb3JfYXBpLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7LypXaGVuIGltYWdlcyBpcyB1cGRhdGluZywgd2UgZ2V0dGluZyBibGlua2luZyBlZmZlY3QuIFxyXG4gICAgICAgICAgICAgICAgICAgIFdlIHRyeWluZyB0byBhdm9pZCBpdCB3aXRoIHNob3dpbmcgb2xkIGltYWdlIGluc3RlYWQgb2Ygbm90aGluZyAod2hlbiBhIG5ldyBpbWFnZSBpcyBqdXN0IHJlcXVlc3RpbmcgcHJvY2VzcylcclxuICAgICAgICAgICAgICAgICAgICBPbGQgaW1hZ2UgaXMgYW4gaW1hZ2Ugd2hpY2ggaXMgMjAgc2VjIG9sZGVyIHRoZW4gdGhlIG5ldyByZXF1ZXN0ZWQgb25lLlxyXG4gICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgPEltYWdlRmFsbGJhY2tMaXZlXHJcbiAgICAgICAgICAgICAgICAgIHJldHJ5VGltZXM9ezN9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IG9sZF9pbWFnZV9kaXNwbGF5IH19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cGxvdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkxvYWQ9eyAoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtvbGRfaW1hZ2VfdXJsfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJbWFnZUVycm9yPXtzZXRJbWFnZUVycm9yfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17J2F1dG8nfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eydhdXRvJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9QbG90VXBkYXRlSWRpY2F0b3I+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/plots/plot/plotImages/liveModePlotImage.tsx\n");

/***/ })

})