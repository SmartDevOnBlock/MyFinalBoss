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

/***/ "./components/NFTImage.js":
/*!********************************!*\
  !*** ./components/NFTImage.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_artifacts_contracts_Smeshariky_sol_Smeshariky_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/artifacts/contracts/Smeshariky.sol/Smeshariky.json */ \"../ethereum/artifacts/contracts/Smeshariky.sol/Smeshariky.json\");\n/* harmony import */ var _ethereum_utils_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/utils/provider */ \"../ethereum/utils/provider.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/daniilslyshchenko/Desktop/MCS/MyFinalBoss/client/components/NFTImage.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ImgFrame = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"NFTImage__ImgFrame\",\n  componentId: \"sc-8jt3u0-0\"\n})([\"border:1px solid black;\"]);\n_c = ImgFrame;\n\nfunction NFTImage(_ref) {\n  _s();\n\n  var tokenId = _ref.tokenId,\n      getCount = _ref.getCount;\n  var contractAddress = \"0x6A9124Deb551558e6f8f10FBeE8c8e08989774F6\";\n  var signer = _ethereum_utils_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getSigner();\n  var contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(contractAddress, _ethereum_artifacts_contracts_Smeshariky_sol_Smeshariky_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n  var contentId = 'QmSMTAFYTfuQzw7X6LsqqCvRnWVyf2zAsDrpQjL9VC8Yjc';\n  var metadataURI = \"\".concat(contentId, \"/\").concat(tokenId, \".json\");\n  var imageURI = \"https://gateway.pinata.cloud/ipfs/\".concat(contentId, \"/\").concat(tokenId, \".png\");\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isMinted = _useState[0],\n      setIsMinted = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isLoading = _useState2[0],\n      setLoading = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    getMintedStatus();\n  }, [isMinted]);\n\n  var getMintedStatus = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var result;\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return contract.isContentOwned(metadataURI);\n\n            case 2:\n              result = _context.sent;\n              setIsMinted(result);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getMintedStatus() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var mintToken = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var connection, addr, trans, result;\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              setLoading(true);\n              connection = contract.connect(signer);\n              addr = connection.address;\n              _context2.next = 6;\n              return contract.safeTransferFrom(contractAddress, addr, tokenId);\n\n            case 6:\n              trans = _context2.sent;\n              _context2.next = 9;\n              return contract.payToMint(addr, metadataURI, {\n                value: ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseEther('0.01')\n              });\n\n            case 9:\n              result = _context2.sent;\n              _context2.next = 12;\n              return result.wait();\n\n            case 12:\n              _context2.next = 14;\n              return trans.wait();\n\n            case 14:\n              getMintedStatus();\n              getCount();\n              _context2.next = 21;\n              break;\n\n            case 18:\n              _context2.prev = 18;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.error(_context2.t0);\n\n            case 21:\n              _context2.prev = 21;\n              setLoading(false);\n              return _context2.finish(21);\n\n            case 24:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 18, 21, 24]]);\n    }));\n\n    return function mintToken() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  function getURI() {\n    return _getURI.apply(this, arguments);\n  }\n\n  function _getURI() {\n    _getURI = (0,_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      var uri;\n      return _Users_daniilslyshchenko_Desktop_MCS_MyFinalBoss_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return contract.tokenURI(tokenId);\n\n            case 2:\n              uri = _context3.sent;\n              alert(uri);\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n    return _getURI.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ImgFrame, {\n      width: 300,\n      src: isMinted ? imageURI : 'https://www.cumbriaeducationtrust.org/wp-content/uploads/2016/01/placeholder.png'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h5\", {\n      children: [\"ID #\", tokenId]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }, this), !isMinted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n      loading: isLoading,\n      primary: true,\n      onClick: mintToken,\n      children: \"Mint\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n      onClick: getURI,\n      children: \"Taken! Show URI\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 7\n  }, this);\n}\n\n_s(NFTImage, \"nn44xplDEJv/03SK+opu39+NqUc=\");\n\n_c2 = NFTImage;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTImage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ImgFrame\");\n$RefreshReg$(_c2, \"NFTImage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1FrQyxHQURSO2NBRUVDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMOztZQUZGO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBN0NxQztJQUFBO0VBQUE7O0VBaURyQyxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLFFBQUQ7TUFBVSxLQUFLLEVBQUUsR0FBakI7TUFBc0IsR0FBRyxFQUFFdkIsUUFBUSxHQUFHRCxRQUFILEdBQWM7SUFBakQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUk7TUFBQSxtQkFBU1YsT0FBVDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGSixFQUdLLENBQUNXLFFBQUQsZ0JBQ0MsOERBQUMscURBQUQ7TUFBUSxPQUFPLEVBQUVFLFNBQWpCO01BQTRCLE9BQU8sTUFBbkM7TUFBb0MsT0FBTyxFQUFFSyxTQUE3QztNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURELGdCQUtDLDhEQUFDLHFEQUFEO01BQVEsT0FBTyxFQUFFYyxNQUFqQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVJOO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBZUg7O0dBaEVRakM7O01BQUFBO0FBZ0VSO0FBRUQsK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRJbWFnZS5qcz8yMTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFNtZXNoYXJpa3kgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2FydGlmYWN0cy9jb250cmFjdHMvU21lc2hhcmlreS5zb2wvU21lc2hhcmlreS5qc29uXCI7XG5pbXBvcnQgcHJvdmlkZXIgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3V0aWxzL3Byb3ZpZGVyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBJbWdGcmFtZSA9IHN0eWxlZC5pbWdgXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5gXG5cblxuZnVuY3Rpb24gTkZUSW1hZ2UoeyB0b2tlbklkLCBnZXRDb3VudCB9KSB7XG4gICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDZBOTEyNERlYjU1MTU1OGU2ZjhmMTBGQmVFOGM4ZTA4OTg5Nzc0RjZcIjtcblxuICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgIFxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIFNtZXNoYXJpa3kuYWJpLCBzaWduZXIpO1xuICAgIGNvbnN0IGNvbnRlbnRJZCA9ICdRbVNNVEFGWVRmdVF6dzdYNkxzcXFDdlJuV1Z5ZjJ6QXNEcnBRakw5VkM4WWpjJztcbiAgICBjb25zdCBtZXRhZGF0YVVSSSA9IGAke2NvbnRlbnRJZH0vJHt0b2tlbklkfS5qc29uYDtcbiAgICBjb25zdCBpbWFnZVVSSSA9IGBodHRwczovL2dhdGV3YXkucGluYXRhLmNsb3VkL2lwZnMvJHtjb250ZW50SWR9LyR7dG9rZW5JZH0ucG5nYDtcbiBcbiAgXG4gICAgY29uc3QgW2lzTWludGVkLCBzZXRJc01pbnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0TWludGVkU3RhdHVzKCk7XG4gICAgfSwgW2lzTWludGVkXSk7XG4gIFxuICAgIGNvbnN0IGdldE1pbnRlZFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmlzQ29udGVudE93bmVkKG1ldGFkYXRhVVJJKTtcbiAgICAgIHNldElzTWludGVkKHJlc3VsdCk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgbWludFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnl7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGNvbnRyYWN0LmNvbm5lY3Qoc2lnbmVyKTtcbiAgICAgIGNvbnN0IGFkZHIgPSBjb25uZWN0aW9uLmFkZHJlc3M7XG4gICAgICBjb25zdCB0cmFucyA9IGF3YWl0IGNvbnRyYWN0LnNhZmVUcmFuc2ZlckZyb20oY29udHJhY3RBZGRyZXNzLCBhZGRyLHRva2VuSWQpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5wYXlUb01pbnQoYWRkciwgbWV0YWRhdGFVUkksIHtcbiAgICAgICAgdmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKCcwLjAxJyksXG4gICAgICB9KTtcbiAgICAgIFxuICBcbiAgICAgIGF3YWl0IHJlc3VsdC53YWl0KCk7XG4gICAgICBhd2FpdCB0cmFucy53YWl0KCk7XG4gICAgICBnZXRNaW50ZWRTdGF0dXMoKTtcbiAgICAgIGdldENvdW50KCk7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfWZpbmFsbHl7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICB9O1xuICBcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVUkkoKSB7XG4gICAgICBjb25zdCB1cmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcbiAgICAgIGFsZXJ0KHVyaSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW1nRnJhbWUgd2lkdGg9ezMwMH0gc3JjPXtpc01pbnRlZCA/IGltYWdlVVJJIDogJ2h0dHBzOi8vd3d3LmN1bWJyaWFlZHVjYXRpb250cnVzdC5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDEvcGxhY2Vob2xkZXIucG5nJ30+PC9JbWdGcmFtZT5cbiAgICAgICAgICA8aDU+SUQgI3t0b2tlbklkfTwvaDU+XG4gICAgICAgICAgeyFpc01pbnRlZCA/IChcbiAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5IG9uQ2xpY2s9e21pbnRUb2tlbn0+XG4gICAgICAgICAgICAgIE1pbnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dldFVSSX0+XG4gICAgICAgICAgICAgIFRha2VuISBTaG93IFVSSVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5GVEltYWdlOyJdLCJuYW1lcyI6WyJldGhlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlNlZ21lbnQiLCJTbWVzaGFyaWt5IiwicHJvdmlkZXIiLCJzdHlsZWQiLCJJbWdGcmFtZSIsImltZyIsIk5GVEltYWdlIiwidG9rZW5JZCIsImdldENvdW50IiwiY29udHJhY3RBZGRyZXNzIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsImNvbnRlbnRJZCIsIm1ldGFkYXRhVVJJIiwiaW1hZ2VVUkkiLCJpc01pbnRlZCIsInNldElzTWludGVkIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImdldE1pbnRlZFN0YXR1cyIsImlzQ29udGVudE93bmVkIiwicmVzdWx0IiwibWludFRva2VuIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRyIiwiYWRkcmVzcyIsInNhZmVUcmFuc2ZlckZyb20iLCJ0cmFucyIsInBheVRvTWludCIsInZhbHVlIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwid2FpdCIsImNvbnNvbGUiLCJlcnJvciIsImdldFVSSSIsInRva2VuVVJJIiwidXJpIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTImage.js\n"));

/***/ })

});