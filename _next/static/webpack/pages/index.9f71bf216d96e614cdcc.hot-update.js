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
    console.log(testo);
    testo = testo.join(' ');
    testo = testo.toUpperCase(); //    setTimeout(changeBelow(target),1200);

    console.log(testo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVGV4dEZpZWxkQy9UZXh0RmllbGRDLmpzIl0sIm5hbWVzIjpbImNoYW5nZWREaXYiLCJ0dCIsInRoZUNoYW5nZSIsInByb3BzIiwidGFyZ2V0IiwiaGhtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYmR5IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXN0byIsInZhbHVlIiwibWF0Y2giLCJjb25zb2xlIiwibG9nIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJmb3J3YXJkUmVmIiwiVGV4dEZpZWxkQyIsInJlZiIsImRlbnRyb0EiLCJzaHJpbmsiLCJyb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxFQUFwQixFQUF1QjtBQUN0QixTQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsRUFBTCxDQURIO0FBR0E7O0FBRUQsU0FBU0MsU0FBVCxPQUFrQztBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVJDLE1BQVEsUUFBUkEsTUFBUTs7QUFDOUIsTUFBRztBQUNGLFFBQ0dDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBRFQ7QUFBQSxRQUVHQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixRQUF4QixDQUZUO0FBQUEsUUFHR0MsS0FBSyxHQUFHTixNQUFNLENBQUNPLEtBQVAsQ0FBYUMsS0FBYixDQUFtQixTQUFuQixDQUhYO0FBSUdDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0FBLFNBQUssR0FBR0EsS0FBSyxDQUFDSyxJQUFOLENBQVcsR0FBWCxDQUFSO0FBQ0FMLFNBQUssR0FBR0EsS0FBSyxDQUFDTSxXQUFOLEVBQVIsQ0FQRCxDQVFQOztBQUNLSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUVHTCxPQUFHLENBQUNZLFNBQUosR0FBZ0JQLEtBQWhCO0FBQ0FGLE9BQUcsQ0FBQ1UsV0FBSixDQUFnQmIsR0FBaEI7QUFFSCxHQWRELENBY0MsT0FBTWMsR0FBTixFQUFVO0FBQ1BOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSyxHQUFaO0FBQ0g7QUFDSjs7QUFFYyxrRkFBQUMsd0RBQVUsTUFDekIsU0FBU0MsVUFBVCxDQUFvQmxCLEtBQXBCLEVBQTBCbUIsR0FBMUIsRUFBOEI7QUFFMUIsTUFBTUMsT0FBTyxHQUFDLFNBQVJBLE9BQVEsR0FBSTtBQUNkLFdBQU8sRUFBUDtBQUNILEdBRkQ7O0FBTUEsU0FDSSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLG1CQURMO0FBRUUsU0FBSyxFQUFFLHFCQUZUO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxhQUFTLEVBQUUsSUFKYjtBQUtFLGVBQVcsRUFBQyxRQUxkO0FBTUUsY0FBVSxFQUFFRCxHQU5kO0FBT0UsVUFBTSxFQUFDO0FBUFQsS0FRTW5CLEtBUk47QUFTRSxtQkFBZSxFQUFFO0FBRWZxQixZQUFNLEVBQUUsSUFGTztBQUdmQyxVQUFJLEVBQUUsTUFIUyxDQUlmOztBQUplLEtBVG5CO0FBZ0JFLGNBQVUsRUFDUixDQUNMO0FBREssS0FqQko7QUFxQkUsV0FBTyxFQUFDLFFBckJWO0FBc0JFLFlBQVEsRUFBR3ZCLFNBQVMsR0FBRUEsU0FBRixHQUFjLFlBQUksQ0FBRSxDQXRCMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKO0FBMkJILENBcEN3QixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjcxYmYyMTZkOTZlNjE0Y2RjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlUmVmLGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VkRGl2KHR0KXtcclxuIHJldHVybiAoXHJcbiAgICA8aDM+e3R0fTwvaDM+XHJcbiApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRoZUNoYW5nZSh7cHJvcHMsdGFyZ2V0fSl7XHJcbiAgICB0cnl7XHJcbiAgICAgbGV0IFxyXG4gICAgICAgIGhobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyksXHJcbiAgICAgICAgYmR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLFxyXG4gICAgICAgIHRlc3RvID0gdGFyZ2V0LnZhbHVlLm1hdGNoKC8uezEsMX0vZyk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3RvKTtcclxuICAgICAgICB0ZXN0byA9IHRlc3RvLmpvaW4oJyAnKTtcclxuICAgICAgICB0ZXN0byA9IHRlc3RvLnRvVXBwZXJDYXNlKCk7XHJcbi8vICAgIHNldFRpbWVvdXQoY2hhbmdlQmVsb3codGFyZ2V0KSwxMjAwKTtcclxuICAgICBjb25zb2xlLmxvZyh0ZXN0byk7XHJcbiAgICAgXHJcbiAgICAgICAgaGhtLmlubmVySFRNTCA9IHRlc3RvOyAgICAgICAgXHJcbiAgICAgICAgYmR5LmFwcGVuZENoaWxkKGhobSk7XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihcclxuZnVuY3Rpb24gVGV4dEZpZWxkQyhwcm9wcyxyZWYpe1xyXG5cclxuICAgIGNvbnN0IGRlbnRyb0E9KCk9PntcclxuICAgICAgICByZXR1cm4gMjM7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwiZmlsbGVkLWZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgbGFiZWw9IFwiRGlnaXRlIG8gdGV4dG8gYXF1aVwiICAgICAgICAgICBcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCIgICAgICAgICAgXHJcbiAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZVwiXHJcbiAgICAgICAgICBmb3J3YXJkUmVmPXtyZWZ9XHJcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcblxyXG4gICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgIHJvb3Q6ICcjYWFhJyxcclxuICAgICAgICAgICAgLy9mb2N1c2VkOiAnI2ZmZicsICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIElucHV0UHJvcHM9e1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAvLyAgICAgICBjbGFzc05hbWU6Y2xhc3Nlcy50ZXh0RmllbGRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPSB7dGhlQ2hhbmdlPyB0aGVDaGFuZ2UgOiAoKT0+e30gfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuKSJdLCJzb3VyY2VSb290IjoiIn0=