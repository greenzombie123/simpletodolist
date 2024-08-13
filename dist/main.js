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
        grid-template: repeat(4, auto)/ repeat(3, 1fr);
        grid-template-areas:
            "title title title"
            "descript descript descript"
            "date project priority"
            "button1 . button2"
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

        button{
            padding: 5px 10px;
            font-size: 20px;
            width: 100px;
            margin-top: 30px;
        }

        .addTaskButton{
            grid-area: button1;
            place-self: end;
        }

        .cancelButton{
            grid-area: button2;
            place-self: start;
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

        .addProjectButton, .cancelButton {
            padding: 5px;
            width: min-content;
            font-size: inherit;
            justify-self: center;
            align-self: center;
            margin: 0;
        }

        .cancelButton {
            grid-area: rightButton;
        }

        .addProjectButton {
            grid-area: leftButton;
        }
    }


}`, "",{"version":3,"sources":["webpack://./src/frontend/Dialog/Dialog.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;;IAEnB;QACI,aAAa;QACb,8CAA8C;QAC9C;;;;;QAKA;QACA,aAAa;QACb,wBAAwB;;QAExB;;;YAGI,aAAa;YACb,sBAAsB;YACtB,eAAe;YACf,kBAAkB;QACtB;;QAEA;YACI,gBAAgB;;YAEhB;gBACI,YAAY;gBACZ,kBAAkB;YACtB;QACJ;;QAEA;YACI,mBAAmB;;YAEnB;gBACI,YAAY;gBACZ,kBAAkB;YACtB;QACJ;;QAEA;YACI,eAAe;YACf,oBAAoB;;YAEpB;gBACI,kBAAkB;;gBAElB;oBACI,SAAS;oBACT,kBAAkB;oBAClB,gBAAgB;gBACpB;YACJ;QACJ;;QAEA;;YAEI;gBACI,eAAe;gBACf,kBAAkB;gBAClB,aAAa;gBACb,sBAAsB;;gBAEtB;oBACI,YAAY;gBAChB;YACJ;;QAEJ;;QAEA;YACI,mBAAmB;YACnB,oBAAoB;YACpB,aAAa;YACb,YAAY;YACZ,8CAA8C;YAC9C;;6CAEiC;YACjC,uBAAuB;YACvB,mBAAmB;;YAEnB;gBACI,eAAe;gBACf,gBAAgB;gBAChB,kBAAkB;YACtB;;YAEA;gBACI,eAAe;YACnB;;YAEA;;gBAEI,wBAAwB;gBACxB,yBAAyB;gBACzB,oBAAoB;YACxB;;YAEA;gBACI,qBAAqB;gBACrB,mDAAyD;YAC7D;;YAEA;gBACI,sBAAsB;gBACtB,mDAA0D;YAC9D;QACJ;;QAEA;YACI,iBAAiB;YACjB,eAAe;YACf,YAAY;YACZ,gBAAgB;QACpB;;QAEA;YACI,kBAAkB;YAClB,eAAe;QACnB;;QAEA;YACI,kBAAkB;YAClB,iBAAiB;QACrB;IACJ;;IAEA;QACI,aAAa;QACb,2CAA2C;QAC3C;;;;QAIA;QACA,wBAAwB;QACxB,eAAe;;QAEf;YACI,gBAAgB;YAChB,kBAAkB;QACtB;;QAEA;YACI,gBAAgB;;YAEhB,kBAAkB;;YAElB;gBACI,YAAY;gBACZ,WAAW;gBACX,kBAAkB;YACtB;;YAEA;gBACI,aAAa;gBACb,kBAAkB;gBAClB,kBAAkB;gBAClB,WAAW;gBACX,UAAU;gBACV,gBAAgB;YACpB;QACJ;;QAEA;YACI,YAAY;YACZ,kBAAkB;YAClB,kBAAkB;YAClB,oBAAoB;YACpB,kBAAkB;YAClB,SAAS;QACb;;QAEA;YACI,sBAAsB;QAC1B;;QAEA;YACI,qBAAqB;QACzB;IACJ;;;AAGJ","sourcesContent":["dialog {\n    --buttonSize: 30px;\n    --modalWidth: 500px;\n\n    .modal {\n        display: grid;\n        grid-template: repeat(4, auto)/ repeat(3, 1fr);\n        grid-template-areas:\n            \"title title title\"\n            \"descript descript descript\"\n            \"date project priority\"\n            \"button1 . button2\"\n        ;\n        row-gap: 10px;\n        width: var(--modalWidth);\n\n        .titleLabel,\n        .descriptLabel,\n        .dateLabel {\n            display: flex;\n            flex-direction: column;\n            font-size: 18px;\n            margin-bottom: 5px;\n        }\n\n        .titleLabel {\n            grid-area: title;\n\n            #titleInput {\n                padding: 5px;\n                font-size: inherit;\n            }\n        }\n\n        .descriptLabel {\n            grid-area: descript;\n\n            #descriptTextArea {\n                padding: 5px;\n                font-size: inherit;\n            }\n        }\n\n        .dateContainer {\n            grid-area: date;\n            justify-self: center;\n\n            .dateLabel {\n                text-align: center;\n\n                .dateInput {\n                    flex: 10%;\n                    width: min-content;\n                    margin-top: 10px;\n                }\n            }\n        }\n\n        .projectBox {\n\n            .projectLabel {\n                font-size: 20px;\n                text-align: center;\n                display: flex;\n                flex-direction: column;\n\n                .projectSelect {\n                    color: black;\n                }\n            }\n\n        }\n\n        .priorityDiv {\n            grid-area: priority;\n            justify-self: center;\n            display: grid;\n            width: 150px;\n            grid-template: 20px 40px / 1fr max-content 1fr;\n            grid-template-areas:\n                \"label label label\"\n                \"leftButton text rightButton\";\n            justify-content: center;\n            align-items: center;\n\n            .priorityLabel {\n                font-size: 18px;\n                grid-area: label;\n                text-align: center;\n            }\n\n            .priorityText {\n                grid-area: text;\n            }\n\n            .priorityLeftButton,\n            .priorityRightButton {\n                width: var(--buttonSize);\n                height: var(--buttonSize);\n                justify-self: center;\n            }\n\n            .priorityLeftButton {\n                grid-area: leftButton;\n                background: url(../../assets/arrow-left-bold-outline.svg);\n            }\n\n            .priorityRightButton {\n                grid-area: rightButton;\n                background: url(../../assets/arrow-right-bold-outline.svg);\n            }\n        }\n\n        button{\n            padding: 5px 10px;\n            font-size: 20px;\n            width: 100px;\n            margin-top: 30px;\n        }\n\n        .addTaskButton{\n            grid-area: button1;\n            place-self: end;\n        }\n\n        .cancelButton{\n            grid-area: button2;\n            place-self: start;\n        }\n    }\n\n    .projectModal {\n        display: grid;\n        grid-template: 1fr 2fr 1fr / repeat(2, 1fr);\n        grid-template-areas:\n            \"label label\"\n            \"input input\"\n            \"leftButton rightButton\"\n        ;\n        width: var(--modalWidth);\n        font-size: 20px;\n\n        .projectNameLabel {\n            grid-area: label;\n            text-align: center;\n        }\n\n        .projectNameInputWrapper {\n            grid-area: input;\n\n            position: relative;\n\n            #projectNameInput {\n                padding: 2px;\n                width: 100%;\n                font-size: inherit;\n            }\n\n            .warningText {\n                display: none;\n                position: absolute;\n                text-align: center;\n                width: 100%;\n                color: red;\n                font-weight: 700;\n            }\n        }\n\n        .addProjectButton, .cancelButton {\n            padding: 5px;\n            width: min-content;\n            font-size: inherit;\n            justify-self: center;\n            align-self: center;\n            margin: 0;\n        }\n\n        .cancelButton {\n            grid-area: rightButton;\n        }\n\n        .addProjectButton {\n            grid-area: leftButton;\n        }\n    }\n\n\n}"],"sourceRoot":""}]);
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

    svg {
        position: absolute;
        left: -55px;
        top: 10px;
        cursor: pointer;
        width: 46px;
        height: 46px;
    }
}`, "",{"version":3,"sources":["webpack://./src/frontend/TaskView.css"],"names":[],"mappings":"AAAA;;IAEI,kBAAkB;IAClB,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;;;IAGf,QAAQ;;IAER;QACI,WAAW;IACf;;IAEA;QACI,mBAAmB;QACnB,qBAAqB;QACrB,YAAY;IAChB;;IAEA;QACI,yDAA6C;QAC7C,kBAAkB;QAClB,YAAY;QACZ,MAAM;QACN,eAAe;QACf,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,kBAAkB;QAClB,WAAW;QACX,SAAS;QACT,eAAe;QACf,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":[".task {\n\n    position: relative;\n    display: grid;\n    grid-template: 30px 30px / 1fr min-content;\n    align-items: center;\n    width: 70%;\n    padding: 4px;\n    border: 1px solid black;\n    border-radius: 10px;\n    cursor: pointer;\n\n\n    .title {}\n\n    .date {\n        color: gray;\n    }\n\n    .project {\n        border-radius: 20px;\n        background-color: red;\n        padding: 3px;\n    }\n\n    .trashCan {\n        background-image: url(../assets/trashcan.svg);\n        position: absolute;\n        right: -25px;\n        top: 0;\n        cursor: pointer;\n        width: 25px;\n        height: 25px;\n    }\n\n    svg {\n        position: absolute;\n        left: -55px;\n        top: 10px;\n        cursor: pointer;\n        width: 46px;\n        height: 46px;\n    }\n}"],"sourceRoot":""}]);
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
    const handleGetProjectNamesOnModalOpen = () => model.getProjectNames();
    const handleAddTask = (newToDo) => model.addTask(newToDo);
    const handleChangeCurrentTasks = (projectName) => {
        model.setCurrentProject(projectName);
        model.setCurrentTasks(projectName);
    };
    const handleEditTask = (id, todo) => { model.editTask(id, todo); };
    const handleOpenEditTaskModal = (todo) => {
        editTaskModalView.open();
        editTaskModalView.bindEditTask(handleEditTask, todo.id);
        const currentToDo = model.getCurrentTask(todo.id);
        editTaskModalView.setInput(currentToDo);
    };
    const handleDeleteTask = (id) => model.deleteTask(id);
    const handleAddProject = (projectName) => model.addProject(projectName);
    const handleDeleteProject = (projectName) => {
        model.moveToPreviousProject(projectName);
        model.deleteProject(projectName); // Updates project list on the UI
        model.updateTasksForDeletedProject(projectName);
        const currentProject = model.getCurrentProject();
        model.setCurrentTasks(currentProject);
    };
    const handleOpenDeleteProjectModal = () => deleteProjectModalView.open();
    const handleCompleteTask = (id) => model.toggleTaskCompletion(id);
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
        taskListView.bindCompleteTask(handleCompleteTask);
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
            return false;
        return getProjectNames().some(projectName => projectName.toLowerCase() === userInput.toLowerCase());
    };
    const showError = () => {
        warningText.style.display = "block";
        warningText.textContent = "Project name already exist!";
        setTimeout(() => {
            warningText.style.display = "none";
        }, 2000);
    };
    const showNoTextError = () => {
        warningText.style.display = "block";
        warningText.textContent = "Type a name to add a new project!";
        setTimeout(() => {
            warningText.style.display = "none";
        }, 2000);
    };
    let getProjectNames = null;
    const bindGetProjectNames = (callBack) => getProjectNames = callBack;
    const bindAddProject = (handler) => {
        addProjectButton.addEventListener('click', () => {
            const projectName = getInput();
            if (!projectName) {
                showNoTextError();
                return;
            }
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
            return { title, dueDate, project, priority, isCompleted: false };
        return { title, description, dueDate, project, priority, isCompleted: false };
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
    let isCurrentTaskCompleted;
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
        isCurrentTaskCompleted = todo.isCompleted;
        console.log(todo);
    };
    const getInput = () => {
        const title = titleInput.value;
        const description = descripText.value;
        const dueDate = dateInput.value;
        const project = projectBox.getSelectedProjectName();
        const priority = priorityBox.getPriority();
        if (!description)
            return { title, dueDate, project, priority, isCompleted: isCurrentTaskCompleted };
        return { title, description, dueDate, project, priority, isCompleted: isCurrentTaskCompleted };
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
const types_1 = __webpack_require__(/*! ../types */ "./src/frontend/types.ts");
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
        types_1.Priority.None : priorityText.textContent === "Low" ?
        types_1.Priority.Low : types_1.Priority.High;
    const resetPriority = () => { priorityText.textContent = "None"; };
    const setPriority = (priority) => {
        priority === types_1.Priority.None ? priorityText.textContent = "None" :
            priority === types_1.Priority.Low ? priorityText.textContent = "Low" :
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
                deleteTask(task.id); }, () => { if (completeTask)
                completeTask(task.id); });
        });
    };
    let openEditTask = null;
    const bindOpenEditTask = (handler) => { openEditTask = handler; };
    let deleteTask = null;
    const bindDeleteTask = (handler) => { deleteTask = handler; };
    let completeTask = null;
    const bindCompleteTask = (handler) => { completeTask = handler; };
    return { bindOpenEditTask, render, bindDeleteTask, bindCompleteTask };
};
exports["default"] = createTaskListView;


/***/ }),

/***/ "./src/frontend/TaskView.ts":
/*!**********************************!*\
  !*** ./src/frontend/TaskView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./TaskView.css */ "./src/frontend/TaskView.css");
