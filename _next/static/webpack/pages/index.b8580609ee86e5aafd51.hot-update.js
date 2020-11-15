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

    testo = testo.replaceAll(" ", "&nbsp;");
    hhm.innerHTML = testo;
    bdy.appendChild(hhm);
  } catch (err) {
    console.log(err);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(_c = function TextFieldC(props, ref) {
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
      lineNumber: 40,
      columnNumber: 9
    }
  }));
}));

var _c, _c2;

$RefreshReg$(_c, "%default%$forwardRef");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVGV4dEZpZWxkQy9UZXh0RmllbGRDLmpzIl0sIm5hbWVzIjpbImNoYW5nZWREaXYiLCJ0dCIsInRoZUNoYW5nZSIsInByb3BzIiwidGFyZ2V0IiwiaGhtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYmR5IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXN0byIsInZhbHVlIiwibWF0Y2giLCJqb2luIiwidG9VcHBlckNhc2UiLCJyZXBsYWNlQWxsIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZm9yd2FyZFJlZiIsIlRleHRGaWVsZEMiLCJyZWYiLCJkZW50cm9BIiwic2hyaW5rIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsRUFBcEIsRUFBdUI7QUFDdEIsU0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLEVBQUwsQ0FESDtBQUdBOztBQUVELFNBQVNDLFNBQVQsT0FBa0M7QUFBQSxNQUFkQyxLQUFjLFFBQWRBLEtBQWM7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBQzlCLE1BQUc7QUFDRixRQUNHQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQURUO0FBQUEsUUFFR0MsR0FBRyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FGVDtBQUFBLFFBR0dDLEtBQUssR0FBR04sTUFBTSxDQUFDTyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsU0FBbkIsQ0FIWDtBQUtHRixTQUFLLEdBQUdBLEtBQUssQ0FBQ0csSUFBTixDQUFXLEdBQVgsQ0FBUjtBQUNBSCxTQUFLLEdBQUdBLEtBQUssQ0FBQ0ksV0FBTixFQUFSLENBUEQsQ0FRUDs7QUFFUUosU0FBSyxHQUFHQSxLQUFLLENBQUNLLFVBQU4sQ0FBaUIsR0FBakIsRUFBcUIsUUFBckIsQ0FBUjtBQUNBVixPQUFHLENBQUNXLFNBQUosR0FBZ0JOLEtBQWhCO0FBQ0FGLE9BQUcsQ0FBQ1MsV0FBSixDQUFnQlosR0FBaEI7QUFFSCxHQWRELENBY0MsT0FBTWEsR0FBTixFQUFVO0FBQ1BDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0g7QUFDSjs7QUFFYyxrRkFBQUcsd0RBQVUsTUFDekIsU0FBU0MsVUFBVCxDQUFvQm5CLEtBQXBCLEVBQTBCb0IsR0FBMUIsRUFBOEI7QUFFMUIsTUFBTUMsT0FBTyxHQUFDLFNBQVJBLE9BQVEsR0FBSTtBQUNkLFdBQU8sRUFBUDtBQUNILEdBRkQ7O0FBTUEsU0FDSSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLG1CQURMO0FBRUUsU0FBSyxFQUFFLHFCQUZUO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxhQUFTLEVBQUUsSUFKYjtBQUtFLGVBQVcsRUFBQyxRQUxkO0FBTUUsY0FBVSxFQUFFRCxHQU5kO0FBT0UsVUFBTSxFQUFDO0FBUFQsS0FRTXBCLEtBUk47QUFTRSxtQkFBZSxFQUFFO0FBRWZzQixZQUFNLEVBQUUsSUFGTztBQUdmQyxVQUFJLEVBQUUsTUFIUyxDQUlmOztBQUplLEtBVG5CO0FBZ0JFLGNBQVUsRUFDUixDQUNMO0FBREssS0FqQko7QUFxQkUsV0FBTyxFQUFDLFFBckJWO0FBc0JFLFlBQVEsRUFBR3hCLFNBQVMsR0FBRUEsU0FBRixHQUFjLFlBQUksQ0FBRSxDQXRCMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKO0FBMkJILENBcEN3QixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODU4MDYwOWVlODZlNWFhZmQ1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlUmVmLGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VkRGl2KHR0KXtcclxuIHJldHVybiAoXHJcbiAgICA8aDM+e3R0fTwvaDM+XHJcbiApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRoZUNoYW5nZSh7cHJvcHMsdGFyZ2V0fSl7XHJcbiAgICB0cnl7XHJcbiAgICAgbGV0IFxyXG4gICAgICAgIGhobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyksXHJcbiAgICAgICAgYmR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLFxyXG4gICAgICAgIHRlc3RvID0gdGFyZ2V0LnZhbHVlLm1hdGNoKC8uezEsMX0vZyk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRlc3RvID0gdGVzdG8uam9pbignICcpO1xyXG4gICAgICAgIHRlc3RvID0gdGVzdG8udG9VcHBlckNhc2UoKTtcclxuLy8gICAgc2V0VGltZW91dChjaGFuZ2VCZWxvdyh0YXJnZXQpLDEyMDApO1xyXG4gICAgIFxyXG4gICAgICAgIHRlc3RvID0gdGVzdG8ucmVwbGFjZUFsbChcIiBcIixcIiZuYnNwO1wiKTtcclxuICAgICAgICBoaG0uaW5uZXJIVE1MID0gdGVzdG87ICAgICAgICBcclxuICAgICAgICBiZHkuYXBwZW5kQ2hpbGQoaGhtKTtcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmKFxyXG5mdW5jdGlvbiBUZXh0RmllbGRDKHByb3BzLHJlZil7XHJcblxyXG4gICAgY29uc3QgZGVudHJvQT0oKT0+e1xyXG4gICAgICAgIHJldHVybiAyMztcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJmaWxsZWQtZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICBsYWJlbD0gXCJEaWdpdGUgbyB0ZXh0byBhcXVpXCIgICAgICAgICAgIFxyXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIiAgICAgICAgICBcclxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlXCJcclxuICAgICAgICAgIGZvcndhcmRSZWY9e3JlZn1cclxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuXHJcbiAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgcm9vdDogJyNhYWEnLFxyXG4gICAgICAgICAgICAvL2ZvY3VzZWQ6ICcjZmZmJywgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgSW5wdXRQcm9wcz17XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgIC8vICAgICAgIGNsYXNzTmFtZTpjbGFzc2VzLnRleHRGaWVsZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9IHt0aGVDaGFuZ2U/IHRoZUNoYW5nZSA6ICgpPT57fSB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==