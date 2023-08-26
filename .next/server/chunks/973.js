"use strict";
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 38066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(44268);
var _composeClasses = __webpack_require__(29178);
var _useSwitch = __webpack_require__(64576);
var _styles = __webpack_require__(9906);
var _ColorInversion = __webpack_require__(34074);
var _useSlot = _interopRequireDefault(__webpack_require__(69016));
var _switchClasses = _interopRequireWildcard(__webpack_require__(94499));
var _FormControlContext = _interopRequireDefault(__webpack_require__(87396));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["checked", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "id", "color", "variant", "size", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', focusVisible && 'focusVisible', readOnly && 'readOnly', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`],
    thumb: ['thumb', checked && 'checked'],
    track: ['track', checked && 'checked'],
    action: ['action', focusVisible && 'focusVisible'],
    input: ['input'],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _switchClasses.getSwitchUtilityClass, {});
};
const switchColorVariables = ({
  theme,
  ownerState
}) => (data = {}) => {
  var _theme$variants, _styles$backgroundCol, _styles$backgroundCol2;
  const styles = ((_theme$variants = theme.variants[`${ownerState.variant}${data.state || ''}`]) == null ? void 0 : _theme$variants[ownerState.color]) || {};
  return {
    '--Switch-trackBackground': (_styles$backgroundCol = styles.backgroundColor) != null ? _styles$backgroundCol : theme.vars.palette.background.surface,
    '--Switch-trackColor': styles.color,
    '--Switch-trackBorderColor': ownerState.variant === 'outlined' ? styles.borderColor : 'currentColor',
    '--Switch-thumbBackground': styles.color,
    '--Switch-thumbColor': (_styles$backgroundCol2 = styles.backgroundColor) != null ? _styles$backgroundCol2 : theme.vars.palette.background.surface
  };
};
const SwitchRoot = (0, _styles.styled)('div', {
  name: 'JoySwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants2;
  const getColorVariables = switchColorVariables({
    theme,
    ownerState
  });
  return (0, _extends2.default)({
    '--Icon-color': 'currentColor',
    '--variant-borderWidth': (_theme$variants2 = theme.variants[ownerState.variant]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2['--variant-borderWidth'],
    '--Switch-trackRadius': theme.vars.radius.xl,
    '--Switch-thumbShadow': ownerState.variant === 'soft' ? 'none' : '0 0 0 1px var(--Switch-trackBackground)'
  }, ownerState.size === 'sm' && {
    '--Switch-trackWidth': '40px',
    '--Switch-trackHeight': '20px',
    '--Switch-thumbSize': '12px',
    '--Switch-gap': '6px',
    fontSize: theme.vars.fontSize.sm
  }, ownerState.size === 'md' && {
    '--Switch-trackWidth': '48px',
    '--Switch-trackHeight': '24px',
    '--Switch-thumbSize': '16px',
    '--Switch-gap': '8px',
    fontSize: theme.vars.fontSize.md
  }, ownerState.size === 'lg' && {
    '--Switch-trackWidth': '64px',
    '--Switch-trackHeight': '32px',
    '--Switch-thumbSize': '24px',
    '--Switch-gap': '12px'
  }, {
    '--unstable_paddingBlock': `max((var(--Switch-trackHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Switch-thumbSize)) / 2, 0px)`,
    '--Switch-thumbRadius': `max(var(--Switch-trackRadius) - var(--unstable_paddingBlock), min(var(--unstable_paddingBlock) / 2, var(--Switch-trackRadius) / 2))`,
    '--Switch-thumbWidth': 'var(--Switch-thumbSize)',
    '--Switch-thumbOffset': `max((var(--Switch-trackHeight) - var(--Switch-thumbSize)) / 2, 0px)`
  }, getColorVariables(), {
    '&:hover': (0, _extends2.default)({}, getColorVariables({
      state: 'Hover'
    })),
    [`&.${_switchClasses.default.checked}`]: (0, _extends2.default)({}, getColorVariables(), {
      '&:hover': (0, _extends2.default)({}, getColorVariables({
        state: 'Hover'
      }))
    }),
    [`&.${_switchClasses.default.disabled}`]: (0, _extends2.default)({
      pointerEvents: 'none',
      color: theme.vars.palette.text.tertiary
    }, getColorVariables({
      state: 'Disabled'
    })),
    display: 'inline-flex',
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: theme.vars.fontFamily.body,
    position: 'relative',
    padding: 'calc((var(--Switch-thumbSize) / 2) - (var(--Switch-trackHeight) / 2)) calc(-1 * var(--Switch-thumbOffset))',
    backgroundColor: 'initial',
    // clear background in case `outlined` variant contain background.
    border: 'none',
    margin: 'var(--unstable_Switch-margin)'
  });
});
const SwitchAction = (0, _styles.styled)('div', {
  name: 'JoySwitch',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})(({
  theme
}) => ({
  borderRadius: 'var(--Switch-trackRadius)',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  [theme.focus.selector]: theme.focus.default
}));
const SwitchInput = (0, _styles.styled)('input', {
  name: 'JoySwitch',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input
})({
  margin: 0,
  height: '100%',
  width: '100%',
  opacity: 0,
  position: 'absolute',
  cursor: 'pointer'
});
const SwitchTrack = (0, _styles.styled)('span', {
  name: 'JoySwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  position: 'relative',
  color: 'var(--Switch-trackColor)',
  height: 'var(--Switch-trackHeight)',
  width: 'var(--Switch-trackWidth)',
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  border: 'var(--variant-borderWidth, 0px) solid',
  borderColor: 'var(--Switch-trackBorderColor)',
  backgroundColor: 'var(--Switch-trackBackground)',
  borderRadius: 'var(--Switch-trackRadius)',
  fontFamily: theme.vars.fontFamily.body
}, ownerState.size === 'sm' && {
  fontSize: theme.vars.fontSize.xs
}, ownerState.size === 'md' && {
  fontSize: theme.vars.fontSize.sm
}, ownerState.size === 'lg' && {
  fontSize: theme.vars.fontSize.md
}));
const SwitchThumb = (0, _styles.styled)('span', {
  name: 'JoySwitch',
  slot: 'Thumb',
  overridesResolver: (props, styles) => styles.thumb
})({
  '--Icon-fontSize': 'calc(var(--Switch-thumbSize) * 0.75)',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: 'calc(50% - var(--Switch-trackWidth) / 2 + var(--Switch-thumbWidth) / 2 + var(--Switch-thumbOffset))',
  transform: 'translate(-50%, -50%)',
  width: 'var(--Switch-thumbWidth)',
  height: 'var(--Switch-thumbSize)',
  borderRadius: 'var(--Switch-thumbRadius)',
  boxShadow: 'var(--Switch-thumbShadow)',
  color: 'var(--Switch-thumbColor)',
  backgroundColor: 'var(--Switch-thumbBackground)',
  [`&.${_switchClasses.default.checked}`]: {
    left: 'calc(50% + var(--Switch-trackWidth) / 2 - var(--Switch-thumbWidth) / 2 - var(--Switch-thumbOffset))'
  }
});
const SwitchStartDecorator = (0, _styles.styled)('span', {
  name: 'JoySwitch',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: 'inline-flex',
  marginInlineEnd: 'var(--Switch-gap)'
});
const SwitchEndDecorator = (0, _styles.styled)('span', {
  name: 'JoySwitch',
  slot: 'EndDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: 'inline-flex',
  marginInlineStart: 'var(--Switch-gap)'
});
/**
 *
 * Demos:
 *
 * - [Switch](https://mui.com/joy-ui/react-switch/)
 *
 * API:
 *
 * - [Switch API](https://mui.com/joy-ui/api/switch/)
 */
