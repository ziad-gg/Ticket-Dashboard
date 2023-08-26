"use strict";
exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 66482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmbedCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_useInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18996);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_config_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59813);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Typography = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(()=>__webpack_require__.e(/* import() */ 222).then(__webpack_require__.t.bind(__webpack_require__, 30222, 23)));
const Autocomplete = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(906), __webpack_require__.e(396), __webpack_require__.e(924), __webpack_require__.e(745)]).then(__webpack_require__.t.bind(__webpack_require__, 72745, 23)));
const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(906), __webpack_require__.e(924), __webpack_require__.e(937)]).then(__webpack_require__.t.bind(__webpack_require__, 58937, 23)));
const Snackbar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(426), __webpack_require__.e(832)]).then(__webpack_require__.t.bind(__webpack_require__, 64832, 23)));
const Modal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(426), __webpack_require__.e(440)]).then(__webpack_require__.t.bind(__webpack_require__, 89440, 23)));
const modalStyle = {
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    background: "rgba(0, 0, 0, 0.5)"
};
function EmbedCard(Props) {
    const id = Props.id;
    const info = (0,_context_useInfo__WEBPACK_IMPORTED_MODULE_1__/* .useInfo */ .w)();
    const channels = info.statics?.server.channels.map((channel)=>{
        return {
            label: "#".concat(channel.name),
            id: channel.id
        };
    });
    const [showSnackbar, setShowSnackbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [showWarning, setShowWarning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleButtonClick = (e)=>{
        if (!selectedValue) {
            setShowWarning(true);
        } else {
            const dataToSend = {
                id,
                channelId: selectedValue.id
            };
            fetch(_config_config_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.api(`embeds`), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            }).then(()=>{
                setDisabled(true);
                setShowSnackbar(true);
                setTimeout(()=>{
                    setDisabled(false);
                    setShowSnackbar(false);
                }, 5000);
            });
        }
    };
    const handleDeleteClick = ()=>{
        setShowDeleteConfirmation(true);
    };
    const confirmDelete = ()=>{
        const embedCardElement = document.getElementById(id);
        if (embedCardElement) {
            fetch(_config_config_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.api(`embeds/${id}`), {
                cache: "no-store",
                method: "delete"
            });
            setShowDeleteConfirmation(false);
            embedCardElement.remove();
        }
    };
    const cancelDelete = ()=>{
        setShowDeleteConfirmation(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: id,
        className: "w-full h-20 bg-main flex items-center rounded-lg group justify-between",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center items-center p-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "w-[269px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: " opacity-50 text-lg font-bold",
                                children: Props.name
                            }),
                            " Message Embed"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Autocomplete, {
                        className: "bg-main ms-11 text-white",
                        placeholder: "Channel",
                        options: channels ?? [],
                        onChange: (event, newValue)=>{
                            setSelectedValue(newValue);
                            setShowWarning(false);
                        },
                        sx: {
                            width: 300
                        }
                    }),
                    showWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Typography, {
                        color: "danger",
                        sx: {
                            "marginLeft": 16
                        },
                        className: "ms-3",
                        children: "Please select a channel from the list"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        id: "send",
                        disabled: disabled,
                        variant: "solid",
                        color: "success",
                        onClick: handleButtonClick,
                        className: "bg-green-700 me-3 w-16 ",
                        style: {
                            marginRight: 6
                        },
                        children: "Send"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        disabled: false,
                        variant: "solid",
                        color: "danger",
                        className: "bg-red-700 me-4",
                        onClick: handleDeleteClick,
                        style: {
                            marginRight: 10
                        },
                        children: "Delete"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Snackbar, {
                open: showSnackbar,
                autoHideDuration: 6000,
                prefix: "Success",
                color: "green",
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                message: "Embed send successfully to the channel"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Modal, {
                open: showDeleteConfirmation,
                onClose: cancelDelete,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "delete-modal",
                    style: modalStyle,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Typography, {
                                className: "pb-5  font-bold text-3xl",
                                color: "danger",
                                children: "Confirm Deletion"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Typography, {
                                className: "pb-5  font-bold text-lg",
                                children: "Are you sure you want to delete?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                variant: "outlined",
                                color: "danger",
                                onClick: confirmDelete,
                                className: "me-5",
                                style: {
                                    marginRight: 20
                                },
                                children: "Confirm"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                variant: "outlined",
                                onClick: cancelDelete,
                                className: "ms-5",
                                children: "Cancel"
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ })

};
;