webpackHotUpdate_N_E("pages/index",{

/***/ "./components/overlayWithAnotherPlot/index.tsx":
/*!*****************************************************!*\
  !*** ./components/overlayWithAnotherPlot/index.tsx ***!
  \*****************************************************/
/*! exports provided: OverlayWithAnotherPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayWithAnotherPlot", function() { return OverlayWithAnotherPlot; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/modal/Modal */ "./node_modules/antd/lib/modal/Modal.js");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/display/styledComponents */ "./containers/display/styledComponents.tsx");
/* harmony import */ var _containers_display_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/display/utils */ "./containers/display/utils.ts");
/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/leftSideContext */ "./contexts/leftSideContext.tsx");
/* harmony import */ var _hooks_useRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useRequest */ "./hooks/useRequest.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _containers_display_content_folderPath__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/display/content/folderPath */ "./containers/display/content/folderPath.tsx");


var _this = undefined,
    _jsxFileName = "/mnt/c/Users/ernes/Desktop/test/dqmgui_frontend/components/overlayWithAnotherPlot/index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];









var OverlayWithAnotherPlot = function OverlayWithAnotherPlot(_ref) {
  _s();

  var visible = _ref.visible,
      setOpenOverlayWithAnotherPlotModal = _ref.setOpenOverlayWithAnotherPlotModal;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    folder_path: '',
    name: ''
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      overlaidPlots = _React$useState2[0],
      setOverlaidPlots = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      folderPath = _React$useState4[0],
      setFolderPath = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      currentFolder = _React$useState6[0],
      setCurrentFolder = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      plot = _React$useState8[0],
      setPlot = _React$useState8[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var query = router.query;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_6__["store"]),
      updated_by_not_older_than = _React$useContext.updated_by_not_older_than;

  var params = {
    dataset_name: query.dataset_name,
    run_number: query.run_number,
    notOlderThan: updated_by_not_older_than,
    folders_path: overlaidPlots.folder_path,
    plot_name: overlaidPlots.name
  };
  var api = Object(_containers_display_utils__WEBPACK_IMPORTED_MODULE_5__["choose_api"])(params);
  var data_get_by_mount = Object(_hooks_useRequest__WEBPACK_IMPORTED_MODULE_7__["useRequest"])(api, {}, [overlaidPlots.folder_path]);
  var data = data_get_by_mount.data;
  var folders_or_plots = data ? data.data : [];

  var changeFolderPathByBreadcrumb = function changeFolderPathByBreadcrumb() {};

  console.log(data_get_by_mount.data);
  return __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    visible: visible,
    onCancel: function onCancel() {
      setOpenOverlayWithAnotherPlotModal(false);
      setFolderPath([]);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    style: {
      padding: 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_containers_display_content_folderPath__WEBPACK_IMPORTED_MODULE_9__["FolderPath"], {
    folder_path: overlaidPlots.folder_path,
    changeFolderPathByBreadcrumb: changeFolderPathByBreadcrumb,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, folders_or_plots.map(function (folder_or_plot) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, folder_or_plot.subdir && __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      span: 8,
      onClick: function onClick() {
        return setCurrentFolder(folder_or_plot.subdir);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledA"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 23
      }
    }, folder_or_plot.subdir)));
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, folders_or_plots.map(function (folder_or_plot) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, folder_or_plot.name && __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      span: 8,
      onClick: function onClick() {
        return setPlot(folder_or_plot);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 23
      }
    }, folder_or_plot.name)));
  }))));
};

_s(OverlayWithAnotherPlot, "jx1jYibJkFuVyGjoJX65lGHfbr0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _hooks_useRequest__WEBPACK_IMPORTED_MODULE_7__["useRequest"]];
});

_c = OverlayWithAnotherPlot;

var _c;