const Switch = /*#__PURE__*/React.forwardRef(function Switch(inProps, ref) {
  var _ref, _inProps$disabled, _ref2, _inProps$size, _formControl$color;
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoySwitch'
  });
  const {
      checked: checkedProp,
      defaultChecked,
      disabled: disabledExternalProp,
      onBlur,
      onChange,
      onFocus,
      onFocusVisible,
      readOnly: readOnlyProp,
      id,
      color: colorProp,
      variant = 'solid',
      size: sizeProp = 'md',
      startDecorator,
      endDecorator,
      component,
      slots = {},
      slotProps = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const formControl = React.useContext(_FormControlContext.default);
  if (false) {}
  const disabledProp = (_ref = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledExternalProp;
  const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
  const {
    getColor
  } = (0, _ColorInversion.useColorInversion)(variant);
  const color = getColor(inProps.color, formControl != null && formControl.error ? 'danger' : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp);
  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = (0, _useSwitch.useSwitch)(useSwitchProps);
  const ownerState = (0, _extends2.default)({}, props, {
    id,
    checked,
    disabled,
    focusVisible,
    readOnly,
    color: checked ? color || 'primary' : color || 'neutral',
    variant,
    size
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
    elementType: SwitchRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    additionalProps: {
      'aria-hidden': true // hide the decorator from assistive technology
    },

    className: classes.startDecorator,
    elementType: SwitchStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    additionalProps: {
      'aria-hidden': true // hide the decorator from assistive technology
    },

    className: classes.endDecorator,
    elementType: SwitchEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotTrack, trackProps] = (0, _useSlot.default)('track', {
    className: classes.track,
    elementType: SwitchTrack,
    externalForwardedProps,
    ownerState
  });
  const [SlotThumb, thumbProps] = (0, _useSlot.default)('thumb', {
    className: classes.thumb,
    elementType: SwitchThumb,
    externalForwardedProps,
    ownerState
  });
  const [SlotAction, actionProps] = (0, _useSlot.default)('action', {
    className: classes.action,
    elementType: SwitchAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = (0, _useSlot.default)('input', {
    additionalProps: {
      id: id != null ? id : formControl == null ? void 0 : formControl.htmlFor,
      'aria-describedby': formControl == null ? void 0 : formControl['aria-describedby']
    },
    className: classes.input,
    elementType: SwitchInput,
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, (0, _extends2.default)({}, rootProps, {
    children: [startDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, (0, _extends2.default)({}, startDecoratorProps, {
      children: typeof startDecorator === 'function' ? startDecorator(ownerState) : startDecorator
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotTrack, (0, _extends2.default)({}, trackProps, {
      children: [trackProps == null ? void 0 : trackProps.children, /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotThumb, (0, _extends2.default)({}, thumbProps))]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotAction, (0, _extends2.default)({}, actionProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotInput, (0, _extends2.default)({}, inputProps))
    })), endDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, (0, _extends2.default)({}, endDecoratorProps, {
      children: typeof endDecorator === 'function' ? endDecorator(ownerState) : endDecorator
    }))]
  }));
});
 false ? 0 : void 0;
var _default = Switch;
exports["default"] = _default;

/***/ }),

/***/ 66788:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  switchClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Switch.default;
  }
}));
Object.defineProperty(exports, "switchClasses", ({
  enumerable: true,
  get: function () {
    return _switchClasses.default;
  }
}));
var _Switch = _interopRequireDefault(__webpack_require__(38066));
var _switchClasses = _interopRequireWildcard(__webpack_require__(94499));
Object.keys(_switchClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _switchClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _switchClasses[key];
    }
  });
});
var _SwitchProps = __webpack_require__(66788);
Object.keys(_SwitchProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SwitchProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SwitchProps[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 94499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getSwitchUtilityClass = getSwitchUtilityClass;
var _className = __webpack_require__(88809);
function getSwitchUtilityClass(slot) {
  return (0, _className.generateUtilityClass)('MuiSwitch', slot);
}
const switchClasses = (0, _className.generateUtilityClasses)('MuiSwitch', ['root', 'checked', 'disabled', 'action', 'input', 'thumb', 'track', 'focusVisible', 'readOnly', 'colorPrimary', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantOutlined', 'variantSoft', 'variantSolid', 'startDecorator', 'endDecorator']);
var _default = switchClasses;
exports["default"] = _default;

/***/ })

};
;