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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_WalletBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WalletBalance */ \"./components/WalletBalance.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/daniilslyshchenko/Desktop/MCS/MyFinalBoss/client/pages/myNFTs.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar HeroBlock = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment).withConfig({\n  displayName: \"myNFTs__HeroBlock\",\n  componentId: \"sc-67bqcv-0\"\n})({\n  textAlign: \"center\",\n  display: \"flex\",\n  alignContent: \"center\",\n  justifyContent: \"center\",\n  alignItems: \"center\",\n  flexDirection: \"column\",\n  paddingBottom: \"20px\"\n});\n_c = HeroBlock;\nvar Line = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Item).withConfig({\n  displayName: \"myNFTs__Line\",\n  componentId: \"sc-67bqcv-1\"\n})({\n  marginBottom: \"20px\",\n  marginTop: \"10px\"\n});\n_c2 = Line;\n\nvar MyNFTs = function MyNFTs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      currentAccount = _useState[0],\n      setCurrentAccount = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var WalletAddress;\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 3:\n              WalletAddress = _context.sent;\n              setCurrentAccount(WalletAddress[0]);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }))();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {\n      color: \"red\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List, {\n        divided: true,\n        verticalAlign: \"middle\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Line, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n            avatar: true,\n            src: \"https://www.svgrepo.com/show/262820/wallet.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Content, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Header, {\n              children: [\"Wallet address: \", currentAccount, \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Line, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n            avatar: true,\n            src: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_UuzDWxRPM7MDMrUmiWdODkTVyvE8gHg3dEeCh3SCQCWNEF46zYkuk27hIh60RXYgpk&usqp=CAU\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.List.Content, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_WalletBalance__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {\n      section: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeroBlock, {\n      color: \"red\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n        children: \"FinalBoss NFT Collection\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n        style: {\n          width: \"300px\"\n        },\n        src: \"https://gateway.pinata.cloud/ipfs/QmVEFZbCb6rC2ZcrYUd3bVe37TqSKME3FZtBzDmubsqJHD/1.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n        children: \"Description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        children: \"This is my first ever collection, deployed and created by myself, which aims to be a start of my carrier in Web3.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyNFTs, \"VK9+XnBcl8xjHxLAig35nAKzHSs=\");\n\n_c3 = MyNFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyNFTs);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeroBlock\");\n$RefreshReg$(_c2, \"Line\");\n$RefreshReg$(_c3, \"MyNFTs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUhKLGVBSUk7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FKSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FsQkE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREE7QUEwQkgsQ0F6Q0Q7O0dBQU1UOztNQUFBQTtBQTJDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teU5GVHMuanM/MmMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGl2aWRlciwgSW1hZ2UsIExpc3QsIFByb2dyZXNzLCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFdhbGxldEJhbGFuY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2FsbGV0QmFsYW5jZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSGVyb0Jsb2NrID0gc3R5bGVkKFNlZ21lbnQpKHtcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCJcbn0pXG5cbmNvbnN0IExpbmUgPSBzdHlsZWQoTGlzdC5JdGVtKSh7XG4gIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gIG1hcmdpblRvcDogXCIxMHB4XCJcbn0pXG5cbmNvbnN0IE15TkZUcyA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjb25zdCBXYWxsZXRBZGRyZXNzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOlwiZXRoX3JlcXVlc3RBY2NvdW50c1wifSk7XG4gICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoV2FsbGV0QWRkcmVzc1swXSk7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgfSxbXSk7XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPFNlZ21lbnQgY29sb3I9XCJyZWRcIj5cbiAgICA8TGlzdCBkaXZpZGVkIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgPExpbmU+XG4gICAgICA8SW1hZ2UgYXZhdGFyIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjYyODIwL3dhbGxldC5zdmdcIi8+XG4gICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICA8TGlzdC5IZWFkZXIgPldhbGxldCBhZGRyZXNzOiB7Y3VycmVudEFjY291bnR9IDwvTGlzdC5IZWFkZXI+XG4gICAgICA8L0xpc3QuQ29udGVudD5cbiAgICA8L0xpbmU+XG4gICAgPExpbmU+XG4gICAgICA8SW1hZ2UgYXZhdGFyIHNyYz1cImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RvX1V1ekRXeFJQTTdNRE1yVW1pV2RPRGtUVnl2RThnSGczZEVlQ2gzU0NRQ1dORUY0NnpZa3VrMjdoSWg2MFJYWWdwayZ1c3FwPUNBVVwiIC8+XG4gICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICA8V2FsbGV0QmFsYW5jZS8+XG4gICAgICA8L0xpc3QuQ29udGVudD5cbiAgICA8L0xpbmU+XG4gICAgPC9MaXN0PlxuICAgIDwvU2VnbWVudD5cbiAgICA8RGl2aWRlciBzZWN0aW9uIC8+XG4gICAgPEhlcm9CbG9jayBjb2xvcj1cInJlZFwiPlxuICAgICAgICA8aDI+RmluYWxCb3NzIE5GVCBDb2xsZWN0aW9uPC9oMj5cbiAgICAgICAgPEltYWdlIHN0eWxlPXt7d2lkdGg6IFwiMzAwcHhcIn19ICBzcmM9XCJodHRwczovL2dhdGV3YXkucGluYXRhLmNsb3VkL2lwZnMvUW1WRUZaYkNiNnJDMlpjcllVZDNiVmUzN1RxU0tNRTNGWnRCekRtdWJzcUpIRC8xLnBuZ1wiPjwvSW1hZ2U+XG4gICAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XG4gICAgICAgIDxwPlRoaXMgaXMgbXkgZmlyc3QgZXZlciBjb2xsZWN0aW9uLCBkZXBsb3llZCBhbmQgY3JlYXRlZCBieSBteXNlbGYsIHdoaWNoIGFpbXMgdG8gYmUgYSBzdGFydCBvZiBteSBjYXJyaWVyIGluIFdlYjMuPC9wPlxuICAgICAgICA8L0hlcm9CbG9jaz5cbiAgICA8L0xheW91dD4pO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgTXlORlRzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRpdmlkZXIiLCJJbWFnZSIsIkxpc3QiLCJQcm9ncmVzcyIsIlNlZ21lbnQiLCJMYXlvdXQiLCJXYWxsZXRCYWxhbmNlIiwic3R5bGVkIiwiSGVyb0Jsb2NrIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nQm90dG9tIiwiTGluZSIsIkl0ZW0iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJNeU5GVHMiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiV2FsbGV0QWRkcmVzcyIsImNvbnNvbGUiLCJlcnJvciIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/myNFTs.js\n"));

/***/ })

});