const types_1 = __webpack_require__(/*! ./types */ "./src/frontend/types.ts");
const createTaskView = (toDo, callBack, handleDeleteTask, handleCompleteTask) => {
    const taskListView = document.querySelector('.taskListView');
    const task = document.createElement('div');
    task.className = 'task';
    task.style.border = toDo.priority === types_1.Priority.High ? "3px solid red" :
        toDo.priority === types_1.Priority.Low ? "2px solid orange" : "1px solid black";
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
    const checkMark = createCheckMarkSVG(toDo, handleCompleteTask, task);
    task.appendChild(title);
    task.appendChild(project);
    task.appendChild(date);
    task.appendChild(trashCan);
    task.appendChild(checkMark.svg);
    taskListView.appendChild(task);
};
const createCheckMarkSVG = (todo, handleCompleteTask, task) => {
    let isCurrentTaskCompleted = todo.isCompleted;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.id = "checkMark";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z");
    path.setAttribute("fill", "gray");
    svg.appendChild(path);
    const changeColor = () => {
        if (isCurrentTaskCompleted) {
            path.setAttribute("fill", "#f4d62c");
            task.style.backgroundColor = "#f4d62c";
        }
        else {
            path.setAttribute("fill", "gray");
            task.style.backgroundColor = "";
        }
    };
    const toggleTask = () => { isCurrentTaskCompleted ? isCurrentTaskCompleted = false : isCurrentTaskCompleted = true; };
    svg.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCompleteTask(todo.id);
        toggleTask();
        changeColor();
    });
    changeColor();
    return { svg };
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>
};
exports["default"] = createTaskView;


/***/ }),

/***/ "./src/frontend/database.ts":
/*!**********************************!*\
  !*** ./src/frontend/database.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ./types */ "./src/frontend/types.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const databaseManager = (() => {
    const taskKey = 'tasks';
    const projectKey = 'project';
    const initialTasks = [
        { title: "Do the dishes now", dueDate: "2024-08-10", priority: types_1.Priority.None, project: "Inbox", id: (0, uuid_1.v4)(), isCompleted: false },
        { title: "Do the dishes", description: "Do it soon!", dueDate: new Date().toISOString().slice(0, 10), priority: types_1.Priority.None, project: "Inbox", id: (0, uuid_1.v4)(), isCompleted: false },
        { title: "Do the dishes yesterday", dueDate: "2025-12-11", priority: types_1.Priority.None, project: "Inbox", id: (0, uuid_1.v4)(), isCompleted: false },
        { title: "Do the dishes today!", dueDate: "2024-02-27", priority: types_1.Priority.High, project: "School", id: (0, uuid_1.v4)(), isCompleted: false },
        { title: "Do the dishes today!", dueDate: "2024-05-02", priority: types_1.Priority.Low, project: "Ice", id: (0, uuid_1.v4)(), isCompleted: false }
    ];
    const initialProjects = ['Inbox', 'Today', 'Ice', 'School', 'Job'];
    const getTasks = () => {
        let storedTasks = localStorage.getItem(taskKey);
        if (!storedTasks) {
            localStorage.setItem(taskKey, JSON.stringify(initialTasks));
            storedTasks = JSON.stringify(initialTasks);
        }
        return JSON.parse(storedTasks);
    };
    const getProjects = () => {
        let storedProjects = localStorage.getItem(projectKey);
        if (!storedProjects) {
            localStorage.setItem(projectKey, JSON.stringify(initialProjects));
            storedProjects = JSON.stringify(initialProjects);
        }
        return JSON.parse(storedProjects);
    };
    const setTasks = (tasks) => {
        localStorage.setItem(taskKey, JSON.stringify(tasks));
    };
    const setProjects = (projects) => {
        localStorage.setItem(projectKey, JSON.stringify(projects));
    };
    return { getProjects, setProjects, setTasks, getTasks };
})();
exports["default"] = databaseManager;


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

