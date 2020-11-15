webpackHotUpdate_N_E("pages/index",{

/***/ "./TextFieldC/TextFieldC.js":
/*!**********************************!*\
  !*** ./TextFieldC/TextFieldC.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "D:\\Personal\\code\\code11-2020\\spacer2\\TextFieldC\\TextFieldC.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function changedDiv(tt) {
  return __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, tt);
}

function theChange(_ref) {
  var props = _ref.props,
      target = _ref.target;

  try {
    var hhm = document.createElement('h3'),
        bdy = document.getElementById('__next'),
        testo = target.value.match(/.{1,1}/g);
    testo = testo.join(' ');
    testo = testo.toUpperCase(); //    setTimeout(changeBelow(target),1200);

    console.log(testo);
    hhm.innerHTML = testo;
    bdy.appendChild(hhm);
  } catch (err) {
    console.log(err);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (_c2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = function TextFieldC(props, ref) {
  var dentroA = function dentroA() {
    return 23;
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "filled-full-width",
    label: "Digite o texto aqui",
    color: "secondary",
    autoFocus: true,
    placeholder: "Digite",
    forwardRef: ref,
    margin: "normal"
  }, props, {
    InputLabelProps: {
      shrink: true,
      root: '#aaa' //focused: '#fff',            

    },
    InputProps: {//       className:classes.textField
    },
    variant: "filled",
    onChange: theChange ? theChange : function () {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }));
}));

var _c, _c2;

$RefreshReg$(_c, "%default%$React.forwardRef");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVGV4dEZpZWxkQy9UZXh0RmllbGRDLmpzIl0sIm5hbWVzIjpbImNoYW5nZWREaXYiLCJ0dCIsInRoZUNoYW5nZSIsInByb3BzIiwidGFyZ2V0IiwiaGhtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYmR5IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXN0byIsInZhbHVlIiwibWF0Y2giLCJqb2luIiwidG9VcHBlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJUZXh0RmllbGRDIiwicmVmIiwiZGVudHJvQSIsInNocmluayIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQXVCO0FBQ3RCLFNBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxFQUFMLENBREg7QUFHQTs7QUFFRCxTQUFTQyxTQUFULE9BQWtDO0FBQUEsTUFBZEMsS0FBYyxRQUFkQSxLQUFjO0FBQUEsTUFBUkMsTUFBUSxRQUFSQSxNQUFROztBQUM5QixNQUFHO0FBQ0YsUUFDR0MsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FEVDtBQUFBLFFBRUdDLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBRlQ7QUFBQSxRQUdHQyxLQUFLLEdBQUNOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhQyxLQUFiLENBQW1CLFNBQW5CLENBSFQ7QUFJR0YsU0FBSyxHQUFFQSxLQUFLLENBQUNHLElBQU4sQ0FBVyxHQUFYLENBQVA7QUFDQUgsU0FBSyxHQUFHQSxLQUFLLENBQUNJLFdBQU4sRUFBUixDQU5ELENBT1A7O0FBQ0tDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBRUdMLE9BQUcsQ0FBQ1ksU0FBSixHQUFnQlAsS0FBaEI7QUFDQUYsT0FBRyxDQUFDVSxXQUFKLENBQWdCYixHQUFoQjtBQUVILEdBYkQsQ0FhQyxPQUFNYyxHQUFOLEVBQVU7QUFDUEosV0FBTyxDQUFDQyxHQUFSLENBQVlHLEdBQVo7QUFDSDtBQUNKOztBQUVjLHFFQUFBQyw0Q0FBSyxDQUFDQyxVQUFOLE1BQ2YsU0FBU0MsVUFBVCxDQUFvQm5CLEtBQXBCLEVBQTBCb0IsR0FBMUIsRUFBOEI7QUFFMUIsTUFBTUMsT0FBTyxHQUFDLFNBQVJBLE9BQVEsR0FBSTtBQUNkLFdBQU8sRUFBUDtBQUNILEdBRkQ7O0FBTUEsU0FDSSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLG1CQURMO0FBRUUsU0FBSyxFQUFFLHFCQUZUO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxhQUFTLEVBQUUsSUFKYjtBQUtFLGVBQVcsRUFBQyxRQUxkO0FBTUUsY0FBVSxFQUFFRCxHQU5kO0FBT0UsVUFBTSxFQUFDO0FBUFQsS0FRTXBCLEtBUk47QUFTRSxtQkFBZSxFQUFFO0FBRWZzQixZQUFNLEVBQUUsSUFGTztBQUdmQyxVQUFJLEVBQUUsTUFIUyxDQUlmOztBQUplLEtBVG5CO0FBZ0JFLGNBQVUsRUFDUixDQUNMO0FBREssS0FqQko7QUFxQkUsV0FBTyxFQUFDLFFBckJWO0FBc0JFLFlBQVEsRUFBR3hCLFNBQVMsR0FBRUEsU0FBRixHQUFjLFlBQUksQ0FBRSxDQXRCMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKO0FBMkJILENBcENjLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTBkMTk4MDBiYzRlMzU4YzhlOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZWREaXYodHQpe1xyXG4gcmV0dXJuIChcclxuICAgIDxoMz57dHR9PC9oMz5cclxuIClcclxufVxyXG5cclxuZnVuY3Rpb24gdGhlQ2hhbmdlKHtwcm9wcyx0YXJnZXR9KXtcclxuICAgIHRyeXtcclxuICAgICBsZXQgXHJcbiAgICAgICAgaGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSxcclxuICAgICAgICBiZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19uZXh0JyksXHJcbiAgICAgICAgdGVzdG89dGFyZ2V0LnZhbHVlLm1hdGNoKC8uezEsMX0vZyk7IFxyXG4gICAgICAgIHRlc3RvPSB0ZXN0by5qb2luKCcgJyk7XHJcbiAgICAgICAgdGVzdG8gPSB0ZXN0by50b1VwcGVyQ2FzZSgpO1xyXG4vLyAgICBzZXRUaW1lb3V0KGNoYW5nZUJlbG93KHRhcmdldCksMTIwMCk7XHJcbiAgICAgY29uc29sZS5sb2codGVzdG8pO1xyXG4gICAgIFxyXG4gICAgICAgIGhobS5pbm5lckhUTUwgPSB0ZXN0bzsgICAgICAgIFxyXG4gICAgICAgIGJkeS5hcHBlbmRDaGlsZChoaG0pO1xyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoXHJcbmZ1bmN0aW9uIFRleHRGaWVsZEMocHJvcHMscmVmKXtcclxuXHJcbiAgICBjb25zdCBkZW50cm9BPSgpPT57XHJcbiAgICAgICAgcmV0dXJuIDIzO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cImZpbGxlZC1mdWxsLXdpZHRoXCJcclxuICAgICAgICAgIGxhYmVsPSBcIkRpZ2l0ZSBvIHRleHRvIGFxdWlcIiAgICAgICAgICAgXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiICAgICAgICAgIFxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGVcIlxyXG4gICAgICAgICAgZm9yd2FyZFJlZj17cmVmfVxyXG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG5cclxuICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICByb290OiAnI2FhYScsXHJcbiAgICAgICAgICAgIC8vZm9jdXNlZDogJyNmZmYnLCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBJbnB1dFByb3BzPXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgLy8gICAgICAgY2xhc3NOYW1lOmNsYXNzZXMudGV4dEZpZWxkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT0ge3RoZUNoYW5nZT8gdGhlQ2hhbmdlIDogKCk9Pnt9IH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcbikiXSwic291cmNlUm9vdCI6IiJ9