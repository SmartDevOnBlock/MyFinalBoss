"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/myNFTs",{

/***/ "./components/WalletBalance.js":
/*!*************************************!*\
  !*** ./components/WalletBalance.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/daniilslyshchenko/Desktop/MCS/MyFinalBoss/client/components/WalletBalance.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Balance = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"WalletBalance__Balance\",\n  componentId: \"sc-18efy65-0\"\n})([\"display:flex;justify-content:space-between;align-content:stretch;border:1px solid black;\"]);\n_c = Balance;\n\nfunction WalletBalance() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      balance = _useState[0],\n      setBalance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isLoading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var getBalance = /*#__PURE__*/function () {\n    var _ref = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var _yield$window$ethereu, _yield$window$ethereu2, account, provider, _balance;\n\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return window.ethereum.request({\n                method: 'eth_requestAccounts'\n              });\n\n            case 3:\n              _yield$window$ethereu = _context.sent;\n              _yield$window$ethereu2 = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_yield$window$ethereu, 1);\n              account = _yield$window$ethereu2[0];\n              provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              _context.next = 9;\n              return provider.getBalance(account);\n\n            case 9:\n              _balance = _context.sent;\n              setBalance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(_balance));\n              setLoading(true);\n              _context.next = 17;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 17:\n              _context.prev = 17;\n              setLoading(false);\n              return _context.finish(17);\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 14, 17, 20]]);\n    }));\n\n    return function getBalance() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Balance, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h4\", {\n      style: {\n        marginTop: \"20px\"\n      },\n      children: [\"Your ETH Balance: \", balance]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n      loading: isLoading,\n      primary: true,\n      onClick: function onClick() {\n        return getBalance();\n      },\n      children: \"Show My Balance\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 7\n  }, this);\n}\n\n_s(WalletBalance, \"gkj194eMQU4i6sn9G3qUe0pytys=\");\n\n_c2 = WalletBalance;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletBalance);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Balance\");\n$RefreshReg$(_c2, \"WalletBalance\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhbGxldEJhbGFuY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLE9BQU8sR0FBR0Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsZ0dBQWI7S0FBTUM7O0FBUU4sU0FBU0UsYUFBVCxHQUF5QjtFQUFBOztFQUVyQixnQkFBOEJOLCtDQUFRLEVBQXRDO0VBQUEsSUFBT08sT0FBUDtFQUFBLElBQWdCQyxVQUFoQjs7RUFDQSxpQkFBZ0NSLCtDQUFRLENBQUMsS0FBRCxDQUF4QztFQUFBLElBQU9TLFNBQVA7RUFBQSxJQUFrQkMsVUFBbEI7O0VBR0EsSUFBTUMsVUFBVTtJQUFBLGtYQUFHO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUEsT0FFU0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtnQkFBRUMsTUFBTSxFQUFFO2NBQVYsQ0FBeEIsQ0FGVDs7WUFBQTtjQUFBO2NBQUE7Y0FFUkMsT0FGUTtjQUdUQyxRQUhTLEdBR0UsSUFBSWhCLGlFQUFKLENBQWtDVyxNQUFNLENBQUNDLFFBQXpDLENBSEY7Y0FBQTtjQUFBLE9BSU9JLFFBQVEsQ0FBQ04sVUFBVCxDQUFvQkssT0FBcEIsQ0FKUDs7WUFBQTtjQUlUVCxRQUpTO2NBS2ZDLFVBQVUsQ0FBQ1AsNERBQUEsQ0FBeUJNLFFBQXpCLENBQUQsQ0FBVjtjQUNBRyxVQUFVLENBQUMsSUFBRCxDQUFWO2NBTmU7Y0FBQTs7WUFBQTtjQUFBO2NBQUE7Y0FRWFksT0FBTyxDQUFDQyxLQUFSOztZQVJXO2NBQUE7Y0FVWGIsVUFBVSxDQUFDLEtBQUQsQ0FBVjtjQVZXOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQVZDLFVBQVU7TUFBQTtJQUFBO0VBQUEsR0FBaEI7O0VBY0Esb0JBQ0UsOERBQUMsT0FBRDtJQUFBLHdCQUNJO01BQUksS0FBSyxFQUFFO1FBQUNhLFNBQVMsRUFBRTtNQUFaLENBQVg7TUFBQSxpQ0FBbURqQixPQUFuRDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQUVJLDhEQUFDLHFEQUFEO01BQVEsT0FBTyxFQUFFRSxTQUFqQjtNQUE2QixPQUFPLE1BQXBDO01BQXFDLE9BQU8sRUFBRTtRQUFBLE9BQU1FLFVBQVUsRUFBaEI7TUFBQSxDQUE5QztNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBTUQ7O0dBMUJNTDs7TUFBQUE7QUEwQk47QUFFRCwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dhbGxldEJhbGFuY2UuanM/ZTYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQmFsYW5jZSA9IHN0eWxlZC5kaXZgXG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuYFxuXG5cbmZ1bmN0aW9uIFdhbGxldEJhbGFuY2UoKSB7XG5cbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnl7XG4gICAgICAgIGNvbnN0IFthY2NvdW50XSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKGFjY291bnQpO1xuICAgICAgICBzZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfWZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPEJhbGFuY2U+XG4gICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIn19PllvdXIgRVRIIEJhbGFuY2U6IHtiYWxhbmNlfTwvaDQ+XG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9ICBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IGdldEJhbGFuY2UoKX0+U2hvdyBNeSBCYWxhbmNlPC9CdXR0b24+XG4gICAgICA8L0JhbGFuY2U+XG4gICAgKTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFdhbGxldEJhbGFuY2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZXRoZXJzIiwiQnV0dG9uIiwic3R5bGVkIiwiQmFsYW5jZSIsImRpdiIsIldhbGxldEJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJnZXRCYWxhbmNlIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImNvbnNvbGUiLCJlcnJvciIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WalletBalance.js\n"));

/***/ })

});