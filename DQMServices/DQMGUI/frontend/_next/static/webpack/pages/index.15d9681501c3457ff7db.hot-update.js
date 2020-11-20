webpackHotUpdate_N_E("pages/index",{

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! exports provided: functions_config, root_url, service_title, get_folders_and_plots_new_api, get_folders_and_plots_new_api_with_live_mode, get_folders_and_plots_old_api, get_run_list_by_search_old_api, get_run_list_by_search_new_api, get_run_list_by_search_new_api_with_no_older_than, get_plot_url, get_plot_with_overlay, get_overlaied_plots_urls, get_jroot_plot, getLumisections, get_the_latest_runs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions_config", function() { return functions_config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root_url", function() { return root_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service_title", function() { return service_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_folders_and_plots_new_api", function() { return get_folders_and_plots_new_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_folders_and_plots_new_api_with_live_mode", function() { return get_folders_and_plots_new_api_with_live_mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_folders_and_plots_old_api", function() { return get_folders_and_plots_old_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_run_list_by_search_old_api", function() { return get_run_list_by_search_old_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_run_list_by_search_new_api", function() { return get_run_list_by_search_new_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_run_list_by_search_new_api_with_no_older_than", function() { return get_run_list_by_search_new_api_with_no_older_than; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_plot_url", function() { return get_plot_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_plot_with_overlay", function() { return get_plot_with_overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_overlaied_plots_urls", function() { return get_overlaied_plots_urls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_jroot_plot", function() { return get_jroot_plot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLumisections", function() { return getLumisections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_the_latest_runs", function() { return get_the_latest_runs; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./config/utils.ts");

var config = {
  development: {
    root_url: 'http://localhost:8086',
    title: 'Development'
  },
  production: {
    // root_url: '',
    // root_url: 'https://dqm-gui.web.cern.ch/api/dqm/offline/',
    // root_url: './',
    root_url: 'http://localhost:8086/',
    title: 'Offline'
  }
};
var new_env_variable = "true" === 'true';
var layout_env_variable = "true" === 'true';
var latest_runs_env_variable = "true" === 'true';
var lumis_env_variable = "true" === 'true';
var functions_config = {
  new_back_end: {
    new_back_end: new_env_variable || false,
    lumisections_on: lumis_env_variable && new_env_variable || false,
    layouts: layout_env_variable && new_env_variable || false,
    latest_runs: latest_runs_env_variable && new_env_variable || false
  },
  mode: process.env.MODE || 'OFFLINE'
};
var root_url = config["development" || false].root_url;
var service_title = config["development" || false].title;
var get_folders_and_plots_new_api = function get_folders_and_plots_new_api(params) {
  if (params.plot_search) {
    return "api/v1/archive/".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(params)).concat(params.dataset_name, "/").concat(params.folders_path, "?search=").concat(params.plot_search);
  }

  return "api/v1/archive/".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(params)).concat(params.dataset_name, "/").concat(params.folders_path);
};
var get_folders_and_plots_new_api_with_live_mode = function get_folders_and_plots_new_api_with_live_mode(params) {
  if (params.plot_search) {
    return "api/v1/archive/".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(params)).concat(params.dataset_name, "/").concat(params.folders_path, "?search=").concat(params.plot_search, "&notOlderThan=").concat(params.notOlderThan);
  }

  return "api/v1/archive/".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(params)).concat(params.dataset_name, "/").concat(params.folders_path, "?notOlderThan=").concat(params.notOlderThan);
};
var get_folders_and_plots_old_api = function get_folders_and_plots_old_api(params) {
  if (params.plot_search) {
    return "data/json/archive/".concat(params.run_number).concat(params.dataset_name, "/").concat(params.folders_path, "?search=").concat(params.plot_search);
  }

  return "data/json/archive/".concat(params.run_number).concat(params.dataset_name, "/").concat(params.folders_path);
};
var get_run_list_by_search_old_api = function get_run_list_by_search_old_api(params) {
  return "data/json/samples?match=".concat(params.dataset_name, "&run=").concat(params.run_number);
};
var get_run_list_by_search_new_api = function get_run_list_by_search_new_api(params) {
  return "api/v1/samples?run=".concat(params.run_number, "&lumi=").concat(params.lumi, "&dataset=").concat(params.dataset_name);
};
var get_run_list_by_search_new_api_with_no_older_than = function get_run_list_by_search_new_api_with_no_older_than(params) {
  return "api/v1/samples?run=".concat(params.run_number, "&lumi=").concat(params.lumi, "&dataset=").concat(params.dataset_name, "&notOlderThan=").concat(params.notOlderThan);
};
var get_plot_url = function get_plot_url(params) {
  return "plotfairy/archive/".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(params)).concat(params.dataset_name).concat(params.folders_path, "/").concat(params.plot_name, "?").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["get_customize_params"])(params.customizeProps)).concat(params.stats ? '' : 'showstats=0;').concat(params.errorBars ? 'showerrbars=1;' : '', ";w=").concat(params.width, ";h=").concat(params.height);
};
var get_plot_with_overlay = function get_plot_with_overlay(params) {
  return "plotfairy/overlay?".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["get_customize_params"])(params.customizeProps), "ref=").concat(params.overlay, ";obj=archive/").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(params)).concat(params.dataset_name).concat(params.folders_path, "/").concat(encodeURIComponent(params.plot_name)).concat(params.joined_overlaied_plots_urls, ";").concat(params.stats ? '' : 'showstats=0;').concat(params.errorBars ? 'showerrbars=1;' : '', "norm=").concat(params.normalize, ";w=").concat(params.width, ";h=").concat(params.height);
};
var get_overlaied_plots_urls = function get_overlaied_plots_urls(params) {
  var overlay_plots = (params === null || params === void 0 ? void 0 : params.overlay_plot) && (params === null || params === void 0 ? void 0 : params.overlay_plot.length) > 0 ? params.overlay_plot : [];
  return overlay_plots.map(function (overlay) {
    var dataset_name_overlay = overlay.dataset_name ? overlay.dataset_name : params.dataset_name;
    var label = overlay.label ? overlay.label : overlay.run_number;
    return ";obj=archive/".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(overlay)).concat(dataset_name_overlay).concat(params.folders_path, "/").concat(encodeURIComponent(params.plot_name), ";reflabel=").concat(label);
  });
};
var get_jroot_plot = function get_jroot_plot(params) {
  return "jsrootfairy/archive/".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRunsWithLumisections"])(params)).concat(params.dataset_name).concat(params.folders_path, "/").concat(encodeURIComponent(params.plot_name), "?jsroot=true;notOlderThan=").concat(params.notOlderThan);
};
var getLumisections = function getLumisections(params) {
  return "api/v1/samples?run=".concat(params.run_number, "&dataset=").concat(params.dataset_name, "&lumi=").concat(params.lumi).concat(functions_config.mode === 'ONLINE' && params.notOlderThan ? "&notOlderThan=".concat(params.notOlderThan) : '');
};
var get_the_latest_runs = function get_the_latest_runs(notOlderThan) {
  return "api/v1/latest_runs?notOlderThan=".concat(notOlderThan);
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6WyJjb25maWciLCJkZXZlbG9wbWVudCIsInJvb3RfdXJsIiwidGl0bGUiLCJwcm9kdWN0aW9uIiwibmV3X2Vudl92YXJpYWJsZSIsInByb2Nlc3MiLCJsYXlvdXRfZW52X3ZhcmlhYmxlIiwibGF0ZXN0X3J1bnNfZW52X3ZhcmlhYmxlIiwibHVtaXNfZW52X3ZhcmlhYmxlIiwiZnVuY3Rpb25zX2NvbmZpZyIsIm5ld19iYWNrX2VuZCIsImx1bWlzZWN0aW9uc19vbiIsImxheW91dHMiLCJsYXRlc3RfcnVucyIsIm1vZGUiLCJlbnYiLCJNT0RFIiwic2VydmljZV90aXRsZSIsImdldF9mb2xkZXJzX2FuZF9wbG90c19uZXdfYXBpIiwicGFyYW1zIiwicGxvdF9zZWFyY2giLCJnZXRSdW5zV2l0aEx1bWlzZWN0aW9ucyIsImRhdGFzZXRfbmFtZSIsImZvbGRlcnNfcGF0aCIsImdldF9mb2xkZXJzX2FuZF9wbG90c19uZXdfYXBpX3dpdGhfbGl2ZV9tb2RlIiwibm90T2xkZXJUaGFuIiwiZ2V0X2ZvbGRlcnNfYW5kX3Bsb3RzX29sZF9hcGkiLCJydW5fbnVtYmVyIiwiZ2V0X3J1bl9saXN0X2J5X3NlYXJjaF9vbGRfYXBpIiwiZ2V0X3J1bl9saXN0X2J5X3NlYXJjaF9uZXdfYXBpIiwibHVtaSIsImdldF9ydW5fbGlzdF9ieV9zZWFyY2hfbmV3X2FwaV93aXRoX25vX29sZGVyX3RoYW4iLCJnZXRfcGxvdF91cmwiLCJwbG90X25hbWUiLCJnZXRfY3VzdG9taXplX3BhcmFtcyIsImN1c3RvbWl6ZVByb3BzIiwic3RhdHMiLCJlcnJvckJhcnMiLCJ3aWR0aCIsImhlaWdodCIsImdldF9wbG90X3dpdGhfb3ZlcmxheSIsIm92ZXJsYXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luZWRfb3ZlcmxhaWVkX3Bsb3RzX3VybHMiLCJub3JtYWxpemUiLCJnZXRfb3ZlcmxhaWVkX3Bsb3RzX3VybHMiLCJvdmVybGF5X3Bsb3RzIiwib3ZlcmxheV9wbG90IiwibGVuZ3RoIiwibWFwIiwiZGF0YXNldF9uYW1lX292ZXJsYXkiLCJsYWJlbCIsImdldF9qcm9vdF9wbG90IiwiZ2V0THVtaXNlY3Rpb25zIiwiZ2V0X3RoZV9sYXRlc3RfcnVucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLE1BQVcsR0FBRztBQUNsQkMsYUFBVyxFQUFFO0FBQ1hDLFlBQVEsRUFBRSx1QkFEQztBQUVYQyxTQUFLLEVBQUU7QUFGSSxHQURLO0FBS2xCQyxZQUFVLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQUYsWUFBUSxFQUFFLHdCQUpBO0FBS1ZDLFNBQUssRUFBRTtBQUxHO0FBTE0sQ0FBcEI7QUFjQSxJQUFNRSxnQkFBZ0IsR0FBR0MsTUFBQSxLQUE2QixNQUF0RDtBQUNBLElBQU1DLG1CQUFtQixHQUFHRCxNQUFBLEtBQXdCLE1BQXBEO0FBQ0EsSUFBTUUsd0JBQXdCLEdBQUdGLE1BQUEsS0FBNEIsTUFBN0Q7QUFDQSxJQUFNRyxrQkFBa0IsR0FBR0gsTUFBQSxLQUFzQixNQUFqRDtBQUVPLElBQU1JLGdCQUFxQixHQUFHO0FBQ25DQyxjQUFZLEVBQUU7QUFDWkEsZ0JBQVksRUFBRU4sZ0JBQWdCLElBQUksS0FEdEI7QUFFWk8sbUJBQWUsRUFBR0gsa0JBQWtCLElBQUlKLGdCQUF2QixJQUE0QyxLQUZqRDtBQUdaUSxXQUFPLEVBQUdOLG1CQUFtQixJQUFJRixnQkFBeEIsSUFBNkMsS0FIMUM7QUFJWlMsZUFBVyxFQUFHTix3QkFBd0IsSUFBSUgsZ0JBQTdCLElBQWtEO0FBSm5ELEdBRHFCO0FBT25DVSxNQUFJLEVBQUVULE9BQU8sQ0FBQ1UsR0FBUixDQUFZQyxJQUFaLElBQW9CO0FBUFMsQ0FBOUI7QUFVQSxJQUFNZixRQUFRLEdB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WDtBQUdBLFFBQU02QixLQUFLLEdBQUdWLE9BQU8sQ0FBQ1UsS0FBUixHQUFnQlYsT0FBTyxDQUFDVSxLQUF4QixHQUFnQ1YsT0FBTyxDQUFDZCxVQUF0RDtBQUNBLGtDQUF1Qk4sc0VBQXVCLENBQzVDb0IsT0FENEMsQ0FBOUMsU0FFSVMsb0JBRkosU0FFMkIvQixNQUFNLENBQUNJLFlBRmxDLGNBRWtEbUIsa0JBQWtCLENBQ2xFdkIsTUFBTSxDQUFDYyxTQUQyRCxDQUZwRSx1QkFJY2tCLEtBSmQ7QUFLRCxHQVZNLENBQVA7QUFXRCxDQWpCTTtBQW1CQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNqQyxNQUFEO0FBQUEsdUNBQ0xFLHNFQUF1QixDQUFDRixNQUFELENBRGxCLFNBQzZCQSxNQUFNLENBQUNHLFlBRHBDLFNBRXpCSCxNQUFNLENBQUNJLFlBRmtCLGNBRUZtQixrQkFBa0IsQ0FDMUN2QixNQUFNLENBQUNjLFNBRG1DLENBRmhCLHVDQUlFZCxNQUFNLENBQUNNLFlBSlQ7QUFBQSxDQUF2QjtBQU1BLElBQU00QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNsQyxNQUFEO0FBQUEsc0NBQ1BBLE1BQU0sQ0FBQ1EsVUFEQSxzQkFDc0JSLE1BQU0sQ0FBQ0csWUFEN0IsbUJBRXBCSCxNQUFNLENBQUNXLElBRmEsU0FFTnJCLGdCQUFnQixDQUFDSyxJQUFqQixLQUEwQixRQUExQixJQUFzQ0ssTUFBTSxDQUFDTSxZQUE3QywyQkFDRk4sTUFBTSxDQUFDTSxZQURMLElBRW5CLEVBSnlCO0FBQUEsQ0FBeEI7QUFPQSxJQUFNNkIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDN0IsWUFBRCxFQUEwQjtBQUMzRCxtREFBMENBLFlBQTFDO0FBQ0QsQ0FGTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNWQ5NjgxNTAxYzM0NTdmZjdkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UGF0aE5hbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzJztcclxuaW1wb3J0IHtcclxuICBQYXJhbXNGb3JBcGlQcm9wcyxcclxuICBUcmlwbGVQcm9wcyxcclxuICBMdW1pc2VjdGlvblJlcXVlc3RQcm9wcyxcclxufSBmcm9tICcuLi9jb250YWluZXJzL2Rpc3BsYXkvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGdldF9jdXN0b21pemVfcGFyYW1zLCBnZXRSdW5zV2l0aEx1bWlzZWN0aW9ucyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgY29uZmlnOiBhbnkgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIHJvb3RfdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDg2JyxcclxuICAgIHRpdGxlOiAnRGV2ZWxvcG1lbnQnLFxyXG4gIH0sXHJcbiAgcHJvZHVjdGlvbjoge1xyXG4gICAgLy8gcm9vdF91cmw6ICcnLFxyXG4gICAgLy8gcm9vdF91cmw6ICdodHRwczovL2RxbS1ndWkud2ViLmNlcm4uY2gvYXBpL2RxbS9vZmZsaW5lLycsXHJcbiAgICAvLyByb290X3VybDogJy4vJyxcclxuICAgIHJvb3RfdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDg2LycsXHJcbiAgICB0aXRsZTogJ09mZmxpbmUnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBuZXdfZW52X3ZhcmlhYmxlID0gcHJvY2Vzcy5lbnYuTkVXX0JBQ0tfRU5EID09PSAndHJ1ZSc7XHJcbmNvbnN0IGxheW91dF9lbnZfdmFyaWFibGUgPSBwcm9jZXNzLmVudi5MQVlPVVRTID09PSAndHJ1ZSc7XHJcbmNvbnN0IGxhdGVzdF9ydW5zX2Vudl92YXJpYWJsZSA9IHByb2Nlc3MuZW52LkxBVEVTVF9SVU5TID09PSAndHJ1ZSc7XHJcbmNvbnN0IGx1bWlzX2Vudl92YXJpYWJsZSA9IHByb2Nlc3MuZW52LkxVTUlTID09PSAndHJ1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZnVuY3Rpb25zX2NvbmZpZzogYW55ID0ge1xyXG4gIG5ld19iYWNrX2VuZDoge1xyXG4gICAgbmV3X2JhY2tfZW5kOiBuZXdfZW52X3ZhcmlhYmxlIHx8IGZhbHNlLFxyXG4gICAgbHVtaXNlY3Rpb25zX29uOiAobHVtaXNfZW52X3ZhcmlhYmxlICYmIG5ld19lbnZfdmFyaWFibGUpIHx8IGZhbHNlLFxyXG4gICAgbGF5b3V0czogKGxheW91dF9lbnZfdmFyaWFibGUgJiYgbmV3X2Vudl92YXJpYWJsZSkgfHwgZmFsc2UsXHJcbiAgICBsYXRlc3RfcnVuczogKGxhdGVzdF9ydW5zX2Vudl92YXJpYWJsZSAmJiBuZXdfZW52X3ZhcmlhYmxlKSB8fCBmYWxzZSxcclxuICB9LFxyXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk1PREUgfHwgJ09GRkxJTkUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvb3RfdXJsID0gY29uZmlnW3Byb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCddLnJvb3RfdXJsO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VfdGl0bGUgPVxyXG4gIGNvbmZpZ1twcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXS50aXRsZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRfZm9sZGVyc19hbmRfcGxvdHNfbmV3X2FwaSA9IChwYXJhbXM6IFBhcmFtc0ZvckFwaVByb3BzKSA9PiB7XHJcbiAgaWYgKHBhcmFtcy5wbG90X3NlYXJjaCkge1xyXG4gICAgcmV0dXJuIGBhcGkvdjEvYXJjaGl2ZS8ke2dldFJ1bnNXaXRoTHVtaXNlY3Rpb25zKHBhcmFtcyl9JHtwYXJhbXMuZGF0YXNldF9uYW1lXHJcbiAgICAgIH0vJHtwYXJhbXMuZm9sZGVyc19wYXRofT9zZWFyY2g9JHtwYXJhbXMucGxvdF9zZWFyY2h9YDtcclxuICB9XHJcbiAgcmV0dXJuIGBhcGkvdjEvYXJjaGl2ZS8ke2dldFJ1bnNXaXRoTHVtaXNlY3Rpb25zKHBhcmFtcyl9JHtwYXJhbXMuZGF0YXNldF9uYW1lXHJcbiAgICB9LyR7cGFyYW1zLmZvbGRlcnNfcGF0aH1gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0X2ZvbGRlcnNfYW5kX3Bsb3RzX25ld19hcGlfd2l0aF9saXZlX21vZGUgPSAoXHJcbiAgcGFyYW1zOiBQYXJhbXNGb3JBcGlQcm9wc1xyXG4pID0+IHtcclxuICBpZiAocGFyYW1zLnBsb3Rfc2VhcmNoKSB7XHJcbiAgICByZXR1cm4gYGFwaS92MS9hcmNoaXZlLyR7Z2V0UnVuc1dpdGhMdW1pc2VjdGlvbnMocGFyYW1zKX0ke3BhcmFtcy5kYXRhc2V0X25hbWVcclxuICAgICAgfS8ke3BhcmFtcy5mb2xkZXJzX3BhdGh9P3NlYXJjaD0ke3BhcmFtcy5wbG90X3NlYXJjaH0mbm90T2xkZXJUaGFuPSR7cGFyYW1zLm5vdE9sZGVyVGhhblxyXG4gICAgICB9YDtcclxuICB9XHJcbiAgcmV0dXJuIGBhcGkvdjEvYXJjaGl2ZS8ke2dldFJ1bnNXaXRoTHVtaXNlY3Rpb25zKHBhcmFtcyl9JHtwYXJhbXMuZGF0YXNldF9uYW1lXHJcbiAgICB9LyR7cGFyYW1zLmZvbGRlcnNfcGF0aH0/bm90T2xkZXJUaGFuPSR7cGFyYW1zLm5vdE9sZGVyVGhhbn1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldF9mb2xkZXJzX2FuZF9wbG90c19vbGRfYXBpID0gKHBhcmFtczogUGFyYW1zRm9yQXBpUHJvcHMpID0+IHtcclxuICBpZiAocGFyYW1zLnBsb3Rfc2VhcmNoKSB7XHJcbiAgICByZXR1cm4gYGRhdGEvanNvbi9hcmNoaXZlLyR7cGFyYW1zLnJ1bl9udW1iZXJ9JHtwYXJhbXMuZGF0YXNldF9uYW1lfS8ke3BhcmFtcy5mb2xkZXJzX3BhdGh9P3NlYXJjaD0ke3BhcmFtcy5wbG90X3NlYXJjaH1gO1xyXG4gIH1cclxuICByZXR1cm4gYGRhdGEvanNvbi9hcmNoaXZlLyR7cGFyYW1zLnJ1bl9udW1iZXJ9JHtwYXJhbXMuZGF0YXNldF9uYW1lfS8ke3BhcmFtcy5mb2xkZXJzX3BhdGh9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRfcnVuX2xpc3RfYnlfc2VhcmNoX29sZF9hcGkgPSAocGFyYW1zOiBQYXJhbXNGb3JBcGlQcm9wcykgPT4ge1xyXG4gIHJldHVybiBgZGF0YS9qc29uL3NhbXBsZXM/bWF0Y2g9JHtwYXJhbXMuZGF0YXNldF9uYW1lfSZydW49JHtwYXJhbXMucnVuX251bWJlcn1gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0X3J1bl9saXN0X2J5X3NlYXJjaF9uZXdfYXBpID0gKHBhcmFtczogUGFyYW1zRm9yQXBpUHJvcHMpID0+IHtcclxuICByZXR1cm4gYGFwaS92MS9zYW1wbGVzP3J1bj0ke3BhcmFtcy5ydW5fbnVtYmVyfSZsdW1pPSR7cGFyYW1zLmx1bWl9JmRhdGFzZXQ9JHtwYXJhbXMuZGF0YXNldF9uYW1lfWA7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRfcnVuX2xpc3RfYnlfc2VhcmNoX25ld19hcGlfd2l0aF9ub19vbGRlcl90aGFuID0gKFxyXG4gIHBhcmFtczogUGFyYW1zRm9yQXBpUHJvcHNcclxuKSA9PiB7XHJcbiAgcmV0dXJuIGBhcGkvdjEvc2FtcGxlcz9ydW49JHtwYXJhbXMucnVuX251bWJlcn0mbHVtaT0ke3BhcmFtcy5sdW1pfSZkYXRhc2V0PSR7cGFyYW1zLmRhdGFzZXRfbmFtZX0mbm90T2xkZXJUaGFuPSR7cGFyYW1zLm5vdE9sZGVyVGhhbn1gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0X3Bsb3RfdXJsID0gKHBhcmFtczogUGFyYW1zRm9yQXBpUHJvcHMpID0+IHtcclxuICByZXR1cm4gYHBsb3RmYWlyeS9hcmNoaXZlLyR7Z2V0UnVuc1dpdGhMdW1pc2VjdGlvbnMocGFyYW1zKX0ke3BhcmFtcy5kYXRhc2V0X25hbWVcclxuICAgIH0ke3BhcmFtcy5mb2xkZXJzX3BhdGh9LyR7cGFyYW1zLnBsb3RfbmFtZSBhcyBzdHJpbmd9PyR7Z2V0X2N1c3RvbWl6ZV9wYXJhbXMoXHJcbiAgICAgIHBhcmFtcy5jdXN0b21pemVQcm9wc1xyXG4gICAgKX0ke3BhcmFtcy5zdGF0cyA/ICcnIDogJ3Nob3dzdGF0cz0wOyd9JHtwYXJhbXMuZXJyb3JCYXJzID8gJ3Nob3dlcnJiYXJzPTE7JyA6ICcnXHJcbiAgICB9O3c9JHtwYXJhbXMud2lkdGh9O2g9JHtwYXJhbXMuaGVpZ2h0fWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0X3Bsb3Rfd2l0aF9vdmVybGF5ID0gKHBhcmFtczogUGFyYW1zRm9yQXBpUHJvcHMpID0+IHtcclxuICByZXR1cm4gYHBsb3RmYWlyeS9vdmVybGF5PyR7Z2V0X2N1c3RvbWl6ZV9wYXJhbXMocGFyYW1zLmN1c3RvbWl6ZVByb3BzKX1yZWY9JHtwYXJhbXMub3ZlcmxheVxyXG4gICAgfTtvYmo9YXJjaGl2ZS8ke2dldFJ1bnNXaXRoTHVtaXNlY3Rpb25zKHBhcmFtcyl9JHtwYXJhbXMuZGF0YXNldF9uYW1lfSR7cGFyYW1zLmZvbGRlcnNfcGF0aFxyXG4gICAgfS8ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXMucGxvdF9uYW1lIGFzIHN0cmluZyl9JHtwYXJhbXMuam9pbmVkX292ZXJsYWllZF9wbG90c191cmxzXHJcbiAgICB9OyR7cGFyYW1zLnN0YXRzID8gJycgOiAnc2hvd3N0YXRzPTA7J30ke3BhcmFtcy5lcnJvckJhcnMgPyAnc2hvd2VycmJhcnM9MTsnIDogJydcclxuICAgIH1ub3JtPSR7cGFyYW1zLm5vcm1hbGl6ZX07dz0ke3BhcmFtcy53aWR0aH07aD0ke3BhcmFtcy5oZWlnaHR9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRfb3ZlcmxhaWVkX3Bsb3RzX3VybHMgPSAocGFyYW1zOiBQYXJhbXNGb3JBcGlQcm9wcykgPT4ge1xyXG4gIGNvbnN0IG92ZXJsYXlfcGxvdHMgPVxyXG4gICAgcGFyYW1zPy5vdmVybGF5X3Bsb3QgJiYgcGFyYW1zPy5vdmVybGF5X3Bsb3QubGVuZ3RoID4gMFxyXG4gICAgICA/IHBhcmFtcy5vdmVybGF5X3Bsb3RcclxuICAgICAgOiBbXTtcclxuXHJcbiAgcmV0dXJuIG92ZXJsYXlfcGxvdHMubWFwKChvdmVybGF5OiBUcmlwbGVQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGF0YXNldF9uYW1lX292ZXJsYXkgPSBvdmVybGF5LmRhdGFzZXRfbmFtZVxyXG4gICAgICA/IG92ZXJsYXkuZGF0YXNldF9uYW1lXHJcbiAgICAgIDogcGFyYW1zLmRhdGFzZXRfbmFtZTtcclxuICAgIGNvbnN0IGxhYmVsID0gb3ZlcmxheS5sYWJlbCA/IG92ZXJsYXkubGFiZWwgOiBvdmVybGF5LnJ1bl9udW1iZXI7XHJcbiAgICByZXR1cm4gYDtvYmo9YXJjaGl2ZS8ke2dldFJ1bnNXaXRoTHVtaXNlY3Rpb25zKFxyXG4gICAgICBvdmVybGF5XHJcbiAgICApfSR7ZGF0YXNldF9uYW1lX292ZXJsYXl9JHtwYXJhbXMuZm9sZGVyc19wYXRofS8ke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgcGFyYW1zLnBsb3RfbmFtZSBhcyBzdHJpbmdcclxuICAgICl9O3JlZmxhYmVsPSR7bGFiZWx9YDtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRfanJvb3RfcGxvdCA9IChwYXJhbXM6IFBhcmFtc0ZvckFwaVByb3BzKSA9PlxyXG4gIGBqc3Jvb3RmYWlyeS9hcmNoaXZlLyR7Z2V0UnVuc1dpdGhMdW1pc2VjdGlvbnMocGFyYW1zKX0ke3BhcmFtcy5kYXRhc2V0X25hbWVcclxuICB9JHtwYXJhbXMuZm9sZGVyc19wYXRofS8ke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgIHBhcmFtcy5wbG90X25hbWUgYXMgc3RyaW5nXHJcbiAgKX0/anNyb290PXRydWU7bm90T2xkZXJUaGFuPSR7cGFyYW1zLm5vdE9sZGVyVGhhbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEx1bWlzZWN0aW9ucyA9IChwYXJhbXM6IEx1bWlzZWN0aW9uUmVxdWVzdFByb3BzKSA9PlxyXG4gIGBhcGkvdjEvc2FtcGxlcz9ydW49JHtwYXJhbXMucnVuX251bWJlcn0mZGF0YXNldD0ke3BhcmFtcy5kYXRhc2V0X25hbWVcclxuICB9Jmx1bWk9JHtwYXJhbXMubHVtaX0ke2Z1bmN0aW9uc19jb25maWcubW9kZSA9PT0gJ09OTElORScgJiYgcGFyYW1zLm5vdE9sZGVyVGhhblxyXG4gICAgPyBgJm5vdE9sZGVyVGhhbj0ke3BhcmFtcy5ub3RPbGRlclRoYW59YFxyXG4gICAgOiAnJ1xyXG4gIH1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldF90aGVfbGF0ZXN0X3J1bnMgPSAobm90T2xkZXJUaGFuOiBudW1iZXIpID0+IHtcclxuICByZXR1cm4gYGFwaS92MS9sYXRlc3RfcnVucz9ub3RPbGRlclRoYW49JHtub3RPbGRlclRoYW59YDtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==