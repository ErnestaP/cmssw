webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/zoomedPlots/zoomedOverlayPlots/index.tsx":
/*!*******************************************************************!*\
  !*** ./components/plots/zoomedPlots/zoomedOverlayPlots/index.tsx ***!
  \*******************************************************************/
/*! exports provided: ZoomedPlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZoomedPlots\", function() { return ZoomedPlots; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zoomedOverlaidPlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zoomedOverlaidPlot */ \"./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx\");\n/* harmony import */ var _zoomedOverlaidJSROOTPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoomedOverlaidJSROOTPlot */ \"./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidJSROOTPlot.tsx\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styledComponents */ \"./components/styledComponents.ts\");\n/* harmony import */ var _contexts_rightSideContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../contexts/rightSideContext */ \"./contexts/rightSideContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ \"./components/utils.ts\");\n/* harmony import */ var _viewDetailsMenu_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../viewDetailsMenu/utils */ \"./components/viewDetailsMenu/utils.ts\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/zoomedPlots/zoomedOverlayPlots/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ZoomedPlots = function ZoomedPlots(_ref) {\n  _s();\n\n  var selected_plots = _ref.selected_plots;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var query = router.query;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_rightSideContext__WEBPACK_IMPORTED_MODULE_4__[\"store\"]),\n      rightSideSize = _useContext.rightSideSize,\n      customise = _useContext.customise,\n      JSROOTmode = _useContext.JSROOTmode;\n\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"ZoomedPlotsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, selected_plots.map(function (selected_plot) {\n    console.log(params_for_api);\n    var params_for_api = {\n      run_number: query.run_number,\n      dataset_name: query.dataset_name,\n      lumi: query.lumi,\n      folders_path: selected_plot.path,\n      overlay: query.overlay,\n      overlay_plot: Object(_viewDetailsMenu_utils__WEBPACK_IMPORTED_MODULE_7__[\"formTriples\"])(query.overlay_data),\n      height: rightSideSize.h,\n      width: rightSideSize.w,\n      customise: customise,\n      plot_name: selected_plot.name,\n      normalize: query.normalize,\n      stats: query.stats,\n      error: query.error\n    };\n\n    if (JSROOTmode) {\n      var id = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"makeid\"])();\n      return __jsx(_zoomedOverlaidJSROOTPlot__WEBPACK_IMPORTED_MODULE_2__[\"ZoomedOverlaidJSROOTPlot\"], {\n        selected_plot: selected_plot,\n        params_for_api: params_for_api,\n        key: selected_plot.name,\n        id: id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }\n      });\n    }\n\n    return __jsx(_zoomedOverlaidPlot__WEBPACK_IMPORTED_MODULE_1__[\"ZoomedOverlaidPlot\"], {\n      selected_plot: selected_plot,\n      params_for_api: params_for_api,\n      key: selected_plot.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }\n    });\n  }));\n};\n\n_s(ZoomedPlots, \"Izk7cVOh+97smNOXN/d4BV7qdBM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = ZoomedPlots;\n\nvar _c;\n\n$RefreshReg$(_c, \"ZoomedPlots\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy96b29tZWRQbG90cy96b29tZWRPdmVybGF5UGxvdHMvaW5kZXgudHN4PzE0YjYiXSwibmFtZXMiOlsiWm9vbWVkUGxvdHMiLCJzZWxlY3RlZF9wbG90cyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlQ29udGV4dCIsInN0b3JlIiwicmlnaHRTaWRlU2l6ZSIsImN1c3RvbWlzZSIsIkpTUk9PVG1vZGUiLCJtYXAiLCJzZWxlY3RlZF9wbG90IiwiY29uc29sZSIsImxvZyIsInBhcmFtc19mb3JfYXBpIiwicnVuX251bWJlciIsImRhdGFzZXRfbmFtZSIsImx1bWkiLCJmb2xkZXJzX3BhdGgiLCJwYXRoIiwib3ZlcmxheSIsIm92ZXJsYXlfcGxvdCIsImZvcm1UcmlwbGVzIiwib3ZlcmxheV9kYXRhIiwiaGVpZ2h0IiwiaCIsIndpZHRoIiwidyIsInBsb3RfbmFtZSIsIm5hbWUiLCJub3JtYWxpemUiLCJzdGF0cyIsImVycm9yIiwiaWQiLCJtYWtlaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1PLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTBDO0FBQUE7O0FBQUEsTUFBdkNDLGNBQXVDLFFBQXZDQSxjQUF1QztBQUNuRSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBaUIsR0FBR0YsTUFBTSxDQUFDRSxLQUFqQzs7QUFGbUUsb0JBR2xCQyx3REFBVSxDQUFDQyxnRUFBRCxDQUhRO0FBQUEsTUFHM0RDLGFBSDJELGVBRzNEQSxhQUgyRDtBQUFBLE1BRzVDQyxTQUg0QyxlQUc1Q0EsU0FINEM7QUFBQSxNQUdqQ0MsVUFIaUMsZUFHakNBLFVBSGlDOztBQUtuRSxTQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixjQUFjLENBQUNTLEdBQWYsQ0FBbUIsVUFBQ0MsYUFBRCxFQUFrQztBQUNwREMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBQVo7QUFDQSxRQUFNQSxjQUFjLEdBQUc7QUFDckJDLGdCQUFVLEVBQUVYLEtBQUssQ0FBQ1csVUFERztBQUVyQkMsa0JBQVksRUFBRVosS0FBSyxDQUFDWSxZQUZDO0FBR3JCQyxVQUFJLEVBQUViLEtBQUssQ0FBQ2EsSUFIUztBQUlyQkMsa0JBQVksRUFBRVAsYUFBYSxDQUFDUSxJQUpQO0FBS3JCQyxhQUFPLEVBQUVoQixLQUFLLENBQUNnQixPQUxNO0FBTXJCQyxrQkFBWSxFQUFFQywwRUFBVyxDQUFDbEIsS0FBSyxDQUFDbUIsWUFBUCxDQU5KO0FBT3JCQyxZQUFNLEVBQUVqQixhQUFhLENBQUNrQixDQVBEO0FBUXJCQyxXQUFLLEVBQUVuQixhQUFhLENBQUNvQixDQVJBO0FBU3JCbkIsZUFBUyxFQUFFQSxTQVRVO0FBVXJCb0IsZUFBUyxFQUFFakIsYUFBYSxDQUFDa0IsSUFWSjtBQVdyQkMsZUFBUyxFQUFFMUIsS0FBSyxDQUFDMEIsU0FYSTtBQVlyQkMsV0FBSyxFQUFFM0IsS0FBSyxDQUFDMkIsS0FaUTtBQWFyQkMsV0FBSyxFQUFFNUIsS0FBSyxDQUFDNEI7QUFiUSxLQUF2Qjs7QUFlQSxRQUFJdkIsVUFBSixFQUFnQjtBQUNkLFVBQU13QixFQUFFLEdBQUdDLHFEQUFNLEVBQWpCO0FBQ0EsYUFDRSxNQUFDLGtGQUFEO0FBQ0UscUJBQWEsRUFBRXZCLGFBRGpCO0FBRUUsc0JBQWMsRUFBRUcsY0FGbEI7QUFHRSxXQUFHLEVBQUVILGFBQWEsQ0FBQ2tCLElBSHJCO0FBSUUsVUFBRSxFQUFFSSxFQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQVFEOztBQUNELFdBQ0UsTUFBQyxzRUFBRDtBQUNFLG1CQUFhLEVBQUV0QixhQURqQjtBQUVFLG9CQUFjLEVBQUVHLGNBRmxCO0FBR0UsU0FBRyxFQUFFSCxhQUFhLENBQUNrQixJQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFPRCxHQW5DQSxDQURILENBREY7QUF3Q0QsQ0E3Q007O0dBQU03QixXO1VBQ0lHLHFEOzs7S0FESkgsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGxvdHMvem9vbWVkUGxvdHMvem9vbWVkT3ZlcmxheVBsb3RzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFBsb3REYXRhUHJvcHMsXHJcbiAgUXVlcnlQcm9wcyxcclxufSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2Rpc3BsYXkvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFpvb21lZE92ZXJsYWlkUGxvdCB9IGZyb20gJy4vem9vbWVkT3ZlcmxhaWRQbG90JztcclxuaW1wb3J0IHsgWm9vbWVkT3ZlcmxhaWRKU1JPT1RQbG90IH0gZnJvbSAnLi96b29tZWRPdmVybGFpZEpTUk9PVFBsb3QnO1xyXG5pbXBvcnQgeyBab29tZWRQbG90c1dyYXBwZXIgfSBmcm9tICcuLi8uLi8uLi9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250ZXh0cy9yaWdodFNpZGVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlaWQgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IGZvcm1UcmlwbGVzIH0gZnJvbSAnLi4vLi4vLi4vdmlld0RldGFpbHNNZW51L3V0aWxzJztcclxuXHJcbmludGVyZmFjZSBab29tZWRQbG90c1Byb3BzIHtcclxuICBzZWxlY3RlZF9wbG90czogUGxvdERhdGFQcm9wc1tdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgWm9vbWVkUGxvdHMgPSAoeyBzZWxlY3RlZF9wbG90cyB9OiBab29tZWRQbG90c1Byb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcXVlcnk6IFF1ZXJ5UHJvcHMgPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyByaWdodFNpZGVTaXplLCBjdXN0b21pc2UsIEpTUk9PVG1vZGUgfSA9IHVzZUNvbnRleHQoc3RvcmUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Wm9vbWVkUGxvdHNXcmFwcGVyPlxyXG4gICAgICB7c2VsZWN0ZWRfcGxvdHMubWFwKChzZWxlY3RlZF9wbG90OiBQbG90RGF0YVByb3BzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zX2Zvcl9hcGkpXHJcbiAgICAgICAgY29uc3QgcGFyYW1zX2Zvcl9hcGkgPSB7XHJcbiAgICAgICAgICBydW5fbnVtYmVyOiBxdWVyeS5ydW5fbnVtYmVyLFxyXG4gICAgICAgICAgZGF0YXNldF9uYW1lOiBxdWVyeS5kYXRhc2V0X25hbWUsXHJcbiAgICAgICAgICBsdW1pOiBxdWVyeS5sdW1pLFxyXG4gICAgICAgICAgZm9sZGVyc19wYXRoOiBzZWxlY3RlZF9wbG90LnBhdGgsXHJcbiAgICAgICAgICBvdmVybGF5OiBxdWVyeS5vdmVybGF5LFxyXG4gICAgICAgICAgb3ZlcmxheV9wbG90OiBmb3JtVHJpcGxlcyhxdWVyeS5vdmVybGF5X2RhdGEpLFxyXG4gICAgICAgICAgaGVpZ2h0OiByaWdodFNpZGVTaXplLmgsXHJcbiAgICAgICAgICB3aWR0aDogcmlnaHRTaWRlU2l6ZS53LFxyXG4gICAgICAgICAgY3VzdG9taXNlOiBjdXN0b21pc2UsXHJcbiAgICAgICAgICBwbG90X25hbWU6IHNlbGVjdGVkX3Bsb3QubmFtZSxcclxuICAgICAgICAgIG5vcm1hbGl6ZTogcXVlcnkubm9ybWFsaXplLFxyXG4gICAgICAgICAgc3RhdHM6IHF1ZXJ5LnN0YXRzLFxyXG4gICAgICAgICAgZXJyb3I6IHF1ZXJ5LmVycm9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChKU1JPT1Rtb2RlKSB7XHJcbiAgICAgICAgICBjb25zdCBpZCA9IG1ha2VpZCgpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFpvb21lZE92ZXJsYWlkSlNST09UUGxvdFxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkX3Bsb3Q9e3NlbGVjdGVkX3Bsb3R9XHJcbiAgICAgICAgICAgICAgcGFyYW1zX2Zvcl9hcGk9e3BhcmFtc19mb3JfYXBpfVxyXG4gICAgICAgICAgICAgIGtleT17c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Wm9vbWVkT3ZlcmxhaWRQbG90XHJcbiAgICAgICAgICAgIHNlbGVjdGVkX3Bsb3Q9e3NlbGVjdGVkX3Bsb3R9XHJcbiAgICAgICAgICAgIHBhcmFtc19mb3JfYXBpPXtwYXJhbXNfZm9yX2FwaX1cclxuICAgICAgICAgICAga2V5PXtzZWxlY3RlZF9wbG90Lm5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9ab29tZWRQbG90c1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/plots/zoomedPlots/zoomedOverlayPlots/index.tsx\n");

/***/ })

})