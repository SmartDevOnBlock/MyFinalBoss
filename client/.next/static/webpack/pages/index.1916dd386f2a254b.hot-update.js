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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ethereum_utils_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/utils/alchemy */ \"../ethereum/utils/alchemy.js\");\n/* harmony import */ var _components_NFTImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NFTImage */ \"./components/NFTImage.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/daniilslyshchenko/Desktop/MCS/MyFinalBoss/client/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar CollectionForm = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Segment).withConfig({\n  displayName: \"pages__CollectionForm\",\n  componentId: \"sc-1ingf92-0\"\n})({\n  display: \"flex\",\n  flexWrap: 'wrap',\n  justifyContent: 'space-between',\n  alignItems: 'center'\n});\n_c = CollectionForm;\nvar NFTforms = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Segment).withConfig({\n  displayName: \"pages__NFTforms\",\n  componentId: \"sc-1ingf92-1\"\n})({\n  display: \"flex\",\n  textAlign: \"center\",\n  justifyContent: \"center\"\n});\n_c2 = NFTforms;\nvar contractAddress = \"0x6A9124Deb551558e6f8f10FBeE8c8e08989774F6\";\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      totalMinted = _useState[0],\n      setTotalMinted = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    getCount();\n  }, []);\n\n  var getCount = /*#__PURE__*/function () {\n    var _ref = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var nfts, response;\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return _ethereum_utils_alchemy__WEBPACK_IMPORTED_MODULE_6__[\"default\"].nft.getNftsForContract(contractAddress, {\n                omitMetadata: true\n              });\n\n            case 3:\n              nfts = _context.sent;\n              // console.log(JSON.stringify(nfts, null, 2));\n              response = Object.values(nfts);\n              setTotalMinted(response[0].length);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function getCount() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Segment, {\n      color: \"yellow\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h2\", {\n        style: {\n          textAlign: \"center\",\n          color: \"black\"\n        },\n        children: \"Totally Minted\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Progress, {\n        value: totalMinted,\n        total: \"50\",\n        progress: \"ratio\",\n        color: \"green\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CollectionForm, {\n      inverted: true,\n      color: \"yellow\",\n      children: Array(totalMinted + 1).fill(0).map(function (_, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NFTforms, {\n          color: \"green\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_NFTImage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              tokenId: i,\n              getCount: getCount\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 13\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)\n        }, react_uuid__WEBPACK_IMPORTED_MODULE_4___default()(), false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 14\n  }, _this);\n};\n\n_s(Index, \"yOFXLBAC6K9F8DYBqLzJV/2kpHo=\");\n\n_c3 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CollectionForm\");\n$RefreshReg$(_c2, \"NFTforms\");\n$RefreshReg$(_c3, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFUO0FBaUJILENBekNEOztHQUFNaUI7O01BQUFBO0FBMkNOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXVpZCBmcm9tICdyZWFjdC11dWlkJztcbmltcG9ydCB7IFByb2dyZXNzLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGFsY2hlbXkgZnJvbSAnLi4vLi4vZXRoZXJldW0vdXRpbHMvYWxjaGVteSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5GVEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTkZUSW1hZ2UnO1xuXG5jb25zdCBDb2xsZWN0aW9uRm9ybSA9IHN0eWxlZChTZWdtZW50KSh7XG4gICBcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG59KTtcblxuY29uc3QgTkZUZm9ybXMgPSBzdHlsZWQoU2VnbWVudCkoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbn0pXG5cblxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDZBOTEyNERlYjU1MTU1OGU2ZjhmMTBGQmVFOGM4ZTA4OTg5Nzc0RjZcIjtcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuXG5jb25zdCBbdG90YWxNaW50ZWQsIHNldFRvdGFsTWludGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q291bnQoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldENvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBhbGNoZW15Lm5mdC5nZXROZnRzRm9yQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLHtcbiAgICAgICAgb21pdE1ldGFkYXRhOiB0cnVlXG4gICAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG5mdHMsIG51bGwsIDIpKTtcbiAgICBjb25zdCByZXNwb25zZSA9IE9iamVjdC52YWx1ZXMobmZ0cyk7XG4gICAgc2V0VG90YWxNaW50ZWQocmVzcG9uc2VbMF0ubGVuZ3RoKTtcblxuICB9Y2F0Y2goZXJyb3Ipe1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG4gICAgcmV0dXJuICggPExheW91dD5cbiAgICAgICAgPFNlZ21lbnQgY29sb3I9J3llbGxvdyc+XG4gICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiYmxhY2tcIn19PlRvdGFsbHkgTWludGVkPC9oMj5cbiAgICAgICAgPFByb2dyZXNzIHZhbHVlPXt0b3RhbE1pbnRlZH0gdG90YWw9JzUwJyBwcm9ncmVzcz0ncmF0aW8nIGNvbG9yPSdncmVlbicgLz5cbiAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICA8Q29sbGVjdGlvbkZvcm0gaW52ZXJ0ZWQgY29sb3I9XCJ5ZWxsb3dcIj5cbiAgICAgICAge0FycmF5KHRvdGFsTWludGVkKzEpXG4gICAgICAgIC5maWxsKDApXG4gICAgICAgIC5tYXAoKF8saSkgPT4gKFxuICAgICAgICAgICAgPE5GVGZvcm1zIGNvbG9yPVwiZ3JlZW5cIiBrZXk9e3V1aWQoKX0+XG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8TkZUSW1hZ2UgdG9rZW5JZD17aX0gZ2V0Q291bnQ9e2dldENvdW50fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05GVGZvcm1zPlxuICAgICAgICApKX1cbiAgICAgICAgPC9Db2xsZWN0aW9uRm9ybT5cbiAgICAgICAgPC9MYXlvdXQ+ICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1dWlkIiwiUHJvZ3Jlc3MiLCJTZWdtZW50IiwiTGF5b3V0Iiwic3R5bGVkIiwiYWxjaGVteSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTkZUSW1hZ2UiLCJDb2xsZWN0aW9uRm9ybSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIk5GVGZvcm1zIiwidGV4dEFsaWduIiwiY29udHJhY3RBZGRyZXNzIiwiSW5kZXgiLCJ0b3RhbE1pbnRlZCIsInNldFRvdGFsTWludGVkIiwiZ2V0Q291bnQiLCJuZnQiLCJnZXROZnRzRm9yQ29udHJhY3QiLCJvbWl0TWV0YWRhdGEiLCJuZnRzIiwicmVzcG9uc2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJjb2xvciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});