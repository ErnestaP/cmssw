webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx":
/*!********************************************************************************!*\
  !*** ./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx ***!
  \********************************************************************************/
/*! exports provided: ZoomedOverlaidPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZoomedOverlaidPlot\", function() { return ZoomedOverlaidPlot; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _api_oldApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/oldApi */ \"./api/oldApi.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./components/plots/zoomedPlots/zoomedOverlayPlots/utils.ts\");\n/* harmony import */ var _containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../containers/display/styledComponents */ \"./containers/display/styledComponents.tsx\");\n/* harmony import */ var _plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../plot/singlePlot/utils */ \"./components/plots/plot/singlePlot/utils.ts\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu */ \"./components/plots/zoomedPlots/menu.tsx\");\n/* harmony import */ var _customisation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../customisation */ \"./components/customisation/index.tsx\");\n/* harmony import */ var _plot_plotImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../plot/plotImages */ \"./components/plots/plot/plotImages/index.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils */ \"./components/utils.ts\");\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar ZoomedOverlaidPlot = function ZoomedOverlaidPlot(_ref) {\n  _s();\n\n  var _params_for_api$width;\n\n  var selected_plot = _ref.selected_plot,\n      params_for_api = _ref.params_for_api;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      customizationParams = _useState[0],\n      setCustomisationParams = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (selected_plot.draw) {\n      setCustomisationParams(selected_plot.draw);\n    }\n  }, []);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openCustomisation = _useState2[0],\n      toggleCustomisationMenu = _useState2[1];\n\n  params_for_api.customise = customizationParams;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isPortalWindowOpen = _React$useState2[0],\n      setIsPortalWindowOpen = _React$useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var query = router.query;\n  var url = Object(_utils__WEBPACK_IMPORTED_MODULE_11__[\"getZoomedOverlaidPlotsUrlForOverlayingPlotsWithDifferentNames\"])(query, selected_plot);\n  var zoomedPlotMenuOptions = [{\n    label: 'Customize',\n    value: 'Customize',\n    action: function action() {\n      return toggleCustomisationMenu(true);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"SettingOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }\n    })\n  }];\n  var overlaid_plots_urls = Object(_api_oldApi__WEBPACK_IMPORTED_MODULE_4__[\"get_overlaied_plots_urls\"])(params_for_api);\n  var allOverlaidPlotsUrls = params_for_api.overlaidWithLayoutsConfig ? [params_for_api.overlaidWithLayoutsConfig].concat(overlaid_plots_urls) : overlaid_plots_urls;\n  var joined_overlaid_plots_urls = allOverlaidPlotsUrls.join('');\n  params_for_api.joined_overlaied_plots_urls = joined_overlaid_plots_urls;\n  var source = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"get_plot_source\"])(params_for_api);\n  return __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"StyledCol\"], {\n    space: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, __jsx(_customisation__WEBPACK_IMPORTED_MODULE_9__[\"Customisation\"], {\n    plot_name: selected_plot.name,\n    open: openCustomisation,\n    onCancel: function onCancel() {\n      return toggleCustomisationMenu(false);\n    },\n    setCustomisationParams: setCustomisationParams,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"StyledPlotRow\"], {\n    minheight: params_for_api.height,\n    width: (_params_for_api$width = params_for_api.width) === null || _params_for_api$width === void 0 ? void 0 : _params_for_api$width.toString(),\n    is_plot_selected: true.toString(),\n    nopointer: true.toString(),\n    justifycontent: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"PlotNameCol\"], {\n    error: Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_7__[\"get_plot_error\"])(selected_plot).toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, selected_plot.name), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"Column\"], {\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_8__[\"ZoomedPlotMenu\"], {\n    options: zoomedPlotMenuOptions,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"MinusIcon\"], {\n    onClick: function onClick() {\n      return Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_7__[\"removePlotFromRightSide\"])(query, selected_plot);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  })), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_6__[\"ImageDiv\"], {\n    id: selected_plot.name,\n    width: params_for_api.width,\n    height: params_for_api.height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_plot_plotImages__WEBPACK_IMPORTED_MODULE_10__[\"PlotImage\"], {\n    params_for_api: params_for_api,\n    plot: selected_plot,\n    plotURL: source,\n    query: query,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(ZoomedOverlaidPlot, \"S6UsqqHv9GcLJEonr+0aU5TTYMY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = ZoomedOverlaidPlot;\n\nvar _c;\n\n$RefreshReg$(_c, \"ZoomedOverlaidPlot\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy96b29tZWRQbG90cy96b29tZWRPdmVybGF5UGxvdHMvem9vbWVkT3ZlcmxhaWRQbG90LnRzeD9jYjc2Il0sIm5hbWVzIjpbIlpvb21lZE92ZXJsYWlkUGxvdCIsInNlbGVjdGVkX3Bsb3QiLCJwYXJhbXNfZm9yX2FwaSIsInVzZVN0YXRlIiwiY3VzdG9taXphdGlvblBhcmFtcyIsInNldEN1c3RvbWlzYXRpb25QYXJhbXMiLCJ1c2VFZmZlY3QiLCJkcmF3Iiwib3BlbkN1c3RvbWlzYXRpb24iLCJ0b2dnbGVDdXN0b21pc2F0aW9uTWVudSIsImN1c3RvbWlzZSIsIlJlYWN0IiwiaXNQb3J0YWxXaW5kb3dPcGVuIiwic2V0SXNQb3J0YWxXaW5kb3dPcGVuIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1cmwiLCJnZXRab29tZWRPdmVybGFpZFBsb3RzVXJsRm9yT3ZlcmxheWluZ1Bsb3RzV2l0aERpZmZlcmVudE5hbWVzIiwiem9vbWVkUGxvdE1lbnVPcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImFjdGlvbiIsImljb24iLCJvdmVybGFpZF9wbG90c191cmxzIiwiZ2V0X292ZXJsYWllZF9wbG90c191cmxzIiwiYWxsT3ZlcmxhaWRQbG90c1VybHMiLCJvdmVybGFpZFdpdGhMYXlvdXRzQ29uZmlnIiwiY29uY2F0Iiwiam9pbmVkX292ZXJsYWlkX3Bsb3RzX3VybHMiLCJqb2luIiwiam9pbmVkX292ZXJsYWllZF9wbG90c191cmxzIiwic291cmNlIiwiZ2V0X3Bsb3Rfc291cmNlIiwibmFtZSIsImhlaWdodCIsIndpZHRoIiwidG9TdHJpbmciLCJnZXRfcGxvdF9lcnJvciIsInJlbW92ZVBsb3RGcm9tUmlnaHRTaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFTQTtBQUNBO0FBU0E7QUFJQTtBQUNBO0FBRUE7QUFD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QUFDaUMsSUFEakIsQ0FQRixFQVVFLE1BQUMsMkVBQUQ7QUFBUSxXQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBZ0IsV0FBTyxFQUFFZixxQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4RUFBRDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1vQixzRkFBdUIsQ0FBQ3ZCLEtBQUQsRUFBUWYsYUFBUixDQUE3QjtBQUFBLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVkYsRUFnQkUsTUFBQyw2RUFBRDtBQUNFLE1BQUUsRUFBRUEsYUFBYSxDQUFDaUMsSUFEcEI7QUFFRSxTQUFLLEVBQUVoQyxjQUFjLENBQUNrQyxLQUZ4QjtBQUdFLFVBQU0sRUFBRWxDLGNBQWMsQ0FBQ2lDLE1BSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDJEQUFEO0FBQ0Usa0JBQWMsRUFBRWpDLGNBRGxCO0FBRUUsUUFBSSxFQUFFRCxhQUZSO0FBR0UsV0FBTyxFQUFFK0IsTUFIWDtBQUlFLFNBQUssRUFBRWhCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBaEJGLENBUEYsQ0FERjtBQXVDRCxDQS9FTTs7R0FBTWhCLGtCO1VBa0JJZSxxRDs7O0tBbEJKZixrQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGxvdHMvem9vbWVkUGxvdHMvem9vbWVkT3ZlcmxheVBsb3RzL3pvb21lZE92ZXJsYWlkUGxvdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2FudGQvbGliL2Zvcm0vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkLCBGdWxsc2NyZWVuT3V0bGluZWQsIEJsb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBmdW5jdGlvbnNfY29uZmlnLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIGdldF9vdmVybGFpZWRfcGxvdHNfdXJscyxcclxufSBmcm9tICcuLi8uLi8uLi8uLi9hcGkvb2xkQXBpJztcclxuaW1wb3J0IHtcclxuICBQYXJhbXNGb3JBcGlQcm9wcyxcclxuICBQbG90RGF0YVByb3BzLFxyXG4gIFF1ZXJ5UHJvcHMsXHJcbiAgQ3VzdG9taXplUHJvcHMsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBnZXRfcGxvdF9zb3VyY2UgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRQbG90Um93LFxyXG4gIFBsb3ROYW1lQ29sLFxyXG4gIENvbHVtbixcclxuICBTdHlsZWRDb2wsXHJcbiAgSW1hZ2VEaXYsXHJcbiAgSW1hZ2UsXHJcbiAgTWludXNJY29uLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICByZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSxcclxuICBnZXRfcGxvdF9lcnJvcixcclxufSBmcm9tICcuLi8uLi9wbG90L3NpbmdsZVBsb3QvdXRpbHMnO1xyXG5pbXBvcnQgeyBab29tZWRQbG90TWVudSB9IGZyb20gJy4uL21lbnUnO1xyXG5pbXBvcnQgeyBDdXN0b21pc2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY3VzdG9taXNhdGlvbic7XHJcbmltcG9ydCB7IFBsb3RfcG9ydGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L3BvcnRhbCc7XHJcbmltcG9ydCB7IFBsb3RJbWFnZSB9IGZyb20gJy4uLy4uL3Bsb3QvcGxvdEltYWdlcyc7XHJcbmltcG9ydCB7IGdldFpvb21lZE92ZXJsYWlkUGxvdHNVcmxGb3JPdmVybGF5aW5nUGxvdHNXaXRoRGlmZmVyZW50TmFtZXMgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XHJcblxyXG5pbnRlcmZhY2UgWm9vbWVkUGxvdHNQcm9wcyB7XHJcbiAgc2VsZWN0ZWRfcGxvdDogUGxvdERhdGFQcm9wcztcclxuICBwYXJhbXNfZm9yX2FwaTogUGFyYW1zRm9yQXBpUHJvcHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBab29tZWRPdmVybGFpZFBsb3QgPSAoe1xyXG4gIHNlbGVjdGVkX3Bsb3QsXHJcbiAgcGFyYW1zX2Zvcl9hcGksXHJcbn06IFpvb21lZFBsb3RzUHJvcHMpID0+IHtcclxuICBjb25zdCBbY3VzdG9taXphdGlvblBhcmFtcywgc2V0Q3VzdG9taXNhdGlvblBhcmFtc10gPSB1c2VTdGF0ZTxcclxuICAgIFBhcnRpYWw8U3RvcmU+ICYgQ3VzdG9taXplUHJvcHNcclxuICA+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzZWxlY3RlZF9wbG90LmRyYXcpe1xyXG4gICAgICBzZXRDdXN0b21pc2F0aW9uUGFyYW1zKHNlbGVjdGVkX3Bsb3QuZHJhdylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBcclxuY29uc3QgW29wZW5DdXN0b21pc2F0aW9uLCB0b2dnbGVDdXN0b21pc2F0aW9uTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcGFyYW1zX2Zvcl9hcGkuY3VzdG9taXNlID0gY3VzdG9taXphdGlvblBhcmFtcztcclxuICBjb25zdCBbaXNQb3J0YWxXaW5kb3dPcGVuLCBzZXRJc1BvcnRhbFdpbmRvd09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBxdWVyeTogUXVlcnlQcm9wcyA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB1cmwgPSBnZXRab29tZWRPdmVybGFpZFBsb3RzVXJsRm9yT3ZlcmxheWluZ1Bsb3RzV2l0aERpZmZlcmVudE5hbWVzKHF1ZXJ5LCBzZWxlY3RlZF9wbG90KVxyXG5cclxuICBjb25zdCB6b29tZWRQbG90TWVudU9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnQ3VzdG9taXplJyxcclxuICAgICAgdmFsdWU6ICdDdXN0b21pemUnLFxyXG4gICAgICBhY3Rpb246ICgpID0+IHRvZ2dsZUN1c3RvbWlzYXRpb25NZW51KHRydWUpLFxyXG4gICAgICBpY29uOiA8U2V0dGluZ091dGxpbmVkIC8+LFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBvdmVybGFpZF9wbG90c191cmxzID0gZ2V0X292ZXJsYWllZF9wbG90c191cmxzKHBhcmFtc19mb3JfYXBpKTtcclxuICBjb25zdCBhbGxPdmVybGFpZFBsb3RzVXJscyA9IHBhcmFtc19mb3JfYXBpLm92ZXJsYWlkV2l0aExheW91dHNDb25maWcgP1xyXG4gICAgW3BhcmFtc19mb3JfYXBpLm92ZXJsYWlkV2l0aExheW91dHNDb25maWddLmNvbmNhdChvdmVybGFpZF9wbG90c191cmxzKSA6IG92ZXJsYWlkX3Bsb3RzX3VybHNcclxuXHJcbiAgY29uc3Qgam9pbmVkX292ZXJsYWlkX3Bsb3RzX3VybHMgPSBhbGxPdmVybGFpZFBsb3RzVXJscy5qb2luKCcnKTtcclxuICBwYXJhbXNfZm9yX2FwaS5qb2luZWRfb3ZlcmxhaWVkX3Bsb3RzX3VybHMgPSBqb2luZWRfb3ZlcmxhaWRfcGxvdHNfdXJscztcclxuXHJcbiAgY29uc3Qgc291cmNlID0gZ2V0X3Bsb3Rfc291cmNlKHBhcmFtc19mb3JfYXBpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb2wgc3BhY2U9ezJ9PlxyXG4gICAgICA8Q3VzdG9taXNhdGlvblxyXG4gICAgICAgIHBsb3RfbmFtZT17c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgIG9wZW49e29wZW5DdXN0b21pc2F0aW9ufVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0b2dnbGVDdXN0b21pc2F0aW9uTWVudShmYWxzZSl9XHJcbiAgICAgICAgc2V0Q3VzdG9taXNhdGlvblBhcmFtcz17c2V0Q3VzdG9taXNhdGlvblBhcmFtc31cclxuICAgICAgLz5cclxuICAgICAgPFN0eWxlZFBsb3RSb3dcclxuICAgICAgICBtaW5oZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH1cclxuICAgICAgICB3aWR0aD17cGFyYW1zX2Zvcl9hcGkud2lkdGg/LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgaXNfcGxvdF9zZWxlY3RlZD17dHJ1ZS50b1N0cmluZygpfVxyXG4gICAgICAgIG5vcG9pbnRlcj17dHJ1ZS50b1N0cmluZygpfVxyXG4gICAgICAgIGp1c3RpZnljb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxQbG90TmFtZUNvbCBlcnJvcj17Z2V0X3Bsb3RfZXJyb3Ioc2VsZWN0ZWRfcGxvdCkudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICB7c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgIDwvUGxvdE5hbWVDb2w+XHJcbiAgICAgICAgPENvbHVtbiBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICAgICAgPFpvb21lZFBsb3RNZW51IG9wdGlvbnM9e3pvb21lZFBsb3RNZW51T3B0aW9uc30gLz5cclxuICAgICAgICAgIDxNaW51c0ljb25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlUGxvdEZyb21SaWdodFNpZGUocXVlcnksIHNlbGVjdGVkX3Bsb3QpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbHVtbj5cclxuICAgICAgICA8SW1hZ2VEaXZcclxuICAgICAgICAgIGlkPXtzZWxlY3RlZF9wbG90Lm5hbWV9XHJcbiAgICAgICAgICB3aWR0aD17cGFyYW1zX2Zvcl9hcGkud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGxvdEltYWdlXHJcbiAgICAgICAgICAgIHBhcmFtc19mb3JfYXBpPXtwYXJhbXNfZm9yX2FwaX1cclxuICAgICAgICAgICAgcGxvdD17c2VsZWN0ZWRfcGxvdH1cclxuICAgICAgICAgICAgcGxvdFVSTD17c291cmNlfVxyXG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgIDwvU3R5bGVkUGxvdFJvdz5cclxuICAgIDwvU3R5bGVkQ29sPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx\n");

/***/ })

})