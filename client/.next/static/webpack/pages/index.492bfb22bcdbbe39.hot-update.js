"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/daniilslyshchenko/Desktop/MCS/MyFinalBoss/client/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      currentAddress = _useState[0],\n      setCurrentAccount = _useState[1];\n\n  var handleMetamaskClick = /*#__PURE__*/function () {\n    var _ref = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _window, ethereum, accounts;\n\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _window = window, ethereum = _window.ethereum;\n\n              if (!ethereum) {\n                alert(\"You don't have Metamask\");\n              }\n\n              _context.prev = 2;\n              _context.next = 5;\n              return ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 5:\n              accounts = _context.sent;\n              setCurrentAccount(accounts[0]);\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](2);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 9]]);\n    }));\n\n    return function handleMetamaskClick() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n    style: {\n      marginTop: \"20px\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/myNFTs\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n        children: \"About Collection\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n        children: \"Mint Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n      position: \"right\",\n      children: !currentAddress ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        primary: true,\n        onClick: handleMetamaskClick,\n        children: \"Connect MetaMask\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 28\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        primary: true,\n        onClick: handleMetamaskClick,\n        children: \"Connected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 14\n  }, _this);\n};\n\n_s(Header, \"76WRJ4IcdJhZJffrOFFxk0Vx8Go=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsZ0JBQTRDRCwrQ0FBUSxFQUFwRDtFQUFBLElBQU9FLGNBQVA7RUFBQSxJQUF1QkMsaUJBQXZCOztFQUNBLElBQU1DLG1CQUFtQjtJQUFBLGtYQUFHO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQSxVQUNQQyxNQURPLEVBQ25CQyxRQURtQixXQUNuQkEsUUFEbUI7O2NBRTFCLElBQUcsQ0FBQ0EsUUFBSixFQUFjO2dCQUNaQyxLQUFLLENBQUMseUJBQUQsQ0FBTDtjQUNEOztjQUp5QjtjQUFBO2NBQUEsT0FNSEQsUUFBUSxDQUFDRSxPQUFULENBQWlCO2dCQUFDQyxNQUFNLEVBQUM7Y0FBUixDQUFqQixDQU5HOztZQUFBO2NBTXBCQyxRQU5vQjtjQU8xQlAsaUJBQWlCLENBQUNPLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBakI7Y0FQMEI7Y0FBQTs7WUFBQTtjQUFBO2NBQUE7Y0FTeEJDLE9BQU8sQ0FBQ0MsS0FBUjs7WUFUd0I7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBbkJSLG1CQUFtQjtNQUFBO0lBQUE7RUFBQSxHQUF6Qjs7RUFhRSxvQkFBUyw4REFBQyxtREFBRDtJQUFNLEtBQUssRUFBRTtNQUFDUyxTQUFTLEVBQUM7SUFBWCxDQUFiO0lBQUEsd0JBRUwsOERBQUMsa0RBQUQ7TUFBTSxJQUFJLEVBQUMsU0FBWDtNQUFBLHVCQUNBLDhEQUFDLHdEQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZLLGVBUUwsOERBQUMsa0RBQUQ7TUFBTSxJQUFJLEVBQUMsR0FBWDtNQUFBLHVCQUNBLDhEQUFDLHdEQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVJLLGVBZUwsOERBQUMsd0RBQUQ7TUFBVyxRQUFRLEVBQUMsT0FBcEI7TUFBQSxVQUNDLENBQUNYLGNBQUQsZ0JBQWtCLDhEQUFDLHFEQUFEO1FBQVEsT0FBTyxNQUFmO1FBQWdCLE9BQU8sRUFBRUUsbUJBQXpCO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQWxCLGdCQUNELDhEQUFDLHFEQUFEO1FBQVEsT0FBTyxNQUFmO1FBQWdCLE9BQU8sRUFBRUEsbUJBQXpCO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBRkE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWZLO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFUO0FBcUJILENBcENEOztHQUFNSDs7S0FBQUE7QUFzQ04sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBZGRyZXNzLCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBoYW5kbGVNZXRhbWFza0NsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtldGhlcmV1bX0gPSB3aW5kb3c7XG4gICAgaWYoIWV0aGVyZXVtKSB7XG4gICAgICBhbGVydChcIllvdSBkb24ndCBoYXZlIE1ldGFtYXNrXCIpO1xuICAgIH1cbiAgICB0cnl7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6XCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KVxuICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICB9XG4gICAgcmV0dXJuICggPE1lbnUgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT5cblxuICAgICAgICA8TGluayBocmVmPVwiL215TkZUc1wiPlxuICAgICAgICA8TWVudS5JdGVtID5cbiAgICAgICAgICBBYm91dCBDb2xsZWN0aW9uXG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPE1lbnUuSXRlbSA+XG4gICAgICAgICAgTWludCBQYWdlXG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L0xpbms+XG5cblxuICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgeyFjdXJyZW50QWRkcmVzcyA/IDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXtoYW5kbGVNZXRhbWFza0NsaWNrfT5Db25uZWN0IE1ldGFNYXNrPC9CdXR0b24+IDpcbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9e2hhbmRsZU1ldGFtYXNrQ2xpY2t9ID5Db25uZWN0ZWQ8L0J1dHRvbj4gfVxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgXG4gICAgICA8L01lbnU+ICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIk1lbnUiLCJMaW5rIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJjdXJyZW50QWRkcmVzcyIsInNldEN1cnJlbnRBY2NvdW50IiwiaGFuZGxlTWV0YW1hc2tDbGljayIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWxlcnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJjb25zb2xlIiwiZXJyb3IiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});