"use strict";
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 91040:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TypographyNestedContext = exports.TypographyInheritContext = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(44268);
var _system = __webpack_require__(19659);
var _composeClasses = __webpack_require__(29178);
var _styled = _interopRequireDefault(__webpack_require__(93315));
var _useThemeProps2 = _interopRequireDefault(__webpack_require__(68105));
var _ColorInversion = __webpack_require__(34074);
var _useSlot = _interopRequireDefault(__webpack_require__(69016));
var _typographyClasses = __webpack_require__(86792);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["color", "textColor"],
  _excluded2 = ["component", "gutterBottom", "noWrap", "level", "levelMapping", "children", "endDecorator", "startDecorator", "variant", "slots", "slotProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @internal
 * For creating nested Typography to have inherit level (unless an explicit `level` prop is provided)
 * and change the HTML tag to `span` (unless an explicit `component` prop is provided).
 */
const TypographyNestedContext = /*#__PURE__*/React.createContext(false);

/**
 * @internal
 * Typography's level will be inherit within this context unless an explicit `level` prop is provided.
 *
 * This is used in components, e.g. Table, to inherit the parent's size by default.
 */
exports.TypographyNestedContext = TypographyNestedContext;
const TypographyInheritContext = /*#__PURE__*/React.createContext(false);
exports.TypographyInheritContext = TypographyInheritContext;
const useUtilityClasses = ownerState => {
  const {
    gutterBottom,
    noWrap,
    level,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ['root', level, gutterBottom && 'gutterBottom', noWrap && 'noWrap', color && `color${(0, _utils.unstable_capitalize)(color)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _typographyClasses.getTypographyUtilityClass, {});
};
const StartDecorator = (0, _styled.default)('span', {
  name: 'JoyTypography',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: 'inline-flex',
  marginInlineEnd: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)'
});
const EndDecorator = (0, _styled.default)('span', {
  name: 'JoyTypography',
  slot: 'endDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: 'inline-flex',
  marginInlineStart: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)'
});
const TypographyRoot = (0, _styled.default)('span', {
  name: 'JoyTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$typography, _theme$typography$own, _theme$typography$own2, _theme$vars$palette$o, _theme$variants$owner;
  const lineHeight = ownerState.level !== 'inherit' ? (_theme$typography = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography.lineHeight : '1';
  return (0, _extends2.default)({
    '--Icon-fontSize': `calc(1em * ${lineHeight})`
  }, ownerState.color && {
    '--Icon-color': 'currentColor'
  }, {
    margin: 'var(--Typography-margin, 0px)'
  }, ownerState.nesting ? {
    display: 'inline' // looks better than `inline-block` when using with `variant` prop.
  } : {
    display: 'block' // don't rely on user agent, always `block`.
  }, (ownerState.startDecorator || ownerState.endDecorator) && (0, _extends2.default)({
    display: 'flex',
    alignItems: 'center'
  }, ownerState.nesting && (0, _extends2.default)({
    display: 'inline-flex'
  }, ownerState.startDecorator && {
    verticalAlign: 'bottom' // to make the text align with the parent's content
  })), ownerState.level && ownerState.level !== 'inherit' && theme.typography[ownerState.level], {
    fontSize: `var(--Typography-fontSize, ${ownerState.level && ownerState.level !== 'inherit' ? (_theme$typography$own = (_theme$typography$own2 = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography$own2.fontSize) != null ? _theme$typography$own : 'inherit' : 'inherit'})`
  }, ownerState.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, ownerState.gutterBottom && {
    marginBottom: '0.35em'
  }, ownerState.color && ownerState.color !== 'context' && {
    color: `rgba(${(_theme$vars$palette$o = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette$o.mainChannel} / 1)`
  }, ownerState.variant && (0, _extends2.default)({
    borderRadius: theme.vars.radius.xs,
    paddingBlock: 'min(0.1em, 4px)',
    paddingInline: '0.25em'
  }, !ownerState.nesting && {
    marginInline: '-0.25em'
  }, (_theme$variants$owner = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants$owner[ownerState.color]));
});
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'title-lg': 'p',
  'title-md': 'p',
  'title-sm': 'p',
  'body-lg': 'p',
  'body-md': 'p',
  'body-sm': 'p',
  'body-xs': 'span',
  inherit: 'p'
};
/**
 *
 * Demos:
 *
 * - [Skeleton](https://mui.com/joy-ui/react-skeleton/)
 * - [Typography](https://mui.com/joy-ui/react-typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/joy-ui/api/typography/)
 */
const Typography = /*#__PURE__*/React.forwardRef(function Typography(inProps, ref) {
  const _useThemeProps = (0, _useThemeProps2.default)({
      props: inProps,
      name: 'JoyTypography'
    }),
    {
      color: colorProp,
      textColor
    } = _useThemeProps,
    themeProps = (0, _objectWithoutPropertiesLoose2.default)(_useThemeProps, _excluded);
  const nesting = React.useContext(TypographyNestedContext);
  const inheriting = React.useContext(TypographyInheritContext);
  const props = (0, _system.unstable_extendSxProp)((0, _extends2.default)({}, themeProps, {
    color: textColor
  }));
  const {
      component: componentProp,
      gutterBottom = false,
      noWrap = false,
      level: levelProp = 'body-md',
      levelMapping = defaultVariantMapping,
      children,
      endDecorator,
      startDecorator,
      variant,
      slots = {},
      slotProps = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded2);
  const {
    getColor
  } = (0, _ColorInversion.useColorInversion)(variant);
  const color = getColor(inProps.color, variant ? colorProp != null ? colorProp : 'neutral' : colorProp);
  const level = nesting || inheriting ? inProps.level || 'inherit' : levelProp;
  const component = componentProp || (nesting ? 'span' : levelMapping[level] || defaultVariantMapping[level] || 'span');
  const ownerState = (0, _extends2.default)({}, props, {
    level,
    component,
    color,
    gutterBottom,
    noWrap,
    nesting,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = (0, _extends2.default)({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: classes.root,
    elementType: TypographyRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: StartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: EndDecorator,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TypographyNestedContext.Provider, {
    value: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, (0, _extends2.default)({}, rootProps, {
      children: [startDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, (0, _extends2.default)({}, startDecoratorProps, {
        children: startDecorator
      })), (0, _utils.unstable_isMuiElement)(children, ['Skeleton']) ? /*#__PURE__*/React.cloneElement(children, {
        variant: children.props.variant || 'inline'
      }) : children, endDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, (0, _extends2.default)({}, endDecoratorProps, {
        children: endDecorator
      }))]
    }))
  });
});
 false ? 0 : void 0;

// @ts-ignore internal logic to let communicate with Breadcrumbs
Typography.muiName = 'Typography';
var _default = Typography;
exports["default"] = _default;

/***/ }),

/***/ 92046:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 30222:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  typographyClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Typography.default;
  }
}));
Object.defineProperty(exports, "typographyClasses", ({
  enumerable: true,
  get: function () {
    return _typographyClasses.default;
  }
}));
var _Typography = _interopRequireDefault(__webpack_require__(91040));
var _TypographyProps = __webpack_require__(92046);
Object.keys(_TypographyProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TypographyProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TypographyProps[key];
    }
  });
});
var _typographyClasses = _interopRequireWildcard(__webpack_require__(86792));
Object.keys(_typographyClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typographyClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typographyClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 86792:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTypographyUtilityClass = getTypographyUtilityClass;
var _className = __webpack_require__(88809);
function getTypographyUtilityClass(slot) {
  return (0, _className.generateUtilityClass)('MuiTypography', slot);
}
const typographyClasses = (0, _className.generateUtilityClasses)('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'title-lg', 'title-md', 'title-sm', 'body-lg', 'body-md', 'body-sm', 'body-xs', 'noWrap', 'gutterBottom', 'startDecorator', 'endDecorator', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);
var _default = typographyClasses;
exports["default"] = _default;

/***/ })

};
;