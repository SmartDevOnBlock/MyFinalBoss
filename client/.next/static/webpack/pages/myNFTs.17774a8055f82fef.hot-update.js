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

/***/ "./pages/myNFTs.js":
/*!*************************!*\
  !*** ./pages/myNFTs.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_WalletBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WalletBalance */ \"./components/WalletBalance.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/daniilslyshchenko/Desktop/MCS/MyFinalBoss/client/pages/myNFTs.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar HeroBlock = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment).withConfig({\n  displayName: \"myNFTs__HeroBlock\",\n  componentId: \"sc-67bqcv-0\"\n})({\n  textAlign: \"center\",\n  display: \"flex\",\n  alignContent: \"center\",\n  justifyContent: \"center\",\n  alignItems: \"center\",\n  flexDirection: \"column\"\n});\n_c = HeroBlock;\n\nvar MyNFTs = function MyNFTs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      currentAccount = _useState[0],\n      setCurrentAccount = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var WalletAddress;\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 3:\n              WalletAddress = _context.sent;\n              setCurrentAccount(WalletAddress[0]);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }))();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List, {\n        divided: true,\n        verticalAlign: \"middle\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Item, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n            avatar: true,\n            src: \"https://www.svgrepo.com/show/262820/wallet.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Content, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Header, {\n              children: [\"Wallet address: \", currentAccount, \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Item, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n            avatar: true,\n            src: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_UuzDWxRPM7MDMrUmiWdODkTVyvE8gHg3dEeCh3SCQCWNEF46zYkuk27hIh60RXYgpk&usqp=CAU\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Content, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_WalletBalance__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {\n      section: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeroBlock, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n        children: \"FinalBoss NFT Collection\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n        style: {\n          width: \"300px\"\n        },\n        src: \"https://gateway.pinata.cloud/ipfs/QmVEFZbCb6rC2ZcrYUd3bVe37TqSKME3FZtBzDmubsqJHD/1.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n        children: \"Description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        children: \"This is my first ever collection, deployed and created by myself, which aims to be a start of my carrier in Web3.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyNFTs, \"VK9+XnBcl8xjHxLAig35nAKzHSs=\");\n\n_c2 = MyNFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyNFTs);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HeroBlock\");\n$RefreshReg$(_c2, \"MyNFTs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlORlRzLmpzPzJjMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERpdmlkZXIsIEltYWdlLCBMaXN0LCBQcm9ncmVzcywgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBXYWxsZXRCYWxhbmNlIGZyb20gXCIuLi9jb21wb25lbnRzL1dhbGxldEJhbGFuY2VcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEhlcm9CbG9jayA9IHN0eWxlZChTZWdtZW50KSh7XG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcbn0pXG5cblxuY29uc3QgTXlORlRzID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IFdhbGxldEFkZHJlc3MgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6XCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KTtcbiAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChXYWxsZXRBZGRyZXNzWzBdKTtcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICB9LFtdKTtcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8U2VnbWVudD5cbiAgICA8TGlzdCBkaXZpZGVkIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgPExpc3QuSXRlbT5cbiAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yNjI4MjAvd2FsbGV0LnN2Z1wiLz5cbiAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgIDxMaXN0LkhlYWRlciA+V2FsbGV0IGFkZHJlc3M6IHtjdXJyZW50QWNjb3VudH0gPC9MaXN0LkhlYWRlcj5cbiAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgIDwvTGlzdC5JdGVtPlxuICAgIDxMaXN0Lkl0ZW0+XG4gICAgICA8SW1hZ2UgYXZhdGFyIHNyYz1cImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RvX1V1ekRXeFJQTTdNRE1yVW1pV2RPRGtUVnl2RThnSGczZEVlQ2gzU0NRQ1dORUY0NnpZa3VrMjdoSWg2MFJYWWdwayZ1c3FwPUNBVVwiIC8+XG4gICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICA8V2FsbGV0QmFsYW5jZS8+XG4gICAgICA8L0xpc3QuQ29udGVudD5cbiAgICA8L0xpc3QuSXRlbT5cbiAgICA8L0xpc3Q+XG4gICAgPC9TZWdtZW50PlxuICAgIDxEaXZpZGVyIHNlY3Rpb24gLz5cbiAgICA8SGVyb0Jsb2NrPlxuICAgICAgICA8aDI+RmluYWxCb3NzIE5GVCBDb2xsZWN0aW9uPC9oMj5cbiAgICAgICAgPEltYWdlIHN0eWxlPXt7d2lkdGg6IFwiMzAwcHhcIn19ICBzcmM9XCJodHRwczovL2dhdGV3YXkucGluYXRhLmNsb3VkL2lwZnMvUW1WRUZaYkNiNnJDMlpjcllVZDNiVmUzN1RxU0tNRTNGWnRCekRtdWJzcUpIRC8xLnBuZ1wiPjwvSW1hZ2U+XG4gICAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XG4gICAgICAgIDxwPlRoaXMgaXMgbXkgZmlyc3QgZXZlciBjb2xsZWN0aW9uLCBkZXBsb3llZCBhbmQgY3JlYXRlZCBieSBteXNlbGYsIHdoaWNoIGFpbXMgdG8gYmUgYSBzdGFydCBvZiBteSBjYXJyaWVyIGluIFdlYjMuPC9wPlxuICAgICAgICA8L0hlcm9CbG9jaz5cbiAgICA8L0xheW91dD4pO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgTXlORlRzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRpdmlkZXIiLCJJbWFnZSIsIkxpc3QiLCJQcm9ncmVzcyIsIlNlZ21lbnQiLCJMYXlvdXQiLCJXYWxsZXRCYWxhbmNlIiwic3R5bGVkIiwiSGVyb0Jsb2NrIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJNeU5GVHMiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiV2FsbGV0QWRkcmVzcyIsImNvbnNvbGUiLCJlcnJvciIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/myNFTs.js\n"));

/***/ })

});