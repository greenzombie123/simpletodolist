/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/frontend/App.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/frontend/App.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    height: 100vh;
    margin: 0;
    display: grid;
    grid-template: 80px 1fr/ 200px 1fr;
    grid-template-areas:
        "header header"
        "aside main";
}

header{
    background-color: rgb(107, 107, 255);
    grid-area: header;

    button{
        height: 50px;
        width: 50px;
    }
}

aside{
    grid-area: aside;
    border-right: 1px solid black;
    padding: 5px;
}

main{
    grid-area: main;
}

footer svg{
    fill:gold;
    width: 10px;
}`, "",{"version":3,"sources":["webpack://./src/frontend/App.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,kCAAkC;IAClC;;oBAEgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;;IAEjB;QACI,YAAY;QACZ,WAAW;IACf;AACJ;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,WAAW;AACf","sourcesContent":["body {\n    height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template: 80px 1fr/ 200px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"aside main\";\n}\n\nheader{\n    background-color: rgb(107, 107, 255);\n    grid-area: header;\n\n    button{\n        height: 50px;\n        width: 50px;\n    }\n}\n\naside{\n    grid-area: aside;\n    border-right: 1px solid black;\n    padding: 5px;\n}\n\nmain{\n    grid-area: main;\n}\n\nfooter svg{\n    fill:gold;\n    width: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/frontend/Dialog/Dialog.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/frontend/Dialog/Dialog.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/arrow-left-bold-outline.svg */ "./src/assets/arrow-left-bold-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/arrow-right-bold-outline.svg */ "./src/assets/arrow-right-bold-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog {
    --buttonSize: 30px;
    --modalWidth: 500px;

    .modal {
        display: grid;
        grid-template: auto auto auto / auto auto auto;
        grid-template-areas:
            "title title title"
            "descript descript descript"
            "date project priority"
        ;
        row-gap: 10px;
        width: var(--modalWidth);

        .titleLabel,
        .descriptLabel,
        .dateLabel {
            display: flex;
            flex-direction: column;
            font-size: 18px;
            margin-bottom: 5px;
        }

        .titleLabel {
            grid-area: title;

            #titleInput {
                padding: 5px;
                font-size: inherit;
            }
        }

        .descriptLabel {
            grid-area: descript;

            #descriptTextArea {
                padding: 5px;
                font-size: inherit;
            }
        }

        .dateContainer {
            grid-area: date;
            justify-self: center;

            .dateLabel {
                text-align: center;

                .dateInput {
                    flex: 10%;
                    width: min-content;
                    margin-top: 10px;
                }
            }
        }

        .projectBox {

            .projectLabel {
                font-size: 20px;
                text-align: center;
                display: flex;
                flex-direction: column;

                .projectSelect {
                    color: black;
                }
            }

        }

        .priorityDiv {
            grid-area: priority;
            justify-self: center;
            display: grid;
            width: 150px;
            grid-template: 20px 40px / 1fr max-content 1fr;
            grid-template-areas:
                "label label label"
                "leftButton text rightButton";
            justify-content: center;
            align-items: center;

            .priorityLabel {
                font-size: 18px;
                grid-area: label;
                text-align: center;
            }

            .priorityText {
                grid-area: text;
            }

            .priorityLeftButton,
            .priorityRightButton {
                width: var(--buttonSize);
                height: var(--buttonSize);
                justify-self: center;
            }

            .priorityLeftButton {
                grid-area: leftButton;
                background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
            }

            .priorityRightButton {
                grid-area: rightButton;
                background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
            }
        }
    }

    .projectModal {
        display: grid;
        grid-template: 1fr 2fr 1fr / repeat(2, 1fr);
        grid-template-areas:
            "label label"
            "input input"
            "leftButton rightButton"
        ;
        width: var(--modalWidth);
        font-size: 20px;

        .projectNameLabel {
            grid-area: label;
            text-align: center;
        }

        .projectNameInputWrapper {
            grid-area: input;

            position: relative;

            #projectNameInput {
                padding: 2px;
                width: 100%;
                font-size: inherit;
            }

            .warningText {
                display: none;
                position: absolute;
                text-align: center;
                width: 100%;
                color: red;
                font-weight: 700;
            }
        }

        button {
            padding: 5px;
            width: min-content;
            font-size: inherit;
            justify-self: center;

            &.cancelButton {
                grid-area: rightButton;
            }

            &.addProjectButton {
                grid-area: leftButton;
            }
        }
    }


}`, "",{"version":3,"sources":["webpack://./src/frontend/Dialog/Dialog.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;;IAEnB;QACI,aAAa;QACb,8CAA8C;QAC9C;;;;QAIA;QACA,aAAa;QACb,wBAAwB;;QAExB;;;YAGI,aAAa;YACb,sBAAsB;YACtB,eAAe;YACf,kBAAkB;QACtB;;QAEA;YACI,gBAAgB;;YAEhB;gBACI,YAAY;gBACZ,kBAAkB;YACtB;QACJ;;QAEA;YACI,mBAAmB;;YAEnB;gBACI,YAAY;gBACZ,kBAAkB;YACtB;QACJ;;QAEA;YACI,eAAe;YACf,oBAAoB;;YAEpB;gBACI,kBAAkB;;gBAElB;oBACI,SAAS;oBACT,kBAAkB;oBAClB,gBAAgB;gBACpB;YACJ;QACJ;;QAEA;;YAEI;gBACI,eAAe;gBACf,kBAAkB;gBAClB,aAAa;gBACb,sBAAsB;;gBAEtB;oBACI,YAAY;gBAChB;YACJ;;QAEJ;;QAEA;YACI,mBAAmB;YACnB,oBAAoB;YACpB,aAAa;YACb,YAAY;YACZ,8CAA8C;YAC9C;;6CAEiC;YACjC,uBAAuB;YACvB,mBAAmB;;YAEnB;gBACI,eAAe;gBACf,gBAAgB;gBAChB,kBAAkB;YACtB;;YAEA;gBACI,eAAe;YACnB;;YAEA;;gBAEI,wBAAwB;gBACxB,yBAAyB;gBACzB,oBAAoB;YACxB;;YAEA;gBACI,qBAAqB;gBACrB,mDAAyD;YAC7D;;YAEA;gBACI,sBAAsB;gBACtB,mDAA0D;YAC9D;QACJ;IACJ;;IAEA;QACI,aAAa;QACb,2CAA2C;QAC3C;;;;QAIA;QACA,wBAAwB;QACxB,eAAe;;QAEf;YACI,gBAAgB;YAChB,kBAAkB;QACtB;;QAEA;YACI,gBAAgB;;YAEhB,kBAAkB;;YAElB;gBACI,YAAY;gBACZ,WAAW;gBACX,kBAAkB;YACtB;;YAEA;gBACI,aAAa;gBACb,kBAAkB;gBAClB,kBAAkB;gBAClB,WAAW;gBACX,UAAU;gBACV,gBAAgB;YACpB;QACJ;;QAEA;YACI,YAAY;YACZ,kBAAkB;YAClB,kBAAkB;YAClB,oBAAoB;;YAEpB;gBACI,sBAAsB;YAC1B;;YAEA;gBACI,qBAAqB;YACzB;QACJ;IACJ;;;AAGJ","sourcesContent":["dialog {\n    --buttonSize: 30px;\n    --modalWidth: 500px;\n\n    .modal {\n        display: grid;\n        grid-template: auto auto auto / auto auto auto;\n        grid-template-areas:\n            \"title title title\"\n            \"descript descript descript\"\n            \"date project priority\"\n        ;\n        row-gap: 10px;\n        width: var(--modalWidth);\n\n        .titleLabel,\n        .descriptLabel,\n        .dateLabel {\n            display: flex;\n            flex-direction: column;\n            font-size: 18px;\n            margin-bottom: 5px;\n        }\n\n        .titleLabel {\n            grid-area: title;\n\n            #titleInput {\n                padding: 5px;\n                font-size: inherit;\n            }\n        }\n\n        .descriptLabel {\n            grid-area: descript;\n\n            #descriptTextArea {\n                padding: 5px;\n                font-size: inherit;\n            }\n        }\n\n        .dateContainer {\n            grid-area: date;\n            justify-self: center;\n\n            .dateLabel {\n                text-align: center;\n\n                .dateInput {\n                    flex: 10%;\n                    width: min-content;\n                    margin-top: 10px;\n                }\n            }\n        }\n\n        .projectBox {\n\n            .projectLabel {\n                font-size: 20px;\n                text-align: center;\n                display: flex;\n                flex-direction: column;\n\n                .projectSelect {\n                    color: black;\n                }\n            }\n\n        }\n\n        .priorityDiv {\n            grid-area: priority;\n            justify-self: center;\n            display: grid;\n            width: 150px;\n            grid-template: 20px 40px / 1fr max-content 1fr;\n            grid-template-areas:\n                \"label label label\"\n                \"leftButton text rightButton\";\n            justify-content: center;\n            align-items: center;\n\n            .priorityLabel {\n                font-size: 18px;\n                grid-area: label;\n                text-align: center;\n            }\n\n            .priorityText {\n                grid-area: text;\n            }\n\n            .priorityLeftButton,\n            .priorityRightButton {\n                width: var(--buttonSize);\n                height: var(--buttonSize);\n                justify-self: center;\n            }\n\n            .priorityLeftButton {\n                grid-area: leftButton;\n                background: url(../../assets/arrow-left-bold-outline.svg);\n            }\n\n            .priorityRightButton {\n                grid-area: rightButton;\n                background: url(../../assets/arrow-right-bold-outline.svg);\n            }\n        }\n    }\n\n    .projectModal {\n        display: grid;\n        grid-template: 1fr 2fr 1fr / repeat(2, 1fr);\n        grid-template-areas:\n            \"label label\"\n            \"input input\"\n            \"leftButton rightButton\"\n        ;\n        width: var(--modalWidth);\n        font-size: 20px;\n\n        .projectNameLabel {\n            grid-area: label;\n            text-align: center;\n        }\n\n        .projectNameInputWrapper {\n            grid-area: input;\n\n            position: relative;\n\n            #projectNameInput {\n                padding: 2px;\n                width: 100%;\n                font-size: inherit;\n            }\n\n            .warningText {\n                display: none;\n                position: absolute;\n                text-align: center;\n                width: 100%;\n                color: red;\n                font-weight: 700;\n            }\n        }\n\n        button {\n            padding: 5px;\n            width: min-content;\n            font-size: inherit;\n            justify-self: center;\n\n            &.cancelButton {\n                grid-area: rightButton;\n            }\n\n            &.addProjectButton {\n                grid-area: leftButton;\n            }\n        }\n    }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/frontend/Header/Header.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/frontend/Header/Header.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/plus.svg */ "./src/assets/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/tab-plus.svg */ "./src/assets/tab-plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/tab-remove.svg */ "./src/assets/tab-remove.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
    background-color: rgb(107, 107, 255);
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    button {
        height: 50px;
        width: 50px;

        &.addTaskButton {
            background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
        }

        &.addProjectButton {
            background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
        }

        &.editProjectButton {
            background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
        }
    }
}`, "",{"version":3,"sources":["webpack://./src/frontend/Header/Header.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;IAET;QACI,YAAY;QACZ,WAAW;;QAEX;YACI,mDAAwC;QAC5C;;QAEA;YACI,mDAA4C;QAChD;;QAEA;YACI,mDAA8C;QAClD;IACJ;AACJ","sourcesContent":["header {\n    background-color: rgb(107, 107, 255);\n    grid-area: header;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n\n    button {\n        height: 50px;\n        width: 50px;\n\n        &.addTaskButton {\n            background: url('../../assets/plus.svg');\n        }\n\n        &.addProjectButton {\n            background: url('../../assets/tab-plus.svg');\n        }\n\n        &.editProjectButton {\n            background: url('../../assets/tab-remove.svg');\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/frontend/TaskListView.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/frontend/TaskListView.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main {
    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* for Internet Explorer, Edge */
    scrollbar-width: none;
    /* for Firefox */


    &::-webkit-scrollbar {
        display: none;
        /* for Chrome, Safari, and Opera */
    }


    .projectHeading {
        font-size: 40px;
        margin-bottom: 15px;
        text-align: center;
    }

    .taskListView {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}`, "",{"version":3,"sources":["webpack://./src/frontend/TaskListView.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;IACxB,gCAAgC;IAChC,qBAAqB;IACrB,gBAAgB;;;IAGhB;QACI,aAAa;QACb,kCAAkC;IACtC;;;IAGA;QACI,eAAe;QACf,mBAAmB;QACnB,kBAAkB;IACtB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;AACJ","sourcesContent":["main {\n    height: 100%;\n    overflow-y: scroll;\n    -ms-overflow-style: none;\n    /* for Internet Explorer, Edge */\n    scrollbar-width: none;\n    /* for Firefox */\n\n\n    &::-webkit-scrollbar {\n        display: none;\n        /* for Chrome, Safari, and Opera */\n    }\n\n\n    .projectHeading {\n        font-size: 40px;\n        margin-bottom: 15px;\n        text-align: center;\n    }\n\n    .taskListView {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/frontend/TaskView.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/frontend/TaskView.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/trashcan.svg */ "./src/assets/trashcan.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.task {

    position: relative;
    display: grid;
    grid-template: 30px 30px / 1fr min-content;
    align-items: center;
    width: 70%;
    padding: 4px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;


    .title {}

    .date {
        color: gray;
    }

    .project {
        border-radius: 20px;
        background-color: red;
        padding: 3px;
    }

    .trashCan {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
        position: absolute;
        right: -25px;
        top: 0;
        cursor: pointer;
        width: 25px;
        height: 25px;
    }
}`, "",{"version":3,"sources":["webpack://./src/frontend/TaskView.css"],"names":[],"mappings":"AAAA;;IAEI,kBAAkB;IAClB,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;;;IAGf,QAAQ;;IAER;QACI,WAAW;IACf;;IAEA;QACI,mBAAmB;QACnB,qBAAqB;QACrB,YAAY;IAChB;;IAEA;QACI,yDAA6C;QAC7C,kBAAkB;QAClB,YAAY;QACZ,MAAM;QACN,eAAe;QACf,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":[".task {\n\n    position: relative;\n    display: grid;\n    grid-template: 30px 30px / 1fr min-content;\n    align-items: center;\n    width: 70%;\n    padding: 4px;\n    border: 1px solid black;\n    border-radius: 10px;\n    cursor: pointer;\n\n\n    .title {}\n\n    .date {\n        color: gray;\n    }\n\n    .project {\n        border-radius: 20px;\n        background-color: red;\n        padding: 3px;\n    }\n\n    .trashCan {\n        background-image: url(../assets/trashcan.svg);\n        position: absolute;\n        right: -25px;\n        top: 0;\n        cursor: pointer;\n        width: 25px;\n        height: 25px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/frontend/projectListView.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/frontend/projectListView.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `aside{
    ul{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 10px;
        list-style: none;
        padding: 0;
        margin: 0;

        li{
            font-size: 30px;
        }
    }
}`, "",{"version":3,"sources":["webpack://./src/frontend/projectListView.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;QACb,wBAAwB;QACxB,mBAAmB;QACnB,SAAS;QACT,gBAAgB;QAChB,UAAU;QACV,SAAS;;QAET;YACI,eAAe;QACnB;IACJ;AACJ","sourcesContent":["aside{\n    ul{\n        display: flex;\n        flex-flow: column nowrap;\n        align-items: center;\n        gap: 10px;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n\n        li{\n            font-size: 30px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/frontend/App.css":
/*!******************************!*\
  !*** ./src/frontend/App.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/frontend/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/frontend/Dialog/Dialog.css":
/*!****************************************!*\
  !*** ./src/frontend/Dialog/Dialog.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/frontend/Dialog/Dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/frontend/Header/Header.css":
/*!****************************************!*\
  !*** ./src/frontend/Header/Header.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Header.css */ "./node_modules/css-loader/dist/cjs.js!./src/frontend/Header/Header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/frontend/TaskListView.css":
/*!***************************************!*\
  !*** ./src/frontend/TaskListView.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TaskListView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./TaskListView.css */ "./node_modules/css-loader/dist/cjs.js!./src/frontend/TaskListView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TaskListView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TaskListView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TaskListView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TaskListView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/frontend/TaskView.css":
/*!***********************************!*\
  !*** ./src/frontend/TaskView.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TaskView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./TaskView.css */ "./node_modules/css-loader/dist/cjs.js!./src/frontend/TaskView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TaskView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TaskView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TaskView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TaskView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/frontend/projectListView.css":
/*!******************************************!*\
  !*** ./src/frontend/projectListView.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectListView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projectListView.css */ "./node_modules/css-loader/dist/cjs.js!./src/frontend/projectListView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectListView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectListView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectListView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectListView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/frontend/App.ts":
/*!*****************************!*\
  !*** ./src/frontend/App.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = App;
__webpack_require__(/*! ./App.css */ "./src/frontend/App.css");
__webpack_require__(/*! ./Dialog/Dialog.css */ "./src/frontend/Dialog/Dialog.css");
const AddTaskModal_1 = __importDefault(__webpack_require__(/*! ./Dialog/AddTaskModal */ "./src/frontend/Dialog/AddTaskModal.ts"));
const Header_1 = __importDefault(__webpack_require__(/*! ./Header/Header */ "./src/frontend/Header/Header.ts"));
const projectListView_1 = __importDefault(__webpack_require__(/*! ./projectListView */ "./src/frontend/projectListView.ts"));
const TaskListView_1 = __importDefault(__webpack_require__(/*! ./TaskListView */ "./src/frontend/TaskListView.ts"));
const EditTaskModal_1 = __importDefault(__webpack_require__(/*! ./Dialog/EditTaskModal */ "./src/frontend/Dialog/EditTaskModal.ts"));
const AddProjectModal_1 = __importDefault(__webpack_require__(/*! ./Dialog/AddProjectModal */ "./src/frontend/Dialog/AddProjectModal.ts"));
const DeleteProjectModal_1 = __importDefault(__webpack_require__(/*! ./Dialog/DeleteProjectModal */ "./src/frontend/Dialog/DeleteProjectModal.ts"));
function App(toDoApp) {
    const model = toDoApp;
    const projectListView = (0, projectListView_1.default)();
    const taskListView = (0, TaskListView_1.default)();
    const headerView = (0, Header_1.default)();
    const addTaskModalView = (0, AddTaskModal_1.default)();
    const addProjectModalView = (0, AddProjectModal_1.default)();
    const editTaskModalView = (0, EditTaskModal_1.default)();
    const deleteProjectModalView = (0, DeleteProjectModal_1.default)();
    const onProjectListChanged = (projectList) => projectListView.render(projectList);
    const onTaskListChanged = (taskList, project) => taskListView.render(taskList, project);
    const handleOpenAddTaskModal = () => addTaskModalView.open();
    const handleOpenAddProjectModal = () => addProjectModalView.open();
    const handleGetProjectNamesOnModalOpen = () => model.getProjectNames().filter(project => project !== "Today");
    const handleAddTask = (newToDo) => model.addTask(newToDo);
    const handleChangeCurrentTasks = (projectName) => model.setCurrentTasks(projectName);
    const handleEditTask = (id, todo) => { model.editTask(id, todo); };
    const handleOpenEditTaskModal = (todo) => {
        editTaskModalView.open();
        editTaskModalView.bindEditTask(handleEditTask, todo.id);
        editTaskModalView.setInput(todo);
    };
    const handleDeleteTask = (id) => model.deleteTask(id);
    const handleAddProject = (projectName) => model.addProject(projectName);
    const handleDeleteProject = (projectName) => {
        model.moveToPreviousProject(projectName);
        model.deleteProject(projectName);
        model.updateTasksForDeletedProject(projectName);
    };
    const handleOpenDeleteProjectModal = () => deleteProjectModalView.open();
    const initialize = () => {
        model.bindOnProjectListChanged(onProjectListChanged);
        model.bindOnTaskListChanged(onTaskListChanged);
        headerView.bindHeaderButtonHandlers({ handleOpenAddTaskModal, handleOpenDeleteProjectModal, handleOpenAddProjectModal });
        addTaskModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen);
        editTaskModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen);
        addTaskModalView.bindAddTask(handleAddTask);
        addProjectModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen);
        addProjectModalView.bindAddProject(handleAddProject);
        deleteProjectModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen);
        deleteProjectModalView.bindDeleteProject(handleDeleteProject);
        projectListView.bindChangeCurrentTasks(handleChangeCurrentTasks);
        taskListView.bindOpenEditTask(handleOpenEditTaskModal);
        taskListView.bindDeleteTask(handleDeleteTask);
        model.initialize();
        // addProjectModalView.open()
    };
    return { initialize };
}


/***/ }),

/***/ "./src/frontend/Dialog/AddProjectModal.ts":
/*!************************************************!*\
  !*** ./src/frontend/Dialog/AddProjectModal.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dialog_1 = __importDefault(__webpack_require__(/*! ./Dialog */ "./src/frontend/Dialog/Dialog.ts"));
const createAddProjectModal = () => {
    let currentProjects = [];
    const dialog = Dialog_1.default.getDialog();
    const form = document.createElement('form');
    let addProjectButton;
    let cancelButton;
    form.className = 'projectModal modal';
    const titleLabel = document.createElement('label');
    titleLabel.className = 'projectNameLabel';
    titleLabel.textContent = "Type name of new project";
    titleLabel.htmlFor = "projectNameInput";
    form.appendChild(titleLabel);
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'projectNameInputWrapper';
    form.appendChild(inputWrapper);
    const projectNameInput = document.createElement('input');
    projectNameInput.id = 'projectNameInput';
    inputWrapper.appendChild(projectNameInput);
    const warningText = document.createElement('p');
    warningText.className = 'warningText';
    inputWrapper.appendChild(warningText);
    addProjectButton = document.createElement('button');
    addProjectButton.className = 'addProjectButton';
    addProjectButton.textContent = 'Add';
    addProjectButton.type = "button";
    form.appendChild(addProjectButton);
    cancelButton = document.createElement('button');
    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancel';
    cancelButton.type = "button";
    form.appendChild(cancelButton);
    const open = () => {
        if (getProjectNames === null)
            return;
        currentProjects = getProjectNames();
        dialog.replaceChildren(form);
        dialog.showModal();
    };
    const close = () => {
        clearInputs();
        Dialog_1.default.closeDialog();
    };
    cancelButton.addEventListener('click', close);
    const clearInputs = () => {
        currentProjects = [];
        projectNameInput.value = '';
    };
    const doesProjectNameExist = (userInput) => {
        if (getProjectNames === null)
            return;
        return getProjectNames().some(projectName => projectName.toLowerCase() === userInput.toLowerCase());
    };
    const showError = () => {
        warningText.style.display = "block";
        warningText.textContent = "Project name already exist!";
        setTimeout(() => {
            warningText.style.display = "none";
        }, 2000);
    };
    let getProjectNames = null;
    const bindGetProjectNames = (callBack) => getProjectNames = callBack;
    const bindAddProject = (handler) => {
        addProjectButton.addEventListener('click', () => {
            const projectName = getInput();
            if (doesProjectNameExist(projectName)) {
                showError();
                return;
            }
            handler(projectName);
            close();
        });
    };
    const getInput = () => projectNameInput.value;
    return { open, bindGetProjectNames, bindAddProject };
};
exports["default"] = createAddProjectModal;


/***/ }),

/***/ "./src/frontend/Dialog/AddTaskModal.ts":
/*!*********************************************!*\
  !*** ./src/frontend/Dialog/AddTaskModal.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dialog_1 = __importDefault(__webpack_require__(/*! ./Dialog */ "./src/frontend/Dialog/Dialog.ts"));
const PriorityBox_1 = __importDefault(__webpack_require__(/*! ./PriorityBox */ "./src/frontend/Dialog/PriorityBox.ts"));
const ProjectBox_1 = __importDefault(__webpack_require__(/*! ./ProjectBox */ "./src/frontend/Dialog/ProjectBox.ts"));
const createAddTaskModal = () => {
    const dialog = Dialog_1.default.getDialog();
    const form = document.createElement('form');
    let addTaskButton;
    let cancelButton;
    form.className = 'addModal modal';
    const titleLabel = document.createElement('label');
    titleLabel.className = 'titleLabel';
    titleLabel.textContent = "Title";
    form.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    titleInput.id = 'titleInput';
    titleLabel.appendChild(titleInput);
    const descriptLabel = document.createElement('label');
    descriptLabel.className = 'descriptLabel';
    descriptLabel.textContent = "Description";
    form.appendChild(descriptLabel);
    const descripText = document.createElement('textarea');
    descripText.id = 'descriptTextArea';
    descriptLabel.appendChild(descripText);
    const dateContainer = document.createElement('div');
    dateContainer.className = 'dateContainer';
    form.appendChild(dateContainer);
    const dateLabel = document.createElement('label');
    dateLabel.className = 'dateLabel';
    dateLabel.textContent = "Date";
    dateContainer.appendChild(dateLabel);
    const dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.className = 'dateInput';
    dateLabel.appendChild(dateInput);
    const priorityBox = (0, PriorityBox_1.default)();
    form.appendChild(priorityBox.priorityDiv);
    const projectBox = (0, ProjectBox_1.default)();
    form.appendChild(projectBox.projectBox);
    addTaskButton = document.createElement('button');
    addTaskButton.className = 'addTaskButton';
    addTaskButton.textContent = 'Add';
    addTaskButton.type = "button";
    form.appendChild(addTaskButton);
    cancelButton = document.createElement('button');
    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancel';
    cancelButton.type = "button";
    form.appendChild(cancelButton);
    const open = () => {
        if (getProjectNames === null)
            return;
        const projectNames = getProjectNames();
        dialog.replaceChildren(form);
        projectBox.setProjectNamesOnOpen(projectNames);
        dialog.showModal();
    };
    const close = () => {
        clearInputs();
        Dialog_1.default.closeDialog();
    };
    cancelButton.addEventListener('click', close);
    const clearInputs = () => {
        titleInput.value = '';
        descripText.value = '';
        dateInput.value = '';
        priorityBox.resetPriority();
    };
    let getProjectNames = null;
    const bindGetProjectNames = (callBack) => getProjectNames = callBack;
    const bindAddTask = (handler) => {
        addTaskButton.addEventListener('click', () => {
            const newToDo = getInput();
            handler(newToDo);
            close();
        });
    };
    const getInput = () => {
        const title = titleInput.value;
        const description = descripText.value;
        const dueDate = dateInput.value || new Date().toISOString().slice(0, 10);
        const project = projectBox.getSelectedProjectName();
        const priority = priorityBox.getPriority();
        if (!description)
            return { title, dueDate, project, priority };
        return { title, description, dueDate, project, priority };
    };
    return { open, close, bindGetProjectNames, bindAddTask };
};
exports["default"] = createAddTaskModal;


/***/ }),

/***/ "./src/frontend/Dialog/DeleteProjectModal.ts":
/*!***************************************************!*\
  !*** ./src/frontend/Dialog/DeleteProjectModal.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dialog_1 = __importDefault(__webpack_require__(/*! ./Dialog */ "./src/frontend/Dialog/Dialog.ts"));
const createDeleteProjectModal = () => {
    let currentProjects = [];
    const dialog = Dialog_1.default.getDialog();
    const form = document.createElement('form');
    let deleteProjectButton;
    let cancelButton;
    form.className = 'ProjectModal modal';
    const titleLabel = document.createElement('label');
    titleLabel.className = 'projectNameLabel';
    titleLabel.textContent = "Choose a project to delete";
    titleLabel.htmlFor = "projectSelect";
    form.appendChild(titleLabel);
    const projectSelect = document.createElement('select');
    projectSelect.id = 'projectSelect';
    form.appendChild(projectSelect);
    deleteProjectButton = document.createElement('button');
    deleteProjectButton.className = 'deleteProjectButton';
    deleteProjectButton.textContent = 'Delete';
    deleteProjectButton.type = "button";
    form.appendChild(deleteProjectButton);
    cancelButton = document.createElement('button');
    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancel';
    cancelButton.type = "button";
    form.appendChild(cancelButton);
    const open = () => {
        if (getProjectNames === null)
            return;
        currentProjects = getProjectNames();
        while (projectSelect.childElementCount) {
            projectSelect.removeChild(projectSelect.firstChild);
        }
        currentProjects.forEach(project => {
            if (project !== "Inbox" && project !== "Today") {
                const option = document.createElement('option');
                option.className = 'projectSelectOption';
                option.textContent = project;
                projectSelect.appendChild(option);
            }
        });
        dialog.replaceChildren(form);
        dialog.showModal();
    };
    const close = () => {
        clearInputs();
        Dialog_1.default.closeDialog();
    };
    cancelButton.addEventListener('click', close);
    const clearInputs = () => {
        currentProjects = [];
        while (projectSelect.firstChild) {
            projectSelect.removeChild(projectSelect.firstChild);
        }
    };
    let getProjectNames = null;
    const bindGetProjectNames = (callBack) => getProjectNames = callBack;
    const bindDeleteProject = (handler) => {
        deleteProjectButton.addEventListener('click', () => {
            const projectName = getInput();
            handler(projectName);
            close();
        });
    };
    const getInput = () => projectSelect.value;
    return { open, bindGetProjectNames, bindDeleteProject };
};
exports["default"] = createDeleteProjectModal;


/***/ }),

/***/ "./src/frontend/Dialog/Dialog.ts":
/*!***************************************!*\
  !*** ./src/frontend/Dialog/Dialog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const dialog = document.querySelector("dialog");
const closeDialog = () => {
    dialog.close();
};
const getDialog = () => dialog;
dialog.addEventListener('click', (e) => {
    if (e.target === dialog)
        closeDialog();
});
const dialogManager = {
    closeDialog, getDialog
};
exports["default"] = dialogManager;


/***/ }),

/***/ "./src/frontend/Dialog/EditTaskModal.ts":
/*!**********************************************!*\
  !*** ./src/frontend/Dialog/EditTaskModal.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dialog_1 = __importDefault(__webpack_require__(/*! ./Dialog */ "./src/frontend/Dialog/Dialog.ts"));
const PriorityBox_1 = __importDefault(__webpack_require__(/*! ./PriorityBox */ "./src/frontend/Dialog/PriorityBox.ts"));
const ProjectBox_1 = __importDefault(__webpack_require__(/*! ./ProjectBox */ "./src/frontend/Dialog/ProjectBox.ts"));
const createEditTaskModal = () => {
    const dialog = Dialog_1.default.getDialog();
    const form = document.createElement('form');
    let editTaskButton;
    let cancelButton;
    form.className = 'editTaskModal modal';
    const titleLabel = document.createElement('label');
    titleLabel.className = 'titleLabel';
    titleLabel.textContent = "Title";
    form.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    titleInput.id = 'titleInput';
    titleLabel.appendChild(titleInput);
    const descriptLabel = document.createElement('label');
    descriptLabel.className = 'descriptLabel';
    descriptLabel.textContent = "Description";
    form.appendChild(descriptLabel);
    const descripText = document.createElement('textarea');
    descripText.id = 'descriptTextArea';
    descriptLabel.appendChild(descripText);
    const dateContainer = document.createElement('div');
    dateContainer.className = 'dateContainer';
    form.appendChild(dateContainer);
    const dateLabel = document.createElement('label');
    dateLabel.className = 'dateLabel';
    dateLabel.textContent = "Date";
    dateContainer.appendChild(dateLabel);
    const dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.className = 'dateInput';
    dateLabel.appendChild(dateInput);
    const priorityBox = (0, PriorityBox_1.default)();
    form.appendChild(priorityBox.priorityDiv);
    const projectBox = (0, ProjectBox_1.default)();
    form.appendChild(projectBox.projectBox);
    editTaskButton = document.createElement('button');
    editTaskButton.className = 'addTaskButton';
    editTaskButton.textContent = 'Edit';
    editTaskButton.type = "button";
    form.appendChild(editTaskButton);
    cancelButton = document.createElement('button');
    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancel';
    cancelButton.type = "button";
    form.appendChild(cancelButton);
    const open = () => {
        if (getProjectNames === null)
            return;
        const projectNames = getProjectNames();
        dialog.replaceChildren(form);
        projectBox.setProjectNamesOnOpen(projectNames);
        dialog.showModal();
    };
    const close = () => {
        clearInputs();
        Dialog_1.default.closeDialog();
    };
    cancelButton.addEventListener('click', close);
    const clearInputs = () => {
        titleInput.value = '';
        descripText.value = '';
        dateInput.value = '';
        priorityBox.resetPriority();
    };
    let getProjectNames = null;
    const bindGetProjectNames = (callBack) => getProjectNames = callBack;
    let editTask = null;
    const bindEditTask = (handler, id) => {
        if (editTask)
            editTaskButton.removeEventListener('click', editTask);
        editTask = () => {
            const newToDo = getInput();
            handler(id, newToDo);
            close();
        };
        editTaskButton.addEventListener('click', editTask);
    };
    const setInput = (todo) => {
        titleInput.value = todo.title;
        if (todo.description)
            descripText.value = todo.description;
        dateInput.value = todo.dueDate;
        priorityBox.setPriority(todo.priority);
        projectBox.setSelectedProjectNameOnOpen(todo.project);
    };
    const getInput = () => {
        const title = titleInput.value;
        const description = descripText.value;
        const dueDate = dateInput.value;
        const project = projectBox.getSelectedProjectName();
        const priority = priorityBox.getPriority();
        if (!description)
            return { title, dueDate, project, priority };
        return { title, description, dueDate, project, priority };
    };
    return { open, close, bindGetProjectNames, bindEditTask, setInput };
};
exports["default"] = createEditTaskModal;


/***/ }),

/***/ "./src/frontend/Dialog/PriorityBox.ts":
/*!********************************************!*\
  !*** ./src/frontend/Dialog/PriorityBox.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
const createPriorityBox = () => {
    const priorityDiv = document.createElement('div');
    priorityDiv.className = 'priorityDiv';
    const priorityLabel = document.createElement('label');
    priorityLabel.className = 'priorityLabel';
    priorityLabel.textContent = 'Priority';
    priorityDiv.appendChild(priorityLabel);
    const priorityText = document.createElement('p');
    priorityText.className = 'priorityText';
    priorityText.textContent = "None";
    priorityDiv.appendChild(priorityText);
    const priorityLeftButton = document.createElement('button');
    priorityLeftButton.className = 'priorityLeftButton';
    priorityLeftButton.type = "button";
    priorityDiv.appendChild(priorityLeftButton);
    const priorityRightButton = document.createElement('button');
    priorityRightButton.className = 'priorityRightButton';
    priorityRightButton.type = "button";
    priorityDiv.appendChild(priorityRightButton);
    const increasePriority = () => {
        const priority = priorityText.textContent;
        priorityText.textContent = priority === "None" ? "Low" : "High";
    };
    const decreasePriority = () => {
        const priority = priorityText.textContent;
        priorityText.textContent = priority === "High" ? "Low" : "None";
    };
    const getPriority = () => priorityText.textContent === "None" ?
        __1.Priority.None : priorityText.textContent === "Low" ?
        __1.Priority.Low : __1.Priority.High;
    const resetPriority = () => { priorityText.textContent = "None"; };
    const setPriority = (priority) => {
        priority === __1.Priority.None ? priorityText.textContent = "None" :
            priority === __1.Priority.Low ? priorityText.textContent = "Low" :
                priorityText.textContent = "High";
    };
    priorityLeftButton.addEventListener("click", decreasePriority);
    priorityRightButton.addEventListener("click", increasePriority);
    return { priorityDiv, getPriority, resetPriority, setPriority };
};
exports["default"] = createPriorityBox;


/***/ }),

/***/ "./src/frontend/Dialog/ProjectBox.ts":
/*!*******************************************!*\
  !*** ./src/frontend/Dialog/ProjectBox.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const createProjectBox = () => {
    let projectBox = document.createElement('div');
    projectBox.className = 'projectBox';
    const projectLabel = document.createElement('label');
    projectLabel.className = 'projectLabel';
    projectLabel.textContent = "Project";
    projectBox.appendChild(projectLabel);
    const projectSelect = document.createElement('select');
    projectSelect.id = 'projectSelect';
    projectLabel.appendChild(projectSelect);
    let setProjectNamesOnOpen = (projectNames) => {
        while (projectSelect.childElementCount) {
            projectSelect.removeChild(projectSelect.firstChild);
        }
        projectNames.forEach(projectName => {
            const option = document.createElement('option');
            option.value = projectName;
            option.textContent = projectName;
            projectSelect.appendChild(option);
        });
    };
    let setSelectedProjectNameOnOpen = (projectName) => {
        projectSelect.value = projectName;
    };
    const getSelectedProjectName = () => projectSelect.value;
    return { projectBox, setProjectNamesOnOpen, getSelectedProjectName, setSelectedProjectNameOnOpen };
};
exports["default"] = createProjectBox;


/***/ }),

/***/ "./src/frontend/Header/Header.ts":
/*!***************************************!*\
  !*** ./src/frontend/Header/Header.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./Header.css */ "./src/frontend/Header/Header.css");
const createHeader = () => {
    const header = document.querySelector('header');
    const buttons = Array.from(header.querySelectorAll('button'));
    const bindHeaderButtonHandlers = (handlers) => {
        const { handleOpenAddProjectModal, handleOpenDeleteProjectModal, handleOpenAddTaskModal } = handlers;
        buttons[0].addEventListener('click', handleOpenAddTaskModal);
        buttons[1].addEventListener('click', handleOpenAddProjectModal);
        buttons[2].addEventListener('click', handleOpenDeleteProjectModal);
    };
    return { bindHeaderButtonHandlers };
};
exports["default"] = createHeader;


/***/ }),

/***/ "./src/frontend/TaskListView.ts":
/*!**************************************!*\
  !*** ./src/frontend/TaskListView.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TaskView_1 = __importDefault(__webpack_require__(/*! ./TaskView */ "./src/frontend/TaskView.ts"));
__webpack_require__(/*! ./TaskListView.css */ "./src/frontend/TaskListView.css");
const createTaskListView = () => {
    const projectHeading = document.querySelector('.projectHeading');
    const taskListView = document.querySelector('.taskListView');
    const render = (tasks, projectName) => {
        projectHeading.textContent = projectName;
        while (taskListView.firstChild) {
            taskListView.removeChild(taskListView.firstChild);
        }
        tasks.forEach(task => {
            (0, TaskView_1.default)(task, () => { if (openEditTask)
                openEditTask(task); }, () => { if (deleteTask)
                deleteTask(task.id); });
        });
    };
    let openEditTask = null;
    const bindOpenEditTask = (handler) => { openEditTask = handler; };
    let deleteTask = null;
    const bindDeleteTask = (handler) => { deleteTask = handler; };
    return { bindOpenEditTask, render, bindDeleteTask };
};
exports["default"] = createTaskListView;


/***/ }),

/***/ "./src/frontend/TaskView.ts":
/*!**********************************!*\
  !*** ./src/frontend/TaskView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const __1 = __webpack_require__(/*! .. */ "./src/index.ts");
__webpack_require__(/*! ./TaskView.css */ "./src/frontend/TaskView.css");
const createTaskView = (toDo, callBack, handleDeleteTask) => {
    const taskListView = document.querySelector('.taskListView');
    const task = document.createElement('div');
    task.className = 'task';
    task.style.border = toDo.priority === __1.Priority.High ? "3px solid red" :
        toDo.priority === __1.Priority.Low ? "2px solid orange" : "1px solid black";
    task.addEventListener('click', (e) => {
        if (e.currentTarget === task)
            callBack(toDo);
    });
    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = toDo.title;
    const project = document.createElement('p');
    project.className = 'project';
    project.textContent = toDo.project;
    const date = document.createElement('p');
    date.className = 'date';
    date.textContent = new Date(toDo.dueDate).toDateString();
    const trashCan = document.createElement('div');
    trashCan.addEventListener('click', (e) => {
        if (e.target === trashCan) {
            e.stopPropagation();
            handleDeleteTask(toDo.id);
        }
    });
    trashCan.className = 'trashCan';
    task.appendChild(title);
    task.appendChild(project);
    task.appendChild(date);
    task.appendChild(trashCan);
    taskListView.appendChild(task);
};
exports["default"] = createTaskView;


/***/ }),

/***/ "./src/frontend/projectListView.ts":
/*!*****************************************!*\
  !*** ./src/frontend/projectListView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./projectListView.css */ "./src/frontend/projectListView.css");
const createProjectListView = () => {
    const projectList = document.querySelector("aside ul");
    const projectListNames = [];
    const render = (projects) => {
        while (projectList.firstChild) {
            projectList.removeChild(projectList.firstChild);
        }
        projects.forEach(project => {
            const li = document.createElement('li');
            projectListNames.push(li);
            li.textContent = project;
            li.addEventListener("click", () => {
                if (changeCurrentTasks)
                    changeCurrentTasks(project);
            });
            projectList.appendChild(li);
        });
    };
    const bindChangeCurrentTasks = (handler) => { changeCurrentTasks = handler; };
    let changeCurrentTasks = null;
    return { render, bindChangeCurrentTasks };
};
exports["default"] = createProjectListView;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Priority = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const App_1 = __importDefault(__webpack_require__(/*! ./frontend/App */ "./src/frontend/App.ts"));
(0, uuid_1.v4)(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
var Priority;
(function (Priority) {
    Priority[Priority["None"] = 0] = "None";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["High"] = 2] = "High";
})(Priority || (exports.Priority = Priority = {}));
const taskSearcher = (() => {
    const getTasksByProject = (projectName, tasks) => {
        return tasks.filter(task => task.project === projectName);
    };
    const getTasksByToday = (tasks) => {
        const today = new Date().toISOString().slice(0, 10);
        return tasks.filter(task => task.dueDate === today);
    };
    const getTasksByInbox = (tasks) => {
        return tasks.filter(task => task.project === "inbox");
    };
    return { getTasksByProject, getTasksByInbox, getTasksByToday };
})();
const toDoApp = ((ts) => {
    let tasks = [];
    let currentTasks = [];
    let projects = ['Inbox', 'Today', 'Ice', 'School'];
    let currentProject;
    const taskSearcher = ts;
    const addProject = (projectName) => {
        if (isProjectNameUnique(projectName))
            projects = [...projects, projectName];
        if (onProjectListChanged !== null) {
            const projectList = getProjectNames();
            onProjectListChanged(projectList);
        }
    };
    const isProjectNameUnique = (projectName) => {
        return projects.some(project => project !== projectName);
    };
    const deleteProject = (projectName) => {
        if (projectName === "Inbox" || projectName === "Today")
            return;
        let newProjectList = [];
        projects.forEach(project => {
            if (projectName !== project)
                newProjectList.push(project);
        });
        projects = [...newProjectList];
    };
    const addTask = (todo) => {
        const id = (0, uuid_1.v4)();
        tasks.push(Object.assign(Object.assign({}, todo), { id }));
        setCurrentTasks(getCurrentProject());
    };
    const editTask = (id, todo) => {
        const newTasks = tasks.map(task => {
            if (id === task.id)
                return Object.assign(Object.assign({}, todo), { id });
            else
                return task;
        });
        tasks = [...newTasks];
        setCurrentTasks(getCurrentProject());
    };
    const deleteTask = (id) => {
        let newTasks = [];
        tasks.forEach(task => {
            if (id !== task.id)
                newTasks.push(task);
        });
        tasks = [...newTasks];
        setCurrentTasks(getCurrentProject());
    };
    const getAllTasks = () => tasks;
    const getProjectNames = () => projects;
    const getTasksByProject = (projectName) => {
        const tasks = getAllTasks();
        return tasks.filter(task => task.project === projectName);
    };
    const updateTasksForDeletedProject = (projectName) => {
        tasks = tasks.map(task => {
            if (task.project === projectName)
                return Object.assign(Object.assign({}, task), { project: "Inbox" });
            else
                return task;
        });
        if (onTaskListChanged)
            onTaskListChanged(getTasksByProject(getCurrentProject()), getCurrentProject());
        if (onProjectListChanged)
            onProjectListChanged(getProjectNames());
    };
    const moveToPreviousProject = (currentProject) => {
        if (!isNotCurrentProject(currentProject))
            return;
        const projects = getProjectNames();
        const index = projects.findIndex(project => project === currentProject);
        const previousProject = projects[index - 1];
        if (previousProject === "Today")
            setCurrentProject("Today");
        else
            setCurrentProject(previousProject);
    };
    const isNotCurrentProject = (currentProject) => currentProject === getCurrentProject();
    const getCurrentTasks = () => currentTasks;
    const getCurrentProject = () => currentProject;
    const isProjectThere = (projectName) => {
        return projects.some(project => project === projectName);
    };
    const setCurrentProject = (projectName) => {
        if (isProjectThere(projectName))
            currentProject = projectName;
        if (onProjectListChanged !== null) {
            const projectList = getProjectNames();
            onProjectListChanged(projectList);
        }
    };
    const isNewCurrentProjectToday = (projectName) => projectName === "Today";
    const setCurrentTasksByToday = () => {
        currentTasks = tasks.filter(task => task.dueDate === new Date().toISOString().slice(0, 10));
    };
    const setCurrentTasks = (projectName) => {
        setCurrentProject(projectName);
        if (isNewCurrentProjectToday(projectName))
            setCurrentTasksByToday(); //*DONE
        else
            currentTasks = tasks.filter(task => task.project === projectName);
        if (onTaskListChanged !== null) {
            const taskList = getCurrentTasks();
            const project = getCurrentProject();
            onTaskListChanged(taskList, project);
        }
    };
    let onProjectListChanged = null;
    const bindOnProjectListChanged = (callback) => { onProjectListChanged = callback; };
    let onTaskListChanged = null;
    const bindOnTaskListChanged = (callback) => { onTaskListChanged = callback; };
    const initialize = () => {
        tasks.push({ title: "Do the dishes", description: "Do it soon!", dueDate: new Date().toISOString().slice(0, 10), priority: Priority.None, project: "Inbox", id: (0, uuid_1.v4)() });
        tasks.push({ title: "Do the dishes now", dueDate: "2024-08-10", priority: Priority.None, project: "Inbox", id: (0, uuid_1.v4)() });
        tasks.push({ title: "Do the dishes yesterday", dueDate: "2025-12-11", priority: Priority.None, project: "Inbox", id: (0, uuid_1.v4)() });
        tasks.push({ title: "Do the dishes today!", dueDate: "2024-02-27", priority: Priority.High, project: "School", id: (0, uuid_1.v4)() });
        tasks.push({ title: "Do the dishes today!", dueDate: "2024-05-02", priority: Priority.Low, project: "Ice", id: (0, uuid_1.v4)() });
        setCurrentProject("Inbox");
        setCurrentTasks("Inbox");
        // console.log(getCurrentProject())
        // console.log(getCurrentTasks())
    };
    return {
        addProject, deleteProject, initialize, getProjectNames, getCurrentProject, getCurrentTasks,
        editTask, addTask, deleteTask, getTasksByProject, setCurrentProject,
        setCurrentTasks, bindOnProjectListChanged, bindOnTaskListChanged, updateTasksForDeletedProject,
        moveToPreviousProject
    };
})(taskSearcher);
const app = (0, App_1.default)(toDoApp);
app.initialize();
// toDoApp.initialize()


/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MAX", ({
  enumerable: true,
  get: function get() {
    return _max.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v1ToV6", ({
  enumerable: true,
  get: function get() {
    return _v1ToV.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "v6", ({
  enumerable: true,
  get: function get() {
    return _v5.default;
  }
}));
Object.defineProperty(exports, "v6ToV1", ({
  enumerable: true,
  get: function get() {
    return _v6ToV.default;
  }
}));
Object.defineProperty(exports, "v7", ({
  enumerable: true,
  get: function get() {
    return _v6.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));
var _max = _interopRequireDefault(__webpack_require__(/*! ./max.js */ "./node_modules/uuid/dist/commonjs-browser/max.js"));
var _nil = _interopRequireDefault(__webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/commonjs-browser/nil.js"));
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
var _stringify = _interopRequireDefault(__webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js"));
var _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/commonjs-browser/v1.js"));
var _v1ToV = _interopRequireDefault(__webpack_require__(/*! ./v1ToV6.js */ "./node_modules/uuid/dist/commonjs-browser/v1ToV6.js"));
var _v2 = _interopRequireDefault(__webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/commonjs-browser/v3.js"));
var _v3 = _interopRequireDefault(__webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/commonjs-browser/v4.js"));
var _v4 = _interopRequireDefault(__webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/commonjs-browser/v5.js"));
var _v5 = _interopRequireDefault(__webpack_require__(/*! ./v6.js */ "./node_modules/uuid/dist/commonjs-browser/v6.js"));
var _v6ToV = _interopRequireDefault(__webpack_require__(/*! ./v6ToV1.js */ "./node_modules/uuid/dist/commonjs-browser/v6ToV1.js"));
var _v6 = _interopRequireDefault(__webpack_require__(/*! ./v7.js */ "./node_modules/uuid/dist/commonjs-browser/v7.js"));
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
var _version = _interopRequireDefault(__webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/commonjs-browser/version.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/max.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/max.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = 'ffffffff-ffff-ffff-ffff-ffffffffffff';

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/md5.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/md5.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);
    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}

/*
 * Convert an array of little-endian words to an array of bytes
 */
function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';
  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }
  return output;
}

/**
 * Calculate output length with padding and bit length
 */
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */
function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}

/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));
  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }
  return output;
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var _default = exports["default"] = md5;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/native.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/native.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = exports["default"] = {
  randomUUID
};

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/nil.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/nil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = '00000000-0000-0000-0000-000000000000';

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/parse.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/parse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }
  var v;
  var arr = new Uint8Array(16);

  // Parse ########-....-....-....-............
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff;

  // Parse ........-####-....-....-............
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff;

  // Parse ........-....-####-....-............
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff;

  // Parse ........-....-....-####-............
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff;

  // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}
var _default = exports["default"] = parse;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/regex.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/regex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/rng.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/rng.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/sha1.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/sha1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];
    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);
    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }
    M[_i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);
    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }
    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }
    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];
    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}
var _default = exports["default"] = sha1;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/stringify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
var _default = exports["default"] = stringify;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node;
  var clockseq = options.clockseq;

  // v1 only: Use cached `node` and `clockseq` values
  if (!options._v6) {
    if (!node) {
      node = _nodeId;
    }
    if (clockseq == null) {
      clockseq = _clockseq;
    }
  }

  // Handle cases where we need entropy.  We do this lazily to minimize issues
  // related to insufficient system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng.default)();

    // Randomize node
    if (node == null) {
      node = [seedBytes[0], seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];

      // v1 only: cache node value for reuse
      if (!_nodeId && !options._v6) {
        // per RFC4122 4.5: Set MAC multicast bit (v1 only)
        node[0] |= 0x01; // Set multicast bit

        _nodeId = node;
      }
    }

    // Randomize clockseq
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
      if (_clockseq === undefined && !options._v6) {
        _clockseq = clockseq;
      }
    }
  }

  // v1 & v6 timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so time is
  // handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : Date.now();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || (0, _stringify.unsafeStringify)(b);
}
var _default = exports["default"] = v1;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1ToV6.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1ToV6.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = v1ToV6;
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Convert a v1 UUID to a v6 UUID
 *
 * @param {string|Uint8Array} uuid - The v1 UUID to convert to v6
 * @returns {string|Uint8Array} The v6 UUID as the same type as the `uuid` arg
 * (string or Uint8Array)
 */
function v1ToV6(uuid) {
  var v1Bytes = typeof uuid === 'string' ? (0, _parse.default)(uuid) : uuid;
  var v6Bytes = _v1ToV6(v1Bytes);
  return typeof uuid === 'string' ? (0, _stringify.unsafeStringify)(v6Bytes) : v6Bytes;
}

// Do the field transformation needed for v1 -> v6
function _v1ToV6(v1Bytes, randomize = false) {
  return Uint8Array.of((v1Bytes[6] & 0x0f) << 4 | v1Bytes[7] >> 4 & 0x0f, (v1Bytes[7] & 0x0f) << 4 | (v1Bytes[4] & 0xf0) >> 4, (v1Bytes[4] & 0x0f) << 4 | (v1Bytes[5] & 0xf0) >> 4, (v1Bytes[5] & 0x0f) << 4 | (v1Bytes[0] & 0xf0) >> 4, (v1Bytes[0] & 0x0f) << 4 | (v1Bytes[1] & 0xf0) >> 4, (v1Bytes[1] & 0x0f) << 4 | (v1Bytes[2] & 0xf0) >> 4, 0x60 | v1Bytes[2] & 0x0f, v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v3.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));
var _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/commonjs-browser/md5.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = exports["default"] = v3;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v35.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v35.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];
  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = exports.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = exports.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }
    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    }

    // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`
    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return (0, _stringify.unsafeStringify)(bytes);
  }

  // Function#name is not settable on some platforms (#270)
  try {
    generateUUID.name = name;
  } catch (err) {}

  // For CommonJS default export support
  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v4.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _native = _interopRequireDefault(__webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/commonjs-browser/native.js"));
var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng.default)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0, _stringify.unsafeStringify)(rnds);
}
var _default = exports["default"] = v4;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v5.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));
var _sha = _interopRequireDefault(__webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/commonjs-browser/sha1.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = exports["default"] = v5;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v6.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v6.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = v6;
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
var _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/commonjs-browser/v1.js"));
var _v1ToV = _interopRequireDefault(__webpack_require__(/*! ./v1ToV6.js */ "./node_modules/uuid/dist/commonjs-browser/v1ToV6.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 *
 * @param {object} options
 * @param {Uint8Array=} buf
 * @param {number=} offset
 * @returns
 */
function v6(options = {}, buf, offset = 0) {
  // v6 is v1 with different field layout, so we start with a v1 UUID, albeit
  // with slightly different behavior around how the clock_seq and node fields
  // are randomized, which is why we call v1 with _v6: true.
  var bytes = (0, _v.default)(_objectSpread(_objectSpread({}, options), {}, {
    _v6: true
  }), new Uint8Array(16));

  // Reorder the fields to v6 layout.
  bytes = (0, _v1ToV.default)(bytes);

  // Return as a byte array if requested
  if (buf) {
    for (var i = 0; i < 16; i++) {
      buf[offset + i] = bytes[i];
    }
    return buf;
  }
  return (0, _stringify.unsafeStringify)(bytes);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v6ToV1.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v6ToV1.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = v6ToV1;
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Convert a v6 UUID to a v1 UUID
 *
 * @param {string|Uint8Array} uuid - The v6 UUID to convert to v6
 * @returns {string|Uint8Array} The v1 UUID as the same type as the `uuid` arg
 * (string or Uint8Array)
 */
function v6ToV1(uuid) {
  var v6Bytes = typeof uuid === 'string' ? (0, _parse.default)(uuid) : uuid;
  var v1Bytes = _v6ToV1(v6Bytes);
  return typeof uuid === 'string' ? (0, _stringify.unsafeStringify)(v1Bytes) : v1Bytes;
}

// Do the field transformation needed for v6 -> v1
function _v6ToV1(v6Bytes) {
  return Uint8Array.of((v6Bytes[3] & 0x0f) << 4 | v6Bytes[4] >> 4 & 0x0f, (v6Bytes[4] & 0x0f) << 4 | (v6Bytes[5] & 0xf0) >> 4, (v6Bytes[5] & 0x0f) << 4 | v6Bytes[6] & 0x0f, v6Bytes[7], (v6Bytes[1] & 0x0f) << 4 | (v6Bytes[2] & 0xf0) >> 4, (v6Bytes[2] & 0x0f) << 4 | (v6Bytes[3] & 0xf0) >> 4, 0x10 | (v6Bytes[0] & 0xf0) >> 4, (v6Bytes[0] & 0x0f) << 4 | (v6Bytes[1] & 0xf0) >> 4, v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v7.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v7.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */

var _seqLow = null;
var _seqHigh = null;
var _msecs = 0;
function v7(options, buf, offset) {
  options = options || {};

  // initialize buffer and pointer
  var i = buf && offset || 0;
  var b = buf || new Uint8Array(16);

  // rnds is Uint8Array(16) filled with random bytes
  var rnds = options.random || (options.rng || _rng.default)();

  // milliseconds since unix epoch, 1970-01-01 00:00
  var msecs = options.msecs !== undefined ? options.msecs : Date.now();

  // seq is user provided 31 bit counter
  var seq = options.seq !== undefined ? options.seq : null;

  // initialize local seq high/low parts
  var seqHigh = _seqHigh;
  var seqLow = _seqLow;

  // check if clock has advanced and user has not provided msecs
  if (msecs > _msecs && options.msecs === undefined) {
    _msecs = msecs;

    // unless user provided seq, reset seq parts
    if (seq !== null) {
      seqHigh = null;
      seqLow = null;
    }
  }

  // if we have a user provided seq
  if (seq !== null) {
    // trim provided seq to 31 bits of value, avoiding overflow
    if (seq > 0x7fffffff) {
      seq = 0x7fffffff;
    }

    // split provided seq into high/low parts
    seqHigh = seq >>> 19 & 0xfff;
    seqLow = seq & 0x7ffff;
  }

  // randomly initialize seq
  if (seqHigh === null || seqLow === null) {
    seqHigh = rnds[6] & 0x7f;
    seqHigh = seqHigh << 8 | rnds[7];
    seqLow = rnds[8] & 0x3f; // pad for var
    seqLow = seqLow << 8 | rnds[9];
    seqLow = seqLow << 5 | rnds[10] >>> 3;
  }

  // increment seq if within msecs window
  if (msecs + 10000 > _msecs && seq === null) {
    if (++seqLow > 0x7ffff) {
      seqLow = 0;
      if (++seqHigh > 0xfff) {
        seqHigh = 0;

        // increment internal _msecs. this allows us to continue incrementing
        // while staying monotonic. Note, once we hit 10k milliseconds beyond system
        // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
        _msecs++;
      }
    }
  } else {
    // resetting; we have advanced more than
    // 10k milliseconds beyond system clock
    _msecs = msecs;
  }
  _seqHigh = seqHigh;
  _seqLow = seqLow;

  // [bytes 0-5] 48 bits of local timestamp
  b[i++] = _msecs / 0x10000000000 & 0xff;
  b[i++] = _msecs / 0x100000000 & 0xff;
  b[i++] = _msecs / 0x1000000 & 0xff;
  b[i++] = _msecs / 0x10000 & 0xff;
  b[i++] = _msecs / 0x100 & 0xff;
  b[i++] = _msecs & 0xff;

  // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
  b[i++] = seqHigh >>> 4 & 0x0f | 0x70;

  // [byte 7] remaining 8 bits of seq_hi
  b[i++] = seqHigh & 0xff;

  // [byte 8] - variant (2 bits), first 6 bits seq_low
  b[i++] = seqLow >>> 13 & 0x3f | 0x80;

  // [byte 9] 8 bits seq_low
  b[i++] = seqLow >>> 5 & 0xff;

  // [byte 10] remaining 5 bits seq_low, 3 bits random
  b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;

  // [bytes 11-15] always random
  b[i++] = rnds[11];
  b[i++] = rnds[12];
  b[i++] = rnds[13];
  b[i++] = rnds[14];
  b[i++] = rnds[15];
  return buf || (0, _stringify.unsafeStringify)(b);
}
var _default = exports["default"] = v7;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regex = _interopRequireDefault(__webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/commonjs-browser/regex.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}
var _default = exports["default"] = validate;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/version.js":
/*!************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/version.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var _default = exports["default"] = version;

/***/ }),

/***/ "./src/assets/arrow-left-bold-outline.svg":
/*!************************************************!*\
  !*** ./src/assets/arrow-left-bold-outline.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7e8fa81b0b3ba777aa4.svg";

/***/ }),

/***/ "./src/assets/arrow-right-bold-outline.svg":
/*!*************************************************!*\
  !*** ./src/assets/arrow-right-bold-outline.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b96a919198e40a8aabfc.svg";

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/assets/tab-plus.svg":
/*!*********************************!*\
  !*** ./src/assets/tab-plus.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29c826f027f871b81452.svg";

/***/ }),