/***/ "./src/frontend/types.ts":
/*!*******************************!*\
  !*** ./src/frontend/types.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Priority = void 0;
var Priority;
(function (Priority) {
    Priority[Priority["None"] = 0] = "None";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["High"] = 2] = "High";
})(Priority || (exports.Priority = Priority = {}));


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
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const App_1 = __importDefault(__webpack_require__(/*! ./frontend/App */ "./src/frontend/App.ts"));
const database_1 = __importDefault(__webpack_require__(/*! ./frontend/database */ "./src/frontend/database.ts"));
const toDoApp = (() => {
    // let tasks: ToDo[] = []
    // let currentTasks: ToDo[] = []
    // let projects: string[] = ['Inbox', 'Today', 'Ice', 'School']
    // let currentProject: string
    let tasks = database_1.default.getTasks();
    let currentTasks = [];
    let projects = database_1.default.getProjects();
    let currentProject;
    const addProject = (projectName) => {
        if (isProjectNameUnique(projectName))
            projects = [...projects, projectName];
        if (onProjectListChanged !== null) {
            const projectList = getProjectNames();
            onProjectListChanged(projectList);
        }
        database_1.default.setProjects(projects);
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
        if (onProjectListChanged)
            onProjectListChanged(getProjectNames());
        database_1.default.setProjects(projects);
    };
    const addTask = (todo) => {
        const id = (0, uuid_1.v4)();
        tasks.push(Object.assign(Object.assign({}, todo), { id }));
        setCurrentTasks(getCurrentProject());
        database_1.default.setTasks(tasks);
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
        database_1.default.setTasks(tasks);
    };
    const deleteTask = (id) => {
        let newTasks = [];
        tasks.forEach(task => {
            if (id !== task.id)
                newTasks.push(task);
        });
        tasks = [...newTasks];
        setCurrentTasks(getCurrentProject());
        database_1.default.setTasks(tasks);
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
        database_1.default.setTasks(tasks);
    };
    const moveToPreviousProject = (currentProject) => {
        console.log(currentProject);
        if (isProjectNotCurrentProject(currentProject))
            return;
        const projects = getProjectNames();
        const index = projects.findIndex(project => project === currentProject);
        const previousProject = projects[index - 1];
        if (previousProject === "Today") {
            setCurrentProject("Today");
        }
        else {
            setCurrentProject(previousProject);
        }
    };
    const isProjectNotCurrentProject = (currentProject) => currentProject !== getCurrentProject();
    const getCurrentTasks = () => currentTasks;
    const getCurrentProject = () => currentProject;
    const isProjectThere = (projectName) => {
        return projects.some(project => project === projectName);
    };
    const setCurrentProject = (projectName) => {
        if (isProjectThere(projectName))
            currentProject = projectName;
    };
    const isNewCurrentProjectToday = (projectName) => projectName === "Today";
    const setCurrentTasksByToday = () => {
        currentTasks = tasks.filter(task => task.dueDate === new Date().toISOString().slice(0, 10));
    };
    const toggleTaskCompletion = (id) => {
        tasks = tasks.map(task => {
            if (task.id === id)
                return Object.assign(Object.assign({}, task), { isCompleted: (task.isCompleted ? false : true) });
            else
                return task;
        });
        database_1.default.setTasks(tasks);
    };
    const getCurrentTask = (id) => tasks.find(task => task.id === id);
    const setCurrentTasks = (projectName) => {
        if (isNewCurrentProjectToday(projectName))
            setCurrentTasksByToday();
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
        // tasks.push({ title: "Do the dishes", dueDate: "2024-08-10", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Clean your room", description: "Do it soon!", dueDate: new Date().toISOString().slice(0, 10), priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Buy some eggs", dueDate: "2025-12-11", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Pay taxes", dueDate: "2024-02-27", priority: Priority.High, project: "School", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Call mom", dueDate: "2024-05-02", priority: Priority.Low, project: "Ice", id: uuidv4(), isCompleted: false })
        setCurrentProject("Inbox");
        if (onProjectListChanged)
            onProjectListChanged(getProjectNames());
        setCurrentTasks("Inbox");
    };
    return {
        addProject, deleteProject, initialize, getProjectNames, getCurrentProject, getCurrentTasks,
        editTask, addTask, deleteTask, getTasksByProject, setCurrentProject,
        setCurrentTasks, bindOnProjectListChanged, bindOnTaskListChanged, updateTasksForDeletedProject,
        moveToPreviousProject, toggleTaskCompletion, getCurrentTask
    };
})();
const app = (0, App_1.default)(toDoApp);
app.initialize();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLCtCQUErQixvQkFBb0IsZ0JBQWdCLG9CQUFvQix5Q0FBeUMsOEVBQThFLEdBQUcsV0FBVywyQ0FBMkMsd0JBQXdCLGVBQWUsdUJBQXVCLHNCQUFzQixPQUFPLEdBQUcsVUFBVSx1QkFBdUIsb0NBQW9DLG1CQUFtQixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsZUFBZSxnQkFBZ0Isa0JBQWtCLEdBQUcsbUJBQW1CO0FBQzEyQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3ZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLHlKQUEyRDtBQUN2Ryw0Q0FBNEMsMkpBQTREO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxtQ0FBbUM7QUFDckU7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxtQ0FBbUM7QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDLE9BQU8saUdBQWlHLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxVQUFVLEtBQUssVUFBVSxhQUFhLFFBQVEsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssYUFBYSxNQUFNLFdBQVcsYUFBYSxNQUFNLE1BQU0sS0FBSyxhQUFhLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLGNB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bEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9BcHAuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9EaWFsb2cuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tMaXN0Vmlldy5jc3MiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvVGFza1ZpZXcuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL3Byb2plY3RMaXN0Vmlldy5jc3MiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0FwcC5jc3M/OGZlZSIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLmNzcz83N2U4Iiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0hlYWRlci9IZWFkZXIuY3NzPzBlOGYiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvVGFza0xpc3RWaWV3LmNzcz9mYjQ5Iiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tWaWV3LmNzcz84NGJmIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL3Byb2plY3RMaXN0Vmlldy5jc3M/NjI3MSIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0FwcC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvQWRkUHJvamVjdE1vZGFsLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9BZGRUYXNrTW9kYWwudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvRGlhbG9nL0RlbGV0ZVByb2plY3RNb2RhbC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9FZGl0VGFza01vZGFsLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9Qcmlvcml0eUJveC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvUHJvamVjdEJveC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9IZWFkZXIvSGVhZGVyLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tMaXN0Vmlldy50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9UYXNrVmlldy50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9kYXRhYmFzZS50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9wcm9qZWN0TGlzdFZpZXcudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92Ny5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDgwcHggMWZyLyAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJhc2lkZSBtYWluXCI7XG59XG5cbmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDcsIDI1NSk7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgICBidXR0b257XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxufVxuXG5hc2lkZXtcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxubWFpbntcbiAgICBncmlkLWFyZWE6IG1haW47XG59XG5cbmZvb3RlciBzdmd7XG4gICAgZmlsbDpnb2xkO1xuICAgIHdpZHRoOiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zyb250ZW5kL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0M7SUFDbEM7O29CQUVnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7O0lBRWpCO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogODBweCAxZnIvIDIwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbmFzaWRle1xcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxufVxcblxcbmZvb3RlciBzdmd7XFxuICAgIGZpbGw6Z29sZDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQtYm9sZC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC1ib2xkLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcbiAgICAtLWJ1dHRvblNpemU6IDMwcHg7XG4gICAgLS1tb2RhbFdpZHRoOiA1MDBweDtcblxuICAgIC5tb2RhbCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCBhdXRvKS8gcmVwZWF0KDMsIDFmcik7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcInRpdGxlIHRpdGxlIHRpdGxlXCJcbiAgICAgICAgICAgIFwiZGVzY3JpcHQgZGVzY3JpcHQgZGVzY3JpcHRcIlxuICAgICAgICAgICAgXCJkYXRlIHByb2plY3QgcHJpb3JpdHlcIlxuICAgICAgICAgICAgXCJidXR0b24xIC4gYnV0dG9uMlwiXG4gICAgICAgIDtcbiAgICAgICAgcm93LWdhcDogMTBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLW1vZGFsV2lkdGgpO1xuXG4gICAgICAgIC50aXRsZUxhYmVsLFxuICAgICAgICAuZGVzY3JpcHRMYWJlbCxcbiAgICAgICAgLmRhdGVMYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZUxhYmVsIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XG5cbiAgICAgICAgICAgICN0aXRsZUlucHV0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0TGFiZWwge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdDtcblxuICAgICAgICAgICAgI2Rlc2NyaXB0VGV4dEFyZWEge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZUNvbnRhaW5lciB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGRhdGU7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmRhdGVMYWJlbCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLmRhdGVJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0Qm94IHtcblxuICAgICAgICAgICAgLnByb2plY3RMYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAucHJvamVjdFNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmlvcml0eURpdiB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMjBweCA0MHB4IC8gMWZyIG1heC1jb250ZW50IDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAgICAgXCJsYWJlbCBsYWJlbCBsYWJlbFwiXG4gICAgICAgICAgICAgICAgXCJsZWZ0QnV0dG9uIHRleHQgcmlnaHRCdXR0b25cIjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnByaW9yaXR5TGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGxhYmVsO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaW9yaXR5VGV4dCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpb3JpdHlMZWZ0QnV0dG9uLFxuICAgICAgICAgICAgLnByaW9yaXR5UmlnaHRCdXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1idXR0b25TaXplKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJ1dHRvblNpemUpO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpb3JpdHlMZWZ0QnV0dG9uIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGxlZnRCdXR0b247XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpb3JpdHlSaWdodEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiByaWdodEJ1dHRvbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkVGFza0J1dHRvbntcbiAgICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9uMTtcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IGVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYW5jZWxCdXR0b257XG4gICAgICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbjI7XG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBzdGFydDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9qZWN0TW9kYWwge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgMmZyIDFmciAvIHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJsYWJlbCBsYWJlbFwiXG4gICAgICAgICAgICBcImlucHV0IGlucHV0XCJcbiAgICAgICAgICAgIFwibGVmdEJ1dHRvbiByaWdodEJ1dHRvblwiXG4gICAgICAgIDtcbiAgICAgICAgd2lkdGg6IHZhcigtLW1vZGFsV2lkdGgpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgLnByb2plY3ROYW1lTGFiZWwge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0TmFtZUlucHV0V3JhcHBlciB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGlucHV0O1xuXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICNwcm9qZWN0TmFtZUlucHV0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud2FybmluZ1RleHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkUHJvamVjdEJ1dHRvbiwgLmNhbmNlbEJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYW5jZWxCdXR0b24ge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiByaWdodEJ1dHRvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRQcm9qZWN0QnV0dG9uIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogbGVmdEJ1dHRvbjtcbiAgICAgICAgfVxuICAgIH1cblxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvRGlhbG9nL0RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQjtRQUNJLGFBQWE7UUFDYiw4Q0FBOEM7UUFDOUM7Ozs7O1FBS0E7UUFDQSxhQUFhO1FBQ2Isd0JBQXdCOztRQUV4Qjs7O1lBR0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixlQUFlO1lBQ2Ysa0JBQWtCO1FBQ3RCOztRQUVBO1lBQ0ksZ0JBQWdCOztZQUVoQjtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0QjtRQUNKOztRQUVBO1lBQ0ksbUJBQW1COztZQUVuQjtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0QjtRQUNKOztRQUVBO1lBQ0ksZUFBZTtZQUNmLG9CQUFvQjs7WUFFcEI7Z0JBQ0ksa0JBQWtCOztnQkFFbEI7b0JBQ0ksU0FBUztvQkFDVCxrQkFBa0I7b0JBQ2xCLGdCQUFnQjtnQkFDcEI7WUFDSjtRQUNKOztRQUVBOztZQUVJO2dCQUNJLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixhQUFhO2dCQUNiLHNCQUFzQjs7Z0JBRXRCO29CQUNJLFlBQVk7Z0JBQ2hCO1lBQ0o7O1FBRUo7O1FBRUE7WUFDSSxtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixZQUFZO1lBQ1osOENBQThDO1lBQzlDOzs2Q0FFaUM7WUFDakMsdUJBQXVCO1lBQ3ZCLG1CQUFtQjs7WUFFbkI7Z0JBQ0ksZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtZQUN0Qjs7WUFFQTtnQkFDSSxlQUFlO1lBQ25COztZQUVBOztnQkFFSSx3QkFBd0I7Z0JBQ3hCLHlCQUF5QjtnQkFDekIsb0JBQW9CO1lBQ3hCOztZQUVBO2dCQUNJLHFCQUFxQjtnQkFDckIsbURBQXlEO1lBQzdEOztZQUVBO2dCQUNJLHNCQUFzQjtnQkFDdEIsbURBQTBEO1lBQzlEO1FBQ0o7O1FBRUE7WUFDSSxpQkFBaUI7WUFDakIsZUFBZTtZQUNmLFlBQVk7WUFDWixnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixpQkFBaUI7UUFDckI7SUFDSjs7SUFFQTtRQUNJLGFBQWE7UUFDYiwyQ0FBMkM7UUFDM0M7Ozs7UUFJQTtRQUNBLHdCQUF3QjtRQUN4QixlQUFlOztRQUVmO1lBQ0ksZ0JBQWdCO1lBQ2hCLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGdCQUFnQjs7WUFFaEIsa0JBQWtCOztZQUVsQjtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsa0JBQWtCO1lBQ3RCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7UUFDSjs7UUFFQTtZQUNJLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsU0FBUztRQUNiOztRQUVBO1lBQ0ksc0JBQXNCO1FBQzFCOztRQUVBO1lBQ0kscUJBQXFCO1FBQ3pCO0lBQ0o7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZyB7XFxuICAgIC0tYnV0dG9uU2l6ZTogMzBweDtcXG4gICAgLS1tb2RhbFdpZHRoOiA1MDBweDtcXG5cXG4gICAgLm1vZGFsIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgYXV0bykvIHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwidGl0bGUgdGl0bGUgdGl0bGVcXFwiXFxuICAgICAgICAgICAgXFxcImRlc2NyaXB0IGRlc2NyaXB0IGRlc2NyaXB0XFxcIlxcbiAgICAgICAgICAgIFxcXCJkYXRlIHByb2plY3QgcHJpb3JpdHlcXFwiXFxuICAgICAgICAgICAgXFxcImJ1dHRvbjEgLiBidXR0b24yXFxcIlxcbiAgICAgICAgO1xcbiAgICAgICAgcm93LWdhcDogMTBweDtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1tb2RhbFdpZHRoKTtcXG5cXG4gICAgICAgIC50aXRsZUxhYmVsLFxcbiAgICAgICAgLmRlc2NyaXB0TGFiZWwsXFxuICAgICAgICAuZGF0ZUxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50aXRsZUxhYmVsIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcblxcbiAgICAgICAgICAgICN0aXRsZUlucHV0IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlc2NyaXB0TGFiZWwge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHQ7XFxuXFxuICAgICAgICAgICAgI2Rlc2NyaXB0VGV4dEFyZWEge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGF0ZUNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgICAgICAgICAgIC5kYXRlTGFiZWwge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgICAgIC5kYXRlSW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTAlO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0Qm94IHtcXG5cXG4gICAgICAgICAgICAucHJvamVjdExhYmVsIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0U2VsZWN0IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcmlvcml0eURpdiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAyMHB4IDQwcHggLyAxZnIgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgICAgIFxcXCJsYWJlbCBsYWJlbCBsYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgXFxcImxlZnRCdXR0b24gdGV4dCByaWdodEJ1dHRvblxcXCI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlMYWJlbCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlUZXh0IHtcXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlMZWZ0QnV0dG9uLFxcbiAgICAgICAgICAgIC5wcmlvcml0eVJpZ2h0QnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJ1dHRvblNpemUpO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJ1dHRvblNpemUpO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5TGVmdEJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbGVmdEJ1dHRvbjtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9hcnJvdy1sZWZ0LWJvbGQtb3V0bGluZS5zdmcpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlSaWdodEJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcmlnaHRCdXR0b247XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYXJyb3ctcmlnaHQtYm9sZC1vdXRsaW5lLnN2Zyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hZGRUYXNrQnV0dG9ue1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9uMTtcXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBlbmQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2FuY2VsQnV0dG9ue1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9uMjtcXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucHJvamVjdE1vZGFsIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgMmZyIDFmciAvIHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwibGFiZWwgbGFiZWxcXFwiXFxuICAgICAgICAgICAgXFxcImlucHV0IGlucHV0XFxcIlxcbiAgICAgICAgICAgIFxcXCJsZWZ0QnV0dG9uIHJpZ2h0QnV0dG9uXFxcIlxcbiAgICAgICAgO1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW1vZGFsV2lkdGgpO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcblxcbiAgICAgICAgLnByb2plY3ROYW1lTGFiZWwge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogbGFiZWw7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3ROYW1lSW5wdXRXcmFwcGVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGlucHV0O1xcblxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgICAgICAjcHJvamVjdE5hbWVJbnB1dCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLndhcm5pbmdUZXh0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hZGRQcm9qZWN0QnV0dG9uLCAuY2FuY2VsQnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNhbmNlbEJ1dHRvbiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiByaWdodEJ1dHRvbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGxlZnRCdXR0b247XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvdGFiLXBsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL3RhYi1yZW1vdmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAyNTUpO1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuXG4gICAgICAgICYuYWRkVGFza0J1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZFByb2plY3RCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5lZGl0UHJvamVjdEJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgICAgIH1cbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvSGVhZGVyL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQ7UUFDSSxZQUFZO1FBQ1osV0FBVzs7UUFFWDtZQUNJLG1EQUF3QztRQUM1Qzs7UUFFQTtZQUNJLG1EQUE0QztRQUNoRDs7UUFFQTtZQUNJLG1EQUE4QztRQUNsRDtJQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAyNTUpO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICAgICAgJi5hZGRUYXNrQnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9wbHVzLnN2ZycpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy90YWItcGx1cy5zdmcnKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuZWRpdFByb2plY3RCdXR0b24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3RhYi1yZW1vdmUuc3ZnJyk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLyogZm9yIEZpcmVmb3ggKi9cblxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xuICAgIH1cblxuXG4gICAgLnByb2plY3RIZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRhc2tMaXN0VmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvVGFza0xpc3RWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsZ0JBQWdCOzs7SUFHaEI7UUFDSSxhQUFhO1FBQ2Isa0NBQWtDO0lBQ3RDOzs7SUFHQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAgIC8qIGZvciBJbnRlcm5ldCBFeHBsb3JlciwgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgIC8qIGZvciBGaXJlZm94ICovXFxuXFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0SGVhZGluZyB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50YXNrTGlzdFZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3RyYXNoY2FuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRhc2sge1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMzBweCAzMHB4IC8gMWZyIG1pbi1jb250ZW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblxuICAgIC50aXRsZSB7fVxuXG4gICAgLmRhdGUge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5cbiAgICAucHJvamVjdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cblxuICAgIC50cmFzaENhbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTU1cHg7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mcm9udGVuZC9UYXNrVmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlOzs7SUFHZixRQUFROztJQUVSO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0kseURBQTZDO1FBQzdDLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osTUFBTTtRQUNOLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrIHtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAzMHB4IDMwcHggLyAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXG4gICAgLnRpdGxlIHt9XFxuXFxuICAgIC5kYXRlIHtcXG4gICAgICAgIGNvbG9yOiBncmF5O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICBwYWRkaW5nOiAzcHg7XFxuICAgIH1cXG5cXG4gICAgLnRyYXNoQ2FuIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvdHJhc2hjYW4uc3ZnKTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAtMjVweDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtNTVweDtcXG4gICAgICAgIHRvcDogMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiA0NnB4O1xcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYXNpZGV7XG4gICAgdWx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvcHJvamVjdExpc3RWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsU0FBUzs7UUFFVDtZQUNJLGVBQWU7UUFDbkI7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImFzaWRle1xcbiAgICB1bHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RpYWxvZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EaWFsb2cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tMaXN0Vmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYXNrTGlzdFZpZXcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tWaWV3LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tWaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0TGlzdFZpZXcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdExpc3RWaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5yZXF1aXJlKFwiLi9BcHAuY3NzXCIpO1xucmVxdWlyZShcIi4vRGlhbG9nL0RpYWxvZy5jc3NcIik7XG5jb25zdCBBZGRUYXNrTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EaWFsb2cvQWRkVGFza01vZGFsXCIpKTtcbmNvbnN0IEhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0hlYWRlci9IZWFkZXJcIikpO1xuY29uc3QgcHJvamVjdExpc3RWaWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcHJvamVjdExpc3RWaWV3XCIpKTtcbmNvbnN0IFRhc2tMaXN0Vmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rhc2tMaXN0Vmlld1wiKSk7XG5jb25zdCBFZGl0VGFza01vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nL0VkaXRUYXNrTW9kYWxcIikpO1xuY29uc3QgQWRkUHJvamVjdE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nL0FkZFByb2plY3RNb2RhbFwiKSk7XG5jb25zdCBEZWxldGVQcm9qZWN0TW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EaWFsb2cvRGVsZXRlUHJvamVjdE1vZGFsXCIpKTtcbmZ1bmN0aW9uIEFwcCh0b0RvQXBwKSB7XG4gICAgY29uc3QgbW9kZWwgPSB0b0RvQXBwO1xuICAgIGNvbnN0IHByb2plY3RMaXN0VmlldyA9ICgwLCBwcm9qZWN0TGlzdFZpZXdfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IHRhc2tMaXN0VmlldyA9ICgwLCBUYXNrTGlzdFZpZXdfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IGhlYWRlclZpZXcgPSAoMCwgSGVhZGVyXzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCBhZGRUYXNrTW9kYWxWaWV3ID0gKDAsIEFkZFRhc2tNb2RhbF8xLmRlZmF1bHQpKCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsVmlldyA9ICgwLCBBZGRQcm9qZWN0TW9kYWxfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IGVkaXRUYXNrTW9kYWxWaWV3ID0gKDAsIEVkaXRUYXNrTW9kYWxfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RNb2RhbFZpZXcgPSAoMCwgRGVsZXRlUHJvamVjdE1vZGFsXzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCBvblByb2plY3RMaXN0Q2hhbmdlZCA9IChwcm9qZWN0TGlzdCkgPT4gcHJvamVjdExpc3RWaWV3LnJlbmRlcihwcm9qZWN0TGlzdCk7XG4gICAgY29uc3Qgb25UYXNrTGlzdENoYW5nZWQgPSAodGFza0xpc3QsIHByb2plY3QpID0+IHRhc2tMaXN0Vmlldy5yZW5kZXIodGFza0xpc3QsIHByb2plY3QpO1xuICAgIGNvbnN0IGhhbmRsZU9wZW5BZGRUYXNrTW9kYWwgPSAoKSA9PiBhZGRUYXNrTW9kYWxWaWV3Lm9wZW4oKTtcbiAgICBjb25zdCBoYW5kbGVPcGVuQWRkUHJvamVjdE1vZGFsID0gKCkgPT4gYWRkUHJvamVjdE1vZGFsVmlldy5vcGVuKCk7XG4gICAgY29uc3QgaGFuZGxlR2V0UHJvamVjdE5hbWVzT25Nb2RhbE9wZW4gPSAoKSA9PiBtb2RlbC5nZXRQcm9qZWN0TmFtZXMoKTtcbiAgICBjb25zdCBoYW5kbGVBZGRUYXNrID0gKG5ld1RvRG8pID0+IG1vZGVsLmFkZFRhc2sobmV3VG9Ebyk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ3VycmVudFRhc2tzID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIG1vZGVsLnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgbW9kZWwuc2V0Q3VycmVudFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUVkaXRUYXNrID0gKGlkLCB0b2RvKSA9PiB7IG1vZGVsLmVkaXRUYXNrKGlkLCB0b2RvKTsgfTtcbiAgICBjb25zdCBoYW5kbGVPcGVuRWRpdFRhc2tNb2RhbCA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGVkaXRUYXNrTW9kYWxWaWV3Lm9wZW4oKTtcbiAgICAgICAgZWRpdFRhc2tNb2RhbFZpZXcuYmluZEVkaXRUYXNrKGhhbmRsZUVkaXRUYXNrLCB0b2RvLmlkKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRvRG8gPSBtb2RlbC5nZXRDdXJyZW50VGFzayh0b2RvLmlkKTtcbiAgICAgICAgZWRpdFRhc2tNb2RhbFZpZXcuc2V0SW5wdXQoY3VycmVudFRvRG8pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChpZCkgPT4gbW9kZWwuZGVsZXRlVGFzayhpZCk7XG4gICAgY29uc3QgaGFuZGxlQWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4gbW9kZWwuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBtb2RlbC5tb3ZlVG9QcmV2aW91c1Byb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBtb2RlbC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTsgLy8gVXBkYXRlcyBwcm9qZWN0IGxpc3Qgb24gdGhlIFVJXG4gICAgICAgIG1vZGVsLnVwZGF0ZVRhc2tzRm9yRGVsZXRlZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IG1vZGVsLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIG1vZGVsLnNldEN1cnJlbnRUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVPcGVuRGVsZXRlUHJvamVjdE1vZGFsID0gKCkgPT4gZGVsZXRlUHJvamVjdE1vZGFsVmlldy5vcGVuKCk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGVUYXNrID0gKGlkKSA9PiBtb2RlbC50b2dnbGVUYXNrQ29tcGxldGlvbihpZCk7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgbW9kZWwuYmluZE9uUHJvamVjdExpc3RDaGFuZ2VkKG9uUHJvamVjdExpc3RDaGFuZ2VkKTtcbiAgICAgICAgbW9kZWwuYmluZE9uVGFza0xpc3RDaGFuZ2VkKG9uVGFza0xpc3RDaGFuZ2VkKTtcbiAgICAgICAgaGVhZGVyVmlldy5iaW5kSGVhZGVyQnV0dG9uSGFuZGxlcnMoeyBoYW5kbGVPcGVuQWRkVGFza01vZGFsLCBoYW5kbGVPcGVuRGVsZXRlUHJvamVjdE1vZGFsLCBoYW5kbGVPcGVuQWRkUHJvamVjdE1vZGFsIH0pO1xuICAgICAgICBhZGRUYXNrTW9kYWxWaWV3LmJpbmRHZXRQcm9qZWN0TmFtZXMoaGFuZGxlR2V0UHJvamVjdE5hbWVzT25Nb2RhbE9wZW4pO1xuICAgICAgICBlZGl0VGFza01vZGFsVmlldy5iaW5kR2V0UHJvamVjdE5hbWVzKGhhbmRsZUdldFByb2plY3ROYW1lc09uTW9kYWxPcGVuKTtcbiAgICAgICAgYWRkVGFza01vZGFsVmlldy5iaW5kQWRkVGFzayhoYW5kbGVBZGRUYXNrKTtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsVmlldy5iaW5kR2V0UHJvamVjdE5hbWVzKGhhbmRsZUdldFByb2plY3ROYW1lc09uTW9kYWxPcGVuKTtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsVmlldy5iaW5kQWRkUHJvamVjdChoYW5kbGVBZGRQcm9qZWN0KTtcbiAgICAgICAgZGVsZXRlUHJvamVjdE1vZGFsVmlldy5iaW5kR2V0UHJvamVjdE5hbWVzKGhhbmRsZUdldFByb2plY3ROYW1lc09uTW9kYWxPcGVuKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdE1vZGFsVmlldy5iaW5kRGVsZXRlUHJvamVjdChoYW5kbGVEZWxldGVQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdExpc3RWaWV3LmJpbmRDaGFuZ2VDdXJyZW50VGFza3MoaGFuZGxlQ2hhbmdlQ3VycmVudFRhc2tzKTtcbiAgICAgICAgdGFza0xpc3RWaWV3LmJpbmRPcGVuRWRpdFRhc2soaGFuZGxlT3BlbkVkaXRUYXNrTW9kYWwpO1xuICAgICAgICB0YXNrTGlzdFZpZXcuYmluZERlbGV0ZVRhc2soaGFuZGxlRGVsZXRlVGFzayk7XG4gICAgICAgIHRhc2tMaXN0Vmlldy5iaW5kQ29tcGxldGVUYXNrKGhhbmRsZUNvbXBsZXRlVGFzayk7XG4gICAgICAgIG1vZGVsLmluaXRpYWxpemUoKTtcbiAgICAgICAgLy8gYWRkUHJvamVjdE1vZGFsVmlldy5vcGVuKClcbiAgICB9O1xuICAgIHJldHVybiB7IGluaXRpYWxpemUgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGlhbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nXCIpKTtcbmNvbnN0IGNyZWF0ZUFkZFByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gW107XG4gICAgY29uc3QgZGlhbG9nID0gRGlhbG9nXzEuZGVmYXVsdC5nZXREaWFsb2coKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uO1xuICAgIGxldCBjYW5jZWxCdXR0b247XG4gICAgZm9ybS5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsIG1vZGFsJztcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TmFtZUxhYmVsJztcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUeXBlIG5hbWUgb2YgbmV3IHByb2plY3RcIjtcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBcInByb2plY3ROYW1lSW5wdXRcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0V3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdE5hbWVJbnB1dFdyYXBwZXInO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lSW5wdXQnO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcbiAgICBjb25zdCB3YXJuaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3YXJuaW5nVGV4dC5jbGFzc05hbWUgPSAnd2FybmluZ1RleHQnO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh3YXJuaW5nVGV4dCk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ2FkZFByb2plY3RCdXR0b24nO1xuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFByb2plY3ROYW1lcyA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY3VycmVudFByb2plY3RzID0gZ2V0UHJvamVjdE5hbWVzKCk7XG4gICAgICAgIGRpYWxvZy5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgICBjbGVhcklucHV0cygpO1xuICAgICAgICBEaWFsb2dfMS5kZWZhdWx0LmNsb3NlRGlhbG9nKCk7XG4gICAgfTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cyA9IFtdO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgfTtcbiAgICBjb25zdCBkb2VzUHJvamVjdE5hbWVFeGlzdCA9ICh1c2VySW5wdXQpID0+IHtcbiAgICAgICAgaWYgKGdldFByb2plY3ROYW1lcyA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGdldFByb2plY3ROYW1lcygpLnNvbWUocHJvamVjdE5hbWUgPT4gcHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdXNlcklucHV0LnRvTG93ZXJDYXNlKCkpO1xuICAgIH07XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xuICAgICAgICB3YXJuaW5nVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB3YXJuaW5nVGV4dC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3QhXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2FybmluZ1RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3dOb1RleHRFcnJvciA9ICgpID0+IHtcbiAgICAgICAgd2FybmluZ1RleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgd2FybmluZ1RleHQudGV4dENvbnRlbnQgPSBcIlR5cGUgYSBuYW1lIHRvIGFkZCBhIG5ldyBwcm9qZWN0IVwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdhcm5pbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfTtcbiAgICBsZXQgZ2V0UHJvamVjdE5hbWVzID0gbnVsbDtcbiAgICBjb25zdCBiaW5kR2V0UHJvamVjdE5hbWVzID0gKGNhbGxCYWNrKSA9PiBnZXRQcm9qZWN0TmFtZXMgPSBjYWxsQmFjaztcbiAgICBjb25zdCBiaW5kQWRkUHJvamVjdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldElucHV0KCk7XG4gICAgICAgICAgICBpZiAoIXByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgc2hvd05vVGV4dEVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvZXNQcm9qZWN0TmFtZUV4aXN0KHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgICAgIHNob3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRJbnB1dCA9ICgpID0+IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG4gICAgcmV0dXJuIHsgb3BlbiwgYmluZEdldFByb2plY3ROYW1lcywgYmluZEFkZFByb2plY3QgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVBZGRQcm9qZWN0TW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERpYWxvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZ1wiKSk7XG5jb25zdCBQcmlvcml0eUJveF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ByaW9yaXR5Qm94XCIpKTtcbmNvbnN0IFByb2plY3RCb3hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Qcm9qZWN0Qm94XCIpKTtcbmNvbnN0IGNyZWF0ZUFkZFRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBkaWFsb2cgPSBEaWFsb2dfMS5kZWZhdWx0LmdldERpYWxvZygpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbGV0IGFkZFRhc2tCdXR0b247XG4gICAgbGV0IGNhbmNlbEJ1dHRvbjtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdhZGRNb2RhbCBtb2RhbCc7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5jbGFzc05hbWUgPSAndGl0bGVMYWJlbCc7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dCc7XG4gICAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBjb25zdCBkZXNjcmlwdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdExhYmVsLmNsYXNzTmFtZSA9ICdkZXNjcmlwdExhYmVsJztcbiAgICBkZXNjcmlwdExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRMYWJlbCk7XG4gICAgY29uc3QgZGVzY3JpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NyaXBUZXh0LmlkID0gJ2Rlc2NyaXB0VGV4dEFyZWEnO1xuICAgIGRlc2NyaXB0TGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcFRleHQpO1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkYXRlQ29udGFpbmVyJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTmFtZSA9ICdkYXRlTGFiZWwnO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZVwiO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdkYXRlSW5wdXQnO1xuICAgIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGNvbnN0IHByaW9yaXR5Qm94ID0gKDAsIFByaW9yaXR5Qm94XzEuZGVmYXVsdCkoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Qm94LnByaW9yaXR5RGl2KTtcbiAgICBjb25zdCBwcm9qZWN0Qm94ID0gKDAsIFByb2plY3RCb3hfMS5kZWZhdWx0KSgpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEJveC5wcm9qZWN0Qm94KTtcbiAgICBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc05hbWUgPSAnYWRkVGFza0J1dHRvbic7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGFkZFRhc2tCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gJ2NhbmNlbEJ1dHRvbic7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBjb25zdCBvcGVuID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0UHJvamVjdE5hbWVzID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBnZXRQcm9qZWN0TmFtZXMoKTtcbiAgICAgICAgZGlhbG9nLnJlcGxhY2VDaGlsZHJlbihmb3JtKTtcbiAgICAgICAgcHJvamVjdEJveC5zZXRQcm9qZWN0TmFtZXNPbk9wZW4ocHJvamVjdE5hbWVzKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFySW5wdXRzKCk7XG4gICAgICAgIERpYWxvZ18xLmRlZmF1bHQuY2xvc2VEaWFsb2coKTtcbiAgICB9O1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICBjb25zdCBjbGVhcklucHV0cyA9ICgpID0+IHtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwVGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHlCb3gucmVzZXRQcmlvcml0eSgpO1xuICAgIH07XG4gICAgbGV0IGdldFByb2plY3ROYW1lcyA9IG51bGw7XG4gICAgY29uc3QgYmluZEdldFByb2plY3ROYW1lcyA9IChjYWxsQmFjaykgPT4gZ2V0UHJvamVjdE5hbWVzID0gY2FsbEJhY2s7XG4gICAgY29uc3QgYmluZEFkZFRhc2sgPSAoaGFuZGxlcikgPT4ge1xuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VG9EbyA9IGdldElucHV0KCk7XG4gICAgICAgICAgICBoYW5kbGVyKG5ld1RvRG8pO1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXBUZXh0LnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Qm94LmdldFNlbGVjdGVkUHJvamVjdE5hbWUoKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUJveC5nZXRQcmlvcml0eSgpO1xuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5LCBpc0NvbXBsZXRlZDogZmFsc2UgfTtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBvcGVuLCBjbG9zZSwgYmluZEdldFByb2plY3ROYW1lcywgYmluZEFkZFRhc2sgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVBZGRUYXNrTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERpYWxvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZ1wiKSk7XG5jb25zdCBjcmVhdGVEZWxldGVQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IFtdO1xuICAgIGNvbnN0IGRpYWxvZyA9IERpYWxvZ18xLmRlZmF1bHQuZ2V0RGlhbG9nKCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgZGVsZXRlUHJvamVjdEJ1dHRvbjtcbiAgICBsZXQgY2FuY2VsQnV0dG9uO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ1Byb2plY3RNb2RhbCBtb2RhbCc7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5jbGFzc05hbWUgPSAncHJvamVjdE5hbWVMYWJlbCc7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgcHJvamVjdCB0byBkZWxldGVcIjtcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBcInByb2plY3RTZWxlY3RcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0U2VsZWN0LmlkID0gJ3Byb2plY3RTZWxlY3QnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZVByb2plY3RCdXR0b24nO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFByb2plY3ROYW1lcyA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY3VycmVudFByb2plY3RzID0gZ2V0UHJvamVjdE5hbWVzKCk7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0U2VsZWN0LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnJlbW92ZUNoaWxkKHByb2plY3RTZWxlY3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdCAhPT0gXCJJbmJveFwiICYmIHByb2plY3QgIT09IFwiVG9kYXlcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAncHJvamVjdFNlbGVjdE9wdGlvbic7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkaWFsb2cucmVwbGFjZUNoaWxkcmVuKGZvcm0pO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnB1dHMoKTtcbiAgICAgICAgRGlhbG9nXzEuZGVmYXVsdC5jbG9zZURpYWxvZygpO1xuICAgIH07XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgIGNvbnN0IGNsZWFySW5wdXRzID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKHByb2plY3RTZWxlY3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5yZW1vdmVDaGlsZChwcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgZ2V0UHJvamVjdE5hbWVzID0gbnVsbDtcbiAgICBjb25zdCBiaW5kR2V0UHJvamVjdE5hbWVzID0gKGNhbGxCYWNrKSA9PiBnZXRQcm9qZWN0TmFtZXMgPSBjYWxsQmFjaztcbiAgICBjb25zdCBiaW5kRGVsZXRlUHJvamVjdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldElucHV0KCk7XG4gICAgICAgICAgICBoYW5kbGVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiBwcm9qZWN0U2VsZWN0LnZhbHVlO1xuICAgIHJldHVybiB7IG9wZW4sIGJpbmRHZXRQcm9qZWN0TmFtZXMsIGJpbmREZWxldGVQcm9qZWN0IH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRGVsZXRlUHJvamVjdE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuY29uc3QgY2xvc2VEaWFsb2cgPSAoKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG59O1xuY29uc3QgZ2V0RGlhbG9nID0gKCkgPT4gZGlhbG9nO1xuZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRpYWxvZylcbiAgICAgICAgY2xvc2VEaWFsb2coKTtcbn0pO1xuY29uc3QgZGlhbG9nTWFuYWdlciA9IHtcbiAgICBjbG9zZURpYWxvZywgZ2V0RGlhbG9nXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZGlhbG9nTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGlhbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nXCIpKTtcbmNvbnN0IFByaW9yaXR5Qm94XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUHJpb3JpdHlCb3hcIikpO1xuY29uc3QgUHJvamVjdEJveF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Byb2plY3RCb3hcIikpO1xuY29uc3QgY3JlYXRlRWRpdFRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICBsZXQgaXNDdXJyZW50VGFza0NvbXBsZXRlZDtcbiAgICBjb25zdCBkaWFsb2cgPSBEaWFsb2dfMS5kZWZhdWx0LmdldERpYWxvZygpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbGV0IGVkaXRUYXNrQnV0dG9uO1xuICAgIGxldCBjYW5jZWxCdXR0b247XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnZWRpdFRhc2tNb2RhbCBtb2RhbCc7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5jbGFzc05hbWUgPSAndGl0bGVMYWJlbCc7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dCc7XG4gICAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBjb25zdCBkZXNjcmlwdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdExhYmVsLmNsYXNzTmFtZSA9ICdkZXNjcmlwdExhYmVsJztcbiAgICBkZXNjcmlwdExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRMYWJlbCk7XG4gICAgY29uc3QgZGVzY3JpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NyaXBUZXh0LmlkID0gJ2Rlc2NyaXB0VGV4dEFyZWEnO1xuICAgIGRlc2NyaXB0TGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcFRleHQpO1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkYXRlQ29udGFpbmVyJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTmFtZSA9ICdkYXRlTGFiZWwnO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZVwiO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdkYXRlSW5wdXQnO1xuICAgIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGNvbnN0IHByaW9yaXR5Qm94ID0gKDAsIFByaW9yaXR5Qm94XzEuZGVmYXVsdCkoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Qm94LnByaW9yaXR5RGl2KTtcbiAgICBjb25zdCBwcm9qZWN0Qm94ID0gKDAsIFByb2plY3RCb3hfMS5kZWZhdWx0KSgpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEJveC5wcm9qZWN0Qm94KTtcbiAgICBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9ICdhZGRUYXNrQnV0dG9uJztcbiAgICBlZGl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBlZGl0VGFza0J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVkaXRUYXNrQnV0dG9uKTtcbiAgICBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gJ2NhbmNlbEJ1dHRvbic7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBjb25zdCBvcGVuID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0UHJvamVjdE5hbWVzID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBnZXRQcm9qZWN0TmFtZXMoKTtcbiAgICAgICAgZGlhbG9nLnJlcGxhY2VDaGlsZHJlbihmb3JtKTtcbiAgICAgICAgcHJvamVjdEJveC5zZXRQcm9qZWN0TmFtZXNPbk9wZW4ocHJvamVjdE5hbWVzKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFySW5wdXRzKCk7XG4gICAgICAgIERpYWxvZ18xLmRlZmF1bHQuY2xvc2VEaWFsb2coKTtcbiAgICB9O1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICBjb25zdCBjbGVhcklucHV0cyA9ICgpID0+IHtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwVGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHlCb3gucmVzZXRQcmlvcml0eSgpO1xuICAgIH07XG4gICAgbGV0IGdldFByb2plY3ROYW1lcyA9IG51bGw7XG4gICAgY29uc3QgYmluZEdldFByb2plY3ROYW1lcyA9IChjYWxsQmFjaykgPT4gZ2V0UHJvamVjdE5hbWVzID0gY2FsbEJhY2s7XG4gICAgbGV0IGVkaXRUYXNrID0gbnVsbDtcbiAgICBjb25zdCBiaW5kRWRpdFRhc2sgPSAoaGFuZGxlciwgaWQpID0+IHtcbiAgICAgICAgaWYgKGVkaXRUYXNrKVxuICAgICAgICAgICAgZWRpdFRhc2tCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzayk7XG4gICAgICAgIGVkaXRUYXNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VG9EbyA9IGdldElucHV0KCk7XG4gICAgICAgICAgICBoYW5kbGVyKGlkLCBuZXdUb0RvKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xuICAgIH07XG4gICAgY29uc3Qgc2V0SW5wdXQgPSAodG9kbykgPT4ge1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgICAgaWYgKHRvZG8uZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBkZXNjcmlwVGV4dC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgcHJpb3JpdHlCb3guc2V0UHJpb3JpdHkodG9kby5wcmlvcml0eSk7XG4gICAgICAgIHByb2plY3RCb3guc2V0U2VsZWN0ZWRQcm9qZWN0TmFtZU9uT3Blbih0b2RvLnByb2plY3QpO1xuICAgICAgICBpc0N1cnJlbnRUYXNrQ29tcGxldGVkID0gdG9kby5pc0NvbXBsZXRlZDtcbiAgICAgICAgY29uc29sZS5sb2codG9kbyk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXBUZXh0LnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEJveC5nZXRTZWxlY3RlZFByb2plY3ROYW1lKCk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlCb3guZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgaXNDb21wbGV0ZWQ6IGlzQ3VycmVudFRhc2tDb21wbGV0ZWQgfTtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgaXNDb21wbGV0ZWQ6IGlzQ3VycmVudFRhc2tDb21wbGV0ZWQgfTtcbiAgICB9O1xuICAgIHJldHVybiB7IG9wZW4sIGNsb3NlLCBiaW5kR2V0UHJvamVjdE5hbWVzLCBiaW5kRWRpdFRhc2ssIHNldElucHV0IH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRWRpdFRhc2tNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbmNvbnN0IGNyZWF0ZVByaW9yaXR5Qm94ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlEaXYuY2xhc3NOYW1lID0gJ3ByaW9yaXR5RGl2JztcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTmFtZSA9ICdwcmlvcml0eUxhYmVsJztcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHlUZXh0LmNsYXNzTmFtZSA9ICdwcmlvcml0eVRleHQnO1xuICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XG4gICAgY29uc3QgcHJpb3JpdHlMZWZ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJpb3JpdHlMZWZ0QnV0dG9uLmNsYXNzTmFtZSA9ICdwcmlvcml0eUxlZnRCdXR0b24nO1xuICAgIHByaW9yaXR5TGVmdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxlZnRCdXR0b24pO1xuICAgIGNvbnN0IHByaW9yaXR5UmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmlvcml0eVJpZ2h0QnV0dG9uLmNsYXNzTmFtZSA9ICdwcmlvcml0eVJpZ2h0QnV0dG9uJztcbiAgICBwcmlvcml0eVJpZ2h0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5UmlnaHRCdXR0b24pO1xuICAgIGNvbnN0IGluY3JlYXNlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlUZXh0LnRleHRDb250ZW50O1xuICAgICAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBwcmlvcml0eSA9PT0gXCJOb25lXCIgPyBcIkxvd1wiIDogXCJIaWdoXCI7XG4gICAgfTtcbiAgICBjb25zdCBkZWNyZWFzZVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudDtcbiAgICAgICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gcHJpb3JpdHkgPT09IFwiSGlnaFwiID8gXCJMb3dcIiA6IFwiTm9uZVwiO1xuICAgIH07XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPT09IFwiTm9uZVwiID9cbiAgICAgICAgdHlwZXNfMS5Qcmlvcml0eS5Ob25lIDogcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID09PSBcIkxvd1wiID9cbiAgICAgICAgdHlwZXNfMS5Qcmlvcml0eS5Mb3cgOiB0eXBlc18xLlByaW9yaXR5LkhpZ2g7XG4gICAgY29uc3QgcmVzZXRQcmlvcml0eSA9ICgpID0+IHsgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJOb25lXCI7IH07XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPT09IHR5cGVzXzEuUHJpb3JpdHkuTm9uZSA/IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiTm9uZVwiIDpcbiAgICAgICAgICAgIHByaW9yaXR5ID09PSB0eXBlc18xLlByaW9yaXR5LkxvdyA/IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiTG93XCIgOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIH07XG4gICAgcHJpb3JpdHlMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWNyZWFzZVByaW9yaXR5KTtcbiAgICBwcmlvcml0eVJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmNyZWFzZVByaW9yaXR5KTtcbiAgICByZXR1cm4geyBwcmlvcml0eURpdiwgZ2V0UHJpb3JpdHksIHJlc2V0UHJpb3JpdHksIHNldFByaW9yaXR5IH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHJpb3JpdHlCb3g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCb3ggPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Qm94LmNsYXNzTmFtZSA9ICdwcm9qZWN0Qm94JztcbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc05hbWUgPSAncHJvamVjdExhYmVsJztcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3QuaWQgPSAncHJvamVjdFNlbGVjdCc7XG4gICAgcHJvamVjdExhYmVsLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgIGxldCBzZXRQcm9qZWN0TmFtZXNPbk9wZW4gPSAocHJvamVjdE5hbWVzKSA9PiB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0U2VsZWN0LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnJlbW92ZUNoaWxkKHByb2plY3RTZWxlY3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdE5hbWVzLmZvckVhY2gocHJvamVjdE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBzZXRTZWxlY3RlZFByb2plY3ROYW1lT25PcGVuID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFNlbGVjdGVkUHJvamVjdE5hbWUgPSAoKSA9PiBwcm9qZWN0U2VsZWN0LnZhbHVlO1xuICAgIHJldHVybiB7IHByb2plY3RCb3gsIHNldFByb2plY3ROYW1lc09uT3BlbiwgZ2V0U2VsZWN0ZWRQcm9qZWN0TmFtZSwgc2V0U2VsZWN0ZWRQcm9qZWN0TmFtZU9uT3BlbiB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByb2plY3RCb3g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL0hlYWRlci5jc3NcIik7XG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKTtcbiAgICBjb25zdCBiaW5kSGVhZGVyQnV0dG9uSGFuZGxlcnMgPSAoaGFuZGxlcnMpID0+IHtcbiAgICAgICAgY29uc3QgeyBoYW5kbGVPcGVuQWRkUHJvamVjdE1vZGFsLCBoYW5kbGVPcGVuRGVsZXRlUHJvamVjdE1vZGFsLCBoYW5kbGVPcGVuQWRkVGFza01vZGFsIH0gPSBoYW5kbGVycztcbiAgICAgICAgYnV0dG9uc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZW5BZGRUYXNrTW9kYWwpO1xuICAgICAgICBidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3BlbkFkZFByb2plY3RNb2RhbCk7XG4gICAgICAgIGJ1dHRvbnNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPcGVuRGVsZXRlUHJvamVjdE1vZGFsKTtcbiAgICB9O1xuICAgIHJldHVybiB7IGJpbmRIZWFkZXJCdXR0b25IYW5kbGVycyB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhlYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGFza1ZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UYXNrVmlld1wiKSk7XG5yZXF1aXJlKFwiLi9UYXNrTGlzdFZpZXcuY3NzXCIpO1xuY29uc3QgY3JlYXRlVGFza0xpc3RWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RIZWFkaW5nJyk7XG4gICAgY29uc3QgdGFza0xpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0VmlldycpO1xuICAgIGNvbnN0IHJlbmRlciA9ICh0YXNrcywgcHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgd2hpbGUgKHRhc2tMaXN0Vmlldy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0YXNrTGlzdFZpZXcucmVtb3ZlQ2hpbGQodGFza0xpc3RWaWV3LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAoMCwgVGFza1ZpZXdfMS5kZWZhdWx0KSh0YXNrLCAoKSA9PiB7IGlmIChvcGVuRWRpdFRhc2spXG4gICAgICAgICAgICAgICAgb3BlbkVkaXRUYXNrKHRhc2spOyB9LCAoKSA9PiB7IGlmIChkZWxldGVUYXNrKVxuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFzay5pZCk7IH0sICgpID0+IHsgaWYgKGNvbXBsZXRlVGFzaylcbiAgICAgICAgICAgICAgICBjb21wbGV0ZVRhc2sodGFzay5pZCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBvcGVuRWRpdFRhc2sgPSBudWxsO1xuICAgIGNvbnN0IGJpbmRPcGVuRWRpdFRhc2sgPSAoaGFuZGxlcikgPT4geyBvcGVuRWRpdFRhc2sgPSBoYW5kbGVyOyB9O1xuICAgIGxldCBkZWxldGVUYXNrID0gbnVsbDtcbiAgICBjb25zdCBiaW5kRGVsZXRlVGFzayA9IChoYW5kbGVyKSA9PiB7IGRlbGV0ZVRhc2sgPSBoYW5kbGVyOyB9O1xuICAgIGxldCBjb21wbGV0ZVRhc2sgPSBudWxsO1xuICAgIGNvbnN0IGJpbmRDb21wbGV0ZVRhc2sgPSAoaGFuZGxlcikgPT4geyBjb21wbGV0ZVRhc2sgPSBoYW5kbGVyOyB9O1xuICAgIHJldHVybiB7IGJpbmRPcGVuRWRpdFRhc2ssIHJlbmRlciwgYmluZERlbGV0ZVRhc2ssIGJpbmRDb21wbGV0ZVRhc2sgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUYXNrTGlzdFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL1Rhc2tWaWV3LmNzc1wiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmNvbnN0IGNyZWF0ZVRhc2tWaWV3ID0gKHRvRG8sIGNhbGxCYWNrLCBoYW5kbGVEZWxldGVUYXNrLCBoYW5kbGVDb21wbGV0ZVRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3RWaWV3Jyk7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NOYW1lID0gJ3Rhc2snO1xuICAgIHRhc2suc3R5bGUuYm9yZGVyID0gdG9Eby5wcmlvcml0eSA9PT0gdHlwZXNfMS5Qcmlvcml0eS5IaWdoID8gXCIzcHggc29saWQgcmVkXCIgOlxuICAgICAgICB0b0RvLnByaW9yaXR5ID09PSB0eXBlc18xLlByaW9yaXR5LkxvdyA/IFwiMnB4IHNvbGlkIG9yYW5nZVwiIDogXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gdGFzaylcbiAgICAgICAgICAgIGNhbGxCYWNrKHRvRG8pO1xuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b0RvLnRpdGxlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdCc7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHRvRG8ucHJvamVjdDtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhdGUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSh0b0RvLmR1ZURhdGUpLnRvRGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IHRyYXNoQ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJhc2hDYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRyYXNoQ2FuKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaGFuZGxlRGVsZXRlVGFzayh0b0RvLmlkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRyYXNoQ2FuLmNsYXNzTmFtZSA9ICd0cmFzaENhbic7XG4gICAgY29uc3QgY2hlY2tNYXJrID0gY3JlYXRlQ2hlY2tNYXJrU1ZHKHRvRG8sIGhhbmRsZUNvbXBsZXRlVGFzaywgdGFzayk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodHJhc2hDYW4pO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tNYXJrLnN2Zyk7XG4gICAgdGFza0xpc3RWaWV3LmFwcGVuZENoaWxkKHRhc2spO1xufTtcbmNvbnN0IGNyZWF0ZUNoZWNrTWFya1NWRyA9ICh0b2RvLCBoYW5kbGVDb21wbGV0ZVRhc2ssIHRhc2spID0+IHtcbiAgICBsZXQgaXNDdXJyZW50VGFza0NvbXBsZXRlZCA9IHRvZG8uaXNDb21wbGV0ZWQ7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG4gICAgc3ZnLmlkID0gXCJjaGVja01hcmtcIjtcbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBcIk05LDIwLjQyTDIuNzksMTQuMjFMNS42MiwxMS4zOEw5LDE0Ljc3TDE4Ljg4LDQuODhMMjEuNzEsNy43MUw5LDIwLjQyWlwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJncmF5XCIpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGlzQ3VycmVudFRhc2tDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNmNGQ2MmNcIik7XG4gICAgICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Y0ZDYyY1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiZ3JheVwiKTtcbiAgICAgICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlVGFzayA9ICgpID0+IHsgaXNDdXJyZW50VGFza0NvbXBsZXRlZCA/IGlzQ3VycmVudFRhc2tDb21wbGV0ZWQgPSBmYWxzZSA6IGlzQ3VycmVudFRhc2tDb21wbGV0ZWQgPSB0cnVlOyB9O1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGhhbmRsZUNvbXBsZXRlVGFzayh0b2RvLmlkKTtcbiAgICAgICAgdG9nZ2xlVGFzaygpO1xuICAgICAgICBjaGFuZ2VDb2xvcigpO1xuICAgIH0pO1xuICAgIGNoYW5nZUNvbG9yKCk7XG4gICAgcmV0dXJuIHsgc3ZnIH07XG4gICAgLy8gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaGVjay1ib2xkPC90aXRsZT48cGF0aCBkPVwiTTksMjAuNDJMMi43OSwxNC4yMUw1LjYyLDExLjM4TDksMTQuNzdMMTguODgsNC44OEwyMS43MSw3LjcxTDksMjAuNDJaXCIgLz48L3N2Zz5cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUYXNrVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuY29uc3QgdXVpZF8xID0gcmVxdWlyZShcInV1aWRcIik7XG5jb25zdCBkYXRhYmFzZU1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tLZXkgPSAndGFza3MnO1xuICAgIGNvbnN0IHByb2plY3RLZXkgPSAncHJvamVjdCc7XG4gICAgY29uc3QgaW5pdGlhbFRhc2tzID0gW1xuICAgICAgICB7IHRpdGxlOiBcIkRvIHRoZSBkaXNoZXMgbm93XCIsIGR1ZURhdGU6IFwiMjAyNC0wOC0xMFwiLCBwcmlvcml0eTogdHlwZXNfMS5Qcmlvcml0eS5Ob25lLCBwcm9qZWN0OiBcIkluYm94XCIsIGlkOiAoMCwgdXVpZF8xLnY0KSgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0aXRsZTogXCJEbyB0aGUgZGlzaGVzXCIsIGRlc2NyaXB0aW9uOiBcIkRvIGl0IHNvb24hXCIsIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksIHByaW9yaXR5OiB0eXBlc18xLlByaW9yaXR5Lk5vbmUsIHByb2plY3Q6IFwiSW5ib3hcIiwgaWQ6ICgwLCB1dWlkXzEudjQpKCksIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuICAgICAgICB7IHRpdGxlOiBcIkRvIHRoZSBkaXNoZXMgeWVzdGVyZGF5XCIsIGR1ZURhdGU6IFwiMjAyNS0xMi0xMVwiLCBwcmlvcml0eTogdHlwZXNfMS5Qcmlvcml0eS5Ob25lLCBwcm9qZWN0OiBcIkluYm94XCIsIGlkOiAoMCwgdXVpZF8xLnY0KSgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0aXRsZTogXCJEbyB0aGUgZGlzaGVzIHRvZGF5IVwiLCBkdWVEYXRlOiBcIjIwMjQtMDItMjdcIiwgcHJpb3JpdHk6IHR5cGVzXzEuUHJpb3JpdHkuSGlnaCwgcHJvamVjdDogXCJTY2hvb2xcIiwgaWQ6ICgwLCB1dWlkXzEudjQpKCksIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuICAgICAgICB7IHRpdGxlOiBcIkRvIHRoZSBkaXNoZXMgdG9kYXkhXCIsIGR1ZURhdGU6IFwiMjAyNC0wNS0wMlwiLCBwcmlvcml0eTogdHlwZXNfMS5Qcmlvcml0eS5Mb3csIHByb2plY3Q6IFwiSWNlXCIsIGlkOiAoMCwgdXVpZF8xLnY0KSgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfVxuICAgIF07XG4gICAgY29uc3QgaW5pdGlhbFByb2plY3RzID0gWydJbmJveCcsICdUb2RheScsICdJY2UnLCAnU2Nob29sJywgJ0pvYiddO1xuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RvcmVkVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrS2V5KTtcbiAgICAgICAgaWYgKCFzdG9yZWRUYXNrcykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFza0tleSwgSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFRhc2tzKSk7XG4gICAgICAgICAgICBzdG9yZWRUYXNrcyA9IEpTT04uc3RyaW5naWZ5KGluaXRpYWxUYXNrcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmVkVGFza3MpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RLZXkpO1xuICAgICAgICBpZiAoIXN0b3JlZFByb2plY3RzKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0S2V5LCBKU09OLnN0cmluZ2lmeShpbml0aWFsUHJvamVjdHMpKTtcbiAgICAgICAgICAgIHN0b3JlZFByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFByb2plY3RzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7XG4gICAgfTtcbiAgICBjb25zdCBzZXRUYXNrcyA9ICh0YXNrcykgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrS2V5LCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIH07XG4gICAgY29uc3Qgc2V0UHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEtleSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9O1xuICAgIHJldHVybiB7IGdldFByb2plY3RzLCBzZXRQcm9qZWN0cywgc2V0VGFza3MsIGdldFRhc2tzIH07XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGF0YWJhc2VNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9wcm9qZWN0TGlzdFZpZXcuY3NzXCIpO1xuY29uc3QgY3JlYXRlUHJvamVjdExpc3RWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlIHVsXCIpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0TmFtZXMgPSBbXTtcbiAgICBjb25zdCByZW5kZXIgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgd2hpbGUgKHByb2plY3RMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RMaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdE5hbWVzLnB1c2gobGkpO1xuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlQ3VycmVudFRhc2tzKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDdXJyZW50VGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBiaW5kQ2hhbmdlQ3VycmVudFRhc2tzID0gKGhhbmRsZXIpID0+IHsgY2hhbmdlQ3VycmVudFRhc2tzID0gaGFuZGxlcjsgfTtcbiAgICBsZXQgY2hhbmdlQ3VycmVudFRhc2tzID0gbnVsbDtcbiAgICByZXR1cm4geyByZW5kZXIsIGJpbmRDaGFuZ2VDdXJyZW50VGFza3MgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcm9qZWN0TGlzdFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJpb3JpdHkgPSB2b2lkIDA7XG52YXIgUHJpb3JpdHk7XG4oZnVuY3Rpb24gKFByaW9yaXR5KSB7XG4gICAgUHJpb3JpdHlbUHJpb3JpdHlbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICBQcmlvcml0eVtQcmlvcml0eVtcIkxvd1wiXSA9IDFdID0gXCJMb3dcIjtcbiAgICBQcmlvcml0eVtQcmlvcml0eVtcIkhpZ2hcIl0gPSAyXSA9IFwiSGlnaFwiO1xufSkoUHJpb3JpdHkgfHwgKGV4cG9ydHMuUHJpb3JpdHkgPSBQcmlvcml0eSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgQXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZnJvbnRlbmQvQXBwXCIpKTtcbmNvbnN0IGRhdGFiYXNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZnJvbnRlbmQvZGF0YWJhc2VcIikpO1xuY29uc3QgdG9Eb0FwcCA9ICgoKSA9PiB7XG4gICAgLy8gbGV0IHRhc2tzOiBUb0RvW10gPSBbXVxuICAgIC8vIGxldCBjdXJyZW50VGFza3M6IFRvRG9bXSA9IFtdXG4gICAgLy8gbGV0IHByb2plY3RzOiBzdHJpbmdbXSA9IFsnSW5ib3gnLCAnVG9kYXknLCAnSWNlJywgJ1NjaG9vbCddXG4gICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0OiBzdHJpbmdcbiAgICBsZXQgdGFza3MgPSBkYXRhYmFzZV8xLmRlZmF1bHQuZ2V0VGFza3MoKTtcbiAgICBsZXQgY3VycmVudFRhc2tzID0gW107XG4gICAgbGV0IHByb2plY3RzID0gZGF0YWJhc2VfMS5kZWZhdWx0LmdldFByb2plY3RzKCk7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKGlzUHJvamVjdE5hbWVVbmlxdWUocHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgcHJvamVjdHMgPSBbLi4ucHJvamVjdHMsIHByb2plY3ROYW1lXTtcbiAgICAgICAgaWYgKG9uUHJvamVjdExpc3RDaGFuZ2VkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICAgICAgb25Qcm9qZWN0TGlzdENoYW5nZWQocHJvamVjdExpc3QpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFiYXNlXzEuZGVmYXVsdC5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfTtcbiAgICBjb25zdCBpc1Byb2plY3ROYW1lVW5pcXVlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdCAhPT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiSW5ib3hcIiB8fCBwcm9qZWN0TmFtZSA9PT0gXCJUb2RheVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbmV3UHJvamVjdExpc3QgPSBbXTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gcHJvamVjdClcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdHMgPSBbLi4ubmV3UHJvamVjdExpc3RdO1xuICAgICAgICBpZiAob25Qcm9qZWN0TGlzdENoYW5nZWQpXG4gICAgICAgICAgICBvblByb2plY3RMaXN0Q2hhbmdlZChnZXRQcm9qZWN0TmFtZXMoKSk7XG4gICAgICAgIGRhdGFiYXNlXzEuZGVmYXVsdC5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfTtcbiAgICBjb25zdCBhZGRUYXNrID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSAoMCwgdXVpZF8xLnY0KSgpO1xuICAgICAgICB0YXNrcy5wdXNoKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9kbyksIHsgaWQgfSkpO1xuICAgICAgICBzZXRDdXJyZW50VGFza3MoZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIGRhdGFiYXNlXzEuZGVmYXVsdC5zZXRUYXNrcyh0YXNrcyk7XG4gICAgfTtcbiAgICBjb25zdCBlZGl0VGFzayA9IChpZCwgdG9kbykgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrcyA9IHRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gdGFzay5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2RvKSwgeyBpZCB9KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tzID0gWy4uLm5ld1Rhc2tzXTtcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICBkYXRhYmFzZV8xLmRlZmF1bHQuc2V0VGFza3ModGFza3MpO1xuICAgIH07XG4gICAgY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICAgICAgICBsZXQgbmV3VGFza3MgPSBbXTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmIChpZCAhPT0gdGFzay5pZClcbiAgICAgICAgICAgICAgICBuZXdUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFza3MgPSBbLi4ubmV3VGFza3NdO1xuICAgICAgICBzZXRDdXJyZW50VGFza3MoZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIGRhdGFiYXNlXzEuZGVmYXVsdC5zZXRUYXNrcyh0YXNrcyk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHRhc2tzO1xuICAgIGNvbnN0IGdldFByb2plY3ROYW1lcyA9ICgpID0+IHByb2plY3RzO1xuICAgIGNvbnN0IGdldFRhc2tzQnlQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0QWxsVGFza3MoKTtcbiAgICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlVGFza3NGb3JEZWxldGVkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICB0YXNrcyA9IHRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRhc2spLCB7IHByb2plY3Q6IFwiSW5ib3hcIiB9KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGFiYXNlXzEuZGVmYXVsdC5zZXRUYXNrcyh0YXNrcyk7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlVG9QcmV2aW91c1Byb2plY3QgPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgICAgICBpZiAoaXNQcm9qZWN0Tm90Q3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQcm9qZWN0ID0gcHJvamVjdHNbaW5kZXggLSAxXTtcbiAgICAgICAgaWYgKHByZXZpb3VzUHJvamVjdCA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChcIlRvZGF5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJldmlvdXNQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaXNQcm9qZWN0Tm90Q3VycmVudFByb2plY3QgPSAoY3VycmVudFByb2plY3QpID0+IGN1cnJlbnRQcm9qZWN0ICE9PSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IGdldEN1cnJlbnRUYXNrcyA9ICgpID0+IGN1cnJlbnRUYXNrcztcbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IGlzUHJvamVjdFRoZXJlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdCA9PT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKGlzUHJvamVjdFRoZXJlKHByb2plY3ROYW1lKSlcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWU7XG4gICAgfTtcbiAgICBjb25zdCBpc05ld0N1cnJlbnRQcm9qZWN0VG9kYXkgPSAocHJvamVjdE5hbWUpID0+IHByb2plY3ROYW1lID09PSBcIlRvZGF5XCI7XG4gICAgY29uc3Qgc2V0Q3VycmVudFRhc2tzQnlUb2RheSA9ICgpID0+IHtcbiAgICAgICAgY3VycmVudFRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWVEYXRlID09PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKTtcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVRhc2tDb21wbGV0aW9uID0gKGlkKSA9PiB7XG4gICAgICAgIHRhc2tzID0gdGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRhc2spLCB7IGlzQ29tcGxldGVkOiAodGFzay5pc0NvbXBsZXRlZCA/IGZhbHNlIDogdHJ1ZSkgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhYmFzZV8xLmRlZmF1bHQuc2V0VGFza3ModGFza3MpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Q3VycmVudFRhc2sgPSAoaWQpID0+IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSBpZCk7XG4gICAgY29uc3Qgc2V0Q3VycmVudFRhc2tzID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGlmIChpc05ld0N1cnJlbnRQcm9qZWN0VG9kYXkocHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgc2V0Q3VycmVudFRhc2tzQnlUb2RheSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjdXJyZW50VGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgaWYgKG9uVGFza0xpc3RDaGFuZ2VkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGdldEN1cnJlbnRUYXNrcygpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgICAgICBvblRhc2tMaXN0Q2hhbmdlZCh0YXNrTGlzdCwgcHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCBvblByb2plY3RMaXN0Q2hhbmdlZCA9IG51bGw7XG4gICAgY29uc3QgYmluZE9uUHJvamVjdExpc3RDaGFuZ2VkID0gKGNhbGxiYWNrKSA9PiB7IG9uUHJvamVjdExpc3RDaGFuZ2VkID0gY2FsbGJhY2s7IH07XG4gICAgbGV0IG9uVGFza0xpc3RDaGFuZ2VkID0gbnVsbDtcbiAgICBjb25zdCBiaW5kT25UYXNrTGlzdENoYW5nZWQgPSAoY2FsbGJhY2spID0+IHsgb25UYXNrTGlzdENoYW5nZWQgPSBjYWxsYmFjazsgfTtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICAvLyB0YXNrcy5wdXNoKHsgdGl0bGU6IFwiRG8gdGhlIGRpc2hlc1wiLCBkdWVEYXRlOiBcIjIwMjQtMDgtMTBcIiwgcHJpb3JpdHk6IFByaW9yaXR5Lk5vbmUsIHByb2plY3Q6IFwiSW5ib3hcIiwgaWQ6IHV1aWR2NCgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSlcbiAgICAgICAgLy8gdGFza3MucHVzaCh7IHRpdGxlOiBcIkNsZWFuIHlvdXIgcm9vbVwiLCBkZXNjcmlwdGlvbjogXCJEbyBpdCBzb29uIVwiLCBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLCBwcmlvcml0eTogUHJpb3JpdHkuTm9uZSwgcHJvamVjdDogXCJJbmJveFwiLCBpZDogdXVpZHY0KCksIGlzQ29tcGxldGVkOiBmYWxzZSB9KVxuICAgICAgICAvLyB0YXNrcy5wdXNoKHsgdGl0bGU6IFwiQnV5IHNvbWUgZWdnc1wiLCBkdWVEYXRlOiBcIjIwMjUtMTItMTFcIiwgcHJpb3JpdHk6IFByaW9yaXR5Lk5vbmUsIHByb2plY3Q6IFwiSW5ib3hcIiwgaWQ6IHV1aWR2NCgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSlcbiAgICAgICAgLy8gdGFza3MucHVzaCh7IHRpdGxlOiBcIlBheSB0YXhlc1wiLCBkdWVEYXRlOiBcIjIwMjQtMDItMjdcIiwgcHJpb3JpdHk6IFByaW9yaXR5LkhpZ2gsIHByb2plY3Q6IFwiU2Nob29sXCIsIGlkOiB1dWlkdjQoKSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0pXG4gICAgICAgIC8vIHRhc2tzLnB1c2goeyB0aXRsZTogXCJDYWxsIG1vbVwiLCBkdWVEYXRlOiBcIjIwMjQtMDUtMDJcIiwgcHJpb3JpdHk6IFByaW9yaXR5LkxvdywgcHJvamVjdDogXCJJY2VcIiwgaWQ6IHV1aWR2NCgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSlcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QoXCJJbmJveFwiKTtcbiAgICAgICAgaWYgKG9uUHJvamVjdExpc3RDaGFuZ2VkKVxuICAgICAgICAgICAgb25Qcm9qZWN0TGlzdENoYW5nZWQoZ2V0UHJvamVjdE5hbWVzKCkpO1xuICAgICAgICBzZXRDdXJyZW50VGFza3MoXCJJbmJveFwiKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGluaXRpYWxpemUsIGdldFByb2plY3ROYW1lcywgZ2V0Q3VycmVudFByb2plY3QsIGdldEN1cnJlbnRUYXNrcyxcbiAgICAgICAgZWRpdFRhc2ssIGFkZFRhc2ssIGRlbGV0ZVRhc2ssIGdldFRhc2tzQnlQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCxcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzLCBiaW5kT25Qcm9qZWN0TGlzdENoYW5nZWQsIGJpbmRPblRhc2tMaXN0Q2hhbmdlZCwgdXBkYXRlVGFza3NGb3JEZWxldGVkUHJvamVjdCxcbiAgICAgICAgbW92ZVRvUHJldmlvdXNQcm9qZWN0LCB0b2dnbGVUYXNrQ29tcGxldGlvbiwgZ2V0Q3VycmVudFRhc2tcbiAgICB9O1xufSkoKTtcbmNvbnN0IGFwcCA9ICgwLCBBcHBfMS5kZWZhdWx0KSh0b0RvQXBwKTtcbmFwcC5pbml0aWFsaXplKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1BWFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9uaWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcGFyc2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFUb1Y2XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92MVRvVi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92Mi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92My5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2VG9WMVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjZUb1YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2N1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjYuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xudmFyIF9tYXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heC5qc1wiKSk7XG52YXIgX25pbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmlsLmpzXCIpKTtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIikpO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG52YXIgX3YxVG9WID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MVRvVjYuanNcIikpO1xudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xudmFyIF92MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjQuanNcIikpO1xudmFyIF92NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjUuanNcIikpO1xudmFyIF92NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjYuanNcIikpO1xudmFyIF92NlRvViA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjZUb1YxLmpzXCIpKTtcbnZhciBfdjYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y3LmpzXCIpKTtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAnZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmJzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cblxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICB2YXIgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgdmFyIGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cblxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gMjcxNzMzODc4O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuXG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cblxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG5cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IG1kNTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByYW5kb21VVUlEXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7XG5cbiAgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7XG5cbiAgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbX2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBOOyArK19pMikge1xuICAgIHZhciBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHNoYTE7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgLy9cbiAgLy8gTm90ZSB0byBmdXR1cmUtc2VsZjogTm8sIHlvdSBjYW4ndCByZW1vdmUgdGhlIGB0b0xvd2VyQ2FzZSgpYCBjYWxsLlxuICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzY3NyNpc3N1ZWNvbW1lbnQtMTc1NzM1MTM1MVxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICB2YXIgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gIC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuICByZXR1cm4gdXVpZDtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ2lmeTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxO1xuXG4gIC8vIHYxIG9ubHk6IFVzZSBjYWNoZWQgYG5vZGVgIGFuZCBgY2xvY2tzZXFgIHZhbHVlc1xuICBpZiAoIW9wdGlvbnMuX3Y2KSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBub2RlID0gX25vZGVJZDtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB3ZSBuZWVkIGVudHJvcHkuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXNcbiAgLy8gcmVsYXRlZCB0byBpbnN1ZmZpY2llbnQgc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAgIC8vIFJhbmRvbWl6ZSBub2RlXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IFtzZWVkQnl0ZXNbMF0sIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcblxuICAgICAgLy8gdjEgb25seTogY2FjaGUgbm9kZSB2YWx1ZSBmb3IgcmV1c2VcbiAgICAgIGlmICghX25vZGVJZCAmJiAhb3B0aW9ucy5fdjYpIHtcbiAgICAgICAgLy8gcGVyIFJGQzQxMjIgNC41OiBTZXQgTUFDIG11bHRpY2FzdCBiaXQgKHYxIG9ubHkpXG4gICAgICAgIG5vZGVbMF0gfD0gMHgwMTsgLy8gU2V0IG11bHRpY2FzdCBiaXRcblxuICAgICAgICBfbm9kZUlkID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSYW5kb21pemUgY2xvY2tzZXFcbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICAgIGlmIChfY2xvY2tzZXEgPT09IHVuZGVmaW5lZCAmJiAhb3B0aW9ucy5fdjYpIHtcbiAgICAgICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdjEgJiB2NiB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc28gdGltZSBpc1xuICAvLyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHYxOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjFUb1Y2O1xudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIENvbnZlcnQgYSB2MSBVVUlEIHRvIGEgdjYgVVVJRFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFVpbnQ4QXJyYXl9IHV1aWQgLSBUaGUgdjEgVVVJRCB0byBjb252ZXJ0IHRvIHY2XG4gKiBAcmV0dXJucyB7c3RyaW5nfFVpbnQ4QXJyYXl9IFRoZSB2NiBVVUlEIGFzIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGB1dWlkYCBhcmdcbiAqIChzdHJpbmcgb3IgVWludDhBcnJheSlcbiAqL1xuZnVuY3Rpb24gdjFUb1Y2KHV1aWQpIHtcbiAgdmFyIHYxQnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3BhcnNlLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgdmFyIHY2Qnl0ZXMgPSBfdjFUb1Y2KHYxQnl0ZXMpO1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KSh2NkJ5dGVzKSA6IHY2Qnl0ZXM7XG59XG5cbi8vIERvIHRoZSBmaWVsZCB0cmFuc2Zvcm1hdGlvbiBuZWVkZWQgZm9yIHYxIC0+IHY2XG5mdW5jdGlvbiBfdjFUb1Y2KHYxQnl0ZXMsIHJhbmRvbWl6ZSA9IGZhbHNlKSB7XG4gIHJldHVybiBVaW50OEFycmF5Lm9mKCh2MUJ5dGVzWzZdICYgMHgwZikgPDwgNCB8IHYxQnl0ZXNbN10gPj4gNCAmIDB4MGYsICh2MUJ5dGVzWzddICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzRdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbNF0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbNV0gJiAweGYwKSA+PiA0LCAodjFCeXRlc1s1XSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1swXSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzBdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzFdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbMV0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbMl0gJiAweGYwKSA+PiA0LCAweDYwIHwgdjFCeXRlc1syXSAmIDB4MGYsIHYxQnl0ZXNbM10sIHYxQnl0ZXNbOF0sIHYxQnl0ZXNbOV0sIHYxQnl0ZXNbMTBdLCB2MUJ5dGVzWzExXSwgdjFCeXRlc1sxMl0sIHYxQnl0ZXNbMTNdLCB2MUJ5dGVzWzE0XSwgdjFCeXRlc1sxNV0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xudmFyIF9tZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWQ1LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2MzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSB2MzU7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59XG52YXIgRE5TID0gZXhwb3J0cy5ETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbnZhciBVUkwgPSBleHBvcnRzLlVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9ICgwLCBfcGFyc2UuZGVmYXVsdCkobmFtZXNwYWNlKTtcbiAgICB9XG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lO1xuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2NDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcbnZhciBfc2hhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGExLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2NjtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG52YXIgX3YxVG9WID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MVRvVjYuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkgeyByZXR1cm4gKHIgPSBfdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7IHZhbHVlOiB0LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH0pIDogZVtyXSA9IHQsIGU7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtVaW50OEFycmF5PX0gYnVmXG4gKiBAcGFyYW0ge251bWJlcj19IG9mZnNldFxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdjYob3B0aW9ucyA9IHt9LCBidWYsIG9mZnNldCA9IDApIHtcbiAgLy8gdjYgaXMgdjEgd2l0aCBkaWZmZXJlbnQgZmllbGQgbGF5b3V0LCBzbyB3ZSBzdGFydCB3aXRoIGEgdjEgVVVJRCwgYWxiZWl0XG4gIC8vIHdpdGggc2xpZ2h0bHkgZGlmZmVyZW50IGJlaGF2aW9yIGFyb3VuZCBob3cgdGhlIGNsb2NrX3NlcSBhbmQgbm9kZSBmaWVsZHNcbiAgLy8gYXJlIHJhbmRvbWl6ZWQsIHdoaWNoIGlzIHdoeSB3ZSBjYWxsIHYxIHdpdGggX3Y2OiB0cnVlLlxuICB2YXIgYnl0ZXMgPSAoMCwgX3YuZGVmYXVsdCkoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zKSwge30sIHtcbiAgICBfdjY6IHRydWVcbiAgfSksIG5ldyBVaW50OEFycmF5KDE2KSk7XG5cbiAgLy8gUmVvcmRlciB0aGUgZmllbGRzIHRvIHY2IGxheW91dC5cbiAgYnl0ZXMgPSAoMCwgX3YxVG9WLmRlZmF1bHQpKGJ5dGVzKTtcblxuICAvLyBSZXR1cm4gYXMgYSBieXRlIGFycmF5IGlmIHJlcXVlc3RlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2NlRvVjE7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogQ29udmVydCBhIHY2IFVVSUQgdG8gYSB2MSBVVUlEXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8VWludDhBcnJheX0gdXVpZCAtIFRoZSB2NiBVVUlEIHRvIGNvbnZlcnQgdG8gdjZcbiAqIEByZXR1cm5zIHtzdHJpbmd8VWludDhBcnJheX0gVGhlIHYxIFVVSUQgYXMgdGhlIHNhbWUgdHlwZSBhcyB0aGUgYHV1aWRgIGFyZ1xuICogKHN0cmluZyBvciBVaW50OEFycmF5KVxuICovXG5mdW5jdGlvbiB2NlRvVjEodXVpZCkge1xuICB2YXIgdjZCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBfcGFyc2UuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICB2YXIgdjFCeXRlcyA9IF92NlRvVjEodjZCeXRlcyk7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKHYxQnl0ZXMpIDogdjFCeXRlcztcbn1cblxuLy8gRG8gdGhlIGZpZWxkIHRyYW5zZm9ybWF0aW9uIG5lZWRlZCBmb3IgdjYgLT4gdjFcbmZ1bmN0aW9uIF92NlRvVjEodjZCeXRlcykge1xuICByZXR1cm4gVWludDhBcnJheS5vZigodjZCeXRlc1szXSAmIDB4MGYpIDw8IDQgfCB2NkJ5dGVzWzRdID4+IDQgJiAweDBmLCAodjZCeXRlc1s0XSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1s1XSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzVdICYgMHgwZikgPDwgNCB8IHY2Qnl0ZXNbNl0gJiAweDBmLCB2NkJ5dGVzWzddLCAodjZCeXRlc1sxXSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1syXSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzJdICYgMHgwZikgPDwgNCB8ICh2NkJ5dGVzWzNdICYgMHhmMCkgPj4gNCwgMHgxMCB8ICh2NkJ5dGVzWzBdICYgMHhmMCkgPj4gNCwgKHY2Qnl0ZXNbMF0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbMV0gJiAweGYwKSA+PiA0LCB2NkJ5dGVzWzhdLCB2NkJ5dGVzWzldLCB2NkJ5dGVzWzEwXSwgdjZCeXRlc1sxMV0sIHY2Qnl0ZXNbMTJdLCB2NkJ5dGVzWzEzXSwgdjZCeXRlc1sxNF0sIHY2Qnl0ZXNbMTVdKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIFVVSUQgVjcgLSBVbml4IEVwb2NoIHRpbWUtYmFzZWQgVVVJRFxuICpcbiAqIFRoZSBJRVRGIGhhcyBwdWJsaXNoZWQgUkZDOTU2MiwgaW50cm9kdWNpbmcgMyBuZXcgVVVJRCB2ZXJzaW9ucyAoNiw3LDgpLiBUaGlzXG4gKiBpbXBsZW1lbnRhdGlvbiBvZiBWNyBpcyBiYXNlZCBvbiB0aGUgYWNjZXB0ZWQsIHRob3VnaCBub3QgeWV0IGFwcHJvdmVkLFxuICogcmV2aXNpb25zLlxuICpcbiAqIFJGQyA5NTYyOmh0dHBzOi8vd3d3LnJmYy1lZGl0b3Iub3JnL3JmYy9yZmM5NTYyLmh0bWwgVW5pdmVyc2FsbHkgVW5pcXVlXG4gKiBJRGVudGlmaWVycyAoVVVJRHMpXG5cbiAqXG4gKiBTYW1wbGUgVjcgdmFsdWU6XG4gKiBodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTU2Mi5odG1sI25hbWUtZXhhbXBsZS1vZi1hLXV1aWR2Ny12YWx1ZVxuICpcbiAqIE1vbm90b25pYyBCaXQgTGF5b3V0OiBSRkMgcmZjOTU2Mi42LjIgTWV0aG9kIDEsIERlZGljYXRlZCBDb3VudGVyIEJpdHMgcmVmOlxuICogICAgIGh0dHBzOi8vd3d3LnJmYy1lZGl0b3Iub3JnL3JmYy9yZmM5NTYyLmh0bWwjc2VjdGlvbi02LjItNS4xXG4gKlxuICogICAwICAgICAgICAgICAgICAgICAgIDEgICAgICAgICAgICAgICAgICAgMiAgICAgICAgICAgICAgICAgICAzIDAgMSAyIDMgNCA1IDZcbiAqICAgNyA4IDkgMCAxIDIgMyA0IDUgNiA3IDggOSAwIDEgMiAzIDQgNSA2IDcgOCA5IDAgMVxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgdW5peF90c19tcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHwgICAgICAgICAgdW5peF90c19tcyAgICAgICAgICAgfCAgdmVyICB8ICAgICAgICBzZXFfaGkgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqICB8dmFyfCAgICAgICAgICAgICAgIHNlcV9sb3cgICAgICAgICAgICAgICB8ICAgICAgICByYW5kICAgICAgICAgfFxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICpcbiAqIHNlcSBpcyBhIDMxIGJpdCBzZXJpYWxpemVkIGNvdW50ZXI7IGNvbXByaXNlZCBvZiAxMiBiaXQgc2VxX2hpIGFuZCAxOSBiaXRcbiAqIHNlcV9sb3csIGFuZCByYW5kb21seSBpbml0aWFsaXplZCB1cG9uIHRpbWVzdGFtcCBjaGFuZ2UuIDMxIGJpdCBjb3VudGVyIHNpemVcbiAqIHdhcyBzZWxlY3RlZCBhcyBhbnkgYml0d2lzZSBvcGVyYXRpb25zIGluIG5vZGUgYXJlIGRvbmUgYXMgX3NpZ25lZF8gMzIgYml0XG4gKiBpbnRzLiB3ZSBleGNsdWRlIHRoZSBzaWduIGJpdC5cbiAqL1xuXG52YXIgX3NlcUxvdyA9IG51bGw7XG52YXIgX3NlcUhpZ2ggPSBudWxsO1xudmFyIF9tc2VjcyA9IDA7XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBpbml0aWFsaXplIGJ1ZmZlciBhbmQgcG9pbnRlclxuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG4gIC8vIHJuZHMgaXMgVWludDhBcnJheSgxNikgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAvLyBtaWxsaXNlY29uZHMgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMFxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTtcblxuICAvLyBzZXEgaXMgdXNlciBwcm92aWRlZCAzMSBiaXQgY291bnRlclxuICB2YXIgc2VxID0gb3B0aW9ucy5zZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuc2VxIDogbnVsbDtcblxuICAvLyBpbml0aWFsaXplIGxvY2FsIHNlcSBoaWdoL2xvdyBwYXJ0c1xuICB2YXIgc2VxSGlnaCA9IF9zZXFIaWdoO1xuICB2YXIgc2VxTG93ID0gX3NlcUxvdztcblxuICAvLyBjaGVjayBpZiBjbG9jayBoYXMgYWR2YW5jZWQgYW5kIHVzZXIgaGFzIG5vdCBwcm92aWRlZCBtc2Vjc1xuICBpZiAobXNlY3MgPiBfbXNlY3MgJiYgb3B0aW9ucy5tc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgX21zZWNzID0gbXNlY3M7XG5cbiAgICAvLyB1bmxlc3MgdXNlciBwcm92aWRlZCBzZXEsIHJlc2V0IHNlcSBwYXJ0c1xuICAgIGlmIChzZXEgIT09IG51bGwpIHtcbiAgICAgIHNlcUhpZ2ggPSBudWxsO1xuICAgICAgc2VxTG93ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgdXNlciBwcm92aWRlZCBzZXFcbiAgaWYgKHNlcSAhPT0gbnVsbCkge1xuICAgIC8vIHRyaW0gcHJvdmlkZWQgc2VxIHRvIDMxIGJpdHMgb2YgdmFsdWUsIGF2b2lkaW5nIG92ZXJmbG93XG4gICAgaWYgKHNlcSA+IDB4N2ZmZmZmZmYpIHtcbiAgICAgIHNlcSA9IDB4N2ZmZmZmZmY7XG4gICAgfVxuXG4gICAgLy8gc3BsaXQgcHJvdmlkZWQgc2VxIGludG8gaGlnaC9sb3cgcGFydHNcbiAgICBzZXFIaWdoID0gc2VxID4+PiAxOSAmIDB4ZmZmO1xuICAgIHNlcUxvdyA9IHNlcSAmIDB4N2ZmZmY7XG4gIH1cblxuICAvLyByYW5kb21seSBpbml0aWFsaXplIHNlcVxuICBpZiAoc2VxSGlnaCA9PT0gbnVsbCB8fCBzZXFMb3cgPT09IG51bGwpIHtcbiAgICBzZXFIaWdoID0gcm5kc1s2XSAmIDB4N2Y7XG4gICAgc2VxSGlnaCA9IHNlcUhpZ2ggPDwgOCB8IHJuZHNbN107XG4gICAgc2VxTG93ID0gcm5kc1s4XSAmIDB4M2Y7IC8vIHBhZCBmb3IgdmFyXG4gICAgc2VxTG93ID0gc2VxTG93IDw8IDggfCBybmRzWzldO1xuICAgIHNlcUxvdyA9IHNlcUxvdyA8PCA1IHwgcm5kc1sxMF0gPj4+IDM7XG4gIH1cblxuICAvLyBpbmNyZW1lbnQgc2VxIGlmIHdpdGhpbiBtc2VjcyB3aW5kb3dcbiAgaWYgKG1zZWNzICsgMTAwMDAgPiBfbXNlY3MgJiYgc2VxID09PSBudWxsKSB7XG4gICAgaWYgKCsrc2VxTG93ID4gMHg3ZmZmZikge1xuICAgICAgc2VxTG93ID0gMDtcbiAgICAgIGlmICgrK3NlcUhpZ2ggPiAweGZmZikge1xuICAgICAgICBzZXFIaWdoID0gMDtcblxuICAgICAgICAvLyBpbmNyZW1lbnQgaW50ZXJuYWwgX21zZWNzLiB0aGlzIGFsbG93cyB1cyB0byBjb250aW51ZSBpbmNyZW1lbnRpbmdcbiAgICAgICAgLy8gd2hpbGUgc3RheWluZyBtb25vdG9uaWMuIE5vdGUsIG9uY2Ugd2UgaGl0IDEwayBtaWxsaXNlY29uZHMgYmV5b25kIHN5c3RlbVxuICAgICAgICAvLyBjbG9jaywgd2Ugd2lsbCByZXNldCBicmVha2luZyBtb25vdG9uaWNpdHkgKGFmdGVyICgyXjMxKSoxMDAwMCBnZW5lcmF0aW9ucylcbiAgICAgICAgX21zZWNzKys7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIHJlc2V0dGluZzsgd2UgaGF2ZSBhZHZhbmNlZCBtb3JlIHRoYW5cbiAgICAvLyAxMGsgbWlsbGlzZWNvbmRzIGJleW9uZCBzeXN0ZW0gY2xvY2tcbiAgICBfbXNlY3MgPSBtc2VjcztcbiAgfVxuICBfc2VxSGlnaCA9IHNlcUhpZ2g7XG4gIF9zZXFMb3cgPSBzZXFMb3c7XG5cbiAgLy8gW2J5dGVzIDAtNV0gNDggYml0cyBvZiBsb2NhbCB0aW1lc3RhbXBcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzICYgMHhmZjtcblxuICAvLyBbYnl0ZSA2XSAtIHNldCA0IGJpdHMgb2YgdmVyc2lvbiAoNykgd2l0aCBmaXJzdCA0IGJpdHMgc2VxX2hpXG4gIGJbaSsrXSA9IHNlcUhpZ2ggPj4+IDQgJiAweDBmIHwgMHg3MDtcblxuICAvLyBbYnl0ZSA3XSByZW1haW5pbmcgOCBiaXRzIG9mIHNlcV9oaVxuICBiW2krK10gPSBzZXFIaWdoICYgMHhmZjtcblxuICAvLyBbYnl0ZSA4XSAtIHZhcmlhbnQgKDIgYml0cyksIGZpcnN0IDYgYml0cyBzZXFfbG93XG4gIGJbaSsrXSA9IHNlcUxvdyA+Pj4gMTMgJiAweDNmIHwgMHg4MDtcblxuICAvLyBbYnl0ZSA5XSA4IGJpdHMgc2VxX2xvd1xuICBiW2krK10gPSBzZXFMb3cgPj4+IDUgJiAweGZmO1xuXG4gIC8vIFtieXRlIDEwXSByZW1haW5pbmcgNSBiaXRzIHNlcV9sb3csIDMgYml0cyByYW5kb21cbiAgYltpKytdID0gc2VxTG93IDw8IDMgJiAweGZmIHwgcm5kc1sxMF0gJiAweDA3O1xuXG4gIC8vIFtieXRlcyAxMS0xNV0gYWx3YXlzIHJhbmRvbVxuICBiW2krK10gPSBybmRzWzExXTtcbiAgYltpKytdID0gcm5kc1sxMl07XG4gIGJbaSsrXSA9IHJuZHNbMTNdO1xuICBiW2krK10gPSBybmRzWzE0XTtcbiAgYltpKytdID0gcm5kc1sxNV07XG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHY3OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIF9yZWdleC5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHZlcnNpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9