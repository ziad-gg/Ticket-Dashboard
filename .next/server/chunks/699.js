"use strict";
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 11699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmbedModal)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./config/config.mjs
var config = __webpack_require__(59813);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 3 modules
var v4 = __webpack_require__(80311);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Modal/index.js
var Modal = __webpack_require__(89440);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Backdrop/index.js
var Backdrop = __webpack_require__(55981);
var Backdrop_default = /*#__PURE__*/__webpack_require__.n(Backdrop);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fade/index.js
var Fade = __webpack_require__(53602);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Radio/index.js
var Radio = __webpack_require__(49696);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/RadioGroup/index.js
var RadioGroup = __webpack_require__(17784);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControl/index.js
var FormControl = __webpack_require__(58111);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormLabel/index.js
var FormLabel = __webpack_require__(11855);
var FormLabel_default = /*#__PURE__*/__webpack_require__.n(FormLabel);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(57841);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(99280);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowBack.js
var ArrowBack = __webpack_require__(91418);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Slide/index.js
var Slide = __webpack_require__(18300);
;// CONCATENATED MODULE: ./public/Buttons.png
/* harmony default export */ const Buttons = ({"src":"/_next/static/media/Buttons.d4be27c8.png","height":195,"width":1708,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAHUlEQVR42mMIi6txDc9KD3P2N7PXsbAxs7A1BSMAXDkGmsrfAccAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
;// CONCATENATED MODULE: ./components/ticket/EmbedModal.tsx





















function EmbedModal(props) {
    const { open, setOpen } = props;
    const [useGuildThumbnail, setUseGuildThumbnail] = (0,react_.useState)(false);
    const [useGuildIconInFooter, setUseGuildIconInFooter] = (0,react_.useState)(false);
    const [showSnackbar, setShowSnackbar] = (0,react_.useState)(false);
    const [submitDisabled, setSubmitDisabled] = (0,react_.useState)(false);
    const [errorMessage, setErrorMessage] = (0,react_.useState)("");
    const [id, setId] = (0,react_.useState)((0,v4/* default */.Z)());
    const [embedColor, setEmbedColor] = (0,react_.useState)("Blue");
    const [embedName, setEmbedName] = (0,react_.useState)("");
    const [title, setTitle] = (0,react_.useState)("");
    const [description, setDescription] = (0,react_.useState)("");
    const [footer, setFooter] = (0,react_.useState)("");
    const [imageUrl, setImageUrl] = (0,react_.useState)("https://example.com/default-image.jpg");
    const [buttonStyle, setButtonStyle] = (0,react_.useState)("primary");
    const [buttonText, setButtonText] = (0,react_.useState)("Click Me");
    const [buttonEmoji, setButtonEmoji] = (0,react_.useState)("\uD83D\uDE80");
    const [showButtonModal, setShowButtonModal] = (0,react_.useState)(false);
    if (props.data) {
        setId(props.data.id);
        setEmbedName(props.data.name);
        setEmbedColor(props.data.embedColor);
        setTitle(props.data.title);
        setDescription(props.data.description);
        setFooter(props.data.footer);
        setImageUrl(props.data.imageUrl);
        setButtonStyle(props.data.buttonStyle);
        setButtonText(props.data.buttonText);
        setButtonEmoji(props.data.buttonEmoji);
    }
    const handleOpen = ()=>{
        setOpen(true);
        setSubmitDisabled(false);
        setErrorMessage("");
    };
    (0,react_.useEffect)(()=>{
        if (open) handleOpen();
    }, [
        open
    ]);
    const handleClose = ()=>{
        setOpen(false);
        setShowSnackbar(false);
        setErrorMessage("");
        setShowButtonModal(false);
    };
    const handleUseGuildThumbnailChange = (event)=>{
        setUseGuildThumbnail(event.target.value === "true");
    };
    const handleUseGuildIconInFooterChange = (event)=>{
        setUseGuildIconInFooter(event.target.value === "true");
    };
    const handleNext = ()=>{
        const { error, message } = validateInputs();
        if (error) {
            setErrorMessage(message);
        } else {
            setErrorMessage("");
            setShowButtonModal(true);
        }
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        setId((0,v4/* default */.Z)());
        const dataToSend = {
            id,
            name: embedName,
            title,
            description,
            footer,
            imageUrl,
            buttonStyle,
            buttonText,
            buttonEmoji,
            useGuildThumbnail,
            useGuildIconInFooter,
            embedColor
        };
        fetch(config/* default */.Z.api(`embeds/new`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store"
            },
            cache: "no-store",
            next: {
                revalidate: 0
            },
            body: JSON.stringify(dataToSend)
        }).then((response)=>response.json()).then((data)=>{
            if (data?.error) {
                setShowButtonModal(false);
                setErrorMessage(data.message);
            } else {
                setShowSnackbar(true);
                setSubmitDisabled(true);
                setErrorMessage("");
                setTimeout(()=>{
                    props.setEmbed((prev)=>{
                        prev.push({
                            name: embedName,
                            id
                        });
                        return prev;
                    });
                }, 2000);
            }
        }).catch((e)=>{
            console.log(e);
            setShowButtonModal(false);
            setErrorMessage("error");
        });
    };
    const validateInputs = ()=>{
        if (!embedName) {
            return {
                error: true,
                message: "Embed name is require"
            };
        }
        if (embedName.includes(" ")) {
            return {
                error: true,
                message: "Embed name cant include spaces"
            };
        }
        if (title && (title.length < 1 || title.length > 200)) {
            return {
                error: true,
                message: "Embed title must be between 5 and 200 max"
            };
        }
        if (description && (description.length < 5 || description.length > 400)) {
            return {
                error: true,
                message: "Embed description must be between 5 and 400 max"
            };
        }
        return {
            error: false,
            message: "Invalid input. Please check your inputs"
        };
    };
    const customTheme = (0,node.createTheme)({
        palette: {
            primary: {
                main: "#2196f3"
            },
            secondary: {
                main: "#f50057"
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(node.ThemeProvider, {
        theme: customTheme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    open: open,
                    onClose: handleClose,
                    closeAfterTransition: true,
                    BackdropComponent: (Backdrop_default()),
                    BackdropProps: {
                        timeout: 500
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Fade["default"], {
                        in: open,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fixed inset-0 flex justify-center items-center backdrop-blur-md bg-opacity-25",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                className: "flex justify-center items-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-white p-8 shadow-lg opacity-100 w-[80%] h-[85%] rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "text-2xl font-semibold",
                                                    children: "Create Embed"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    onClick: handleClose,
                                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Close/* default */.Z, {}),
                                                    children: "Close"
                                                })
                                            ]
                                        }),
                                        errorMessage && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-red-500 mb-3",
                                            children: errorMessage
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            label: "Name",
                                            value: embedName,
                                            onChange: (e)=>setEmbedName(e.target.value),
                                            fullWidth: true,
                                            variant: "outlined",
                                            className: "mb-4",
                                            style: {
                                                marginBottom: 16
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            label: "Embed Color",
                                            value: embedColor,
                                            onChange: (e)=>setEmbedColor(e.target.value),
                                            fullWidth: true,
                                            variant: "outlined",
                                            className: "mb-4",
                                            style: {
                                                marginBottom: 16
                                            },
                                            disabled: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            label: "Title",
                                            value: title,
                                            onChange: (e)=>setTitle(e.target.value),
                                            fullWidth: true,
                                            variant: "outlined",
                                            className: "mb-4",
                                            style: {
                                                marginBottom: 16
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            label: "Description",
                                            value: description,
                                            onChange: (e)=>setDescription(e.target.value),
                                            fullWidth: true,
                                            variant: "outlined",
                                            multiline: true,
                                            rows: 4,
                                            className: "mb-4",
                                            style: {
                                                marginBottom: 16
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            label: "Footer",
                                            value: footer,
                                            onChange: (e)=>setFooter(e.target.value),
                                            fullWidth: true,
                                            variant: "outlined",
                                            className: "mb-4",
                                            style: {
                                                marginBottom: 16
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            label: "Image URL",
                                            value: imageUrl,
                                            onChange: (e)=>setImageUrl(e.target.value),
                                            fullWidth: true,
                                            variant: "outlined",
                                            className: "mb-4",
                                            style: {
                                                marginBottom: 16
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            component: "fieldset",
                                            className: "mb-4 me-3",
                                            style: {
                                                marginRight: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormLabel_default()), {
                                                    component: "legend",
                                                    children: "Use Guild Thumbnail in Embed"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup["default"], {
                                                    "aria-label": "Use Guild Thumbnail",
                                                    name: "useGuildThumbnail",
                                                    value: useGuildThumbnail.toString(),
                                                    onChange: handleUseGuildThumbnailChange,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                            value: "true",
                                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {}),
                                                            label: "Yes"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                            value: "false",
                                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {}),
                                                            label: "No"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            component: "fieldset",
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormLabel_default()), {
                                                    component: "legend",
                                                    children: "Use Guild Icon in Footer"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup["default"], {
                                                    "aria-label": "Use Guild Icon in Footer",
                                                    name: "useGuildIconInFooter",
                                                    value: useGuildIconInFooter.toString(),
                                                    onChange: handleUseGuildIconInFooterChange,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                            value: "true",
                                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {}),
                                                            label: "Yes"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                            value: "false",
                                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {}),
                                                            label: "No"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                type: "button",
                                                variant: "contained",
                                                color: "primary",
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Check/* default */.Z, {}),
                                                className: "bg-blue-900",
                                                disabled: submitDisabled,
                                                onClick: handleNext,
                                                children: "Next"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    open: showButtonModal,
                    onClose: handleClose,
                    closeAfterTransition: true,
                    BackdropComponent: (Backdrop_default()),
                    BackdropProps: {
                        timeout: 500
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Slide["default"], {
                        in: showButtonModal,
                        direction: "up",
                        timeout: {
                            enter: 300,
                            exit: 300
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fixed inset-0 flex justify-center items-center backdrop-blur-md bg-opacity-25",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-white p-8 shadow-lg opacity-100 w-[80%] h-[85%] rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex justify-between items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "text-2xl font-semibold",
                                                children: "Button"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                onClick: handleClose,
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Close/* default */.Z, {}),
                                                children: "Close"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.InputLabel, {
                                        htmlFor: "button-style-select",
                                        children: "Button Style"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Select, {
                                        labelId: "button-style-select",
                                        id: "button-style",
                                        value: buttonStyle,
                                        onChange: (e)=>setButtonStyle(e.target.value),
                                        fullWidth: true,
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                value: "primary",
                                                children: "Primary"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                value: "secondary",
                                                children: "Secondary"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                value: "Danger",
                                                children: "Danger"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                value: "Success",
                                                children: "Success"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        label: "Button Text",
                                        value: buttonText,
                                        onChange: (e)=>setButtonText(e.target.value),
                                        fullWidth: true,
                                        variant: "outlined",
                                        className: "mb-4",
                                        style: {
                                            marginBottom: 15
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        label: "Button Emoji",
                                        value: buttonEmoji,
                                        onChange: (e)=>setButtonEmoji(e.target.value),
                                        fullWidth: true,
                                        variant: "outlined",
                                        className: "mb-4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: Buttons,
                                        alt: "Buttons",
                                        className: "w-full h-36 mt-4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                type: "button",
                                                variant: "contained",
                                                color: "primary",
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Check/* default */.Z, {}),
                                                className: "bg-blue-900",
                                                disabled: submitDisabled,
                                                onClick: handleSubmit,
                                                style: {
                                                    marginRight: 16
                                                },
                                                children: "Submit"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                type: "button",
                                                variant: "contained",
                                                color: "secondary",
                                                className: "ms-3 bg-red-600",
                                                disabled: submitDisabled,
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(ArrowBack/* default */.Z, {}),
                                                onClick: ()=>setShowButtonModal(false),
                                                children: "Back"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Snackbar, {
                    open: showSnackbar,
                    autoHideDuration: 3000,
                    onClose: handleClose,
                    message: "Form submitted successfully"
                })
            ]
        })
    });
}


/***/ })

};
;