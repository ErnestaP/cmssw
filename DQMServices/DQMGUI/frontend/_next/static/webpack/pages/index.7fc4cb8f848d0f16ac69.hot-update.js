webpackHotUpdate_N_E("pages/index",{

/***/ "./components/viewDetailsMenu/reference/overlayRuns.tsx":
/*!**************************************************************!*\
  !*** ./components/viewDetailsMenu/reference/overlayRuns.tsx ***!
  \**************************************************************/
/*! exports provided: OverlayRuns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OverlayRuns\", function() { return OverlayRuns; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledComponents */ \"./components/styledComponents.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./components/viewDetailsMenu/utils.ts\");\n/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../contexts/leftSideContext */ \"./contexts/leftSideContext.tsx\");\n/* harmony import */ var _setRunsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setRunsModal */ \"./components/viewDetailsMenu/reference/setRunsModal.tsx\");\n/* harmony import */ var _tableOfSelectedRunForOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tableOfSelectedRunForOverlay */ \"./components/viewDetailsMenu/reference/tableOfSelectedRunForOverlay.tsx\");\n/* harmony import */ var _overlaidRunsActions_changeRunDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overlaidRunsActions/changeRunDetails */ \"./components/viewDetailsMenu/reference/overlaidRunsActions/changeRunDetails.ts\");\n/* harmony import */ var _overlaidRunsActions_removeRunFromAList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlaidRunsActions/removeRunFromAList */ \"./components/viewDetailsMenu/reference/overlaidRunsActions/removeRunFromAList.ts\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/viewDetailsMenu/reference/overlayRuns.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar OverlayRuns = function OverlayRuns(_ref) {\n  _s();\n\n  var overlaid_runs = _ref.overlaid_runs,\n      query = _ref.query;\n  var globalState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_5__[\"store\"]);\n  var runs_set_for_overlay = globalState.runs_set_for_overlay,\n      set_runs_set_for_overlay = globalState.set_runs_set_for_overlay,\n      setTriples = globalState.setTriples,\n      triples = globalState.triples;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      open = _useState[0],\n      toggleModal = _useState[1];\n\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"CustomDiv\"], {\n    style: {\n      overflowX: 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(_setRunsModal__WEBPACK_IMPORTED_MODULE_6__[\"SetRunsModal\"], {\n    open: open,\n    toggleModal: toggleModal,\n    overlaid_runs: overlaid_runs,\n    setTriples: setTriples,\n    triples: triples,\n    set_runs_set_for_overlay: set_runs_set_for_overlay,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(_tableOfSelectedRunForOverlay__WEBPACK_IMPORTED_MODULE_7__[\"TableOfSelectedRunForOverlay\"], {\n    triples: triples,\n    query: query,\n    change_run_details: function change_run_details(triples) {\n      return Object(_overlaidRunsActions_changeRunDetails__WEBPACK_IMPORTED_MODULE_8__[\"change_run_details\"])(triples)(setTriples, query);\n    },\n    setTriples: setTriples,\n    remove_runs_to_set_runs_for_overlay: function remove_runs_to_set_runs_for_overlay(id) {\n      return Object(_overlaidRunsActions_removeRunFromAList__WEBPACK_IMPORTED_MODULE_9__[\"remove_runs_from_a_lst\"])(id)(triples, setTriples, query);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    justify: \"space-between\",\n    style: {\n      height: 48,\n      padding: 8\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"CustomDiv\"], {\n    position: \"fixed\",\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"CustomCol\"], {\n    space: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n    title: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getDisabledButtonTitle\"])(overlaid_runs.length >= 4 || runs_set_for_overlay.length >= 4),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"StyledSecondaryButton\"], {\n    disabled: overlaid_runs.length >= 8 || runs_set_for_overlay.length >= 4,\n    onClick: function onClick() {\n      toggleModal(true);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"PlusOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 23\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, \"SET RUNS\"))))));\n};\n\n_s(OverlayRuns, \"++K87hXOETvEiUGA25dKG9faW3M=\");\n\n_c = OverlayRuns;\n\nvar _c;\n\n$RefreshReg$(_c, \"OverlayRuns\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWV3RGV0YWlsc01lbnUvcmVmZXJlbmNlL292ZXJsYXlSdW5zLnRzeD8yYjMwIl0sIm5hbWVzIjpbIk92ZXJsYXlSdW5zIiwib3ZlcmxhaWRfcnVucyIsInF1ZXJ5IiwiZ2xvYmFsU3RhdGUiLCJ1c2VDb250ZXh0Iiwic3RvcmUiLCJydW5zX3NldF9mb3Jfb3ZlcmxheSIsInNldF9ydW5zX3NldF9mb3Jfb3ZlcmxheSIsInNldFRyaXBsZXMiLCJ0cmlwbGVzIiwidXNlU3RhdGUiLCJvcGVuIiwidG9nZ2xlTW9kYWwiLCJvdmVyZmxvd1giLCJjaGFuZ2VfcnVuX2RldGFpbHMiLCJpZCIsInJlbW92ZV9ydW5zX2Zyb21fYV9sc3QiLCJoZWlnaHQiLCJwYWRkaW5nIiwiZ2V0RGlzYWJsZWRCdXR0b25UaXRsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnRDtBQUFBOztBQUFBLE1BQTdDQyxhQUE2QyxRQUE3Q0EsYUFBNkM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQ3pFLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBOUI7QUFEeUUsTUFHdkVDLG9CQUh1RSxHQU9yRUgsV0FQcUUsQ0FHdkVHLG9CQUh1RTtBQUFBLE1BSXZFQyx3QkFKdUUsR0FPckVKLFdBUHFFLENBSXZFSSx3QkFKdUU7QUFBQSxNQUt2RUMsVUFMdUUsR0FPckVMLFdBUHFFLENBS3ZFSyxVQUx1RTtBQUFBLE1BTXZFQyxPQU51RSxHQU9yRU4sV0FQcUUsQ0FNdkVNLE9BTnVFOztBQUFBLGtCQVM3Q0Msc0RBQVEsQ0FBQyxLQUFELENBVHFDO0FBQUEsTUFTbEVDLElBVGtFO0FBQUEsTUFTNURDLFdBVDREOztBQVd6RSxTQUNFLE1BQUMsMkRBQUQ7QUFBVyxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUVGLElBRFI7QUFFRSxlQUFXLEVBQUVDLFdBRmY7QUFHRSxpQkFBYSxFQUFFWCxhQUhqQjtBQUlFLGNBQVUsRUFBRU8sVUFKZDtBQUtFLFdBQU8sRUFBRUMsT0FMWDtBQU1FLDRCQUF3QixFQUFFRix3QkFONUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0UsTUFBQywwRkFBRDtBQUNFLFdBQU8sRUFBRUUsT0FEWDtBQUVFLFNBQUssRUFBRVAsS0FGVDtBQUdFLHNCQUFrQixFQUFFLDRCQUFDTyxPQUFEO0FBQUEsYUFBNEJLLGdHQUFrQixDQUFDTCxPQUFELENBQWxCLENBQTRCRCxVQUE1QixFQUF3Q04sS0FBeEMsQ0FBNUI7QUFBQSxLQUh0QjtBQUlFLGNBQVUsRUFBRU0sVUFKZDtBQUtFLHVDQUFtQyxFQUFFLDZDQUFDTyxFQUFEO0FBQUEsYUFBZ0JDLHNHQUFzQixDQUFDRCxFQUFELENBQXRCLENBQTJCTixPQUEzQixFQUFvQ0QsVUFBcEMsRUFBZ0ROLEtBQWhELENBQWhCO0FBQUEsS0FMdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBZ0JFLE1BQUMsd0NBQUQ7QUFBSyxXQUFPLEVBQUMsZUFBYjtBQUE2QixTQUFLLEVBQUU7QUFBRWUsWUFBTSxFQUFFLEVBQVY7QUFBY0MsYUFBTyxFQUFFO0FBQXZCLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLE9BQXBCO0FBQTRCLFdBQU8sRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUNFLFNBQUssRUFBRUMscUVBQXNCLENBQzNCbEIsYUFBYSxDQUFDbUIsTUFBZCxJQUF3QixDQUF4QixJQUE2QmQsb0JBQW9CLENBQUNjLE1BQXJCLElBQStCLENBRGpDLENBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHVFQUFEO0FBQ0UsWUFBUSxFQUNObkIsYUFBYSxDQUFDbUIsTUFBZCxJQUF3QixDQUF4QixJQUE2QmQsb0JBQW9CLENBQUNjLE1BQXJCLElBQStCLENBRmhFO0FBSUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JSLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FOSDtBQU9FLFFBQUksRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLENBREYsQ0FERixDQURGLENBaEJGLENBREY7QUEwQ0QsQ0FyRE07O0dBQU1aLFc7O0tBQUFBLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZXdEZXRhaWxzTWVudS9yZWZlcmVuY2Uvb3ZlcmxheVJ1bnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFJvdywgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBUcmlwbGVQcm9wcyxcclxuICBRdWVyeVByb3BzLFxyXG59IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRTZWNvbmRhcnlCdXR0b24sXHJcbiAgQ3VzdG9tQ29sLFxyXG4gIEN1c3RvbURpdixcclxufSBmcm9tICcuLi8uLi9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHsgZ2V0RGlzYWJsZWRCdXR0b25UaXRsZSB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0cy9sZWZ0U2lkZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBTZXRSdW5zTW9kYWwgfSBmcm9tICcuL3NldFJ1bnNNb2RhbCc7XHJcbmltcG9ydCB7IFRhYmxlT2ZTZWxlY3RlZFJ1bkZvck92ZXJsYXkgfSBmcm9tICcuL3RhYmxlT2ZTZWxlY3RlZFJ1bkZvck92ZXJsYXknO1xyXG5pbXBvcnQgeyBjaGFuZ2VfcnVuX2RldGFpbHMgfSBmcm9tICcuL292ZXJsYWlkUnVuc0FjdGlvbnMvY2hhbmdlUnVuRGV0YWlscyc7XHJcbmltcG9ydCB7IHJlbW92ZV9ydW5zX2Zyb21fYV9sc3QgfSBmcm9tICcuL292ZXJsYWlkUnVuc0FjdGlvbnMvcmVtb3ZlUnVuRnJvbUFMaXN0JztcclxuXHJcbmludGVyZmFjZSBPdmVybGF5UnVuc1Byb3BzIHtcclxuICBvdmVybGFpZF9ydW5zOiBUcmlwbGVQcm9wc1tdO1xyXG4gIHF1ZXJ5OiBRdWVyeVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcmxheVJ1bnMgPSAoeyBvdmVybGFpZF9ydW5zLCBxdWVyeSB9OiBPdmVybGF5UnVuc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VDb250ZXh0KHN0b3JlKTtcclxuICBjb25zdCB7XHJcbiAgICBydW5zX3NldF9mb3Jfb3ZlcmxheSxcclxuICAgIHNldF9ydW5zX3NldF9mb3Jfb3ZlcmxheSxcclxuICAgIHNldFRyaXBsZXMsXHJcbiAgICB0cmlwbGVzLFxyXG4gIH0gPSBnbG9iYWxTdGF0ZTtcclxuXHJcbiAgY29uc3QgW29wZW4sIHRvZ2dsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDdXN0b21EaXYgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnYXV0bycgfX0+XHJcbiAgICAgIDxTZXRSdW5zTW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIHRvZ2dsZU1vZGFsPXt0b2dnbGVNb2RhbH1cclxuICAgICAgICBvdmVybGFpZF9ydW5zPXtvdmVybGFpZF9ydW5zfVxyXG4gICAgICAgIHNldFRyaXBsZXM9e3NldFRyaXBsZXN9XHJcbiAgICAgICAgdHJpcGxlcz17dHJpcGxlc31cclxuICAgICAgICBzZXRfcnVuc19zZXRfZm9yX292ZXJsYXk9e3NldF9ydW5zX3NldF9mb3Jfb3ZlcmxheX1cclxuICAgICAgLz5cclxuICAgICAgPFRhYmxlT2ZTZWxlY3RlZFJ1bkZvck92ZXJsYXlcclxuICAgICAgICB0cmlwbGVzPXt0cmlwbGVzfVxyXG4gICAgICAgIHF1ZXJ5PXtxdWVyeX1cclxuICAgICAgICBjaGFuZ2VfcnVuX2RldGFpbHM9eyh0cmlwbGVzOiBUcmlwbGVQcm9wc1tdKSA9PiBjaGFuZ2VfcnVuX2RldGFpbHModHJpcGxlcykoc2V0VHJpcGxlcywgcXVlcnkpfVxyXG4gICAgICAgIHNldFRyaXBsZXM9e3NldFRyaXBsZXN9XHJcbiAgICAgICAgcmVtb3ZlX3J1bnNfdG9fc2V0X3J1bnNfZm9yX292ZXJsYXk9eyhpZDogc3RyaW5nKSA9PiByZW1vdmVfcnVuc19mcm9tX2FfbHN0KGlkKSh0cmlwbGVzLCBzZXRUcmlwbGVzLCBxdWVyeSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBzdHlsZT17eyBoZWlnaHQ6IDQ4LCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgIDxDdXN0b21EaXYgcG9zaXRpb249XCJmaXhlZFwiIGRpc3BsYXk9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8Q3VzdG9tQ29sIHNwYWNlPVwiMlwiPlxyXG4gICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgIHRpdGxlPXtnZXREaXNhYmxlZEJ1dHRvblRpdGxlKFxyXG4gICAgICAgICAgICAgICAgb3ZlcmxhaWRfcnVucy5sZW5ndGggPj0gNCB8fCBydW5zX3NldF9mb3Jfb3ZlcmxheS5sZW5ndGggPj0gNFxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkU2Vjb25kYXJ5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJsYWlkX3J1bnMubGVuZ3RoID49IDggfHwgcnVuc19zZXRfZm9yX292ZXJsYXkubGVuZ3RoID49IDRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWNvbj17PFBsdXNPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTRVQgUlVOU1xyXG4gICAgICAgICAgICAgIDwvU3R5bGVkU2Vjb25kYXJ5QnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8L0N1c3RvbUNvbD5cclxuICAgICAgICA8L0N1c3RvbURpdj5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0N1c3RvbURpdj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/viewDetailsMenu/reference/overlayRuns.tsx\n");

/***/ })

})