/***/ "./src/assets/tab-remove.svg":
/*!***********************************!*\
  !*** ./src/assets/tab-remove.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d9310c4e75fbe8d32d1.svg";

/***/ }),

/***/ "./src/assets/trashcan.svg":
/*!*********************************!*\
  !*** ./src/assets/trashcan.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBZTs7Ozs7Ozs7OztBQ3ZNakI7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBLGVBQWUsa0JB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LHVDQUF1QyxtQkFBTyxDQUFDLDRFQUFlO0FBQzlELHFDQUFxQyxpQ0FBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZDlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9BcHAuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9EaWFsb2cuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tMaXN0Vmlldy5jc3MiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvVGFza1ZpZXcuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL3Byb2plY3RMaXN0Vmlldy5jc3MiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0FwcC5jc3M/OGZlZSIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLmNzcz83N2U4Iiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0hlYWRlci9IZWFkZXIuY3NzPzBlOGYiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvVGFza0xpc3RWaWV3LmNzcz9mYjQ5Iiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tWaWV3LmNzcz84NGJmIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL3Byb2plY3RMaXN0Vmlldy5jc3M/NjI3MSIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0FwcC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvQWRkUHJvamVjdE1vZGFsLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9BZGRUYXNrTW9kYWwudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvRGlhbG9nL0RlbGV0ZVByb2plY3RNb2RhbC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9FZGl0VGFza01vZGFsLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9Qcmlvcml0eUJveC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvUHJvamVjdEJveC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9IZWFkZXIvSGVhZGVyLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tMaXN0Vmlldy50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9UYXNrVmlldy50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9wcm9qZWN0TGlzdFZpZXcudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92Ny5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDgwcHggMWZyLyAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJhc2lkZSBtYWluXCI7XG59XG5cbmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDcsIDI1NSk7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgICBidXR0b257XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxufVxuXG5hc2lkZXtcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxubWFpbntcbiAgICBncmlkLWFyZWE6IG1haW47XG59XG5cbmZvb3RlciBzdmd7XG4gICAgZmlsbDpnb2xkO1xuICAgIHdpZHRoOiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zyb250ZW5kL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0M7SUFDbEM7O29CQUVnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7O0lBRWpCO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogODBweCAxZnIvIDIwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbmFzaWRle1xcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxufVxcblxcbmZvb3RlciBzdmd7XFxuICAgIGZpbGw6Z29sZDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQtYm9sZC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC1ib2xkLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcbiAgICAtLWJ1dHRvblNpemU6IDMwcHg7XG4gICAgLS1tb2RhbFdpZHRoOiA1MDBweDtcblxuICAgIC5tb2RhbCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byBhdXRvIC8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcInRpdGxlIHRpdGxlIHRpdGxlXCJcbiAgICAgICAgICAgIFwiZGVzY3JpcHQgZGVzY3JpcHQgZGVzY3JpcHRcIlxuICAgICAgICAgICAgXCJkYXRlIHByb2plY3QgcHJpb3JpdHlcIlxuICAgICAgICA7XG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1tb2RhbFdpZHRoKTtcblxuICAgICAgICAudGl0bGVMYWJlbCxcbiAgICAgICAgLmRlc2NyaXB0TGFiZWwsXG4gICAgICAgIC5kYXRlTGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGVMYWJlbCB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xuXG4gICAgICAgICAgICAjdGl0bGVJbnB1dCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdExhYmVsIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHQ7XG5cbiAgICAgICAgICAgICNkZXNjcmlwdFRleHRBcmVhIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGVDb250YWluZXIge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkYXRlO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5kYXRlTGFiZWwge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5kYXRlSW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvamVjdEJveCB7XG5cbiAgICAgICAgICAgIC5wcm9qZWN0TGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgLnByb2plY3RTZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAucHJpb3JpdHlEaXYge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDIwcHggNDBweCAvIDFmciBtYXgtY29udGVudCAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgIFwibGFiZWwgbGFiZWwgbGFiZWxcIlxuICAgICAgICAgICAgICAgIFwibGVmdEJ1dHRvbiB0ZXh0IHJpZ2h0QnV0dG9uXCI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5wcmlvcml0eUxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmlvcml0eVRleHQge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaW9yaXR5TGVmdEJ1dHRvbixcbiAgICAgICAgICAgIC5wcmlvcml0eVJpZ2h0QnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tYnV0dG9uU2l6ZSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1idXR0b25TaXplKTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaW9yaXR5TGVmdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0QnV0dG9uO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaW9yaXR5UmlnaHRCdXR0b24ge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcmlnaHRCdXR0b247XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByb2plY3RNb2RhbCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgMWZyIC8gcmVwZWF0KDIsIDFmcik7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcImxhYmVsIGxhYmVsXCJcbiAgICAgICAgICAgIFwiaW5wdXQgaW5wdXRcIlxuICAgICAgICAgICAgXCJsZWZ0QnV0dG9uIHJpZ2h0QnV0dG9uXCJcbiAgICAgICAgO1xuICAgICAgICB3aWR0aDogdmFyKC0tbW9kYWxXaWR0aCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICAucHJvamVjdE5hbWVMYWJlbCB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGxhYmVsO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2plY3ROYW1lSW5wdXRXcmFwcGVyIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaW5wdXQ7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgI3Byb2plY3ROYW1lSW5wdXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53YXJuaW5nVGV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblxuICAgICAgICAgICAgJi5jYW5jZWxCdXR0b24ge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcmlnaHRCdXR0b247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYWRkUHJvamVjdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0QnV0dG9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CO1FBQ0ksYUFBYTtRQUNiLDhDQUE4QztRQUM5Qzs7OztRQUlBO1FBQ0EsYUFBYTtRQUNiLHdCQUF3Qjs7UUFFeEI7OztZQUdJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsZUFBZTtZQUNmLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGdCQUFnQjs7WUFFaEI7Z0JBQ0ksWUFBWTtnQkFDWixrQkFBa0I7WUFDdEI7UUFDSjs7UUFFQTtZQUNJLG1CQUFtQjs7WUFFbkI7Z0JBQ0ksWUFBWTtnQkFDWixrQkFBa0I7WUFDdEI7UUFDSjs7UUFFQTtZQUNJLGVBQWU7WUFDZixvQkFBb0I7O1lBRXBCO2dCQUNJLGtCQUFrQjs7Z0JBRWxCO29CQUNJLFNBQVM7b0JBQ1Qsa0JBQWtCO29CQUNsQixnQkFBZ0I7Z0JBQ3BCO1lBQ0o7UUFDSjs7UUFFQTs7WUFFSTtnQkFDSSxlQUFlO2dCQUNmLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixzQkFBc0I7O2dCQUV0QjtvQkFDSSxZQUFZO2dCQUNoQjtZQUNKOztRQUVKOztRQUVBO1lBQ0ksbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IsWUFBWTtZQUNaLDhDQUE4QztZQUM5Qzs7NkNBRWlDO1lBQ2pDLHVCQUF1QjtZQUN2QixtQkFBbUI7O1lBRW5CO2dCQUNJLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksZUFBZTtZQUNuQjs7WUFFQTs7Z0JBRUksd0JBQXdCO2dCQUN4Qix5QkFBeUI7Z0JBQ3pCLG9CQUFvQjtZQUN4Qjs7WUFFQTtnQkFDSSxxQkFBcUI7Z0JBQ3JCLG1EQUF5RDtZQUM3RDs7WUFFQTtnQkFDSSxzQkFBc0I7Z0JBQ3RCLG1EQUEwRDtZQUM5RDtRQUNKO0lBQ0o7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsMkNBQTJDO1FBQzNDOzs7O1FBSUE7UUFDQSx3QkFBd0I7UUFDeEIsZUFBZTs7UUFFZjtZQUNJLGdCQUFnQjtZQUNoQixrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSxnQkFBZ0I7O1lBRWhCLGtCQUFrQjs7WUFFbEI7Z0JBQ0ksWUFBWTtnQkFDWixXQUFXO2dCQUNYLGtCQUFrQjtZQUN0Qjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsZ0JBQWdCO1lBQ3BCO1FBQ0o7O1FBRUE7WUFDSSxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixvQkFBb0I7O1lBRXBCO2dCQUNJLHNCQUFzQjtZQUMxQjs7WUFFQTtnQkFDSSxxQkFBcUI7WUFDekI7UUFDSjtJQUNKOzs7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2cge1xcbiAgICAtLWJ1dHRvblNpemU6IDMwcHg7XFxuICAgIC0tbW9kYWxXaWR0aDogNTAwcHg7XFxuXFxuICAgIC5tb2RhbCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIGF1dG8gLyBhdXRvIGF1dG8gYXV0bztcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcInRpdGxlIHRpdGxlIHRpdGxlXFxcIlxcbiAgICAgICAgICAgIFxcXCJkZXNjcmlwdCBkZXNjcmlwdCBkZXNjcmlwdFxcXCJcXG4gICAgICAgICAgICBcXFwiZGF0ZSBwcm9qZWN0IHByaW9yaXR5XFxcIlxcbiAgICAgICAgO1xcbiAgICAgICAgcm93LWdhcDogMTBweDtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1tb2RhbFdpZHRoKTtcXG5cXG4gICAgICAgIC50aXRsZUxhYmVsLFxcbiAgICAgICAgLmRlc2NyaXB0TGFiZWwsXFxuICAgICAgICAuZGF0ZUxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50aXRsZUxhYmVsIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcblxcbiAgICAgICAgICAgICN0aXRsZUlucHV0IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlc2NyaXB0TGFiZWwge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHQ7XFxuXFxuICAgICAgICAgICAgI2Rlc2NyaXB0VGV4dEFyZWEge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGF0ZUNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgICAgICAgICAgIC5kYXRlTGFiZWwge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgICAgIC5kYXRlSW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTAlO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0Qm94IHtcXG5cXG4gICAgICAgICAgICAucHJvamVjdExhYmVsIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0U2VsZWN0IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcmlvcml0eURpdiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAyMHB4IDQwcHggLyAxZnIgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgICAgIFxcXCJsYWJlbCBsYWJlbCBsYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgXFxcImxlZnRCdXR0b24gdGV4dCByaWdodEJ1dHRvblxcXCI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlMYWJlbCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlUZXh0IHtcXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlMZWZ0QnV0dG9uLFxcbiAgICAgICAgICAgIC5wcmlvcml0eVJpZ2h0QnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJ1dHRvblNpemUpO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJ1dHRvblNpemUpO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5TGVmdEJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbGVmdEJ1dHRvbjtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9hcnJvdy1sZWZ0LWJvbGQtb3V0bGluZS5zdmcpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlSaWdodEJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcmlnaHRCdXR0b247XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYXJyb3ctcmlnaHQtYm9sZC1vdXRsaW5lLnN2Zyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0TW9kYWwge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgMWZyIC8gcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJsYWJlbCBsYWJlbFxcXCJcXG4gICAgICAgICAgICBcXFwiaW5wdXQgaW5wdXRcXFwiXFxuICAgICAgICAgICAgXFxcImxlZnRCdXR0b24gcmlnaHRCdXR0b25cXFwiXFxuICAgICAgICA7XFxuICAgICAgICB3aWR0aDogdmFyKC0tbW9kYWxXaWR0aCk7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuXFxuICAgICAgICAucHJvamVjdE5hbWVMYWJlbCB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdE5hbWVJbnB1dFdyYXBwZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICNwcm9qZWN0TmFtZUlucHV0IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAud2FybmluZ1RleHQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAmLmNhbmNlbEJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcmlnaHRCdXR0b247XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYuYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbGVmdEJ1dHRvbjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvdGFiLXBsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL3RhYi1yZW1vdmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAyNTUpO1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuXG4gICAgICAgICYuYWRkVGFza0J1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZFByb2plY3RCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5lZGl0UHJvamVjdEJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgICAgIH1cbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvSGVhZGVyL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQ7UUFDSSxZQUFZO1FBQ1osV0FBVzs7UUFFWDtZQUNJLG1EQUF3QztRQUM1Qzs7UUFFQTtZQUNJLG1EQUE0QztRQUNoRDs7UUFFQTtZQUNJLG1EQUE4QztRQUNsRDtJQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAyNTUpO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICAgICAgJi5hZGRUYXNrQnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9wbHVzLnN2ZycpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy90YWItcGx1cy5zdmcnKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuZWRpdFByb2plY3RCdXR0b24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3RhYi1yZW1vdmUuc3ZnJyk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLyogZm9yIEZpcmVmb3ggKi9cblxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xuICAgIH1cblxuXG4gICAgLnByb2plY3RIZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRhc2tMaXN0VmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvVGFza0xpc3RWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsZ0JBQWdCOzs7SUFHaEI7UUFDSSxhQUFhO1FBQ2Isa0NBQWtDO0lBQ3RDOzs7SUFHQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAgIC8qIGZvciBJbnRlcm5ldCBFeHBsb3JlciwgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgIC8qIGZvciBGaXJlZm94ICovXFxuXFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0SGVhZGluZyB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50YXNrTGlzdFZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3RyYXNoY2FuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRhc2sge1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMzBweCAzMHB4IC8gMWZyIG1pbi1jb250ZW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblxuICAgIC50aXRsZSB7fVxuXG4gICAgLmRhdGUge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5cbiAgICAucHJvamVjdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cblxuICAgIC50cmFzaENhbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mcm9udGVuZC9UYXNrVmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlOzs7SUFHZixRQUFROztJQUVSO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0kseURBQTZDO1FBQzdDLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osTUFBTTtRQUNOLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrIHtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAzMHB4IDMwcHggLyAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXG4gICAgLnRpdGxlIHt9XFxuXFxuICAgIC5kYXRlIHtcXG4gICAgICAgIGNvbG9yOiBncmF5O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICBwYWRkaW5nOiAzcHg7XFxuICAgIH1cXG5cXG4gICAgLnRyYXNoQ2FuIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvdHJhc2hjYW4uc3ZnKTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAtMjVweDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYXNpZGV7XG4gICAgdWx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvcHJvamVjdExpc3RWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsU0FBUzs7UUFFVDtZQUNJLGVBQWU7UUFDbkI7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImFzaWRle1xcbiAgICB1bHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RpYWxvZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EaWFsb2cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tMaXN0Vmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYXNrTGlzdFZpZXcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tWaWV3LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tWaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0TGlzdFZpZXcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdExpc3RWaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5yZXF1aXJlKFwiLi9BcHAuY3NzXCIpO1xucmVxdWlyZShcIi4vRGlhbG9nL0RpYWxvZy5jc3NcIik7XG5jb25zdCBBZGRUYXNrTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EaWFsb2cvQWRkVGFza01vZGFsXCIpKTtcbmNvbnN0IEhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0hlYWRlci9IZWFkZXJcIikpO1xuY29uc3QgcHJvamVjdExpc3RWaWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcHJvamVjdExpc3RWaWV3XCIpKTtcbmNvbnN0IFRhc2tMaXN0Vmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rhc2tMaXN0Vmlld1wiKSk7XG5jb25zdCBFZGl0VGFza01vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nL0VkaXRUYXNrTW9kYWxcIikpO1xuY29uc3QgQWRkUHJvamVjdE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nL0FkZFByb2plY3RNb2RhbFwiKSk7XG5jb25zdCBEZWxldGVQcm9qZWN0TW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EaWFsb2cvRGVsZXRlUHJvamVjdE1vZGFsXCIpKTtcbmZ1bmN0aW9uIEFwcCh0b0RvQXBwKSB7XG4gICAgY29uc3QgbW9kZWwgPSB0b0RvQXBwO1xuICAgIGNvbnN0IHByb2plY3RMaXN0VmlldyA9ICgwLCBwcm9qZWN0TGlzdFZpZXdfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IHRhc2tMaXN0VmlldyA9ICgwLCBUYXNrTGlzdFZpZXdfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IGhlYWRlclZpZXcgPSAoMCwgSGVhZGVyXzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCBhZGRUYXNrTW9kYWxWaWV3ID0gKDAsIEFkZFRhc2tNb2RhbF8xLmRlZmF1bHQpKCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsVmlldyA9ICgwLCBBZGRQcm9qZWN0TW9kYWxfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IGVkaXRUYXNrTW9kYWxWaWV3ID0gKDAsIEVkaXRUYXNrTW9kYWxfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RNb2RhbFZpZXcgPSAoMCwgRGVsZXRlUHJvamVjdE1vZGFsXzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCBvblByb2plY3RMaXN0Q2hhbmdlZCA9IChwcm9qZWN0TGlzdCkgPT4gcHJvamVjdExpc3RWaWV3LnJlbmRlcihwcm9qZWN0TGlzdCk7XG4gICAgY29uc3Qgb25UYXNrTGlzdENoYW5nZWQgPSAodGFza0xpc3QsIHByb2plY3QpID0+IHRhc2tMaXN0Vmlldy5yZW5kZXIodGFza0xpc3QsIHByb2plY3QpO1xuICAgIGNvbnN0IGhhbmRsZU9wZW5BZGRUYXNrTW9kYWwgPSAoKSA9PiBhZGRUYXNrTW9kYWxWaWV3Lm9wZW4oKTtcbiAgICBjb25zdCBoYW5kbGVPcGVuQWRkUHJvamVjdE1vZGFsID0gKCkgPT4gYWRkUHJvamVjdE1vZGFsVmlldy5vcGVuKCk7XG4gICAgY29uc3QgaGFuZGxlR2V0UHJvamVjdE5hbWVzT25Nb2RhbE9wZW4gPSAoKSA9PiBtb2RlbC5nZXRQcm9qZWN0TmFtZXMoKS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0ICE9PSBcIlRvZGF5XCIpO1xuICAgIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAobmV3VG9EbykgPT4gbW9kZWwuYWRkVGFzayhuZXdUb0RvKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VDdXJyZW50VGFza3MgPSAocHJvamVjdE5hbWUpID0+IG1vZGVsLnNldEN1cnJlbnRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgaGFuZGxlRWRpdFRhc2sgPSAoaWQsIHRvZG8pID0+IHsgbW9kZWwuZWRpdFRhc2soaWQsIHRvZG8pOyB9O1xuICAgIGNvbnN0IGhhbmRsZU9wZW5FZGl0VGFza01vZGFsID0gKHRvZG8pID0+IHtcbiAgICAgICAgZWRpdFRhc2tNb2RhbFZpZXcub3BlbigpO1xuICAgICAgICBlZGl0VGFza01vZGFsVmlldy5iaW5kRWRpdFRhc2soaGFuZGxlRWRpdFRhc2ssIHRvZG8uaWQpO1xuICAgICAgICBlZGl0VGFza01vZGFsVmlldy5zZXRJbnB1dCh0b2RvKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAoaWQpID0+IG1vZGVsLmRlbGV0ZVRhc2soaWQpO1xuICAgIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IG1vZGVsLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgbW9kZWwubW92ZVRvUHJldmlvdXNQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgbW9kZWwuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIG1vZGVsLnVwZGF0ZVRhc2tzRm9yRGVsZXRlZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlT3BlbkRlbGV0ZVByb2plY3RNb2RhbCA9ICgpID0+IGRlbGV0ZVByb2plY3RNb2RhbFZpZXcub3BlbigpO1xuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIG1vZGVsLmJpbmRPblByb2plY3RMaXN0Q2hhbmdlZChvblByb2plY3RMaXN0Q2hhbmdlZCk7XG4gICAgICAgIG1vZGVsLmJpbmRPblRhc2tMaXN0Q2hhbmdlZChvblRhc2tMaXN0Q2hhbmdlZCk7XG4gICAgICAgIGhlYWRlclZpZXcuYmluZEhlYWRlckJ1dHRvbkhhbmRsZXJzKHsgaGFuZGxlT3BlbkFkZFRhc2tNb2RhbCwgaGFuZGxlT3BlbkRlbGV0ZVByb2plY3RNb2RhbCwgaGFuZGxlT3BlbkFkZFByb2plY3RNb2RhbCB9KTtcbiAgICAgICAgYWRkVGFza01vZGFsVmlldy5iaW5kR2V0UHJvamVjdE5hbWVzKGhhbmRsZUdldFByb2plY3ROYW1lc09uTW9kYWxPcGVuKTtcbiAgICAgICAgZWRpdFRhc2tNb2RhbFZpZXcuYmluZEdldFByb2plY3ROYW1lcyhoYW5kbGVHZXRQcm9qZWN0TmFtZXNPbk1vZGFsT3Blbik7XG4gICAgICAgIGFkZFRhc2tNb2RhbFZpZXcuYmluZEFkZFRhc2soaGFuZGxlQWRkVGFzayk7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbFZpZXcuYmluZEdldFByb2plY3ROYW1lcyhoYW5kbGVHZXRQcm9qZWN0TmFtZXNPbk1vZGFsT3Blbik7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbFZpZXcuYmluZEFkZFByb2plY3QoaGFuZGxlQWRkUHJvamVjdCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbFZpZXcuYmluZEdldFByb2plY3ROYW1lcyhoYW5kbGVHZXRQcm9qZWN0TmFtZXNPbk1vZGFsT3Blbik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbFZpZXcuYmluZERlbGV0ZVByb2plY3QoaGFuZGxlRGVsZXRlUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RMaXN0Vmlldy5iaW5kQ2hhbmdlQ3VycmVudFRhc2tzKGhhbmRsZUNoYW5nZUN1cnJlbnRUYXNrcyk7XG4gICAgICAgIHRhc2tMaXN0Vmlldy5iaW5kT3BlbkVkaXRUYXNrKGhhbmRsZU9wZW5FZGl0VGFza01vZGFsKTtcbiAgICAgICAgdGFza0xpc3RWaWV3LmJpbmREZWxldGVUYXNrKGhhbmRsZURlbGV0ZVRhc2spO1xuICAgICAgICBtb2RlbC5pbml0aWFsaXplKCk7XG4gICAgICAgIC8vIGFkZFByb2plY3RNb2RhbFZpZXcub3BlbigpXG4gICAgfTtcbiAgICByZXR1cm4geyBpbml0aWFsaXplIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERpYWxvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZ1wiKSk7XG5jb25zdCBjcmVhdGVBZGRQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IFtdO1xuICAgIGNvbnN0IGRpYWxvZyA9IERpYWxvZ18xLmRlZmF1bHQuZ2V0RGlhbG9nKCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbjtcbiAgICBsZXQgY2FuY2VsQnV0dG9uO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbCBtb2RhbCc7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5jbGFzc05hbWUgPSAncHJvamVjdE5hbWVMYWJlbCc7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVHlwZSBuYW1lIG9mIG5ldyBwcm9qZWN0XCI7XG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0TmFtZUlucHV0XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3ROYW1lSW5wdXRXcmFwcGVyJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0V3JhcHBlcik7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9ICdwcm9qZWN0TmFtZUlucHV0JztcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgY29uc3Qgd2FybmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2FybmluZ1RleHQuY2xhc3NOYW1lID0gJ3dhcm5pbmdUZXh0JztcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQod2FybmluZ1RleHQpO1xuICAgIGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGRQcm9qZWN0QnV0dG9uJztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnY2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChnZXRQcm9qZWN0TmFtZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cyA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICBkaWFsb2cucmVwbGFjZUNoaWxkcmVuKGZvcm0pO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnB1dHMoKTtcbiAgICAgICAgRGlhbG9nXzEuZGVmYXVsdC5jbG9zZURpYWxvZygpO1xuICAgIH07XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgIGNvbnN0IGNsZWFySW5wdXRzID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdHMgPSBbXTtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgZG9lc1Byb2plY3ROYW1lRXhpc3QgPSAodXNlcklucHV0KSA9PiB7XG4gICAgICAgIGlmIChnZXRQcm9qZWN0TmFtZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJldHVybiBnZXRQcm9qZWN0TmFtZXMoKS5zb21lKHByb2plY3ROYW1lID0+IHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkgPT09IHVzZXJJbnB1dC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IHtcbiAgICAgICAgd2FybmluZ1RleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgd2FybmluZ1RleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0IVwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdhcm5pbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfTtcbiAgICBsZXQgZ2V0UHJvamVjdE5hbWVzID0gbnVsbDtcbiAgICBjb25zdCBiaW5kR2V0UHJvamVjdE5hbWVzID0gKGNhbGxCYWNrKSA9PiBnZXRQcm9qZWN0TmFtZXMgPSBjYWxsQmFjaztcbiAgICBjb25zdCBiaW5kQWRkUHJvamVjdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldElucHV0KCk7XG4gICAgICAgICAgICBpZiAoZG9lc1Byb2plY3ROYW1lRXhpc3QocHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElucHV0ID0gKCkgPT4gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICByZXR1cm4geyBvcGVuLCBiaW5kR2V0UHJvamVjdE5hbWVzLCBiaW5kQWRkUHJvamVjdCB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUFkZFByb2plY3RNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGlhbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nXCIpKTtcbmNvbnN0IFByaW9yaXR5Qm94XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUHJpb3JpdHlCb3hcIikpO1xuY29uc3QgUHJvamVjdEJveF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Byb2plY3RCb3hcIikpO1xuY29uc3QgY3JlYXRlQWRkVGFza01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpYWxvZyA9IERpYWxvZ18xLmRlZmF1bHQuZ2V0RGlhbG9nKCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgYWRkVGFza0J1dHRvbjtcbiAgICBsZXQgY2FuY2VsQnV0dG9uO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ2FkZE1vZGFsIG1vZGFsJztcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTmFtZSA9ICd0aXRsZUxhYmVsJztcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZUlucHV0JztcbiAgICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGNvbnN0IGRlc2NyaXB0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0TGFiZWwuY2xhc3NOYW1lID0gJ2Rlc2NyaXB0TGFiZWwnO1xuICAgIGRlc2NyaXB0TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdExhYmVsKTtcbiAgICBjb25zdCBkZXNjcmlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcFRleHQuaWQgPSAnZGVzY3JpcHRUZXh0QXJlYSc7XG4gICAgZGVzY3JpcHRMYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwVGV4dCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb250YWluZXIuY2xhc3NOYW1lID0gJ2RhdGVDb250YWluZXInO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuY2xhc3NOYW1lID0gJ2RhdGVMYWJlbCc7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2RhdGVJbnB1dCc7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgY29uc3QgcHJpb3JpdHlCb3ggPSAoMCwgUHJpb3JpdHlCb3hfMS5kZWZhdWx0KSgpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlCb3gucHJpb3JpdHlEaXYpO1xuICAgIGNvbnN0IHByb2plY3RCb3ggPSAoMCwgUHJvamVjdEJveF8xLmRlZmF1bHQpKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Qm94LnByb2plY3RCb3gpO1xuICAgIGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9ICdhZGRUYXNrQnV0dG9uJztcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgYWRkVGFza0J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnY2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChnZXRQcm9qZWN0TmFtZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICBkaWFsb2cucmVwbGFjZUNoaWxkcmVuKGZvcm0pO1xuICAgICAgICBwcm9qZWN0Qm94LnNldFByb2plY3ROYW1lc09uT3Blbihwcm9qZWN0TmFtZXMpO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnB1dHMoKTtcbiAgICAgICAgRGlhbG9nXzEuZGVmYXVsdC5jbG9zZURpYWxvZygpO1xuICAgIH07XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgIGNvbnN0IGNsZWFySW5wdXRzID0gKCkgPT4ge1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXBUZXh0LnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eUJveC5yZXNldFByaW9yaXR5KCk7XG4gICAgfTtcbiAgICBsZXQgZ2V0UHJvamVjdE5hbWVzID0gbnVsbDtcbiAgICBjb25zdCBiaW5kR2V0UHJvamVjdE5hbWVzID0gKGNhbGxCYWNrKSA9PiBnZXRQcm9qZWN0TmFtZXMgPSBjYWxsQmFjaztcbiAgICBjb25zdCBiaW5kQWRkVGFzayA9IChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUb0RvID0gZ2V0SW5wdXQoKTtcbiAgICAgICAgICAgIGhhbmRsZXIobmV3VG9Ebyk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcFRleHQudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkYXRlSW5wdXQudmFsdWUgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RCb3guZ2V0U2VsZWN0ZWRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5Qm94LmdldFByaW9yaXR5KCk7XG4gICAgICAgIGlmICghZGVzY3JpcHRpb24pXG4gICAgICAgICAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkgfTtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UsIGJpbmRHZXRQcm9qZWN0TmFtZXMsIGJpbmRBZGRUYXNrIH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQWRkVGFza01vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEaWFsb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EaWFsb2dcIikpO1xuY29uc3QgY3JlYXRlRGVsZXRlUHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBbXTtcbiAgICBjb25zdCBkaWFsb2cgPSBEaWFsb2dfMS5kZWZhdWx0LmdldERpYWxvZygpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbGV0IGRlbGV0ZVByb2plY3RCdXR0b247XG4gICAgbGV0IGNhbmNlbEJ1dHRvbjtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdQcm9qZWN0TW9kYWwgbW9kYWwnO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NOYW1lID0gJ3Byb2plY3ROYW1lTGFiZWwnO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNob29zZSBhIHByb2plY3QgdG8gZGVsZXRlXCI7XG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0U2VsZWN0XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdC5pZCA9ICdwcm9qZWN0U2VsZWN0JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGVQcm9qZWN0QnV0dG9uJztcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnY2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChnZXRQcm9qZWN0TmFtZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cyA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICB3aGlsZSAocHJvamVjdFNlbGVjdC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5yZW1vdmVDaGlsZChwcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QgIT09IFwiSW5ib3hcIiAmJiBwcm9qZWN0ICE9PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ3Byb2plY3RTZWxlY3RPcHRpb24nO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGlhbG9nLnJlcGxhY2VDaGlsZHJlbihmb3JtKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFySW5wdXRzKCk7XG4gICAgICAgIERpYWxvZ18xLmRlZmF1bHQuY2xvc2VEaWFsb2coKTtcbiAgICB9O1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICBjb25zdCBjbGVhcklucHV0cyA9ICgpID0+IHtcbiAgICAgICAgY3VycmVudFByb2plY3RzID0gW107XG4gICAgICAgIHdoaWxlIChwcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QucmVtb3ZlQ2hpbGQocHJvamVjdFNlbGVjdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGdldFByb2plY3ROYW1lcyA9IG51bGw7XG4gICAgY29uc3QgYmluZEdldFByb2plY3ROYW1lcyA9IChjYWxsQmFjaykgPT4gZ2V0UHJvamVjdE5hbWVzID0gY2FsbEJhY2s7XG4gICAgY29uc3QgYmluZERlbGV0ZVByb2plY3QgPSAoaGFuZGxlcikgPT4ge1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRJbnB1dCgpO1xuICAgICAgICAgICAgaGFuZGxlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElucHV0ID0gKCkgPT4gcHJvamVjdFNlbGVjdC52YWx1ZTtcbiAgICByZXR1cm4geyBvcGVuLCBiaW5kR2V0UHJvamVjdE5hbWVzLCBiaW5kRGVsZXRlUHJvamVjdCB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZURlbGV0ZVByb2plY3RNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmNvbnN0IGNsb3NlRGlhbG9nID0gKCkgPT4ge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xufTtcbmNvbnN0IGdldERpYWxvZyA9ICgpID0+IGRpYWxvZztcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpXG4gICAgICAgIGNsb3NlRGlhbG9nKCk7XG59KTtcbmNvbnN0IGRpYWxvZ01hbmFnZXIgPSB7XG4gICAgY2xvc2VEaWFsb2csIGdldERpYWxvZ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRpYWxvZ01hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERpYWxvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZ1wiKSk7XG5jb25zdCBQcmlvcml0eUJveF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ByaW9yaXR5Qm94XCIpKTtcbmNvbnN0IFByb2plY3RCb3hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Qcm9qZWN0Qm94XCIpKTtcbmNvbnN0IGNyZWF0ZUVkaXRUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlhbG9nID0gRGlhbG9nXzEuZGVmYXVsdC5nZXREaWFsb2coKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBlZGl0VGFza0J1dHRvbjtcbiAgICBsZXQgY2FuY2VsQnV0dG9uO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ2VkaXRUYXNrTW9kYWwgbW9kYWwnO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NOYW1lID0gJ3RpdGxlTGFiZWwnO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlSW5wdXQnO1xuICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgY29uc3QgZGVzY3JpcHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRMYWJlbC5jbGFzc05hbWUgPSAnZGVzY3JpcHRMYWJlbCc7XG4gICAgZGVzY3JpcHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0TGFiZWwpO1xuICAgIGNvbnN0IGRlc2NyaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwVGV4dC5pZCA9ICdkZXNjcmlwdFRleHRBcmVhJztcbiAgICBkZXNjcmlwdExhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXBUZXh0KTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGF0ZUNvbnRhaW5lcic7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5jbGFzc05hbWUgPSAnZGF0ZUxhYmVsJztcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAnZGF0ZUlucHV0JztcbiAgICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBjb25zdCBwcmlvcml0eUJveCA9ICgwLCBQcmlvcml0eUJveF8xLmRlZmF1bHQpKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUJveC5wcmlvcml0eURpdik7XG4gICAgY29uc3QgcHJvamVjdEJveCA9ICgwLCBQcm9qZWN0Qm94XzEuZGVmYXVsdCkoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RCb3gucHJvamVjdEJveCk7XG4gICAgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0VGFza0J1dHRvbi5jbGFzc05hbWUgPSAnYWRkVGFza0J1dHRvbic7XG4gICAgZWRpdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdFRhc2tCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG4gICAgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFByb2plY3ROYW1lcyA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzID0gZ2V0UHJvamVjdE5hbWVzKCk7XG4gICAgICAgIGRpYWxvZy5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XG4gICAgICAgIHByb2plY3RCb3guc2V0UHJvamVjdE5hbWVzT25PcGVuKHByb2plY3ROYW1lcyk7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgICBjbGVhcklucHV0cygpO1xuICAgICAgICBEaWFsb2dfMS5kZWZhdWx0LmNsb3NlRGlhbG9nKCk7XG4gICAgfTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcFRleHQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHByaW9yaXR5Qm94LnJlc2V0UHJpb3JpdHkoKTtcbiAgICB9O1xuICAgIGxldCBnZXRQcm9qZWN0TmFtZXMgPSBudWxsO1xuICAgIGNvbnN0IGJpbmRHZXRQcm9qZWN0TmFtZXMgPSAoY2FsbEJhY2spID0+IGdldFByb2plY3ROYW1lcyA9IGNhbGxCYWNrO1xuICAgIGxldCBlZGl0VGFzayA9IG51bGw7XG4gICAgY29uc3QgYmluZEVkaXRUYXNrID0gKGhhbmRsZXIsIGlkKSA9PiB7XG4gICAgICAgIGlmIChlZGl0VGFzaylcbiAgICAgICAgICAgIGVkaXRUYXNrQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xuICAgICAgICBlZGl0VGFzayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvRG8gPSBnZXRJbnB1dCgpO1xuICAgICAgICAgICAgaGFuZGxlcihpZCwgbmV3VG9Ebyk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldElucHV0ID0gKHRvZG8pID0+IHtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgIGlmICh0b2RvLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgZGVzY3JpcFRleHQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHByaW9yaXR5Qm94LnNldFByaW9yaXR5KHRvZG8ucHJpb3JpdHkpO1xuICAgICAgICBwcm9qZWN0Qm94LnNldFNlbGVjdGVkUHJvamVjdE5hbWVPbk9wZW4odG9kby5wcm9qZWN0KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcFRleHQudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Qm94LmdldFNlbGVjdGVkUHJvamVjdE5hbWUoKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUJveC5nZXRQcmlvcml0eSgpO1xuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5IH07XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkgfTtcbiAgICB9O1xuICAgIHJldHVybiB7IG9wZW4sIGNsb3NlLCBiaW5kR2V0UHJvamVjdE5hbWVzLCBiaW5kRWRpdFRhc2ssIHNldElucHV0IH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRWRpdFRhc2tNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uLy4uXCIpO1xuY29uc3QgY3JlYXRlUHJpb3JpdHlCb3ggPSAoKSA9PiB7XG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eURpdi5jbGFzc05hbWUgPSAncHJpb3JpdHlEaXYnO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NOYW1lID0gJ3ByaW9yaXR5TGFiZWwnO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmlvcml0eVRleHQuY2xhc3NOYW1lID0gJ3ByaW9yaXR5VGV4dCc7XG4gICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJOb25lXCI7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcbiAgICBjb25zdCBwcmlvcml0eUxlZnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmlvcml0eUxlZnRCdXR0b24uY2xhc3NOYW1lID0gJ3ByaW9yaXR5TGVmdEJ1dHRvbic7XG4gICAgcHJpb3JpdHlMZWZ0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGVmdEJ1dHRvbik7XG4gICAgY29uc3QgcHJpb3JpdHlSaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5UmlnaHRCdXR0b24uY2xhc3NOYW1lID0gJ3ByaW9yaXR5UmlnaHRCdXR0b24nO1xuICAgIHByaW9yaXR5UmlnaHRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlSaWdodEJ1dHRvbik7XG4gICAgY29uc3QgaW5jcmVhc2VQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eVRleHQudGV4dENvbnRlbnQ7XG4gICAgICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IHByaW9yaXR5ID09PSBcIk5vbmVcIiA/IFwiTG93XCIgOiBcIkhpZ2hcIjtcbiAgICB9O1xuICAgIGNvbnN0IGRlY3JlYXNlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlUZXh0LnRleHRDb250ZW50O1xuICAgICAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBwcmlvcml0eSA9PT0gXCJIaWdoXCIgPyBcIkxvd1wiIDogXCJOb25lXCI7XG4gICAgfTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9PT0gXCJOb25lXCIgP1xuICAgICAgICBfXzEuUHJpb3JpdHkuTm9uZSA6IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9PT0gXCJMb3dcIiA/XG4gICAgICAgIF9fMS5Qcmlvcml0eS5Mb3cgOiBfXzEuUHJpb3JpdHkuSGlnaDtcbiAgICBjb25zdCByZXNldFByaW9yaXR5ID0gKCkgPT4geyBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIk5vbmVcIjsgfTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChwcmlvcml0eSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9PT0gX18xLlByaW9yaXR5Lk5vbmUgPyBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIk5vbmVcIiA6XG4gICAgICAgICAgICBwcmlvcml0eSA9PT0gX18xLlByaW9yaXR5LkxvdyA/IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiTG93XCIgOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIH07XG4gICAgcHJpb3JpdHlMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWNyZWFzZVByaW9yaXR5KTtcbiAgICBwcmlvcml0eVJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmNyZWFzZVByaW9yaXR5KTtcbiAgICByZXR1cm4geyBwcmlvcml0eURpdiwgZ2V0UHJpb3JpdHksIHJlc2V0UHJpb3JpdHksIHNldFByaW9yaXR5IH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHJpb3JpdHlCb3g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCb3ggPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Qm94LmNsYXNzTmFtZSA9ICdwcm9qZWN0Qm94JztcbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc05hbWUgPSAncHJvamVjdExhYmVsJztcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3QuaWQgPSAncHJvamVjdFNlbGVjdCc7XG4gICAgcHJvamVjdExhYmVsLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgIGxldCBzZXRQcm9qZWN0TmFtZXNPbk9wZW4gPSAocHJvamVjdE5hbWVzKSA9PiB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0U2VsZWN0LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnJlbW92ZUNoaWxkKHByb2plY3RTZWxlY3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdE5hbWVzLmZvckVhY2gocHJvamVjdE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBzZXRTZWxlY3RlZFByb2plY3ROYW1lT25PcGVuID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFNlbGVjdGVkUHJvamVjdE5hbWUgPSAoKSA9PiBwcm9qZWN0U2VsZWN0LnZhbHVlO1xuICAgIHJldHVybiB7IHByb2plY3RCb3gsIHNldFByb2plY3ROYW1lc09uT3BlbiwgZ2V0U2VsZWN0ZWRQcm9qZWN0TmFtZSwgc2V0U2VsZWN0ZWRQcm9qZWN0TmFtZU9uT3BlbiB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByb2plY3RCb3g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL0hlYWRlci5jc3NcIik7XG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKTtcbiAgICBjb25zdCBiaW5kSGVhZGVyQnV0dG9uSGFuZGxlcnMgPSAoaGFuZGxlcnMpID0+IHtcbiAgICAgICAgY29uc3QgeyBoYW5kbGVPcGVuQWRkUHJvamVjdE1vZGFsLCBoYW5kbGVPcGVuRGVsZXRlUHJvamVjdE1vZGFsLCBoYW5kbGVPcGVuQWRkVGFza01vZGFsIH0gPSBoYW5kbGVycztcbiAgICAgICAgYnV0dG9uc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZW5BZGRUYXNrTW9kYWwpO1xuICAgICAgICBidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3BlbkFkZFByb2plY3RNb2RhbCk7XG4gICAgICAgIGJ1dHRvbnNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPcGVuRGVsZXRlUHJvamVjdE1vZGFsKTtcbiAgICB9O1xuICAgIHJldHVybiB7IGJpbmRIZWFkZXJCdXR0b25IYW5kbGVycyB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhlYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGFza1ZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UYXNrVmlld1wiKSk7XG5yZXF1aXJlKFwiLi9UYXNrTGlzdFZpZXcuY3NzXCIpO1xuY29uc3QgY3JlYXRlVGFza0xpc3RWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RIZWFkaW5nJyk7XG4gICAgY29uc3QgdGFza0xpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0VmlldycpO1xuICAgIGNvbnN0IHJlbmRlciA9ICh0YXNrcywgcHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgd2hpbGUgKHRhc2tMaXN0Vmlldy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0YXNrTGlzdFZpZXcucmVtb3ZlQ2hpbGQodGFza0xpc3RWaWV3LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAoMCwgVGFza1ZpZXdfMS5kZWZhdWx0KSh0YXNrLCAoKSA9PiB7IGlmIChvcGVuRWRpdFRhc2spXG4gICAgICAgICAgICAgICAgb3BlbkVkaXRUYXNrKHRhc2spOyB9LCAoKSA9PiB7IGlmIChkZWxldGVUYXNrKVxuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFzay5pZCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBvcGVuRWRpdFRhc2sgPSBudWxsO1xuICAgIGNvbnN0IGJpbmRPcGVuRWRpdFRhc2sgPSAoaGFuZGxlcikgPT4geyBvcGVuRWRpdFRhc2sgPSBoYW5kbGVyOyB9O1xuICAgIGxldCBkZWxldGVUYXNrID0gbnVsbDtcbiAgICBjb25zdCBiaW5kRGVsZXRlVGFzayA9IChoYW5kbGVyKSA9PiB7IGRlbGV0ZVRhc2sgPSBoYW5kbGVyOyB9O1xuICAgIHJldHVybiB7IGJpbmRPcGVuRWRpdFRhc2ssIHJlbmRlciwgYmluZERlbGV0ZVRhc2sgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUYXNrTGlzdFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbnJlcXVpcmUoXCIuL1Rhc2tWaWV3LmNzc1wiKTtcbmNvbnN0IGNyZWF0ZVRhc2tWaWV3ID0gKHRvRG8sIGNhbGxCYWNrLCBoYW5kbGVEZWxldGVUYXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0VmlldycpO1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTmFtZSA9ICd0YXNrJztcbiAgICB0YXNrLnN0eWxlLmJvcmRlciA9IHRvRG8ucHJpb3JpdHkgPT09IF9fMS5Qcmlvcml0eS5IaWdoID8gXCIzcHggc29saWQgcmVkXCIgOlxuICAgICAgICB0b0RvLnByaW9yaXR5ID09PSBfXzEuUHJpb3JpdHkuTG93ID8gXCIycHggc29saWQgb3JhbmdlXCIgOiBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSB0YXNrKVxuICAgICAgICAgICAgY2FsbEJhY2sodG9Ebyk7XG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gdG9Eby5wcm9qZWN0O1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZS5jbGFzc05hbWUgPSAnZGF0ZSc7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKHRvRG8uZHVlRGF0ZSkudG9EYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFzaENhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdHJhc2hDYW4pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBoYW5kbGVEZWxldGVUYXNrKHRvRG8uaWQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdHJhc2hDYW4uY2xhc3NOYW1lID0gJ3RyYXNoQ2FuJztcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0cmFzaENhbik7XG4gICAgdGFza0xpc3RWaWV3LmFwcGVuZENoaWxkKHRhc2spO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRhc2tWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9wcm9qZWN0TGlzdFZpZXcuY3NzXCIpO1xuY29uc3QgY3JlYXRlUHJvamVjdExpc3RWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlIHVsXCIpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0TmFtZXMgPSBbXTtcbiAgICBjb25zdCByZW5kZXIgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgd2hpbGUgKHByb2plY3RMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RMaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdE5hbWVzLnB1c2gobGkpO1xuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlQ3VycmVudFRhc2tzKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDdXJyZW50VGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBiaW5kQ2hhbmdlQ3VycmVudFRhc2tzID0gKGhhbmRsZXIpID0+IHsgY2hhbmdlQ3VycmVudFRhc2tzID0gaGFuZGxlcjsgfTtcbiAgICBsZXQgY2hhbmdlQ3VycmVudFRhc2tzID0gbnVsbDtcbiAgICByZXR1cm4geyByZW5kZXIsIGJpbmRDaGFuZ2VDdXJyZW50VGFza3MgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcm9qZWN0TGlzdFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJpb3JpdHkgPSB2b2lkIDA7XG5jb25zdCB1dWlkXzEgPSByZXF1aXJlKFwidXVpZFwiKTtcbmNvbnN0IEFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zyb250ZW5kL0FwcFwiKSk7XG4oMCwgdXVpZF8xLnY0KSgpOyAvLyDih6ggJzliMWRlYjRkLTNiN2QtNGJhZC05YmRkLTJiMGQ3YjNkY2I2ZCdcbnZhciBQcmlvcml0eTtcbihmdW5jdGlvbiAoUHJpb3JpdHkpIHtcbiAgICBQcmlvcml0eVtQcmlvcml0eVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIFByaW9yaXR5W1ByaW9yaXR5W1wiTG93XCJdID0gMV0gPSBcIkxvd1wiO1xuICAgIFByaW9yaXR5W1ByaW9yaXR5W1wiSGlnaFwiXSA9IDJdID0gXCJIaWdoXCI7XG59KShQcmlvcml0eSB8fCAoZXhwb3J0cy5Qcmlvcml0eSA9IFByaW9yaXR5ID0ge30pKTtcbmNvbnN0IHRhc2tTZWFyY2hlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VGFza3NCeVByb2plY3QgPSAocHJvamVjdE5hbWUsIHRhc2tzKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFRhc2tzQnlUb2RheSA9ICh0YXNrcykgPT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZURhdGUgPT09IHRvZGF5KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFRhc2tzQnlJbmJveCA9ICh0YXNrcykgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBcImluYm94XCIpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgZ2V0VGFza3NCeVByb2plY3QsIGdldFRhc2tzQnlJbmJveCwgZ2V0VGFza3NCeVRvZGF5IH07XG59KSgpO1xuY29uc3QgdG9Eb0FwcCA9ICgodHMpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBsZXQgY3VycmVudFRhc2tzID0gW107XG4gICAgbGV0IHByb2plY3RzID0gWydJbmJveCcsICdUb2RheScsICdJY2UnLCAnU2Nob29sJ107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IHRhc2tTZWFyY2hlciA9IHRzO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKGlzUHJvamVjdE5hbWVVbmlxdWUocHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgcHJvamVjdHMgPSBbLi4ucHJvamVjdHMsIHByb2plY3ROYW1lXTtcbiAgICAgICAgaWYgKG9uUHJvamVjdExpc3RDaGFuZ2VkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICAgICAgb25Qcm9qZWN0TGlzdENoYW5nZWQocHJvamVjdExpc3QpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBpc1Byb2plY3ROYW1lVW5pcXVlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdCAhPT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiSW5ib3hcIiB8fCBwcm9qZWN0TmFtZSA9PT0gXCJUb2RheVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbmV3UHJvamVjdExpc3QgPSBbXTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gcHJvamVjdClcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdHMgPSBbLi4ubmV3UHJvamVjdExpc3RdO1xuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gKDAsIHV1aWRfMS52NCkoKTtcbiAgICAgICAgdGFza3MucHVzaChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRvZG8pLCB7IGlkIH0pKTtcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgIH07XG4gICAgY29uc3QgZWRpdFRhc2sgPSAoaWQsIHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFza3MgPSB0YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICBpZiAoaWQgPT09IHRhc2suaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9kbyksIHsgaWQgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrcyA9IFsuLi5uZXdUYXNrc107XG4gICAgICAgIHNldEN1cnJlbnRUYXNrcyhnZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgICAgICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAoaWQgIT09IHRhc2suaWQpXG4gICAgICAgICAgICAgICAgbmV3VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tzID0gWy4uLm5ld1Rhc2tzXTtcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB0YXNrcztcbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZXMgPSAoKSA9PiBwcm9qZWN0cztcbiAgICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGdldEFsbFRhc2tzKCk7XG4gICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tzRm9yRGVsZXRlZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0YXNrKSwgeyBwcm9qZWN0OiBcIkluYm94XCIgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob25UYXNrTGlzdENoYW5nZWQpXG4gICAgICAgICAgICBvblRhc2tMaXN0Q2hhbmdlZChnZXRUYXNrc0J5UHJvamVjdChnZXRDdXJyZW50UHJvamVjdCgpKSwgZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIGlmIChvblByb2plY3RMaXN0Q2hhbmdlZClcbiAgICAgICAgICAgIG9uUHJvamVjdExpc3RDaGFuZ2VkKGdldFByb2plY3ROYW1lcygpKTtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVUb1ByZXZpb3VzUHJvamVjdCA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoIWlzTm90Q3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQcm9qZWN0ID0gcHJvamVjdHNbaW5kZXggLSAxXTtcbiAgICAgICAgaWYgKHByZXZpb3VzUHJvamVjdCA9PT0gXCJUb2RheVwiKVxuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QoXCJUb2RheVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJldmlvdXNQcm9qZWN0KTtcbiAgICB9O1xuICAgIGNvbnN0IGlzTm90Q3VycmVudFByb2plY3QgPSAoY3VycmVudFByb2plY3QpID0+IGN1cnJlbnRQcm9qZWN0ID09PSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IGdldEN1cnJlbnRUYXNrcyA9ICgpID0+IGN1cnJlbnRUYXNrcztcbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IGlzUHJvamVjdFRoZXJlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdCA9PT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKGlzUHJvamVjdFRoZXJlKHByb2plY3ROYW1lKSlcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWU7XG4gICAgICAgIGlmIChvblByb2plY3RMaXN0Q2hhbmdlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TmFtZXMoKTtcbiAgICAgICAgICAgIG9uUHJvamVjdExpc3RDaGFuZ2VkKHByb2plY3RMaXN0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaXNOZXdDdXJyZW50UHJvamVjdFRvZGF5ID0gKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0TmFtZSA9PT0gXCJUb2RheVwiO1xuICAgIGNvbnN0IHNldEN1cnJlbnRUYXNrc0J5VG9kYXkgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PT0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XG4gICAgfTtcbiAgICBjb25zdCBzZXRDdXJyZW50VGFza3MgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBpZiAoaXNOZXdDdXJyZW50UHJvamVjdFRvZGF5KHByb2plY3ROYW1lKSlcbiAgICAgICAgICAgIHNldEN1cnJlbnRUYXNrc0J5VG9kYXkoKTsgLy8qRE9ORVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjdXJyZW50VGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgaWYgKG9uVGFza0xpc3RDaGFuZ2VkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGdldEN1cnJlbnRUYXNrcygpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgICAgICBvblRhc2tMaXN0Q2hhbmdlZCh0YXNrTGlzdCwgcHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCBvblByb2plY3RMaXN0Q2hhbmdlZCA9IG51bGw7XG4gICAgY29uc3QgYmluZE9uUHJvamVjdExpc3RDaGFuZ2VkID0gKGNhbGxiYWNrKSA9PiB7IG9uUHJvamVjdExpc3RDaGFuZ2VkID0gY2FsbGJhY2s7IH07XG4gICAgbGV0IG9uVGFza0xpc3RDaGFuZ2VkID0gbnVsbDtcbiAgICBjb25zdCBiaW5kT25UYXNrTGlzdENoYW5nZWQgPSAoY2FsbGJhY2spID0+IHsgb25UYXNrTGlzdENoYW5nZWQgPSBjYWxsYmFjazsgfTtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHsgdGl0bGU6IFwiRG8gdGhlIGRpc2hlc1wiLCBkZXNjcmlwdGlvbjogXCJEbyBpdCBzb29uIVwiLCBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLCBwcmlvcml0eTogUHJpb3JpdHkuTm9uZSwgcHJvamVjdDogXCJJbmJveFwiLCBpZDogKDAsIHV1aWRfMS52NCkoKSB9KTtcbiAgICAgICAgdGFza3MucHVzaCh7IHRpdGxlOiBcIkRvIHRoZSBkaXNoZXMgbm93XCIsIGR1ZURhdGU6IFwiMjAyNC0wOC0xMFwiLCBwcmlvcml0eTogUHJpb3JpdHkuTm9uZSwgcHJvamVjdDogXCJJbmJveFwiLCBpZDogKDAsIHV1aWRfMS52NCkoKSB9KTtcbiAgICAgICAgdGFza3MucHVzaCh7IHRpdGxlOiBcIkRvIHRoZSBkaXNoZXMgeWVzdGVyZGF5XCIsIGR1ZURhdGU6IFwiMjAyNS0xMi0xMVwiLCBwcmlvcml0eTogUHJpb3JpdHkuTm9uZSwgcHJvamVjdDogXCJJbmJveFwiLCBpZDogKDAsIHV1aWRfMS52NCkoKSB9KTtcbiAgICAgICAgdGFza3MucHVzaCh7IHRpdGxlOiBcIkRvIHRoZSBkaXNoZXMgdG9kYXkhXCIsIGR1ZURhdGU6IFwiMjAyNC0wMi0yN1wiLCBwcmlvcml0eTogUHJpb3JpdHkuSGlnaCwgcHJvamVjdDogXCJTY2hvb2xcIiwgaWQ6ICgwLCB1dWlkXzEudjQpKCkgfSk7XG4gICAgICAgIHRhc2tzLnB1c2goeyB0aXRsZTogXCJEbyB0aGUgZGlzaGVzIHRvZGF5IVwiLCBkdWVEYXRlOiBcIjIwMjQtMDUtMDJcIiwgcHJpb3JpdHk6IFByaW9yaXR5LkxvdywgcHJvamVjdDogXCJJY2VcIiwgaWQ6ICgwLCB1dWlkXzEudjQpKCkgfSk7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgICAgIHNldEN1cnJlbnRUYXNrcyhcIkluYm94XCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRDdXJyZW50UHJvamVjdCgpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRDdXJyZW50VGFza3MoKSlcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGluaXRpYWxpemUsIGdldFByb2plY3ROYW1lcywgZ2V0Q3VycmVudFByb2plY3QsIGdldEN1cnJlbnRUYXNrcyxcbiAgICAgICAgZWRpdFRhc2ssIGFkZFRhc2ssIGRlbGV0ZVRhc2ssIGdldFRhc2tzQnlQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCxcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzLCBiaW5kT25Qcm9qZWN0TGlzdENoYW5nZWQsIGJpbmRPblRhc2tMaXN0Q2hhbmdlZCwgdXBkYXRlVGFza3NGb3JEZWxldGVkUHJvamVjdCxcbiAgICAgICAgbW92ZVRvUHJldmlvdXNQcm9qZWN0XG4gICAgfTtcbn0pKHRhc2tTZWFyY2hlcik7XG5jb25zdCBhcHAgPSAoMCwgQXBwXzEuZGVmYXVsdCkodG9Eb0FwcCk7XG5hcHAuaW5pdGlhbGl6ZSgpO1xuLy8gdG9Eb0FwcC5pbml0aWFsaXplKClcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTUFYXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYXguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25pbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVRvVjZcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YxVG9WLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y1LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZUb1YxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NlRvVi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY3XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92Ni5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZlcnNpb24uZGVmYXVsdDtcbiAgfVxufSk7XG52YXIgX21heCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4LmpzXCIpKTtcbnZhciBfbmlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uaWwuanNcIikpO1xudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKSk7XG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcbnZhciBfdjFUb1YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKSk7XG52YXIgX3YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92My5qc1wiKSk7XG52YXIgX3YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NC5qc1wiKSk7XG52YXIgX3Y0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NS5qc1wiKSk7XG52YXIgX3Y1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92Ni5qc1wiKSk7XG52YXIgX3Y2VG9WID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NlRvVjEuanNcIikpO1xudmFyIF92NiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjcuanNcIikpO1xudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xudmFyIF92ZXJzaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92ZXJzaW9uLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICdmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYnOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuXG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIHZhciB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICB2YXIgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuXG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICB2YXIgb2xkYSA9IGE7XG4gICAgdmFyIG9sZGIgPSBiO1xuICAgIHZhciBvbGRjID0gYztcbiAgICB2YXIgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG5cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIHZhciBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuXG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cblxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gbWQ1OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJhbmRvbVVVSURcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuICB2YXIgdjtcbiAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTtcblxuICAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7XG5cbiAgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7XG5cbiAgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5mdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIHZhciBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICB2YXIgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgdmFyIGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgdmFyIE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgdmFyIE0gPSBuZXcgQXJyYXkoTik7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuICAgIE1bX2ldID0gYXJyO1xuICB9XG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1bX2kyXVt0XTtcbiAgICB9XG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcbiAgICBmb3IgKHZhciBfdDIgPSAwOyBfdDIgPCA4MDsgKytfdDIpIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihfdDIgLyAyMCk7XG4gICAgICB2YXIgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW190Ml0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gc2hhMTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdW5zYWZlU3RyaW5naWZ5O1xudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICAvL1xuICAvLyBOb3RlIHRvIGZ1dHVyZS1zZWxmOiBObywgeW91IGNhbid0IHJlbW92ZSB0aGUgYHRvTG93ZXJDYXNlKClgIGNhbGwuXG4gIC8vIFJFRjogaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNjc3I2lzc3VlY29tbWVudC0xNzU3MzUxMzUxXG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIHZhciB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG4gIHJldHVybiB1dWlkO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5naWZ5OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGU7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXE7XG5cbiAgLy8gdjEgb25seTogVXNlIGNhY2hlZCBgbm9kZWAgYW5kIGBjbG9ja3NlcWAgdmFsdWVzXG4gIGlmICghb3B0aW9ucy5fdjYpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIG5vZGUgPSBfbm9kZUlkO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXE7XG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIGNhc2VzIHdoZXJlIHdlIG5lZWQgZW50cm9weS4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3Vlc1xuICAvLyByZWxhdGVkIHRvIGluc3VmZmljaWVudCBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gICAgLy8gUmFuZG9taXplIG5vZGVcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICBub2RlID0gW3NlZWRCeXRlc1swXSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuXG4gICAgICAvLyB2MSBvbmx5OiBjYWNoZSBub2RlIHZhbHVlIGZvciByZXVzZVxuICAgICAgaWYgKCFfbm9kZUlkICYmICFvcHRpb25zLl92Nikge1xuICAgICAgICAvLyBwZXIgUkZDNDEyMiA0LjU6IFNldCBNQUMgbXVsdGljYXN0IGJpdCAodjEgb25seSlcbiAgICAgICAgbm9kZVswXSB8PSAweDAxOyAvLyBTZXQgbXVsdGljYXN0IGJpdFxuXG4gICAgICAgIF9ub2RlSWQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJhbmRvbWl6ZSBjbG9ja3NlcVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgICAgaWYgKF9jbG9ja3NlcSA9PT0gdW5kZWZpbmVkICYmICFvcHRpb25zLl92Nikge1xuICAgICAgICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB2MSAmIHY2IHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzbyB0aW1lIGlzXG4gIC8vIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjE7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2MVRvVjY7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogQ29udmVydCBhIHYxIFVVSUQgdG8gYSB2NiBVVUlEXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8VWludDhBcnJheX0gdXVpZCAtIFRoZSB2MSBVVUlEIHRvIGNvbnZlcnQgdG8gdjZcbiAqIEByZXR1cm5zIHtzdHJpbmd8VWludDhBcnJheX0gVGhlIHY2IFVVSUQgYXMgdGhlIHNhbWUgdHlwZSBhcyB0aGUgYHV1aWRgIGFyZ1xuICogKHN0cmluZyBvciBVaW50OEFycmF5KVxuICovXG5mdW5jdGlvbiB2MVRvVjYodXVpZCkge1xuICB2YXIgdjFCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBfcGFyc2UuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICB2YXIgdjZCeXRlcyA9IF92MVRvVjYodjFCeXRlcyk7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKHY2Qnl0ZXMpIDogdjZCeXRlcztcbn1cblxuLy8gRG8gdGhlIGZpZWxkIHRyYW5zZm9ybWF0aW9uIG5lZWRlZCBmb3IgdjEgLT4gdjZcbmZ1bmN0aW9uIF92MVRvVjYodjFCeXRlcywgcmFuZG9taXplID0gZmFsc2UpIHtcbiAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKHYxQnl0ZXNbNl0gJiAweDBmKSA8PCA0IHwgdjFCeXRlc1s3XSA+PiA0ICYgMHgwZiwgKHYxQnl0ZXNbN10gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbNF0gJiAweGYwKSA+PiA0LCAodjFCeXRlc1s0XSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1s1XSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzVdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzBdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbMF0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbMV0gJiAweGYwKSA+PiA0LCAodjFCeXRlc1sxXSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1syXSAmIDB4ZjApID4+IDQsIDB4NjAgfCB2MUJ5dGVzWzJdICYgMHgwZiwgdjFCeXRlc1szXSwgdjFCeXRlc1s4XSwgdjFCeXRlc1s5XSwgdjFCeXRlc1sxMF0sIHYxQnl0ZXNbMTFdLCB2MUJ5dGVzWzEyXSwgdjFCeXRlc1sxM10sIHYxQnl0ZXNbMTRdLCB2MUJ5dGVzWzE1XSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG52YXIgX21kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tZDUuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxudmFyIHYzID0gKDAsIF92LmRlZmF1bHQpKCd2MycsIDB4MzAsIF9tZC5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHYzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIHZhciBieXRlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG4gIHJldHVybiBieXRlcztcbn1cbnZhciBETlMgPSBleHBvcnRzLkROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xudmFyIFVSTCA9IGV4cG9ydHMuVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5mdW5jdGlvbiB2MzUobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIF9uYW1lc3BhY2U7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gKDAsIF9wYXJzZS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAoKChfbmFtZXNwYWNlID0gbmFtZXNwYWNlKSA9PT0gbnVsbCB8fCBfbmFtZXNwYWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbmFtZXNwYWNlLmxlbmd0aCkgIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9XG5cbiAgICAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWUubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlKTtcbiAgICBieXRlcy5zZXQodmFsdWUsIG5hbWVzcGFjZS5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaGZ1bmMoYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7XG4gIH0gY2F0Y2ggKGVycikge31cblxuICAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9uYXRpdmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25hdGl2ZS5qc1wiKSk7XG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQoKTtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHY0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xudmFyIF9zaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NoYTEuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxudmFyIHY1ID0gKDAsIF92LmRlZmF1bHQpKCd2NScsIDB4NTAsIF9zaGEuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2NTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHY2O1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcbnZhciBfdjFUb1YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7IHJldHVybiAociA9IF90b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHsgdmFsdWU6IHQsIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAgfSkgOiBlW3JdID0gdCwgZTsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIGkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiB0IHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXk9fSBidWZcbiAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0XG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB2NihvcHRpb25zID0ge30sIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAvLyB2NiBpcyB2MSB3aXRoIGRpZmZlcmVudCBmaWVsZCBsYXlvdXQsIHNvIHdlIHN0YXJ0IHdpdGggYSB2MSBVVUlELCBhbGJlaXRcbiAgLy8gd2l0aCBzbGlnaHRseSBkaWZmZXJlbnQgYmVoYXZpb3IgYXJvdW5kIGhvdyB0aGUgY2xvY2tfc2VxIGFuZCBub2RlIGZpZWxkc1xuICAvLyBhcmUgcmFuZG9taXplZCwgd2hpY2ggaXMgd2h5IHdlIGNhbGwgdjEgd2l0aCBfdjY6IHRydWUuXG4gIHZhciBieXRlcyA9ICgwLCBfdi5kZWZhdWx0KShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgIF92NjogdHJ1ZVxuICB9KSwgbmV3IFVpbnQ4QXJyYXkoMTYpKTtcblxuICAvLyBSZW9yZGVyIHRoZSBmaWVsZHMgdG8gdjYgbGF5b3V0LlxuICBieXRlcyA9ICgwLCBfdjFUb1YuZGVmYXVsdCkoYnl0ZXMpO1xuXG4gIC8vIFJldHVybiBhcyBhIGJ5dGUgYXJyYXkgaWYgcmVxdWVzdGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG4gIHJldHVybiAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHY2VG9WMTtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLyoqXG4gKiBDb252ZXJ0IGEgdjYgVVVJRCB0byBhIHYxIFVVSURcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xVaW50OEFycmF5fSB1dWlkIC0gVGhlIHY2IFVVSUQgdG8gY29udmVydCB0byB2NlxuICogQHJldHVybnMge3N0cmluZ3xVaW50OEFycmF5fSBUaGUgdjEgVVVJRCBhcyB0aGUgc2FtZSB0eXBlIGFzIHRoZSBgdXVpZGAgYXJnXG4gKiAoc3RyaW5nIG9yIFVpbnQ4QXJyYXkpXG4gKi9cbmZ1bmN0aW9uIHY2VG9WMSh1dWlkKSB7XG4gIHZhciB2NkJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9wYXJzZS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gIHZhciB2MUJ5dGVzID0gX3Y2VG9WMSh2NkJ5dGVzKTtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkodjFCeXRlcykgOiB2MUJ5dGVzO1xufVxuXG4vLyBEbyB0aGUgZmllbGQgdHJhbnNmb3JtYXRpb24gbmVlZGVkIGZvciB2NiAtPiB2MVxuZnVuY3Rpb24gX3Y2VG9WMSh2NkJ5dGVzKSB7XG4gIHJldHVybiBVaW50OEFycmF5Lm9mKCh2NkJ5dGVzWzNdICYgMHgwZikgPDwgNCB8IHY2Qnl0ZXNbNF0gPj4gNCAmIDB4MGYsICh2NkJ5dGVzWzRdICYgMHgwZikgPDwgNCB8ICh2NkJ5dGVzWzVdICYgMHhmMCkgPj4gNCwgKHY2Qnl0ZXNbNV0gJiAweDBmKSA8PCA0IHwgdjZCeXRlc1s2XSAmIDB4MGYsIHY2Qnl0ZXNbN10sICh2NkJ5dGVzWzFdICYgMHgwZikgPDwgNCB8ICh2NkJ5dGVzWzJdICYgMHhmMCkgPj4gNCwgKHY2Qnl0ZXNbMl0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbM10gJiAweGYwKSA+PiA0LCAweDEwIHwgKHY2Qnl0ZXNbMF0gJiAweGYwKSA+PiA0LCAodjZCeXRlc1swXSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1sxXSAmIDB4ZjApID4+IDQsIHY2Qnl0ZXNbOF0sIHY2Qnl0ZXNbOV0sIHY2Qnl0ZXNbMTBdLCB2NkJ5dGVzWzExXSwgdjZCeXRlc1sxMl0sIHY2Qnl0ZXNbMTNdLCB2NkJ5dGVzWzE0XSwgdjZCeXRlc1sxNV0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogVVVJRCBWNyAtIFVuaXggRXBvY2ggdGltZS1iYXNlZCBVVUlEXG4gKlxuICogVGhlIElFVEYgaGFzIHB1Ymxpc2hlZCBSRkM5NTYyLCBpbnRyb2R1Y2luZyAzIG5ldyBVVUlEIHZlcnNpb25zICg2LDcsOCkuIFRoaXNcbiAqIGltcGxlbWVudGF0aW9uIG9mIFY3IGlzIGJhc2VkIG9uIHRoZSBhY2NlcHRlZCwgdGhvdWdoIG5vdCB5ZXQgYXBwcm92ZWQsXG4gKiByZXZpc2lvbnMuXG4gKlxuICogUkZDIDk1NjI6aHR0cHM6Ly93d3cucmZjLWVkaXRvci5vcmcvcmZjL3JmYzk1NjIuaHRtbCBVbml2ZXJzYWxseSBVbmlxdWVcbiAqIElEZW50aWZpZXJzIChVVUlEcylcblxuICpcbiAqIFNhbXBsZSBWNyB2YWx1ZTpcbiAqIGh0dHBzOi8vd3d3LnJmYy1lZGl0b3Iub3JnL3JmYy9yZmM5NTYyLmh0bWwjbmFtZS1leGFtcGxlLW9mLWEtdXVpZHY3LXZhbHVlXG4gKlxuICogTW9ub3RvbmljIEJpdCBMYXlvdXQ6IFJGQyByZmM5NTYyLjYuMiBNZXRob2QgMSwgRGVkaWNhdGVkIENvdW50ZXIgQml0cyByZWY6XG4gKiAgICAgaHR0cHM6Ly93d3cucmZjLWVkaXRvci5vcmcvcmZjL3JmYzk1NjIuaHRtbCNzZWN0aW9uLTYuMi01LjFcbiAqXG4gKiAgIDAgICAgICAgICAgICAgICAgICAgMSAgICAgICAgICAgICAgICAgICAyICAgICAgICAgICAgICAgICAgIDMgMCAxIDIgMyA0IDUgNlxuICogICA3IDggOSAwIDEgMiAzIDQgNSA2IDcgOCA5IDAgMSAyIDMgNCA1IDYgNyA4IDkgMCAxXG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqICB8ICAgICAgICAgICAgICAgICAgICAgICAgICB1bml4X3RzX21zICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfCAgICAgICAgICB1bml4X3RzX21zICAgICAgICAgICB8ICB2ZXIgIHwgICAgICAgIHNlcV9oaSAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHx2YXJ8ICAgICAgICAgICAgICAgc2VxX2xvdyAgICAgICAgICAgICAgIHwgICAgICAgIHJhbmQgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKlxuICogc2VxIGlzIGEgMzEgYml0IHNlcmlhbGl6ZWQgY291bnRlcjsgY29tcHJpc2VkIG9mIDEyIGJpdCBzZXFfaGkgYW5kIDE5IGJpdFxuICogc2VxX2xvdywgYW5kIHJhbmRvbWx5IGluaXRpYWxpemVkIHVwb24gdGltZXN0YW1wIGNoYW5nZS4gMzEgYml0IGNvdW50ZXIgc2l6ZVxuICogd2FzIHNlbGVjdGVkIGFzIGFueSBiaXR3aXNlIG9wZXJhdGlvbnMgaW4gbm9kZSBhcmUgZG9uZSBhcyBfc2lnbmVkXyAzMiBiaXRcbiAqIGludHMuIHdlIGV4Y2x1ZGUgdGhlIHNpZ24gYml0LlxuICovXG5cbnZhciBfc2VxTG93ID0gbnVsbDtcbnZhciBfc2VxSGlnaCA9IG51bGw7XG52YXIgX21zZWNzID0gMDtcbmZ1bmN0aW9uIHY3KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIGluaXRpYWxpemUgYnVmZmVyIGFuZCBwb2ludGVyXG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBuZXcgVWludDhBcnJheSgxNik7XG5cbiAgLy8gcm5kcyBpcyBVaW50OEFycmF5KDE2KSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXNcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gIC8vIG1pbGxpc2Vjb25kcyBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpO1xuXG4gIC8vIHNlcSBpcyB1c2VyIHByb3ZpZGVkIDMxIGJpdCBjb3VudGVyXG4gIHZhciBzZXEgPSBvcHRpb25zLnNlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zZXEgOiBudWxsO1xuXG4gIC8vIGluaXRpYWxpemUgbG9jYWwgc2VxIGhpZ2gvbG93IHBhcnRzXG4gIHZhciBzZXFIaWdoID0gX3NlcUhpZ2g7XG4gIHZhciBzZXFMb3cgPSBfc2VxTG93O1xuXG4gIC8vIGNoZWNrIGlmIGNsb2NrIGhhcyBhZHZhbmNlZCBhbmQgdXNlciBoYXMgbm90IHByb3ZpZGVkIG1zZWNzXG4gIGlmIChtc2VjcyA+IF9tc2VjcyAmJiBvcHRpb25zLm1zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBfbXNlY3MgPSBtc2VjcztcblxuICAgIC8vIHVubGVzcyB1c2VyIHByb3ZpZGVkIHNlcSwgcmVzZXQgc2VxIHBhcnRzXG4gICAgaWYgKHNlcSAhPT0gbnVsbCkge1xuICAgICAgc2VxSGlnaCA9IG51bGw7XG4gICAgICBzZXFMb3cgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHdlIGhhdmUgYSB1c2VyIHByb3ZpZGVkIHNlcVxuICBpZiAoc2VxICE9PSBudWxsKSB7XG4gICAgLy8gdHJpbSBwcm92aWRlZCBzZXEgdG8gMzEgYml0cyBvZiB2YWx1ZSwgYXZvaWRpbmcgb3ZlcmZsb3dcbiAgICBpZiAoc2VxID4gMHg3ZmZmZmZmZikge1xuICAgICAgc2VxID0gMHg3ZmZmZmZmZjtcbiAgICB9XG5cbiAgICAvLyBzcGxpdCBwcm92aWRlZCBzZXEgaW50byBoaWdoL2xvdyBwYXJ0c1xuICAgIHNlcUhpZ2ggPSBzZXEgPj4+IDE5ICYgMHhmZmY7XG4gICAgc2VxTG93ID0gc2VxICYgMHg3ZmZmZjtcbiAgfVxuXG4gIC8vIHJhbmRvbWx5IGluaXRpYWxpemUgc2VxXG4gIGlmIChzZXFIaWdoID09PSBudWxsIHx8IHNlcUxvdyA9PT0gbnVsbCkge1xuICAgIHNlcUhpZ2ggPSBybmRzWzZdICYgMHg3ZjtcbiAgICBzZXFIaWdoID0gc2VxSGlnaCA8PCA4IHwgcm5kc1s3XTtcbiAgICBzZXFMb3cgPSBybmRzWzhdICYgMHgzZjsgLy8gcGFkIGZvciB2YXJcbiAgICBzZXFMb3cgPSBzZXFMb3cgPDwgOCB8IHJuZHNbOV07XG4gICAgc2VxTG93ID0gc2VxTG93IDw8IDUgfCBybmRzWzEwXSA+Pj4gMztcbiAgfVxuXG4gIC8vIGluY3JlbWVudCBzZXEgaWYgd2l0aGluIG1zZWNzIHdpbmRvd1xuICBpZiAobXNlY3MgKyAxMDAwMCA+IF9tc2VjcyAmJiBzZXEgPT09IG51bGwpIHtcbiAgICBpZiAoKytzZXFMb3cgPiAweDdmZmZmKSB7XG4gICAgICBzZXFMb3cgPSAwO1xuICAgICAgaWYgKCsrc2VxSGlnaCA+IDB4ZmZmKSB7XG4gICAgICAgIHNlcUhpZ2ggPSAwO1xuXG4gICAgICAgIC8vIGluY3JlbWVudCBpbnRlcm5hbCBfbXNlY3MuIHRoaXMgYWxsb3dzIHVzIHRvIGNvbnRpbnVlIGluY3JlbWVudGluZ1xuICAgICAgICAvLyB3aGlsZSBzdGF5aW5nIG1vbm90b25pYy4gTm90ZSwgb25jZSB3ZSBoaXQgMTBrIG1pbGxpc2Vjb25kcyBiZXlvbmQgc3lzdGVtXG4gICAgICAgIC8vIGNsb2NrLCB3ZSB3aWxsIHJlc2V0IGJyZWFraW5nIG1vbm90b25pY2l0eSAoYWZ0ZXIgKDJeMzEpKjEwMDAwIGdlbmVyYXRpb25zKVxuICAgICAgICBfbXNlY3MrKztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVzZXR0aW5nOyB3ZSBoYXZlIGFkdmFuY2VkIG1vcmUgdGhhblxuICAgIC8vIDEwayBtaWxsaXNlY29uZHMgYmV5b25kIHN5c3RlbSBjbG9ja1xuICAgIF9tc2VjcyA9IG1zZWNzO1xuICB9XG4gIF9zZXFIaWdoID0gc2VxSGlnaDtcbiAgX3NlcUxvdyA9IHNlcUxvdztcblxuICAvLyBbYnl0ZXMgMC01XSA0OCBiaXRzIG9mIGxvY2FsIHRpbWVzdGFtcFxuICBiW2krK10gPSBfbXNlY3MgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBiW2krK10gPSBfbXNlY3MgLyAweDEwMDAwMDAgJiAweGZmO1xuICBiW2krK10gPSBfbXNlY3MgLyAweDEwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAgJiAweGZmO1xuICBiW2krK10gPSBfbXNlY3MgJiAweGZmO1xuXG4gIC8vIFtieXRlIDZdIC0gc2V0IDQgYml0cyBvZiB2ZXJzaW9uICg3KSB3aXRoIGZpcnN0IDQgYml0cyBzZXFfaGlcbiAgYltpKytdID0gc2VxSGlnaCA+Pj4gNCAmIDB4MGYgfCAweDcwO1xuXG4gIC8vIFtieXRlIDddIHJlbWFpbmluZyA4IGJpdHMgb2Ygc2VxX2hpXG4gIGJbaSsrXSA9IHNlcUhpZ2ggJiAweGZmO1xuXG4gIC8vIFtieXRlIDhdIC0gdmFyaWFudCAoMiBiaXRzKSwgZmlyc3QgNiBiaXRzIHNlcV9sb3dcbiAgYltpKytdID0gc2VxTG93ID4+PiAxMyAmIDB4M2YgfCAweDgwO1xuXG4gIC8vIFtieXRlIDldIDggYml0cyBzZXFfbG93XG4gIGJbaSsrXSA9IHNlcUxvdyA+Pj4gNSAmIDB4ZmY7XG5cbiAgLy8gW2J5dGUgMTBdIHJlbWFpbmluZyA1IGJpdHMgc2VxX2xvdywgMyBiaXRzIHJhbmRvbVxuICBiW2krK10gPSBzZXFMb3cgPDwgMyAmIDB4ZmYgfCBybmRzWzEwXSAmIDB4MDc7XG5cbiAgLy8gW2J5dGVzIDExLTE1XSBhbHdheXMgcmFuZG9tXG4gIGJbaSsrXSA9IHJuZHNbMTFdO1xuICBiW2krK10gPSBybmRzWzEyXTtcbiAgYltpKytdID0gcm5kc1sxM107XG4gIGJbaSsrXSA9IHJuZHNbMTRdO1xuICBiW2krK10gPSBybmRzWzE1XTtcbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlZ2V4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdleC5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgX3JlZ2V4LmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdmVyc2lvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=