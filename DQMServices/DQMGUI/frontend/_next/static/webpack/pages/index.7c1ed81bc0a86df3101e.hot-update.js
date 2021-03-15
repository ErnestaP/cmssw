webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx":
/*!*****************************************************************!*\
  !*** ./components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx ***!
  \*****************************************************************/
/*! exports provided: ZoomedPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZoomedPlot\", function() { return ZoomedPlot; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/config */ \"./config/config.ts\");\n/* harmony import */ var _containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../containers/display/styledComponents */ \"./containers/display/styledComponents.tsx\");\n/* harmony import */ var _plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../plot/singlePlot/utils */ \"./components/plots/plot/singlePlot/utils.ts\");\n/* harmony import */ var _customisation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../customisation */ \"./components/customisation/index.tsx\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../menu */ \"./components/plots/zoomedPlots/menu.tsx\");\n/* harmony import */ var _plot_plotImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../plot/plotImages */ \"./components/plots/plot/plotImages/index.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils */ \"./components/utils.ts\");\n/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../api/utils */ \"./api/utils.ts\");\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar info = function info() {\n  antd__WEBPACK_IMPORTED_MODULE_4__[\"message\"].info('Plot is already customised');\n};\n\nvar ZoomedPlot = function ZoomedPlot(_ref) {\n  _s();\n\n  var _params_for_api$width;\n\n  var selected_plot = _ref.selected_plot,\n      params_for_api = _ref.params_for_api;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      customizationParams = _useState[0],\n      setCustomisationParams = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (selected_plot.draw) {\n      setCustomisationParams(selected_plot.draw);\n      info();\n    }\n  }, []);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openCustomisation = _useState2[0],\n      toggleCustomisationMenu = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPortalWindowOpen = _useState3[0],\n      setIsPortalWindowOpen = _useState3[1];\n\n  params_for_api.customise = customizationParams;\n  var plot_url = Object(_api_utils__WEBPACK_IMPORTED_MODULE_12__[\"chooseApiForGettingPlotUrl\"])(params_for_api);\n\n  var copy_of_params = _objectSpread({}, params_for_api);\n\n  copy_of_params.height = window.innerHeight;\n  copy_of_params.width = Math.round(window.innerHeight * 1.33);\n  var zoomed_plot_url = Object(_api_utils__WEBPACK_IMPORTED_MODULE_12__[\"chooseApiForGettingPlotUrl\"])(copy_of_params);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var query = router.query;\n  var url = Object(_utils__WEBPACK_IMPORTED_MODULE_11__[\"getZoomedPlotsUrlForOverlayingPlotsWithDifferentNames\"])(query, selected_plot);\n  var zoomedPlotMenuOptions = [{\n    label: 'Customize',\n    value: 'customise',\n    action: function action() {\n      return toggleCustomisationMenu(true);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"SettingOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }\n    })\n  }, _config_config__WEBPACK_IMPORTED_MODULE_5__[\"functions_config\"].new_back_end.new_back_end && {\n    label: 'Overlay with another plot',\n    value: 'overlay',\n    url: url,\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"BlockOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }\n    })\n  }];\n  return __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"StyledCol\"], {\n    space: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(_customisation__WEBPACK_IMPORTED_MODULE_8__[\"Customisation\"], {\n    plot_name: selected_plot.name,\n    customizationParams: customizationParams,\n    open: openCustomisation,\n    onCancel: function onCancel() {\n      return toggleCustomisationMenu(false);\n    },\n    setCustomisationParams: setCustomisationParams,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"StyledPlotRow\"], {\n    minheight: params_for_api.height,\n    width: (_params_for_api$width = params_for_api.width) === null || _params_for_api$width === void 0 ? void 0 : _params_for_api$width.toString(),\n    is_plot_selected: true.toString(),\n    nopointer: true.toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"PlotNameCol\"], {\n    error: Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_7__[\"get_plot_error\"])(selected_plot).toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, selected_plot.name), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"Column\"], {\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_9__[\"ZoomedPlotMenu\"], {\n    options: zoomedPlotMenuOptions,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"MinusIcon\"], {\n    onClick: function onClick() {\n      return Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_7__[\"removePlotFromRightSide\"])(query, selected_plot);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  })), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"ImageDiv\"], {\n    alignitems: \"center\",\n    id: selected_plot.name,\n    width: params_for_api.width,\n    height: params_for_api.height,\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(_plot_plotImages__WEBPACK_IMPORTED_MODULE_10__[\"PlotImage\"], {\n    params_for_api: params_for_api,\n    plot: selected_plot,\n    plotURL: plot_url,\n    query: query,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(ZoomedPlot, \"S6UsqqHv9GcLJEonr+0aU5TTYMY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = ZoomedPlot;\n\nvar _c;\n\n$RefreshReg$(_c, \"ZoomedPlot\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy96b29tZWRQbG90cy96b29tZWRQbG90cy96b29tZWRQbG90LnRzeD8zNTBiIl0sIm5hbWVzIjpbImluZm8iLCJtZXNzYWdlIiwiWm9vbWVkUGxvdCIsInNlbGVjdGVkX3Bsb3QiLCJwYXJhbXNfZm9yX2FwaSIsInVzZVN0YXRlIiwiY3VzdG9taXphdGlvblBhcmFtcyIsInNldEN1c3RvbWlzYXRpb25QYXJhbXMiLCJ1c2VFZmZlY3QiLCJkcmF3Iiwib3BlbkN1c3RvbWlzYXRpb24iLCJ0b2dnbGVDdXN0b21pc2F0aW9uTWVudSIsImlzUG9ydGFsV2luZG93T3BlbiIsInNldElzUG9ydGFsV2luZG93T3BlbiIsImN1c3RvbWlzZSIsInBsb3RfdXJsIiwiY2hvb3NlQXBpRm9yR2V0dGluZ1Bsb3RVcmwiLCJjb3B5X29mX3BhcmFtcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwicm91bmQiLCJ6b29tZWRfcGxvdF91cmwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVybCIsImdldFpvb21lZFBsb3RzVXJsRm9yT3ZlcmxheWluZ1Bsb3RzV2l0aERpZmZlcmVudE5hbWVzIiwiem9vbWVkUGxvdE1lbnVPcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImFjdGlvbiIsImljb24iLCJmdW5jdGlvbnNfY29uZmlnIiwibmV3X2JhY2tfZW5kIiwibmFtZSIsInRvU3RyaW5nIiwiZ2V0X3Bsb3RfZXJyb3IiLCJyZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQVFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCQyw4Q0FBTyxDQUFDRCxJQUFSLENB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b3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRnVsbHNjcmVlbk91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnYW50ZC9saWIvZm9ybS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBCbG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGZ1bmN0aW9uc19jb25maWcsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgUGFyYW1zRm9yQXBpUHJvcHMsXHJcbiAgUGxvdERhdGFQcm9wcyxcclxuICBRdWVyeVByb3BzLFxyXG4gIEN1c3RvbWl6ZVByb3BzLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRDb2wsXHJcbiAgUGxvdE5hbWVDb2wsXHJcbiAgU3R5bGVkUGxvdFJvdyxcclxuICBDb2x1bW4sXHJcbiAgSW1hZ2VEaXYsXHJcbiAgTWludXNJY29uLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICByZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSxcclxuICBnZXRfcGxvdF9lcnJvcixcclxufSBmcm9tICcuLi8uLi9wbG90L3NpbmdsZVBsb3QvdXRpbHMnO1xyXG5pbXBvcnQgeyBDdXN0b21pc2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY3VzdG9taXNhdGlvbic7XHJcbmltcG9ydCB7IFpvb21lZFBsb3RNZW51IH0gZnJvbSAnLi4vbWVudSc7XHJcbmltcG9ydCB7IFBsb3RfcG9ydGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L3BvcnRhbCc7XHJcbmltcG9ydCB7IFBsb3RJbWFnZSB9IGZyb20gJy4uLy4uL3Bsb3QvcGxvdEltYWdlcyc7XHJcbmltcG9ydCB7IGdldFpvb21lZFBsb3RzVXJsRm9yT3ZlcmxheWluZ1Bsb3RzV2l0aERpZmZlcmVudE5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBjaG9vc2VBcGlGb3JHZXR0aW5nUGxvdFVybCB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaS91dGlscyc7XHJcblxyXG5jb25zdCBpbmZvID0gKCkgPT4ge1xyXG4gIG1lc3NhZ2UuaW5mbygnUGxvdCBpcyBhbHJlYWR5IGN1c3RvbWlzZWQnKTtcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgWm9vbWVkUGxvdHNQcm9wcyB7XHJcbiAgc2VsZWN0ZWRfcGxvdDogUGxvdERhdGFQcm9wcztcclxuICBwYXJhbXNfZm9yX2FwaTogUGFyYW1zRm9yQXBpUHJvcHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBab29tZWRQbG90ID0gKHtcclxuICBzZWxlY3RlZF9wbG90LFxyXG4gIHBhcmFtc19mb3JfYXBpLFxyXG59OiBab29tZWRQbG90c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgW2N1c3RvbWl6YXRpb25QYXJhbXMsIHNldEN1c3RvbWlzYXRpb25QYXJhbXNdID0gdXNlU3RhdGU8XHJcbiAgICBQYXJ0aWFsPFN0b3JlPiAmIEN1c3RvbWl6ZVByb3BzXHJcbiAgPigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoc2VsZWN0ZWRfcGxvdC5kcmF3KXtcclxuICAgICAgc2V0Q3VzdG9taXNhdGlvblBhcmFtcyhzZWxlY3RlZF9wbG90LmRyYXcpXHJcbiAgICAgIGluZm8oKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBbb3BlbkN1c3RvbWlzYXRpb24sIHRvZ2dsZUN1c3RvbWlzYXRpb25NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNQb3J0YWxXaW5kb3dPcGVuLCBzZXRJc1BvcnRhbFdpbmRvd09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBwYXJhbXNfZm9yX2FwaS5jdXN0b21pc2UgPSBjdXN0b21pemF0aW9uUGFyYW1zO1xyXG4gIGNvbnN0IHBsb3RfdXJsID0gY2hvb3NlQXBpRm9yR2V0dGluZ1Bsb3RVcmwocGFyYW1zX2Zvcl9hcGkpO1xyXG4gIGNvbnN0IGNvcHlfb2ZfcGFyYW1zID0geyAuLi5wYXJhbXNfZm9yX2FwaSB9O1xyXG4gIGNvcHlfb2ZfcGFyYW1zLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICBjb3B5X29mX3BhcmFtcy53aWR0aCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0ICogMS4zMyk7XHJcblxyXG4gIGNvbnN0IHpvb21lZF9wbG90X3VybCA9IGNob29zZUFwaUZvckdldHRpbmdQbG90VXJsKGNvcHlfb2ZfcGFyYW1zKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcXVlcnk6IFF1ZXJ5UHJvcHMgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IHVybCA9IGdldFpvb21lZFBsb3RzVXJsRm9yT3ZlcmxheWluZ1Bsb3RzV2l0aERpZmZlcmVudE5hbWVzKHF1ZXJ5LCBzZWxlY3RlZF9wbG90KVxyXG5cclxuICBjb25zdCB6b29tZWRQbG90TWVudU9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnQ3VzdG9taXplJyxcclxuICAgICAgdmFsdWU6ICdjdXN0b21pc2UnLFxyXG4gICAgICBhY3Rpb246ICgpID0+IHRvZ2dsZUN1c3RvbWlzYXRpb25NZW51KHRydWUpLFxyXG4gICAgICBpY29uOiA8U2V0dGluZ091dGxpbmVkIC8+LFxyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uc19jb25maWcubmV3X2JhY2tfZW5kLm5ld19iYWNrX2VuZCAmJiB7XHJcbiAgICAgIGxhYmVsOiAnT3ZlcmxheSB3aXRoIGFub3RoZXIgcGxvdCcsXHJcbiAgICAgIHZhbHVlOiAnb3ZlcmxheScsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBpY29uOiA8QmxvY2tPdXRsaW5lZCAvPixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb2wgc3BhY2U9ezJ9PlxyXG4gICAgICA8Q3VzdG9taXNhdGlvblxyXG4gICAgICAgIHBsb3RfbmFtZT17c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgIGN1c3RvbWl6YXRpb25QYXJhbXM9e2N1c3RvbWl6YXRpb25QYXJhbXN9XHJcbiAgICAgICAgb3Blbj17b3BlbkN1c3RvbWlzYXRpb259XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHRvZ2dsZUN1c3RvbWlzYXRpb25NZW51KGZhbHNlKX1cclxuICAgICAgICBzZXRDdXN0b21pc2F0aW9uUGFyYW1zPXtzZXRDdXN0b21pc2F0aW9uUGFyYW1zfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3R5bGVkUGxvdFJvd1xyXG4gICAgICAgIG1pbmhlaWdodD17cGFyYW1zX2Zvcl9hcGkuaGVpZ2h0fVxyXG4gICAgICAgIHdpZHRoPXtwYXJhbXNfZm9yX2FwaS53aWR0aD8udG9TdHJpbmcoKX1cclxuICAgICAgICBpc19wbG90X3NlbGVjdGVkPXt0cnVlLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgbm9wb2ludGVyPXt0cnVlLnRvU3RyaW5nKCl9XHJcbiAgICAgID5cclxuICAgICAgICA8UGxvdE5hbWVDb2wgZXJyb3I9e2dldF9wbG90X2Vycm9yKHNlbGVjdGVkX3Bsb3QpLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAge3NlbGVjdGVkX3Bsb3QubmFtZX1cclxuICAgICAgICA8L1Bsb3ROYW1lQ29sPlxyXG4gICAgICAgIDxDb2x1bW4gZGlzcGxheT1cImZsZXhcIj5cclxuICAgICAgICAgIDxab29tZWRQbG90TWVudSBvcHRpb25zPXt6b29tZWRQbG90TWVudU9wdGlvbnN9IC8+XHJcbiAgICAgICAgICA8TWludXNJY29uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVBsb3RGcm9tUmlnaHRTaWRlKHF1ZXJ5LCBzZWxlY3RlZF9wbG90KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgPEltYWdlRGl2XHJcbiAgICAgICAgICBhbGlnbml0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgIGlkPXtzZWxlY3RlZF9wbG90Lm5hbWV9XHJcbiAgICAgICAgICB3aWR0aD17cGFyYW1zX2Zvcl9hcGkud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH1cclxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGxvdEltYWdlXHJcbiAgICAgICAgICAgIHBhcmFtc19mb3JfYXBpPXtwYXJhbXNfZm9yX2FwaX1cclxuICAgICAgICAgICAgcGxvdD17c2VsZWN0ZWRfcGxvdH1cclxuICAgICAgICAgICAgcGxvdFVSTD17cGxvdF91cmx9XHJcbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgPC9TdHlsZWRQbG90Um93PlxyXG4gICAgPC9TdHlsZWRDb2w+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx\n");

/***/ }),

/***/ "./containers/display/portal/index.tsx":
false,

/***/ "./containers/display/portal/portal.tsx":
false

})