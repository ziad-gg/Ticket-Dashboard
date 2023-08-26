"use strict";
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 23466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useColorScheme = exports.getInitColorSchemeScript = exports.CssVarsProvider = void 0;
var _utils = __webpack_require__(44268);
var _system = __webpack_require__(19659);
var _defaultTheme = _interopRequireDefault(__webpack_require__(82120));
var _variantUtils = __webpack_require__(7261);
var _identifier = _interopRequireDefault(__webpack_require__(17335));
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = (0, _system.unstable_createCssVarsProvider)({
  themeId: _identifier.default,
  theme: _defaultTheme.default,
  attribute: 'data-joy-color-scheme',
  modeStorageKey: 'joy-mode',
  colorSchemeStorageKey: 'joy-color-scheme',
  defaultColorScheme: {
    light: 'light',
    dark: 'dark'
  },
  resolveTheme: mergedTheme => {
    const colorInversionInput = mergedTheme.colorInversion;
    mergedTheme.colorInversion = (0, _utils.deepmerge)({
      soft: (0, _variantUtils.createSoftInversion)(mergedTheme),
      solid: (0, _variantUtils.createSolidInversion)(mergedTheme)
    }, typeof colorInversionInput === 'function' ? colorInversionInput(mergedTheme) : colorInversionInput, {
      clone: false
    });
    return mergedTheme;
  }
});
exports.getInitColorSchemeScript = getInitColorSchemeScript;
exports.useColorScheme = useColorScheme;
exports.CssVarsProvider = CssVarsProvider;

/***/ }),

/***/ 64878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _system.StyledEngineProvider;
  }
}));
var _system = __webpack_require__(19659);

/***/ }),

/***/ 9906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

// reexports from system for module augmentation
var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  THEME_ID: true,
  CssVarsProvider: true,
  useColorScheme: true,
  getInitColorSchemeScript: true,
  shouldSkipGeneratingVar: true,
  styled: true,
  ThemeProvider: true,
  useThemeProps: true,
  ColorInversionProvider: true,
  useColorInversion: true,
  extendTheme: true,
  createGetCssVar: true,
  StyledEngineProvider: true
};
Object.defineProperty(exports, "ColorInversionProvider", ({
  enumerable: true,
  get: function () {
    return _ColorInversion.ColorInversionProvider;
  }
}));
Object.defineProperty(exports, "CssVarsProvider", ({
  enumerable: true,
  get: function () {
    return _CssVarsProvider.CssVarsProvider;
  }
}));
Object.defineProperty(exports, "StyledEngineProvider", ({
  enumerable: true,
  get: function () {
    return _StyledEngineProvider.default;
  }
}));
Object.defineProperty(exports, "THEME_ID", ({
  enumerable: true,
  get: function () {
    return _identifier.default;
  }
}));
Object.defineProperty(exports, "ThemeProvider", ({
  enumerable: true,
  get: function () {
    return _ThemeProvider.default;
  }
}));
Object.defineProperty(exports, "createGetCssVar", ({
  enumerable: true,
  get: function () {
    return _extendTheme.createGetCssVar;
  }
}));
Object.defineProperty(exports, "extendTheme", ({
  enumerable: true,
  get: function () {
    return _extendTheme.default;
  }
}));
Object.defineProperty(exports, "getInitColorSchemeScript", ({
  enumerable: true,
  get: function () {
    return _CssVarsProvider.getInitColorSchemeScript;
  }
}));
Object.defineProperty(exports, "shouldSkipGeneratingVar", ({
  enumerable: true,
  get: function () {
    return _shouldSkipGeneratingVar.default;
  }
}));
Object.defineProperty(exports, "styled", ({
  enumerable: true,
  get: function () {
    return _styled.default;
  }
}));
Object.defineProperty(exports, "useColorInversion", ({
  enumerable: true,
  get: function () {
    return _ColorInversion.useColorInversion;
  }
}));
Object.defineProperty(exports, "useColorScheme", ({
  enumerable: true,
  get: function () {
    return _CssVarsProvider.useColorScheme;
  }
}));
Object.defineProperty(exports, "useThemeProps", ({
  enumerable: true,
  get: function () {
    return _useThemeProps.default;
  }
}));
var _identifier = _interopRequireDefault(__webpack_require__(17335));
var _CssVarsProvider = __webpack_require__(23466);
var _shouldSkipGeneratingVar = _interopRequireDefault(__webpack_require__(97902));
var _styled = _interopRequireDefault(__webpack_require__(93315));
var _ThemeProvider = _interopRequireWildcard(__webpack_require__(99024));
Object.keys(_ThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ThemeProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ThemeProvider[key];
    }
  });
});
var _useThemeProps = _interopRequireDefault(__webpack_require__(68105));
var _ColorInversion = __webpack_require__(34074);
var _extendTheme = _interopRequireWildcard(__webpack_require__(55951));
var _StyledEngineProvider = _interopRequireDefault(__webpack_require__(64878));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ })

};
;