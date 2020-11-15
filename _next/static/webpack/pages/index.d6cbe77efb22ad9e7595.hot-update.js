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
    var testo = target.value.match(/.{1,1}/g);
    testo = testo.join(' ');
    testo = testo.toUpperCase(); //    setTimeout(changeBelow(target),1200);

    console.log(testo);
    document.getElementById('__next').appendChild(changedDiv(testo));
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
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVGV4dEZpZWxkQy9UZXh0RmllbGRDLmpzIl0sIm5hbWVzIjpbImNoYW5nZWREaXYiLCJ0dCIsInRoZUNoYW5nZSIsInByb3BzIiwidGFyZ2V0IiwidGVzdG8iLCJ2YWx1ZSIsIm1hdGNoIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImVyciIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIlRleHRGaWVsZEMiLCJyZWYiLCJkZW50cm9BIiwic2hyaW5rIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsRUFBcEIsRUFBdUI7QUFDdEIsU0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLEVBQUwsQ0FESDtBQUdBOztBQUVELFNBQVNDLFNBQVQsT0FBa0M7QUFBQSxNQUFkQyxLQUFjLFFBQWRBLEtBQWM7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBQzlCLE1BQUc7QUFDRixRQUFJQyxLQUFLLEdBQUNELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxLQUFiLENBQW1CLFNBQW5CLENBQVY7QUFDQUYsU0FBSyxHQUFFQSxLQUFLLENBQUNHLElBQU4sQ0FBVyxHQUFYLENBQVA7QUFDQUgsU0FBSyxHQUFHQSxLQUFLLENBQUNJLFdBQU4sRUFBUixDQUhFLENBSVA7O0FBQ0tDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBRUdPLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsV0FBbEMsQ0FBOENkLFVBQVUsQ0FBQ0ssS0FBRCxDQUF4RDtBQUNILEdBUkQsQ0FRQyxPQUFNVSxHQUFOLEVBQVU7QUFDUEwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDSDtBQUNKOztBQUVjLHFFQUFBQyw0Q0FBSyxDQUFDQyxVQUFOLE1BQ2YsU0FBU0MsVUFBVCxDQUFvQmYsS0FBcEIsRUFBMEJnQixHQUExQixFQUE4QjtBQUUxQixNQUFNQyxPQUFPLEdBQUMsU0FBUkEsT0FBUSxHQUFJO0FBQ2QsV0FBTyxFQUFQO0FBQ0gsR0FGRDs7QUFNQSxTQUNJLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsbUJBREw7QUFFRSxTQUFLLEVBQUUscUJBRlQ7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUlFLGFBQVMsRUFBRSxJQUpiO0FBS0UsZUFBVyxFQUFDLFFBTGQ7QUFNRSxjQUFVLEVBQUVELEdBTmQ7QUFPRSxVQUFNLEVBQUM7QUFQVCxLQVFNaEIsS0FSTjtBQVNFLG1CQUFlLEVBQUU7QUFFZmtCLFlBQU0sRUFBRSxJQUZPO0FBR2ZDLFVBQUksRUFBRSxNQUhTLENBSWY7O0FBSmUsS0FUbkI7QUFnQkUsY0FBVSxFQUNSLENBQ0w7QUFESyxLQWpCSjtBQXFCRSxXQUFPLEVBQUMsUUFyQlY7QUFzQkUsWUFBUSxFQUFHcEIsU0FBUyxHQUFFQSxTQUFGLEdBQWMsWUFBSSxDQUFFLENBdEIxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREo7QUEyQkgsQ0FwQ2MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNmNiZTc3ZWZiMjJhZDllNzU5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlZERpdih0dCl7XHJcbiByZXR1cm4gKFxyXG4gICAgPGgzPnt0dH08L2gzPlxyXG4gKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0aGVDaGFuZ2Uoe3Byb3BzLHRhcmdldH0pe1xyXG4gICAgdHJ5e1xyXG4gICAgIGxldCB0ZXN0bz10YXJnZXQudmFsdWUubWF0Y2goLy57MSwxfS9nKTsgXHJcbiAgICAgdGVzdG89IHRlc3RvLmpvaW4oJyAnKTtcclxuICAgICB0ZXN0byA9IHRlc3RvLnRvVXBwZXJDYXNlKCk7XHJcbi8vICAgIHNldFRpbWVvdXQoY2hhbmdlQmVsb3codGFyZ2V0KSwxMjAwKTtcclxuICAgICBjb25zb2xlLmxvZyh0ZXN0byk7XHJcbiAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLmFwcGVuZENoaWxkKGNoYW5nZWREaXYodGVzdG8pKTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoXHJcbmZ1bmN0aW9uIFRleHRGaWVsZEMocHJvcHMscmVmKXtcclxuXHJcbiAgICBjb25zdCBkZW50cm9BPSgpPT57XHJcbiAgICAgICAgcmV0dXJuIDIzO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cImZpbGxlZC1mdWxsLXdpZHRoXCJcclxuICAgICAgICAgIGxhYmVsPSBcIkRpZ2l0ZSBvIHRleHRvIGFxdWlcIiAgICAgICAgICAgXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiICAgICAgICAgIFxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGVcIlxyXG4gICAgICAgICAgZm9yd2FyZFJlZj17cmVmfVxyXG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG5cclxuICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICByb290OiAnI2FhYScsXHJcbiAgICAgICAgICAgIC8vZm9jdXNlZDogJyNmZmYnLCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBJbnB1dFByb3BzPXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgLy8gICAgICAgY2xhc3NOYW1lOmNsYXNzZXMudGV4dEZpZWxkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT0ge3RoZUNoYW5nZT8gdGhlQ2hhbmdlIDogKCk9Pnt9IH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcbikiXSwic291cmNlUm9vdCI6IiJ9