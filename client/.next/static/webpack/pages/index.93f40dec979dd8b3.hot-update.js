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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ethereum_utils_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/utils/alchemy */ \"../ethereum/utils/alchemy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_NFTImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NFTImage */ \"./components/NFTImage.js\");\n/* harmony import */ var _ethereum_utils_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ethereum/utils/provider */ \"../ethereum/utils/provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _ethereum_artifacts_contracts_Smeshariky_sol_Smeshariky_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ethereum/artifacts/contracts/Smeshariky.sol/Smeshariky.json */ \"../ethereum/artifacts/contracts/Smeshariky.sol/Smeshariky.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/Users/daniilslyshchenko/Desktop/MCS/MyFinalBoss/client/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CollectionForm = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment).withConfig({\n  displayName: \"pages__CollectionForm\",\n  componentId: \"sc-1ingf92-0\"\n})({\n  display: \"flex\",\n  flexWrap: 'wrap',\n  justifyContent: 'space-between',\n  alignItems: 'center'\n});\n_c = CollectionForm;\nvar NFTforms = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment).withConfig({\n  displayName: \"pages__NFTforms\",\n  componentId: \"sc-1ingf92-1\"\n})({\n  display: \"flex\",\n  textAlign: \"center\",\n  justifyContent: \"center\"\n});\n_c2 = NFTforms;\nvar contractAddress = \"0x6A9124Deb551558e6f8f10FBeE8c8e08989774F6\";\nvar signer = _ethereum_utils_provider__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getSigner();\nvar contract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(contractAddress, _ethereum_artifacts_contracts_Smeshariky_sol_Smeshariky_json__WEBPACK_IMPORTED_MODULE_8__.abi, signer);\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),\n      totalMinted = _useState[0],\n      setTotalMinted = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      getId = _useState2[0],\n      setId = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    getCount();\n  }, []);\n\n  var getCount = /*#__PURE__*/function () {\n    var _ref = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var nfts, uri, response;\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return _ethereum_utils_alchemy__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nft.getNftsForContract(contractAddress, {\n                omitMetadata: true\n              });\n\n            case 3:\n              nfts = _context.sent;\n              _context.next = 6;\n              return contract.tokenURI();\n\n            case 6:\n              uri = _context.sent;\n              console.log(uri);\n              setId(uri); // console.log(JSON.stringify(nfts, null, 2));\n\n              response = Object.values(nfts);\n              setTotalMinted(response[0].length);\n              _context.next = 16;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 13]]);\n    }));\n\n    return function getCount() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h2\", {\n        style: {\n          textAlign: \"center\"\n        },\n        children: \"Totally Minted\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Progress, {\n        value: totalMinted,\n        total: \"50\",\n        progress: \"ratio\",\n        color: \"green\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(CollectionForm, {\n      children: Array(totalMinted + 1).fill(0).map(function (_, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(NFTforms, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_NFTImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              tokenId: i,\n              getCount: getCount\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 13\n            }, _this)\n          }, getId, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 14\n  }, _this);\n};\n\n_s(Index, \"7ts5umOCWjzp7Qq8kBpp1Q7yTDI=\");\n\n_c3 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CollectionForm\");\n$RefreshReg$(_c2, \"NFTforms\");\n$RefreshReg$(_c3, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyw0REFBRDtjQUFVLE9BQU8sRUFBRUEsQ0FBbkI7Y0FBc0IsUUFBUSxFQUFFbEI7WUFBaEM7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURBLEdBQVVGLEtBQVY7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEQztNQUFBLENBRko7SUFERDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEs7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQVQ7QUFpQkgsQ0E1Q0Q7O0dBQU1IOztNQUFBQTtBQThDTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnXG5pbXBvcnQgeyBQcm9ncmVzcywgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBhbGNoZW15IGZyb20gJy4uLy4uL2V0aGVyZXVtL3V0aWxzL2FsY2hlbXknO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBORlRJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL05GVEltYWdlJztcbmltcG9ydCBwcm92aWRlciBmcm9tICcuLi8uLi9ldGhlcmV1bS91dGlscy9wcm92aWRlcic7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IFNtZXNoYXJpa3kgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2FydGlmYWN0cy9jb250cmFjdHMvU21lc2hhcmlreS5zb2wvU21lc2hhcmlreS5qc29uXCI7XG5cblxuY29uc3QgQ29sbGVjdGlvbkZvcm0gPSBzdHlsZWQoU2VnbWVudCkoe1xuICAgXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxufSk7XG5cbmNvbnN0IE5GVGZvcm1zID0gc3R5bGVkKFNlZ21lbnQpKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG59KVxuXG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg2QTkxMjREZWI1NTE1NThlNmY4ZjEwRkJlRThjOGUwODk4OTc3NEY2XCI7XG5cbmNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXG5jb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBTbWVzaGFyaWt5LmFiaSwgc2lnbmVyKTtcblxuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG5cbmNvbnN0IFt0b3RhbE1pbnRlZCwgc2V0VG90YWxNaW50ZWRdID0gdXNlU3RhdGUoMCk7XG5jb25zdCBbZ2V0SWQsIHNldElkXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDb3VudCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0Q291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgbmZ0cyA9IGF3YWl0IGFsY2hlbXkubmZ0LmdldE5mdHNGb3JDb250cmFjdChjb250cmFjdEFkZHJlc3Mse1xuICAgICAgICBvbWl0TWV0YWRhdGE6IHRydWVcbiAgICAgIH0pO1xuICAgIGNvbnN0IHVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKCk7XG4gICAgY29uc29sZS5sb2codXJpKVxuICAgIHNldElkKHVyaSk7XG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobmZ0cywgbnVsbCwgMikpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gT2JqZWN0LnZhbHVlcyhuZnRzKTtcbiAgICBzZXRUb3RhbE1pbnRlZChyZXNwb25zZVswXS5sZW5ndGgpO1xuXG4gIH1jYXRjaChlcnJvcil7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbiAgICByZXR1cm4gKCA8TGF5b3V0PlxuICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+VG90YWxseSBNaW50ZWQ8L2gyPlxuICAgICAgICA8UHJvZ3Jlc3MgdmFsdWU9e3RvdGFsTWludGVkfSB0b3RhbD0nNTAnIHByb2dyZXNzPSdyYXRpbycgY29sb3I9J2dyZWVuJyAvPlxuICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgIDxDb2xsZWN0aW9uRm9ybT5cbiAgICAgICAge0FycmF5KHRvdGFsTWludGVkKzEpXG4gICAgICAgIC5maWxsKDApXG4gICAgICAgIC5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgIDxORlRmb3Jtcz5cbiAgICAgICAgICAgIDxkaXYga2V5PXtnZXRJZH0+XG4gICAgICAgICAgICA8TkZUSW1hZ2UgdG9rZW5JZD17aX0gZ2V0Q291bnQ9e2dldENvdW50fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05GVGZvcm1zPlxuICAgICAgICApKX1cbiAgICAgICAgPC9Db2xsZWN0aW9uRm9ybT5cbiAgICAgICAgPC9MYXlvdXQ+ICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUHJvZ3Jlc3MiLCJTZWdtZW50IiwiTGF5b3V0Iiwic3R5bGVkIiwiYWxjaGVteSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTkZUSW1hZ2UiLCJwcm92aWRlciIsImV0aGVycyIsIlNtZXNoYXJpa3kiLCJDb2xsZWN0aW9uRm9ybSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIk5GVGZvcm1zIiwidGV4dEFsaWduIiwiY29udHJhY3RBZGRyZXNzIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIkluZGV4IiwidG90YWxNaW50ZWQiLCJzZXRUb3RhbE1pbnRlZCIsImdldElkIiwic2V0SWQiLCJnZXRDb3VudCIsIm5mdCIsImdldE5mdHNGb3JDb250cmFjdCIsIm9taXRNZXRhZGF0YSIsIm5mdHMiLCJ0b2tlblVSSSIsInVyaSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsImVycm9yIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});