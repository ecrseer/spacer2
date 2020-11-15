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
        testo = target.value.match(/.{1,1}/g);
    testo = testo.join(' ');
    testo = testo.toUpperCase(); //    setTimeout(changeBelow(target),1200);

    console.log(testo);
    hhm.innerHTML = testo;
    document.getElementById('__next').appendChild(testo);
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
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVGV4dEZpZWxkQy9UZXh0RmllbGRDLmpzIl0sIm5hbWVzIjpbImNoYW5nZWREaXYiLCJ0dCIsInRoZUNoYW5nZSIsInByb3BzIiwidGFyZ2V0IiwiaGhtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVzdG8iLCJ2YWx1ZSIsIm1hdGNoIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJUZXh0RmllbGRDIiwicmVmIiwiZGVudHJvQSIsInNocmluayIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQXVCO0FBQ3RCLFNBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxFQUFMLENBREg7QUFHQTs7QUFFRCxTQUFTQyxTQUFULE9BQWtDO0FBQUEsTUFBZEMsS0FBYyxRQUFkQSxLQUFjO0FBQUEsTUFBUkMsTUFBUSxRQUFSQSxNQUFROztBQUM5QixNQUFHO0FBQ0YsUUFDR0MsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FEVDtBQUFBLFFBRUdDLEtBQUssR0FBQ0osTUFBTSxDQUFDSyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsU0FBbkIsQ0FGVDtBQUdHRixTQUFLLEdBQUVBLEtBQUssQ0FBQ0csSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNBSCxTQUFLLEdBQUdBLEtBQUssQ0FBQ0ksV0FBTixFQUFSLENBTEQsQ0FNUDs7QUFDS0MsV0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVo7QUFFR0gsT0FBRyxDQUFDVSxTQUFKLEdBQWdCUCxLQUFoQjtBQUNBRixZQUFRLENBQUNVLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLFdBQWxDLENBQThDVCxLQUE5QztBQUNILEdBWEQsQ0FXQyxPQUFNVSxHQUFOLEVBQVU7QUFDUEwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDSDtBQUNKOztBQUVjLHFFQUFBQyw0Q0FBSyxDQUFDQyxVQUFOLE1BQ2YsU0FBU0MsVUFBVCxDQUFvQmxCLEtBQXBCLEVBQTBCbUIsR0FBMUIsRUFBOEI7QUFFMUIsTUFBTUMsT0FBTyxHQUFDLFNBQVJBLE9BQVEsR0FBSTtBQUNkLFdBQU8sRUFBUDtBQUNILEdBRkQ7O0FBTUEsU0FDSSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLG1CQURMO0FBRUUsU0FBSyxFQUFFLHFCQUZUO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxhQUFTLEVBQUUsSUFKYjtBQUtFLGVBQVcsRUFBQyxRQUxkO0FBTUUsY0FBVSxFQUFFRCxHQU5kO0FBT0UsVUFBTSxFQUFDO0FBUFQsS0FRTW5CLEtBUk47QUFTRSxtQkFBZSxFQUFFO0FBRWZxQixZQUFNLEVBQUUsSUFGTztBQUdmQyxVQUFJLEVBQUUsTUFIUyxDQUlmOztBQUplLEtBVG5CO0FBZ0JFLGNBQVUsRUFDUixDQUNMO0FBREssS0FqQko7QUFxQkUsV0FBTyxFQUFDLFFBckJWO0FBc0JFLFlBQVEsRUFBR3ZCLFNBQVMsR0FBRUEsU0FBRixHQUFjLFlBQUksQ0FBRSxDQXRCMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKO0FBMkJILENBcENjLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA5ZTBiYWEzZjAyM2I1NjQ0NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZWREaXYodHQpe1xyXG4gcmV0dXJuIChcclxuICAgIDxoMz57dHR9PC9oMz5cclxuIClcclxufVxyXG5cclxuZnVuY3Rpb24gdGhlQ2hhbmdlKHtwcm9wcyx0YXJnZXR9KXtcclxuICAgIHRyeXtcclxuICAgICBsZXQgXHJcbiAgICAgICAgaGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSxcclxuICAgICAgICB0ZXN0bz10YXJnZXQudmFsdWUubWF0Y2goLy57MSwxfS9nKTsgXHJcbiAgICAgICAgdGVzdG89IHRlc3RvLmpvaW4oJyAnKTtcclxuICAgICAgICB0ZXN0byA9IHRlc3RvLnRvVXBwZXJDYXNlKCk7XHJcbi8vICAgIHNldFRpbWVvdXQoY2hhbmdlQmVsb3codGFyZ2V0KSwxMjAwKTtcclxuICAgICBjb25zb2xlLmxvZyh0ZXN0byk7XHJcbiAgICAgXHJcbiAgICAgICAgaGhtLmlubmVySFRNTCA9IHRlc3RvO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX25leHQnKS5hcHBlbmRDaGlsZCh0ZXN0byk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKFxyXG5mdW5jdGlvbiBUZXh0RmllbGRDKHByb3BzLHJlZil7XHJcblxyXG4gICAgY29uc3QgZGVudHJvQT0oKT0+e1xyXG4gICAgICAgIHJldHVybiAyMztcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJmaWxsZWQtZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICBsYWJlbD0gXCJEaWdpdGUgbyB0ZXh0byBhcXVpXCIgICAgICAgICAgIFxyXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIiAgICAgICAgICBcclxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlXCJcclxuICAgICAgICAgIGZvcndhcmRSZWY9e3JlZn1cclxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuXHJcbiAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgcm9vdDogJyNhYWEnLFxyXG4gICAgICAgICAgICAvL2ZvY3VzZWQ6ICcjZmZmJywgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgSW5wdXRQcm9wcz17XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgIC8vICAgICAgIGNsYXNzTmFtZTpjbGFzc2VzLnRleHRGaWVsZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9IHt0aGVDaGFuZ2U/IHRoZUNoYW5nZSA6ICgpPT57fSB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==