$RefreshReg$(_c, "OverlayWithAnotherPlot");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5V2l0aEFub3RoZXJQbG90L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJPdmVybGF5V2l0aEFub3RoZXJQbG90IiwidmlzaWJsZSIsInNldE9wZW5PdmVybGF5V2l0aEFub3RoZXJQbG90TW9kYWwiLCJSZWFjdCIsImZvbGRlcl9wYXRoIiwibmFtZSIsIm92ZXJsYWlkUGxvdHMiLCJzZXRPdmVybGFpZFBsb3RzIiwiZm9sZGVyUGF0aCIsInNldEZvbGRlclBhdGgiLCJjdXJyZW50Rm9sZGVyIiwic2V0Q3VycmVudEZvbGRlciIsInBsb3QiLCJzZXRQbG90Iiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJzdG9yZSIsInVwZGF0ZWRfYnlfbm90X29sZGVyX3RoYW4iLCJwYXJhbXMiLCJkYXRhc2V0X25hbWUiLCJydW5fbnVtYmVyIiwibm90T2xkZXJUaGFuIiwiZm9sZGVyc19wYXRoIiwicGxvdF9uYW1lIiwiYXBpIiwiY2hvb3NlX2FwaSIsImRhdGFfZ2V0X2J5X21vdW50IiwidXNlUmVxdWVzdCIsImRhdGEiLCJmb2xkZXJzX29yX3Bsb3RzIiwiY2hhbmdlRm9sZGVyUGF0aEJ5QnJlYWRjcnVtYiIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nIiwid2lkdGgiLCJtYXAiLCJmb2xkZXJfb3JfcGxvdCIsInN1YmRpciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRTyxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLE9BQWtGO0FBQUE7O0FBQUEsTUFBL0VDLE9BQStFLFFBQS9FQSxPQUErRTtBQUFBLE1BQXRFQyxrQ0FBc0UsUUFBdEVBLGtDQUFzRTs7QUFBQSx3QkFDNUVDLDhDQUFBLENBQTRDO0FBQUVDLGVBQVcsRUFBRSxFQUFmO0FBQW1CQyxRQUFJLEVBQUU7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVRCxjQUFjLENBQUNDLE1BQXpCLENBRkYsQ0FGSixDQURGO0FBVUQsR0FYRCxDQUZKLENBSkYsRUFvQkUsTUFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFFSCxXQUFLLEVBQUU7QUFBVCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUwsZ0JBQWdCLENBQUNNLEdBQWpCLENBQXFCLFVBQUNDLGNBQUQsRUFBeUI7QUFDNUMsV0FDRSw0REFDR0EsY0FBYyxDQUFDaEMsSUFBZixJQUNDLE1BQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsQ0FBWDtBQUFjLGFBQU8sRUFBRTtBQUFBLGVBQU1RLE9BQU8sQ0FBQ3dCLGNBQUQsQ0FBYjtBQUFBLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVUEsY0FBYyxDQUFDaEMsSUFBekIsQ0FERixDQUZKLENBREY7QUFTRCxHQVZELENBRkosQ0FwQkYsQ0FQRixDQURGO0FBOENELENBMUVNOztHQUFNTCxzQjtVQU1JZSxxRCxFQWFXYSw0RDs7O0tBbkJmNUIsc0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDcyZDc4YzBkNTFkZTMyMjIyODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnYW50ZC9saWIvbW9kYWwvTW9kYWwnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgUGFyYW1zRm9yQXBpUHJvcHMsIFBsb3RvdmVybGFpZFNlcGFyYXRlbHlQcm9wcywgUXVlcnlQcm9wcyB9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBJY29uLCBTdHlsZWRBIH0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L3N0eWxlZENvbXBvbmVudHMnXHJcbmltcG9ydCB7IGNob29zZV9hcGkgfSBmcm9tICcuLi8uLi9jb250YWluZXJzL2Rpc3BsYXkvdXRpbHMnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvbGVmdFNpZGVDb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlUmVxdWVzdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IEZvbGRlclBhdGggfSBmcm9tICcuLi8uLi9jb250YWluZXJzL2Rpc3BsYXkvY29udGVudC9mb2xkZXJQYXRoJ1xyXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeUlucHV0IH0gZnJvbSAncXVlcnlzdHJpbmcnXHJcblxyXG5pbnRlcmZhY2UgT3ZlcmxheVdpdGhBbm90aGVyUGxvdFByb3BzIHtcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHNldE9wZW5PdmVybGF5V2l0aEFub3RoZXJQbG90TW9kYWw6IGFueVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcmxheVdpdGhBbm90aGVyUGxvdCA9ICh7IHZpc2libGUsIHNldE9wZW5PdmVybGF5V2l0aEFub3RoZXJQbG90TW9kYWwgfTogT3ZlcmxheVdpdGhBbm90aGVyUGxvdFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW292ZXJsYWlkUGxvdHMsIHNldE92ZXJsYWlkUGxvdHNdID0gUmVhY3QudXNlU3RhdGU8UGxvdG92ZXJsYWlkU2VwYXJhdGVseVByb3BzPih7IGZvbGRlcl9wYXRoOiAnJywgbmFtZTogJycgfSlcclxuICBjb25zdCBbZm9sZGVyUGF0aCwgc2V0Rm9sZGVyUGF0aF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pXHJcbiAgY29uc3QgW2N1cnJlbnRGb2xkZXIsIHNldEN1cnJlbnRGb2xkZXJdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bsb3QsIHNldFBsb3RdID0gUmVhY3QudXNlU3RhdGUoe30pXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHF1ZXJ5OiBRdWVyeVByb3BzID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgdXBkYXRlZF9ieV9ub3Rfb2xkZXJfdGhhbiB9ID0gUmVhY3QudXNlQ29udGV4dChzdG9yZSlcclxuXHJcbiAgY29uc3QgcGFyYW1zOiBQYXJhbXNGb3JBcGlQcm9wcyA9IHtcclxuICAgIGRhdGFzZXRfbmFtZTogcXVlcnkuZGF0YXNldF9uYW1lIGFzIHN0cmluZyxcclxuICAgIHJ1bl9udW1iZXI6IHF1ZXJ5LnJ1bl9udW1iZXIgYXMgc3RyaW5nLFxyXG4gICAgbm90T2xkZXJUaGFuOiB1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFuLFxyXG4gICAgZm9sZGVyc19wYXRoOiBvdmVybGFpZFBsb3RzLmZvbGRlcl9wYXRoLFxyXG4gICAgcGxvdF9uYW1lOiBvdmVybGFpZFBsb3RzLm5hbWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGFwaSA9IGNob29zZV9hcGkocGFyYW1zKVxyXG4gIGNvbnN0IGRhdGFfZ2V0X2J5X21vdW50ID0gdXNlUmVxdWVzdChhcGksXHJcbiAgICB7fSxcclxuICAgIFtvdmVybGFpZFBsb3RzLmZvbGRlcl9wYXRoXVxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBkYXRhX2dldF9ieV9tb3VudFxyXG4gIGNvbnN0IGZvbGRlcnNfb3JfcGxvdHMgPSBkYXRhID8gZGF0YS5kYXRhIDogW11cclxuICBjb25zdCBjaGFuZ2VGb2xkZXJQYXRoQnlCcmVhZGNydW1iID0gKCkgPT4geyB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGFfZ2V0X2J5X21vdW50LmRhdGEpXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW5PdmVybGF5V2l0aEFub3RoZXJQbG90TW9kYWwoZmFsc2UpXHJcbiAgICAgICAgc2V0Rm9sZGVyUGF0aChbXSlcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICA8Rm9sZGVyUGF0aCBmb2xkZXJfcGF0aD17b3ZlcmxhaWRQbG90cy5mb2xkZXJfcGF0aH0gY2hhbmdlRm9sZGVyUGF0aEJ5QnJlYWRjcnVtYj17Y2hhbmdlRm9sZGVyUGF0aEJ5QnJlYWRjcnVtYn0gLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbGRlcnNfb3JfcGxvdHMubWFwKChmb2xkZXJfb3JfcGxvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtmb2xkZXJfb3JfcGxvdC5zdWJkaXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezh9IG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRGb2xkZXIoZm9sZGVyX29yX3Bsb3Quc3ViZGlyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEE+e2ZvbGRlcl9vcl9wbG90LnN1YmRpcn08L1N0eWxlZEE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbGRlcnNfb3JfcGxvdHMubWFwKChmb2xkZXJfb3JfcGxvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtmb2xkZXJfb3JfcGxvdC5uYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fSBvbkNsaWNrPXsoKSA9PiBzZXRQbG90KGZvbGRlcl9vcl9wbG90KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uID57Zm9sZGVyX29yX3Bsb3QubmFtZX08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvTW9kYWw+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==