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

                #projectSelect {
                    color: black;
                    font-size: 16px;
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

        button {
            padding: 5px 10px;
            font-size: 20px;
            width: 100px;
            margin-top: 30px;
        }

        .addTaskButton {
            grid-area: button1;
            place-self: end;
        }

        .cancelButton {
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

        #projectSelect {
            grid-area: input;
            padding: 2px;
            width: 100%;
            height: min-content;
            font-size: inherit;
        }

        .deleteProjectButton,
        .addProjectButton,
        .cancelButton {
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

        .deleteProjectButton,
        .addProjectButton {
            grid-area: leftButton;
        }
    }


}`, "",{"version":3,"sources":["webpack://./src/frontend/Dialog/Dialog.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;;IAEnB;QACI,aAAa;QACb,8CAA8C;QAC9C;;;;;QAKA;QACA,aAAa;QACb,wBAAwB;;QAExB;;;YAGI,aAAa;YACb,sBAAsB;YACtB,eAAe;YACf,kBAAkB;QACtB;;QAEA;YACI,gBAAgB;;YAEhB;gBACI,YAAY;gBACZ,kBAAkB;YACtB;QACJ;;QAEA;YACI,mBAAmB;;YAEnB;gBACI,YAAY;gBACZ,kBAAkB;YACtB;QACJ;;QAEA;YACI,eAAe;YACf,oBAAoB;;YAEpB;gBACI,kBAAkB;;gBAElB;oBACI,SAAS;oBACT,kBAAkB;oBAClB,gBAAgB;gBACpB;YACJ;QACJ;;QAEA;;YAEI;gBACI,eAAe;gBACf,kBAAkB;gBAClB,aAAa;gBACb,sBAAsB;;gBAEtB;oBACI,YAAY;oBACZ,eAAe;gBACnB;YACJ;;QAEJ;;QAEA;YACI,mBAAmB;YACnB,oBAAoB;YACpB,aAAa;YACb,YAAY;YACZ,8CAA8C;YAC9C;;6CAEiC;YACjC,uBAAuB;YACvB,mBAAmB;;YAEnB;gBACI,eAAe;gBACf,gBAAgB;gBAChB,kBAAkB;YACtB;;YAEA;gBACI,eAAe;YACnB;;YAEA;;gBAEI,wBAAwB;gBACxB,yBAAyB;gBACzB,oBAAoB;YACxB;;YAEA;gBACI,qBAAqB;gBACrB,mDAAyD;YAC7D;;YAEA;gBACI,sBAAsB;gBACtB,mDAA0D;YAC9D;QACJ;;QAEA;YACI,iBAAiB;YACjB,eAAe;YACf,YAAY;YACZ,gBAAgB;QACpB;;QAEA;YACI,kBAAkB;YAClB,eAAe;QACnB;;QAEA;YACI,kBAAkB;YAClB,iBAAiB;QACrB;IACJ;;IAEA;QACI,aAAa;QACb,2CAA2C;QAC3C;;;;QAIA;QACA,wBAAwB;QACxB,eAAe;;QAEf;YACI,gBAAgB;YAChB,kBAAkB;QACtB;;QAEA;YACI,gBAAgB;;YAEhB,kBAAkB;;YAElB;gBACI,YAAY;gBACZ,WAAW;gBACX,kBAAkB;YACtB;;YAEA;gBACI,aAAa;gBACb,kBAAkB;gBAClB,kBAAkB;gBAClB,WAAW;gBACX,UAAU;gBACV,gBAAgB;YACpB;QACJ;;QAEA;YACI,gBAAgB;YAChB,YAAY;YACZ,WAAW;YACX,mBAAmB;YACnB,kBAAkB;QACtB;;QAEA;;;YAGI,YAAY;YACZ,kBAAkB;YAClB,kBAAkB;YAClB,oBAAoB;YACpB,kBAAkB;YAClB,SAAS;QACb;;QAEA;YACI,sBAAsB;QAC1B;;QAEA;;YAEI,qBAAqB;QACzB;IACJ;;;AAGJ","sourcesContent":["dialog {\n    --buttonSize: 30px;\n    --modalWidth: 500px;\n\n    .modal {\n        display: grid;\n        grid-template: repeat(4, auto)/ repeat(3, 1fr);\n        grid-template-areas:\n            \"title title title\"\n            \"descript descript descript\"\n            \"date project priority\"\n            \"button1 . button2\"\n        ;\n        row-gap: 10px;\n        width: var(--modalWidth);\n\n        .titleLabel,\n        .descriptLabel,\n        .dateLabel {\n            display: flex;\n            flex-direction: column;\n            font-size: 18px;\n            margin-bottom: 5px;\n        }\n\n        .titleLabel {\n            grid-area: title;\n\n            #titleInput {\n                padding: 5px;\n                font-size: inherit;\n            }\n        }\n\n        .descriptLabel {\n            grid-area: descript;\n\n            #descriptTextArea {\n                padding: 5px;\n                font-size: inherit;\n            }\n        }\n\n        .dateContainer {\n            grid-area: date;\n            justify-self: center;\n\n            .dateLabel {\n                text-align: center;\n\n                .dateInput {\n                    flex: 10%;\n                    width: min-content;\n                    margin-top: 10px;\n                }\n            }\n        }\n\n        .projectBox {\n\n            .projectLabel {\n                font-size: 20px;\n                text-align: center;\n                display: flex;\n                flex-direction: column;\n\n                #projectSelect {\n                    color: black;\n                    font-size: 16px;\n                }\n            }\n\n        }\n\n        .priorityDiv {\n            grid-area: priority;\n            justify-self: center;\n            display: grid;\n            width: 150px;\n            grid-template: 20px 40px / 1fr max-content 1fr;\n            grid-template-areas:\n                \"label label label\"\n                \"leftButton text rightButton\";\n            justify-content: center;\n            align-items: center;\n\n            .priorityLabel {\n                font-size: 18px;\n                grid-area: label;\n                text-align: center;\n            }\n\n            .priorityText {\n                grid-area: text;\n            }\n\n            .priorityLeftButton,\n            .priorityRightButton {\n                width: var(--buttonSize);\n                height: var(--buttonSize);\n                justify-self: center;\n            }\n\n            .priorityLeftButton {\n                grid-area: leftButton;\n                background: url(../../assets/arrow-left-bold-outline.svg);\n            }\n\n            .priorityRightButton {\n                grid-area: rightButton;\n                background: url(../../assets/arrow-right-bold-outline.svg);\n            }\n        }\n\n        button {\n            padding: 5px 10px;\n            font-size: 20px;\n            width: 100px;\n            margin-top: 30px;\n        }\n\n        .addTaskButton {\n            grid-area: button1;\n            place-self: end;\n        }\n\n        .cancelButton {\n            grid-area: button2;\n            place-self: start;\n        }\n    }\n\n    .projectModal {\n        display: grid;\n        grid-template: 1fr 2fr 1fr / repeat(2, 1fr);\n        grid-template-areas:\n            \"label label\"\n            \"input input\"\n            \"leftButton rightButton\"\n        ;\n        width: var(--modalWidth);\n        font-size: 20px;\n\n        .projectNameLabel {\n            grid-area: label;\n            text-align: center;\n        }\n\n        .projectNameInputWrapper {\n            grid-area: input;\n\n            position: relative;\n\n            #projectNameInput {\n                padding: 2px;\n                width: 100%;\n                font-size: inherit;\n            }\n\n            .warningText {\n                display: none;\n                position: absolute;\n                text-align: center;\n                width: 100%;\n                color: red;\n                font-weight: 700;\n            }\n        }\n\n        #projectSelect {\n            grid-area: input;\n            padding: 2px;\n            width: 100%;\n            height: min-content;\n            font-size: inherit;\n        }\n\n        .deleteProjectButton,\n        .addProjectButton,\n        .cancelButton {\n            padding: 5px;\n            width: min-content;\n            font-size: inherit;\n            justify-self: center;\n            align-self: center;\n            margin: 0;\n        }\n\n        .cancelButton {\n            grid-area: rightButton;\n        }\n\n        .deleteProjectButton,\n        .addProjectButton {\n            grid-area: leftButton;\n        }\n    }\n\n\n}"],"sourceRoot":""}]);
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
    form.className = 'projectModal modal';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLCtCQUErQixvQkFBb0IsZ0JBQWdCLG9CQUFvQix5Q0FBeUMsOEVBQThFLEdBQUcsV0FBVywyQ0FBMkMsd0JBQXdCLGVBQWUsdUJBQXVCLHNCQUFzQixPQUFPLEdBQUcsVUFBVSx1QkFBdUIsb0NBQW9DLG1CQUFtQixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsZUFBZSxnQkFBZ0Isa0JBQWtCLEdBQUcsbUJBQW1CO0FBQzEyQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3ZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLHlKQUEyRDtBQUN2Ryw0Q0FBNEMsMkpBQTREO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLG1DQUFtQztBQUNyRTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLG1DQUFtQztBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsT0FBTyxpR0FBaUcsWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLFVBQVUsS0FBSyxVQUFVLGFBQWEsUUFBUSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxL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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9BcHAuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9EaWFsb2cuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tMaXN0Vmlldy5jc3MiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvVGFza1ZpZXcuY3NzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL3Byb2plY3RMaXN0Vmlldy5jc3MiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0FwcC5jc3M/OGZlZSIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLmNzcz83N2U4Iiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0hlYWRlci9IZWFkZXIuY3NzPzBlOGYiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvVGFza0xpc3RWaWV3LmNzcz9mYjQ5Iiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tWaWV3LmNzcz84NGJmIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL3Byb2plY3RMaXN0Vmlldy5jc3M/NjI3MSIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0FwcC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvQWRkUHJvamVjdE1vZGFsLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9BZGRUYXNrTW9kYWwudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvRGlhbG9nL0RlbGV0ZVByb2plY3RNb2RhbC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9FZGl0VGFza01vZGFsLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL0RpYWxvZy9Qcmlvcml0eUJveC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9EaWFsb2cvUHJvamVjdEJveC50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9IZWFkZXIvSGVhZGVyLnRzIiwid2VicGFjazovL2JvbWJnYW1lLy4vc3JjL2Zyb250ZW5kL1Rhc2tMaXN0Vmlldy50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9UYXNrVmlldy50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9kYXRhYmFzZS50cyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL3NyYy9mcm9udGVuZC9wcm9qZWN0TGlzdFZpZXcudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvZnJvbnRlbmQvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL2JvbWJnYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92Ny5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib21iZ2FtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JvbWJnYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ib21iZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYm9tYmdhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDgwcHggMWZyLyAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJhc2lkZSBtYWluXCI7XG59XG5cbmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDcsIDI1NSk7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgICBidXR0b257XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxufVxuXG5hc2lkZXtcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxubWFpbntcbiAgICBncmlkLWFyZWE6IG1haW47XG59XG5cbmZvb3RlciBzdmd7XG4gICAgZmlsbDpnb2xkO1xuICAgIHdpZHRoOiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zyb250ZW5kL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0M7SUFDbEM7O29CQUVnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7O0lBRWpCO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogODBweCAxZnIvIDIwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbmFzaWRle1xcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxufVxcblxcbmZvb3RlciBzdmd7XFxuICAgIGZpbGw6Z29sZDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQtYm9sZC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC1ib2xkLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcbiAgICAtLWJ1dHRvblNpemU6IDMwcHg7XG4gICAgLS1tb2RhbFdpZHRoOiA1MDBweDtcblxuICAgIC5tb2RhbCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCBhdXRvKS8gcmVwZWF0KDMsIDFmcik7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcInRpdGxlIHRpdGxlIHRpdGxlXCJcbiAgICAgICAgICAgIFwiZGVzY3JpcHQgZGVzY3JpcHQgZGVzY3JpcHRcIlxuICAgICAgICAgICAgXCJkYXRlIHByb2plY3QgcHJpb3JpdHlcIlxuICAgICAgICAgICAgXCJidXR0b24xIC4gYnV0dG9uMlwiXG4gICAgICAgIDtcbiAgICAgICAgcm93LWdhcDogMTBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLW1vZGFsV2lkdGgpO1xuXG4gICAgICAgIC50aXRsZUxhYmVsLFxuICAgICAgICAuZGVzY3JpcHRMYWJlbCxcbiAgICAgICAgLmRhdGVMYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZUxhYmVsIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XG5cbiAgICAgICAgICAgICN0aXRsZUlucHV0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0TGFiZWwge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdDtcblxuICAgICAgICAgICAgI2Rlc2NyaXB0VGV4dEFyZWEge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZUNvbnRhaW5lciB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGRhdGU7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmRhdGVMYWJlbCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLmRhdGVJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0Qm94IHtcblxuICAgICAgICAgICAgLnByb2plY3RMYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAjcHJvamVjdFNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLnByaW9yaXR5RGl2IHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAyMHB4IDQwcHggLyAxZnIgbWF4LWNvbnRlbnQgMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgICBcImxhYmVsIGxhYmVsIGxhYmVsXCJcbiAgICAgICAgICAgICAgICBcImxlZnRCdXR0b24gdGV4dCByaWdodEJ1dHRvblwiO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAucHJpb3JpdHlMYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbGFiZWw7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpb3JpdHlUZXh0IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmlvcml0eUxlZnRCdXR0b24sXG4gICAgICAgICAgICAucHJpb3JpdHlSaWdodEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJ1dHRvblNpemUpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYnV0dG9uU2l6ZSk7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmlvcml0eUxlZnRCdXR0b24ge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbGVmdEJ1dHRvbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmlvcml0eVJpZ2h0QnV0dG9uIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHJpZ2h0QnV0dG9uO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkVGFza0J1dHRvbiB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbjE7XG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBlbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsQnV0dG9uIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9uMjtcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByb2plY3RNb2RhbCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgMWZyIC8gcmVwZWF0KDIsIDFmcik7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcImxhYmVsIGxhYmVsXCJcbiAgICAgICAgICAgIFwiaW5wdXQgaW5wdXRcIlxuICAgICAgICAgICAgXCJsZWZ0QnV0dG9uIHJpZ2h0QnV0dG9uXCJcbiAgICAgICAgO1xuICAgICAgICB3aWR0aDogdmFyKC0tbW9kYWxXaWR0aCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICAucHJvamVjdE5hbWVMYWJlbCB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGxhYmVsO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2plY3ROYW1lSW5wdXRXcmFwcGVyIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaW5wdXQ7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgI3Byb2plY3ROYW1lSW5wdXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53YXJuaW5nVGV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNwcm9qZWN0U2VsZWN0IHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaW5wdXQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVsZXRlUHJvamVjdEJ1dHRvbixcbiAgICAgICAgLmFkZFByb2plY3RCdXR0b24sXG4gICAgICAgIC5jYW5jZWxCdXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsQnV0dG9uIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogcmlnaHRCdXR0b247XG4gICAgICAgIH1cblxuICAgICAgICAuZGVsZXRlUHJvamVjdEJ1dHRvbixcbiAgICAgICAgLmFkZFByb2plY3RCdXR0b24ge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0QnV0dG9uO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mcm9udGVuZC9EaWFsb2cvRGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CO1FBQ0ksYUFBYTtRQUNiLDhDQUE4QztRQUM5Qzs7Ozs7UUFLQTtRQUNBLGFBQWE7UUFDYix3QkFBd0I7O1FBRXhCOzs7WUFHSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZixrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSxnQkFBZ0I7O1lBRWhCO2dCQUNJLFlBQVk7Z0JBQ1osa0JBQWtCO1lBQ3RCO1FBQ0o7O1FBRUE7WUFDSSxtQkFBbUI7O1lBRW5CO2dCQUNJLFlBQVk7Z0JBQ1osa0JBQWtCO1lBQ3RCO1FBQ0o7O1FBRUE7WUFDSSxlQUFlO1lBQ2Ysb0JBQW9COztZQUVwQjtnQkFDSSxrQkFBa0I7O2dCQUVsQjtvQkFDSSxTQUFTO29CQUNULGtCQUFrQjtvQkFDbEIsZ0JBQWdCO2dCQUNwQjtZQUNKO1FBQ0o7O1FBRUE7O1lBRUk7Z0JBQ0ksZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2Isc0JBQXNCOztnQkFFdEI7b0JBQ0ksWUFBWTtvQkFDWixlQUFlO2dCQUNuQjtZQUNKOztRQUVKOztRQUVBO1lBQ0ksbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IsWUFBWTtZQUNaLDhDQUE4QztZQUM5Qzs7NkNBRWlDO1lBQ2pDLHVCQUF1QjtZQUN2QixtQkFBbUI7O1lBRW5CO2dCQUNJLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksZUFBZTtZQUNuQjs7WUFFQTs7Z0JBRUksd0JBQXdCO2dCQUN4Qix5QkFBeUI7Z0JBQ3pCLG9CQUFvQjtZQUN4Qjs7WUFFQTtnQkFDSSxxQkFBcUI7Z0JBQ3JCLG1EQUF5RDtZQUM3RDs7WUFFQTtnQkFDSSxzQkFBc0I7Z0JBQ3RCLG1EQUEwRDtZQUM5RDtRQUNKOztRQUVBO1lBQ0ksaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixZQUFZO1lBQ1osZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsaUJBQWlCO1FBQ3JCO0lBQ0o7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsMkNBQTJDO1FBQzNDOzs7O1FBSUE7UUFDQSx3QkFBd0I7UUFDeEIsZUFBZTs7UUFFZjtZQUNJLGdCQUFnQjtZQUNoQixrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSxnQkFBZ0I7O1lBRWhCLGtCQUFrQjs7WUFFbEI7Z0JBQ0ksWUFBWTtnQkFDWixXQUFXO2dCQUNYLGtCQUFrQjtZQUN0Qjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsZ0JBQWdCO1lBQ3BCO1FBQ0o7O1FBRUE7WUFDSSxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsa0JBQWtCO1FBQ3RCOztRQUVBOzs7WUFHSSxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLFNBQVM7UUFDYjs7UUFFQTtZQUNJLHNCQUFzQjtRQUMxQjs7UUFFQTs7WUFFSSxxQkFBcUI7UUFDekI7SUFDSjs7O0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG4gICAgLS1idXR0b25TaXplOiAzMHB4O1xcbiAgICAtLW1vZGFsV2lkdGg6IDUwMHB4O1xcblxcbiAgICAubW9kYWwge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCBhdXRvKS8gcmVwZWF0KDMsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJ0aXRsZSB0aXRsZSB0aXRsZVxcXCJcXG4gICAgICAgICAgICBcXFwiZGVzY3JpcHQgZGVzY3JpcHQgZGVzY3JpcHRcXFwiXFxuICAgICAgICAgICAgXFxcImRhdGUgcHJvamVjdCBwcmlvcml0eVxcXCJcXG4gICAgICAgICAgICBcXFwiYnV0dG9uMSAuIGJ1dHRvbjJcXFwiXFxuICAgICAgICA7XFxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW1vZGFsV2lkdGgpO1xcblxcbiAgICAgICAgLnRpdGxlTGFiZWwsXFxuICAgICAgICAuZGVzY3JpcHRMYWJlbCxcXG4gICAgICAgIC5kYXRlTGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRpdGxlTGFiZWwge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuXFxuICAgICAgICAgICAgI3RpdGxlSW5wdXQge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVzY3JpcHRMYWJlbCB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdDtcXG5cXG4gICAgICAgICAgICAjZGVzY3JpcHRUZXh0QXJlYSB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kYXRlQ29udGFpbmVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGRhdGU7XFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgLmRhdGVMYWJlbCB7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAgICAgLmRhdGVJbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMCU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3RCb3gge1xcblxcbiAgICAgICAgICAgIC5wcm9qZWN0TGFiZWwge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgICAgICAgICAgI3Byb2plY3RTZWxlY3Qge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaW9yaXR5RGl2IHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDIwcHggNDBweCAvIDFmciBtYXgtY29udGVudCAxZnI7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICAgICAgXFxcImxhYmVsIGxhYmVsIGxhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICBcXFwibGVmdEJ1dHRvbiB0ZXh0IHJpZ2h0QnV0dG9uXFxcIjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgICAgIC5wcmlvcml0eUxhYmVsIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGxhYmVsO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eVRleHQge1xcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRleHQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eUxlZnRCdXR0b24sXFxuICAgICAgICAgICAgLnByaW9yaXR5UmlnaHRCdXR0b24ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tYnV0dG9uU2l6ZSk7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYnV0dG9uU2l6ZSk7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHlMZWZ0QnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0QnV0dG9uO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQtYm9sZC1vdXRsaW5lLnN2Zyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eVJpZ2h0QnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiByaWdodEJ1dHRvbjtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC1ib2xkLW91dGxpbmUuc3ZnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hZGRUYXNrQnV0dG9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbjE7XFxuICAgICAgICAgICAgcGxhY2Utc2VsZjogZW5kO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNhbmNlbEJ1dHRvbiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBidXR0b24yO1xcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0TW9kYWwge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgMWZyIC8gcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJsYWJlbCBsYWJlbFxcXCJcXG4gICAgICAgICAgICBcXFwiaW5wdXQgaW5wdXRcXFwiXFxuICAgICAgICAgICAgXFxcImxlZnRCdXR0b24gcmlnaHRCdXR0b25cXFwiXFxuICAgICAgICA7XFxuICAgICAgICB3aWR0aDogdmFyKC0tbW9kYWxXaWR0aCk7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuXFxuICAgICAgICAucHJvamVjdE5hbWVMYWJlbCB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdE5hbWVJbnB1dFdyYXBwZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICNwcm9qZWN0TmFtZUlucHV0IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAud2FybmluZ1RleHQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Byb2plY3RTZWxlY3Qge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlbGV0ZVByb2plY3RCdXR0b24sXFxuICAgICAgICAuYWRkUHJvamVjdEJ1dHRvbixcXG4gICAgICAgIC5jYW5jZWxCdXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2FuY2VsQnV0dG9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IHJpZ2h0QnV0dG9uO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlbGV0ZVByb2plY3RCdXR0b24sXFxuICAgICAgICAuYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0QnV0dG9uO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL3BsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL3RhYi1wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy90YWItcmVtb3ZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMjU1KTtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcblxuICAgICAgICAmLmFkZFRhc2tCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hZGRQcm9qZWN0QnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZWRpdFByb2plY3RCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgICAgICB9XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zyb250ZW5kL0hlYWRlci9IZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTOztJQUVUO1FBQ0ksWUFBWTtRQUNaLFdBQVc7O1FBRVg7WUFDSSxtREFBd0M7UUFDNUM7O1FBRUE7WUFDSSxtREFBNEM7UUFDaEQ7O1FBRUE7WUFDSSxtREFBOEM7UUFDbEQ7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgICAgICYuYWRkVGFza0J1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvcGx1cy5zdmcnKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvdGFiLXBsdXMuc3ZnJyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmVkaXRQcm9qZWN0QnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy90YWItcmVtb3ZlLnN2ZycpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogZm9yIEludGVybmV0IEV4cGxvcmVyLCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qIGZvciBGaXJlZm94ICovXG5cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgLyogZm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cbiAgICB9XG5cblxuICAgIC5wcm9qZWN0SGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC50YXNrTGlzdFZpZXcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zyb250ZW5kL1Rhc2tMaXN0Vmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGdCQUFnQjs7O0lBR2hCO1FBQ0ksYUFBYTtRQUNiLGtDQUFrQztJQUN0Qzs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgICAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICAvKiBmb3IgRmlyZWZveCAqL1xcblxcblxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgLyogZm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdEhlYWRpbmcge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGFza0xpc3RWaWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy90cmFzaGNhbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50YXNrIHtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDMwcHggMzBweCAvIDFmciBtaW4tY29udGVudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG5cbiAgICAudGl0bGUge31cblxuICAgIC5kYXRlIHtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLnByb2plY3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAudHJhc2hDYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC01NXB4O1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZnJvbnRlbmQvVGFza1ZpZXcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTs7O0lBR2YsUUFBUTs7SUFFUjtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHlEQUE2QztRQUM3QyxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLE1BQU07UUFDTixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGFzayB7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMzBweCAzMHB4IC8gMWZyIG1pbi1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFxuICAgIC50aXRsZSB7fVxcblxcbiAgICAuZGF0ZSB7XFxuICAgICAgICBjb2xvcjogZ3JheTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgcGFkZGluZzogM3B4O1xcbiAgICB9XFxuXFxuICAgIC50cmFzaENhbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3RyYXNoY2FuLnN2Zyk7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogLTI1cHg7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcblxcbiAgICBzdmcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTU1cHg7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB3aWR0aDogNDZweDtcXG4gICAgICAgIGhlaWdodDogNDZweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGFzaWRle1xuICAgIHVse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zyb250ZW5kL3Byb2plY3RMaXN0Vmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtRQUNJLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFNBQVM7O1FBRVQ7WUFDSSxlQUFlO1FBQ25CO0lBQ0o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJhc2lkZXtcXG4gICAgdWx7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgICAgbGl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EaWFsb2cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGlhbG9nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYXNrTGlzdFZpZXcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFza0xpc3RWaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYXNrVmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYXNrVmlldy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdExpc3RWaWV3LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RMaXN0Vmlldy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xucmVxdWlyZShcIi4vQXBwLmNzc1wiKTtcbnJlcXVpcmUoXCIuL0RpYWxvZy9EaWFsb2cuY3NzXCIpO1xuY29uc3QgQWRkVGFza01vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nL0FkZFRhc2tNb2RhbFwiKSk7XG5jb25zdCBIZWFkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9IZWFkZXIvSGVhZGVyXCIpKTtcbmNvbnN0IHByb2plY3RMaXN0Vmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Byb2plY3RMaXN0Vmlld1wiKSk7XG5jb25zdCBUYXNrTGlzdFZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UYXNrTGlzdFZpZXdcIikpO1xuY29uc3QgRWRpdFRhc2tNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZy9FZGl0VGFza01vZGFsXCIpKTtcbmNvbnN0IEFkZFByb2plY3RNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZy9BZGRQcm9qZWN0TW9kYWxcIikpO1xuY29uc3QgRGVsZXRlUHJvamVjdE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGlhbG9nL0RlbGV0ZVByb2plY3RNb2RhbFwiKSk7XG5mdW5jdGlvbiBBcHAodG9Eb0FwcCkge1xuICAgIGNvbnN0IG1vZGVsID0gdG9Eb0FwcDtcbiAgICBjb25zdCBwcm9qZWN0TGlzdFZpZXcgPSAoMCwgcHJvamVjdExpc3RWaWV3XzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCB0YXNrTGlzdFZpZXcgPSAoMCwgVGFza0xpc3RWaWV3XzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCBoZWFkZXJWaWV3ID0gKDAsIEhlYWRlcl8xLmRlZmF1bHQpKCk7XG4gICAgY29uc3QgYWRkVGFza01vZGFsVmlldyA9ICgwLCBBZGRUYXNrTW9kYWxfMS5kZWZhdWx0KSgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbFZpZXcgPSAoMCwgQWRkUHJvamVjdE1vZGFsXzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCBlZGl0VGFza01vZGFsVmlldyA9ICgwLCBFZGl0VGFza01vZGFsXzEuZGVmYXVsdCkoKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0TW9kYWxWaWV3ID0gKDAsIERlbGV0ZVByb2plY3RNb2RhbF8xLmRlZmF1bHQpKCk7XG4gICAgY29uc3Qgb25Qcm9qZWN0TGlzdENoYW5nZWQgPSAocHJvamVjdExpc3QpID0+IHByb2plY3RMaXN0Vmlldy5yZW5kZXIocHJvamVjdExpc3QpO1xuICAgIGNvbnN0IG9uVGFza0xpc3RDaGFuZ2VkID0gKHRhc2tMaXN0LCBwcm9qZWN0KSA9PiB0YXNrTGlzdFZpZXcucmVuZGVyKHRhc2tMaXN0LCBwcm9qZWN0KTtcbiAgICBjb25zdCBoYW5kbGVPcGVuQWRkVGFza01vZGFsID0gKCkgPT4gYWRkVGFza01vZGFsVmlldy5vcGVuKCk7XG4gICAgY29uc3QgaGFuZGxlT3BlbkFkZFByb2plY3RNb2RhbCA9ICgpID0+IGFkZFByb2plY3RNb2RhbFZpZXcub3BlbigpO1xuICAgIGNvbnN0IGhhbmRsZUdldFByb2plY3ROYW1lc09uTW9kYWxPcGVuID0gKCkgPT4gbW9kZWwuZ2V0UHJvamVjdE5hbWVzKCk7XG4gICAgY29uc3QgaGFuZGxlQWRkVGFzayA9IChuZXdUb0RvKSA9PiBtb2RlbC5hZGRUYXNrKG5ld1RvRG8pO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUN1cnJlbnRUYXNrcyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBtb2RlbC5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIG1vZGVsLnNldEN1cnJlbnRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVFZGl0VGFzayA9IChpZCwgdG9kbykgPT4geyBtb2RlbC5lZGl0VGFzayhpZCwgdG9kbyk7IH07XG4gICAgY29uc3QgaGFuZGxlT3BlbkVkaXRUYXNrTW9kYWwgPSAodG9kbykgPT4ge1xuICAgICAgICBlZGl0VGFza01vZGFsVmlldy5vcGVuKCk7XG4gICAgICAgIGVkaXRUYXNrTW9kYWxWaWV3LmJpbmRFZGl0VGFzayhoYW5kbGVFZGl0VGFzaywgdG9kby5pZCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb0RvID0gbW9kZWwuZ2V0Q3VycmVudFRhc2sodG9kby5pZCk7XG4gICAgICAgIGVkaXRUYXNrTW9kYWxWaWV3LnNldElucHV0KGN1cnJlbnRUb0RvKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAoaWQpID0+IG1vZGVsLmRlbGV0ZVRhc2soaWQpO1xuICAgIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IG1vZGVsLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgbW9kZWwubW92ZVRvUHJldmlvdXNQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgbW9kZWwuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7IC8vIFVwZGF0ZXMgcHJvamVjdCBsaXN0IG9uIHRoZSBVSVxuICAgICAgICBtb2RlbC51cGRhdGVUYXNrc0ZvckRlbGV0ZWRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBtb2RlbC5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBtb2RlbC5zZXRDdXJyZW50VGFza3MoY3VycmVudFByb2plY3QpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlT3BlbkRlbGV0ZVByb2plY3RNb2RhbCA9ICgpID0+IGRlbGV0ZVByb2plY3RNb2RhbFZpZXcub3BlbigpO1xuICAgIGNvbnN0IGhhbmRsZUNvbXBsZXRlVGFzayA9IChpZCkgPT4gbW9kZWwudG9nZ2xlVGFza0NvbXBsZXRpb24oaWQpO1xuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIG1vZGVsLmJpbmRPblByb2plY3RMaXN0Q2hhbmdlZChvblByb2plY3RMaXN0Q2hhbmdlZCk7XG4gICAgICAgIG1vZGVsLmJpbmRPblRhc2tMaXN0Q2hhbmdlZChvblRhc2tMaXN0Q2hhbmdlZCk7XG4gICAgICAgIGhlYWRlclZpZXcuYmluZEhlYWRlckJ1dHRvbkhhbmRsZXJzKHsgaGFuZGxlT3BlbkFkZFRhc2tNb2RhbCwgaGFuZGxlT3BlbkRlbGV0ZVByb2plY3RNb2RhbCwgaGFuZGxlT3BlbkFkZFByb2plY3RNb2RhbCB9KTtcbiAgICAgICAgYWRkVGFza01vZGFsVmlldy5iaW5kR2V0UHJvamVjdE5hbWVzKGhhbmRsZUdldFByb2plY3ROYW1lc09uTW9kYWxPcGVuKTtcbiAgICAgICAgZWRpdFRhc2tNb2RhbFZpZXcuYmluZEdldFByb2plY3ROYW1lcyhoYW5kbGVHZXRQcm9qZWN0TmFtZXNPbk1vZGFsT3Blbik7XG4gICAgICAgIGFkZFRhc2tNb2RhbFZpZXcuYmluZEFkZFRhc2soaGFuZGxlQWRkVGFzayk7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbFZpZXcuYmluZEdldFByb2plY3ROYW1lcyhoYW5kbGVHZXRQcm9qZWN0TmFtZXNPbk1vZGFsT3Blbik7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbFZpZXcuYmluZEFkZFByb2plY3QoaGFuZGxlQWRkUHJvamVjdCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbFZpZXcuYmluZEdldFByb2plY3ROYW1lcyhoYW5kbGVHZXRQcm9qZWN0TmFtZXNPbk1vZGFsT3Blbik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbFZpZXcuYmluZERlbGV0ZVByb2plY3QoaGFuZGxlRGVsZXRlUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RMaXN0Vmlldy5iaW5kQ2hhbmdlQ3VycmVudFRhc2tzKGhhbmRsZUNoYW5nZUN1cnJlbnRUYXNrcyk7XG4gICAgICAgIHRhc2tMaXN0Vmlldy5iaW5kT3BlbkVkaXRUYXNrKGhhbmRsZU9wZW5FZGl0VGFza01vZGFsKTtcbiAgICAgICAgdGFza0xpc3RWaWV3LmJpbmREZWxldGVUYXNrKGhhbmRsZURlbGV0ZVRhc2spO1xuICAgICAgICB0YXNrTGlzdFZpZXcuYmluZENvbXBsZXRlVGFzayhoYW5kbGVDb21wbGV0ZVRhc2spO1xuICAgICAgICBtb2RlbC5pbml0aWFsaXplKCk7XG4gICAgICAgIC8vIGFkZFByb2plY3RNb2RhbFZpZXcub3BlbigpXG4gICAgfTtcbiAgICByZXR1cm4geyBpbml0aWFsaXplIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERpYWxvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZ1wiKSk7XG5jb25zdCBjcmVhdGVBZGRQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IFtdO1xuICAgIGNvbnN0IGRpYWxvZyA9IERpYWxvZ18xLmRlZmF1bHQuZ2V0RGlhbG9nKCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbjtcbiAgICBsZXQgY2FuY2VsQnV0dG9uO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbCBtb2RhbCc7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5jbGFzc05hbWUgPSAncHJvamVjdE5hbWVMYWJlbCc7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVHlwZSBuYW1lIG9mIG5ldyBwcm9qZWN0XCI7XG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0TmFtZUlucHV0XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3ROYW1lSW5wdXRXcmFwcGVyJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0V3JhcHBlcik7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9ICdwcm9qZWN0TmFtZUlucHV0JztcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgY29uc3Qgd2FybmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2FybmluZ1RleHQuY2xhc3NOYW1lID0gJ3dhcm5pbmdUZXh0JztcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQod2FybmluZ1RleHQpO1xuICAgIGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGRQcm9qZWN0QnV0dG9uJztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnY2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChnZXRQcm9qZWN0TmFtZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cyA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICBkaWFsb2cucmVwbGFjZUNoaWxkcmVuKGZvcm0pO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnB1dHMoKTtcbiAgICAgICAgRGlhbG9nXzEuZGVmYXVsdC5jbG9zZURpYWxvZygpO1xuICAgIH07XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgIGNvbnN0IGNsZWFySW5wdXRzID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdHMgPSBbXTtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgZG9lc1Byb2plY3ROYW1lRXhpc3QgPSAodXNlcklucHV0KSA9PiB7XG4gICAgICAgIGlmIChnZXRQcm9qZWN0TmFtZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBnZXRQcm9qZWN0TmFtZXMoKS5zb21lKHByb2plY3ROYW1lID0+IHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkgPT09IHVzZXJJbnB1dC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IHtcbiAgICAgICAgd2FybmluZ1RleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgd2FybmluZ1RleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0IVwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdhcm5pbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93Tm9UZXh0RXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHdhcm5pbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHdhcm5pbmdUZXh0LnRleHRDb250ZW50ID0gXCJUeXBlIGEgbmFtZSB0byBhZGQgYSBuZXcgcHJvamVjdCFcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3YXJuaW5nVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH07XG4gICAgbGV0IGdldFByb2plY3ROYW1lcyA9IG51bGw7XG4gICAgY29uc3QgYmluZEdldFByb2plY3ROYW1lcyA9IChjYWxsQmFjaykgPT4gZ2V0UHJvamVjdE5hbWVzID0gY2FsbEJhY2s7XG4gICAgY29uc3QgYmluZEFkZFByb2plY3QgPSAoaGFuZGxlcikgPT4ge1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRJbnB1dCgpO1xuICAgICAgICAgICAgaWYgKCFwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHNob3dOb1RleHRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2VzUHJvamVjdE5hbWVFeGlzdChwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuICAgIHJldHVybiB7IG9wZW4sIGJpbmRHZXRQcm9qZWN0TmFtZXMsIGJpbmRBZGRQcm9qZWN0IH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQWRkUHJvamVjdE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEaWFsb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EaWFsb2dcIikpO1xuY29uc3QgUHJpb3JpdHlCb3hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Qcmlvcml0eUJveFwiKSk7XG5jb25zdCBQcm9qZWN0Qm94XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUHJvamVjdEJveFwiKSk7XG5jb25zdCBjcmVhdGVBZGRUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlhbG9nID0gRGlhbG9nXzEuZGVmYXVsdC5nZXREaWFsb2coKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBhZGRUYXNrQnV0dG9uO1xuICAgIGxldCBjYW5jZWxCdXR0b247XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnYWRkTW9kYWwgbW9kYWwnO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NOYW1lID0gJ3RpdGxlTGFiZWwnO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlSW5wdXQnO1xuICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgY29uc3QgZGVzY3JpcHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRMYWJlbC5jbGFzc05hbWUgPSAnZGVzY3JpcHRMYWJlbCc7XG4gICAgZGVzY3JpcHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0TGFiZWwpO1xuICAgIGNvbnN0IGRlc2NyaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwVGV4dC5pZCA9ICdkZXNjcmlwdFRleHRBcmVhJztcbiAgICBkZXNjcmlwdExhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXBUZXh0KTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGF0ZUNvbnRhaW5lcic7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5jbGFzc05hbWUgPSAnZGF0ZUxhYmVsJztcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAnZGF0ZUlucHV0JztcbiAgICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBjb25zdCBwcmlvcml0eUJveCA9ICgwLCBQcmlvcml0eUJveF8xLmRlZmF1bHQpKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUJveC5wcmlvcml0eURpdik7XG4gICAgY29uc3QgcHJvamVjdEJveCA9ICgwLCBQcm9qZWN0Qm94XzEuZGVmYXVsdCkoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RCb3gucHJvamVjdEJveCk7XG4gICAgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gJ2FkZFRhc2tCdXR0b24nO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBhZGRUYXNrQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFByb2plY3ROYW1lcyA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzID0gZ2V0UHJvamVjdE5hbWVzKCk7XG4gICAgICAgIGRpYWxvZy5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XG4gICAgICAgIHByb2plY3RCb3guc2V0UHJvamVjdE5hbWVzT25PcGVuKHByb2plY3ROYW1lcyk7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgICBjbGVhcklucHV0cygpO1xuICAgICAgICBEaWFsb2dfMS5kZWZhdWx0LmNsb3NlRGlhbG9nKCk7XG4gICAgfTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcFRleHQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHByaW9yaXR5Qm94LnJlc2V0UHJpb3JpdHkoKTtcbiAgICB9O1xuICAgIGxldCBnZXRQcm9qZWN0TmFtZXMgPSBudWxsO1xuICAgIGNvbnN0IGJpbmRHZXRQcm9qZWN0TmFtZXMgPSAoY2FsbEJhY2spID0+IGdldFByb2plY3ROYW1lcyA9IGNhbGxCYWNrO1xuICAgIGNvbnN0IGJpbmRBZGRUYXNrID0gKGhhbmRsZXIpID0+IHtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvRG8gPSBnZXRJbnB1dCgpO1xuICAgICAgICAgICAgaGFuZGxlcihuZXdUb0RvKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwVGV4dC52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZSB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEJveC5nZXRTZWxlY3RlZFByb2plY3ROYW1lKCk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlCb3guZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH07XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHksIGlzQ29tcGxldGVkOiBmYWxzZSB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UsIGJpbmRHZXRQcm9qZWN0TmFtZXMsIGJpbmRBZGRUYXNrIH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQWRkVGFza01vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEaWFsb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EaWFsb2dcIikpO1xuY29uc3QgY3JlYXRlRGVsZXRlUHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBbXTtcbiAgICBjb25zdCBkaWFsb2cgPSBEaWFsb2dfMS5kZWZhdWx0LmdldERpYWxvZygpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbGV0IGRlbGV0ZVByb2plY3RCdXR0b247XG4gICAgbGV0IGNhbmNlbEJ1dHRvbjtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWwgbW9kYWwnO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NOYW1lID0gJ3Byb2plY3ROYW1lTGFiZWwnO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNob29zZSBhIHByb2plY3QgdG8gZGVsZXRlXCI7XG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0U2VsZWN0XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdC5pZCA9ICdwcm9qZWN0U2VsZWN0JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGVQcm9qZWN0QnV0dG9uJztcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnY2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChnZXRQcm9qZWN0TmFtZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cyA9IGdldFByb2plY3ROYW1lcygpO1xuICAgICAgICB3aGlsZSAocHJvamVjdFNlbGVjdC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5yZW1vdmVDaGlsZChwcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QgIT09IFwiSW5ib3hcIiAmJiBwcm9qZWN0ICE9PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ3Byb2plY3RTZWxlY3RPcHRpb24nO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGlhbG9nLnJlcGxhY2VDaGlsZHJlbihmb3JtKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFySW5wdXRzKCk7XG4gICAgICAgIERpYWxvZ18xLmRlZmF1bHQuY2xvc2VEaWFsb2coKTtcbiAgICB9O1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICBjb25zdCBjbGVhcklucHV0cyA9ICgpID0+IHtcbiAgICAgICAgY3VycmVudFByb2plY3RzID0gW107XG4gICAgICAgIHdoaWxlIChwcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QucmVtb3ZlQ2hpbGQocHJvamVjdFNlbGVjdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGdldFByb2plY3ROYW1lcyA9IG51bGw7XG4gICAgY29uc3QgYmluZEdldFByb2plY3ROYW1lcyA9IChjYWxsQmFjaykgPT4gZ2V0UHJvamVjdE5hbWVzID0gY2FsbEJhY2s7XG4gICAgY29uc3QgYmluZERlbGV0ZVByb2plY3QgPSAoaGFuZGxlcikgPT4ge1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRJbnB1dCgpO1xuICAgICAgICAgICAgaGFuZGxlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElucHV0ID0gKCkgPT4gcHJvamVjdFNlbGVjdC52YWx1ZTtcbiAgICByZXR1cm4geyBvcGVuLCBiaW5kR2V0UHJvamVjdE5hbWVzLCBiaW5kRGVsZXRlUHJvamVjdCB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZURlbGV0ZVByb2plY3RNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmNvbnN0IGNsb3NlRGlhbG9nID0gKCkgPT4ge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xufTtcbmNvbnN0IGdldERpYWxvZyA9ICgpID0+IGRpYWxvZztcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpXG4gICAgICAgIGNsb3NlRGlhbG9nKCk7XG59KTtcbmNvbnN0IGRpYWxvZ01hbmFnZXIgPSB7XG4gICAgY2xvc2VEaWFsb2csIGdldERpYWxvZ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRpYWxvZ01hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERpYWxvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RpYWxvZ1wiKSk7XG5jb25zdCBQcmlvcml0eUJveF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ByaW9yaXR5Qm94XCIpKTtcbmNvbnN0IFByb2plY3RCb3hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Qcm9qZWN0Qm94XCIpKTtcbmNvbnN0IGNyZWF0ZUVkaXRUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgbGV0IGlzQ3VycmVudFRhc2tDb21wbGV0ZWQ7XG4gICAgY29uc3QgZGlhbG9nID0gRGlhbG9nXzEuZGVmYXVsdC5nZXREaWFsb2coKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBlZGl0VGFza0J1dHRvbjtcbiAgICBsZXQgY2FuY2VsQnV0dG9uO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ2VkaXRUYXNrTW9kYWwgbW9kYWwnO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NOYW1lID0gJ3RpdGxlTGFiZWwnO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlSW5wdXQnO1xuICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgY29uc3QgZGVzY3JpcHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRMYWJlbC5jbGFzc05hbWUgPSAnZGVzY3JpcHRMYWJlbCc7XG4gICAgZGVzY3JpcHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0TGFiZWwpO1xuICAgIGNvbnN0IGRlc2NyaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwVGV4dC5pZCA9ICdkZXNjcmlwdFRleHRBcmVhJztcbiAgICBkZXNjcmlwdExhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXBUZXh0KTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGF0ZUNvbnRhaW5lcic7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5jbGFzc05hbWUgPSAnZGF0ZUxhYmVsJztcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAnZGF0ZUlucHV0JztcbiAgICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBjb25zdCBwcmlvcml0eUJveCA9ICgwLCBQcmlvcml0eUJveF8xLmRlZmF1bHQpKCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUJveC5wcmlvcml0eURpdik7XG4gICAgY29uc3QgcHJvamVjdEJveCA9ICgwLCBQcm9qZWN0Qm94XzEuZGVmYXVsdCkoKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RCb3gucHJvamVjdEJveCk7XG4gICAgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0VGFza0J1dHRvbi5jbGFzc05hbWUgPSAnYWRkVGFza0J1dHRvbic7XG4gICAgZWRpdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdFRhc2tCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG4gICAgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFByb2plY3ROYW1lcyA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzID0gZ2V0UHJvamVjdE5hbWVzKCk7XG4gICAgICAgIGRpYWxvZy5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XG4gICAgICAgIHByb2plY3RCb3guc2V0UHJvamVjdE5hbWVzT25PcGVuKHByb2plY3ROYW1lcyk7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgICBjbGVhcklucHV0cygpO1xuICAgICAgICBEaWFsb2dfMS5kZWZhdWx0LmNsb3NlRGlhbG9nKCk7XG4gICAgfTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcFRleHQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHByaW9yaXR5Qm94LnJlc2V0UHJpb3JpdHkoKTtcbiAgICB9O1xuICAgIGxldCBnZXRQcm9qZWN0TmFtZXMgPSBudWxsO1xuICAgIGNvbnN0IGJpbmRHZXRQcm9qZWN0TmFtZXMgPSAoY2FsbEJhY2spID0+IGdldFByb2plY3ROYW1lcyA9IGNhbGxCYWNrO1xuICAgIGxldCBlZGl0VGFzayA9IG51bGw7XG4gICAgY29uc3QgYmluZEVkaXRUYXNrID0gKGhhbmRsZXIsIGlkKSA9PiB7XG4gICAgICAgIGlmIChlZGl0VGFzaylcbiAgICAgICAgICAgIGVkaXRUYXNrQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xuICAgICAgICBlZGl0VGFzayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvRG8gPSBnZXRJbnB1dCgpO1xuICAgICAgICAgICAgaGFuZGxlcihpZCwgbmV3VG9Ebyk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldElucHV0ID0gKHRvZG8pID0+IHtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgIGlmICh0b2RvLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgZGVzY3JpcFRleHQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHByaW9yaXR5Qm94LnNldFByaW9yaXR5KHRvZG8ucHJpb3JpdHkpO1xuICAgICAgICBwcm9qZWN0Qm94LnNldFNlbGVjdGVkUHJvamVjdE5hbWVPbk9wZW4odG9kby5wcm9qZWN0KTtcbiAgICAgICAgaXNDdXJyZW50VGFza0NvbXBsZXRlZCA9IHRvZG8uaXNDb21wbGV0ZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwVGV4dC52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RCb3guZ2V0U2VsZWN0ZWRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5Qm94LmdldFByaW9yaXR5KCk7XG4gICAgICAgIGlmICghZGVzY3JpcHRpb24pXG4gICAgICAgICAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHksIGlzQ29tcGxldGVkOiBpc0N1cnJlbnRUYXNrQ29tcGxldGVkIH07XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHksIGlzQ29tcGxldGVkOiBpc0N1cnJlbnRUYXNrQ29tcGxldGVkIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBvcGVuLCBjbG9zZSwgYmluZEdldFByb2plY3ROYW1lcywgYmluZEVkaXRUYXNrLCBzZXRJbnB1dCB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVkaXRUYXNrTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5jb25zdCBjcmVhdGVQcmlvcml0eUJveCA9ICgpID0+IHtcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5RGl2LmNsYXNzTmFtZSA9ICdwcmlvcml0eURpdic7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc05hbWUgPSAncHJpb3JpdHlMYWJlbCc7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaW9yaXR5VGV4dC5jbGFzc05hbWUgPSAncHJpb3JpdHlUZXh0JztcbiAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIk5vbmVcIjtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xuICAgIGNvbnN0IHByaW9yaXR5TGVmdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5TGVmdEJ1dHRvbi5jbGFzc05hbWUgPSAncHJpb3JpdHlMZWZ0QnV0dG9uJztcbiAgICBwcmlvcml0eUxlZnRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMZWZ0QnV0dG9uKTtcbiAgICBjb25zdCBwcmlvcml0eVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJpb3JpdHlSaWdodEJ1dHRvbi5jbGFzc05hbWUgPSAncHJpb3JpdHlSaWdodEJ1dHRvbic7XG4gICAgcHJpb3JpdHlSaWdodEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVJpZ2h0QnV0dG9uKTtcbiAgICBjb25zdCBpbmNyZWFzZVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudDtcbiAgICAgICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gcHJpb3JpdHkgPT09IFwiTm9uZVwiID8gXCJMb3dcIiA6IFwiSGlnaFwiO1xuICAgIH07XG4gICAgY29uc3QgZGVjcmVhc2VQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eVRleHQudGV4dENvbnRlbnQ7XG4gICAgICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IHByaW9yaXR5ID09PSBcIkhpZ2hcIiA/IFwiTG93XCIgOiBcIk5vbmVcIjtcbiAgICB9O1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID09PSBcIk5vbmVcIiA/XG4gICAgICAgIHR5cGVzXzEuUHJpb3JpdHkuTm9uZSA6IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9PT0gXCJMb3dcIiA/XG4gICAgICAgIHR5cGVzXzEuUHJpb3JpdHkuTG93IDogdHlwZXNfMS5Qcmlvcml0eS5IaWdoO1xuICAgIGNvbnN0IHJlc2V0UHJpb3JpdHkgPSAoKSA9PiB7IHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiTm9uZVwiOyB9O1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID09PSB0eXBlc18xLlByaW9yaXR5Lk5vbmUgPyBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIk5vbmVcIiA6XG4gICAgICAgICAgICBwcmlvcml0eSA9PT0gdHlwZXNfMS5Qcmlvcml0eS5Mb3cgPyBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIkxvd1wiIDpcbiAgICAgICAgICAgICAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICB9O1xuICAgIHByaW9yaXR5TGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVjcmVhc2VQcmlvcml0eSk7XG4gICAgcHJpb3JpdHlSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5jcmVhc2VQcmlvcml0eSk7XG4gICAgcmV0dXJuIHsgcHJpb3JpdHlEaXYsIGdldFByaW9yaXR5LCByZXNldFByaW9yaXR5LCBzZXRQcmlvcml0eSB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByaW9yaXR5Qm94O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjcmVhdGVQcm9qZWN0Qm94ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEJveC5jbGFzc05hbWUgPSAncHJvamVjdEJveCc7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuY2xhc3NOYW1lID0gJ3Byb2plY3RMYWJlbCc7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0U2VsZWN0LmlkID0gJ3Byb2plY3RTZWxlY3QnO1xuICAgIHByb2plY3RMYWJlbC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICBsZXQgc2V0UHJvamVjdE5hbWVzT25PcGVuID0gKHByb2plY3ROYW1lcykgPT4ge1xuICAgICAgICB3aGlsZSAocHJvamVjdFNlbGVjdC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5yZW1vdmVDaGlsZChwcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3ROYW1lcy5mb3JFYWNoKHByb2plY3ROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBsZXQgc2V0U2VsZWN0ZWRQcm9qZWN0TmFtZU9uT3BlbiA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnZhbHVlID0gcHJvamVjdE5hbWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRTZWxlY3RlZFByb2plY3ROYW1lID0gKCkgPT4gcHJvamVjdFNlbGVjdC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9qZWN0Qm94LCBzZXRQcm9qZWN0TmFtZXNPbk9wZW4sIGdldFNlbGVjdGVkUHJvamVjdE5hbWUsIHNldFNlbGVjdGVkUHJvamVjdE5hbWVPbk9wZW4gfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcm9qZWN0Qm94O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9IZWFkZXIuY3NzXCIpO1xuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSk7XG4gICAgY29uc3QgYmluZEhlYWRlckJ1dHRvbkhhbmRsZXJzID0gKGhhbmRsZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaGFuZGxlT3BlbkFkZFByb2plY3RNb2RhbCwgaGFuZGxlT3BlbkRlbGV0ZVByb2plY3RNb2RhbCwgaGFuZGxlT3BlbkFkZFRhc2tNb2RhbCB9ID0gaGFuZGxlcnM7XG4gICAgICAgIGJ1dHRvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPcGVuQWRkVGFza01vZGFsKTtcbiAgICAgICAgYnV0dG9uc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZW5BZGRQcm9qZWN0TW9kYWwpO1xuICAgICAgICBidXR0b25zWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3BlbkRlbGV0ZVByb2plY3RNb2RhbCk7XG4gICAgfTtcbiAgICByZXR1cm4geyBiaW5kSGVhZGVyQnV0dG9uSGFuZGxlcnMgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVIZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRhc2tWaWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVGFza1ZpZXdcIikpO1xucmVxdWlyZShcIi4vVGFza0xpc3RWaWV3LmNzc1wiKTtcbmNvbnN0IGNyZWF0ZVRhc2tMaXN0VmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SGVhZGluZycpO1xuICAgIGNvbnN0IHRhc2tMaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdFZpZXcnKTtcbiAgICBjb25zdCByZW5kZXIgPSAodGFza3MsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHdoaWxlICh0YXNrTGlzdFZpZXcuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGFza0xpc3RWaWV3LnJlbW92ZUNoaWxkKHRhc2tMaXN0Vmlldy5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgKDAsIFRhc2tWaWV3XzEuZGVmYXVsdCkodGFzaywgKCkgPT4geyBpZiAob3BlbkVkaXRUYXNrKVxuICAgICAgICAgICAgICAgIG9wZW5FZGl0VGFzayh0YXNrKTsgfSwgKCkgPT4geyBpZiAoZGVsZXRlVGFzaylcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrKHRhc2suaWQpOyB9LCAoKSA9PiB7IGlmIChjb21wbGV0ZVRhc2spXG4gICAgICAgICAgICAgICAgY29tcGxldGVUYXNrKHRhc2suaWQpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBsZXQgb3BlbkVkaXRUYXNrID0gbnVsbDtcbiAgICBjb25zdCBiaW5kT3BlbkVkaXRUYXNrID0gKGhhbmRsZXIpID0+IHsgb3BlbkVkaXRUYXNrID0gaGFuZGxlcjsgfTtcbiAgICBsZXQgZGVsZXRlVGFzayA9IG51bGw7XG4gICAgY29uc3QgYmluZERlbGV0ZVRhc2sgPSAoaGFuZGxlcikgPT4geyBkZWxldGVUYXNrID0gaGFuZGxlcjsgfTtcbiAgICBsZXQgY29tcGxldGVUYXNrID0gbnVsbDtcbiAgICBjb25zdCBiaW5kQ29tcGxldGVUYXNrID0gKGhhbmRsZXIpID0+IHsgY29tcGxldGVUYXNrID0gaGFuZGxlcjsgfTtcbiAgICByZXR1cm4geyBiaW5kT3BlbkVkaXRUYXNrLCByZW5kZXIsIGJpbmREZWxldGVUYXNrLCBiaW5kQ29tcGxldGVUYXNrIH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVGFza0xpc3RWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9UYXNrVmlldy5jc3NcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5jb25zdCBjcmVhdGVUYXNrVmlldyA9ICh0b0RvLCBjYWxsQmFjaywgaGFuZGxlRGVsZXRlVGFzaywgaGFuZGxlQ29tcGxldGVUYXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0VmlldycpO1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTmFtZSA9ICd0YXNrJztcbiAgICB0YXNrLnN0eWxlLmJvcmRlciA9IHRvRG8ucHJpb3JpdHkgPT09IHR5cGVzXzEuUHJpb3JpdHkuSGlnaCA/IFwiM3B4IHNvbGlkIHJlZFwiIDpcbiAgICAgICAgdG9Eby5wcmlvcml0eSA9PT0gdHlwZXNfMS5Qcmlvcml0eS5Mb3cgPyBcIjJweCBzb2xpZCBvcmFuZ2VcIiA6IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IHRhc2spXG4gICAgICAgICAgICBjYWxsQmFjayh0b0RvKTtcbiAgICB9KTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9Eby50aXRsZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSB0b0RvLnByb2plY3Q7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlLmNsYXNzTmFtZSA9ICdkYXRlJztcbiAgICBkYXRlLnRleHRDb250ZW50ID0gbmV3IERhdGUodG9Eby5kdWVEYXRlKS50b0RhdGVTdHJpbmcoKTtcbiAgICBjb25zdCB0cmFzaENhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYXNoQ2FuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0cmFzaENhbikge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZVRhc2sodG9Eby5pZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0cmFzaENhbi5jbGFzc05hbWUgPSAndHJhc2hDYW4nO1xuICAgIGNvbnN0IGNoZWNrTWFyayA9IGNyZWF0ZUNoZWNrTWFya1NWRyh0b0RvLCBoYW5kbGVDb21wbGV0ZVRhc2ssIHRhc2spO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRyYXNoQ2FuKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrTWFyay5zdmcpO1xuICAgIHRhc2tMaXN0Vmlldy5hcHBlbmRDaGlsZCh0YXNrKTtcbn07XG5jb25zdCBjcmVhdGVDaGVja01hcmtTVkcgPSAodG9kbywgaGFuZGxlQ29tcGxldGVUYXNrLCB0YXNrKSA9PiB7XG4gICAgbGV0IGlzQ3VycmVudFRhc2tDb21wbGV0ZWQgPSB0b2RvLmlzQ29tcGxldGVkO1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuICAgIHN2Zy5pZCA9IFwiY2hlY2tNYXJrXCI7XG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNOSwyMC40MkwyLjc5LDE0LjIxTDUuNjIsMTEuMzhMOSwxNC43N0wxOC44OCw0Ljg4TDIxLjcxLDcuNzFMOSwyMC40MlpcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiZ3JheVwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgY29uc3QgY2hhbmdlQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc0N1cnJlbnRUYXNrQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjZjRkNjJjXCIpO1xuICAgICAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmNGQ2MmNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImdyYXlcIik7XG4gICAgICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVRhc2sgPSAoKSA9PiB7IGlzQ3VycmVudFRhc2tDb21wbGV0ZWQgPyBpc0N1cnJlbnRUYXNrQ29tcGxldGVkID0gZmFsc2UgOiBpc0N1cnJlbnRUYXNrQ29tcGxldGVkID0gdHJ1ZTsgfTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBoYW5kbGVDb21wbGV0ZVRhc2sodG9kby5pZCk7XG4gICAgICAgIHRvZ2dsZVRhc2soKTtcbiAgICAgICAgY2hhbmdlQ29sb3IoKTtcbiAgICB9KTtcbiAgICBjaGFuZ2VDb2xvcigpO1xuICAgIHJldHVybiB7IHN2ZyB9O1xuICAgIC8vIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2stYm9sZDwvdGl0bGU+PHBhdGggZD1cIk05LDIwLjQyTDIuNzksMTQuMjFMNS42MiwxMS4zOEw5LDE0Ljc3TDE4Ljg4LDQuODhMMjEuNzEsNy43MUw5LDIwLjQyWlwiIC8+PC9zdmc+XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVGFza1ZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCB0YXNrS2V5ID0gJ3Rhc2tzJztcbiAgICBjb25zdCBwcm9qZWN0S2V5ID0gJ3Byb2plY3QnO1xuICAgIGNvbnN0IGluaXRpYWxUYXNrcyA9IFtcbiAgICAgICAgeyB0aXRsZTogXCJEbyB0aGUgZGlzaGVzIG5vd1wiLCBkdWVEYXRlOiBcIjIwMjQtMDgtMTBcIiwgcHJpb3JpdHk6IHR5cGVzXzEuUHJpb3JpdHkuTm9uZSwgcHJvamVjdDogXCJJbmJveFwiLCBpZDogKDAsIHV1aWRfMS52NCkoKSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRG8gdGhlIGRpc2hlc1wiLCBkZXNjcmlwdGlvbjogXCJEbyBpdCBzb29uIVwiLCBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLCBwcmlvcml0eTogdHlwZXNfMS5Qcmlvcml0eS5Ob25lLCBwcm9qZWN0OiBcIkluYm94XCIsIGlkOiAoMCwgdXVpZF8xLnY0KSgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0aXRsZTogXCJEbyB0aGUgZGlzaGVzIHllc3RlcmRheVwiLCBkdWVEYXRlOiBcIjIwMjUtMTItMTFcIiwgcHJpb3JpdHk6IHR5cGVzXzEuUHJpb3JpdHkuTm9uZSwgcHJvamVjdDogXCJJbmJveFwiLCBpZDogKDAsIHV1aWRfMS52NCkoKSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRG8gdGhlIGRpc2hlcyB0b2RheSFcIiwgZHVlRGF0ZTogXCIyMDI0LTAyLTI3XCIsIHByaW9yaXR5OiB0eXBlc18xLlByaW9yaXR5LkhpZ2gsIHByb2plY3Q6IFwiU2Nob29sXCIsIGlkOiAoMCwgdXVpZF8xLnY0KSgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0aXRsZTogXCJEbyB0aGUgZGlzaGVzIHRvZGF5IVwiLCBkdWVEYXRlOiBcIjIwMjQtMDUtMDJcIiwgcHJpb3JpdHk6IHR5cGVzXzEuUHJpb3JpdHkuTG93LCBwcm9qZWN0OiBcIkljZVwiLCBpZDogKDAsIHV1aWRfMS52NCkoKSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH1cbiAgICBdO1xuICAgIGNvbnN0IGluaXRpYWxQcm9qZWN0cyA9IFsnSW5ib3gnLCAnVG9kYXknLCAnSWNlJywgJ1NjaG9vbCcsICdKb2InXTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0b3JlZFRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGFza0tleSk7XG4gICAgICAgIGlmICghc3RvcmVkVGFza3MpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2tLZXksIEpTT04uc3RyaW5naWZ5KGluaXRpYWxUYXNrcykpO1xuICAgICAgICAgICAgc3RvcmVkVGFza3MgPSBKU09OLnN0cmluZ2lmeShpbml0aWFsVGFza3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFRhc2tzKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0S2V5KTtcbiAgICAgICAgaWYgKCFzdG9yZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEtleSwgSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFByb2plY3RzKSk7XG4gICAgICAgICAgICBzdG9yZWRQcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KGluaXRpYWxQcm9qZWN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHMpO1xuICAgIH07XG4gICAgY29uc3Qgc2V0VGFza3MgPSAodGFza3MpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFza0tleSwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldFByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RLZXksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfTtcbiAgICByZXR1cm4geyBnZXRQcm9qZWN0cywgc2V0UHJvamVjdHMsIHNldFRhc2tzLCBnZXRUYXNrcyB9O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRhdGFiYXNlTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vcHJvamVjdExpc3RWaWV3LmNzc1wiKTtcbmNvbnN0IGNyZWF0ZVByb2plY3RMaXN0VmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZSB1bFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdE5hbWVzID0gW107XG4gICAgY29uc3QgcmVuZGVyID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0TGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0TGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgcHJvamVjdExpc3ROYW1lcy5wdXNoKGxpKTtcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZUN1cnJlbnRUYXNrcylcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ3VycmVudFRhc2tzKHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgYmluZENoYW5nZUN1cnJlbnRUYXNrcyA9IChoYW5kbGVyKSA9PiB7IGNoYW5nZUN1cnJlbnRUYXNrcyA9IGhhbmRsZXI7IH07XG4gICAgbGV0IGNoYW5nZUN1cnJlbnRUYXNrcyA9IG51bGw7XG4gICAgcmV0dXJuIHsgcmVuZGVyLCBiaW5kQ2hhbmdlQ3VycmVudFRhc2tzIH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHJvamVjdExpc3RWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByaW9yaXR5ID0gdm9pZCAwO1xudmFyIFByaW9yaXR5O1xuKGZ1bmN0aW9uIChQcmlvcml0eSkge1xuICAgIFByaW9yaXR5W1ByaW9yaXR5W1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgUHJpb3JpdHlbUHJpb3JpdHlbXCJMb3dcIl0gPSAxXSA9IFwiTG93XCI7XG4gICAgUHJpb3JpdHlbUHJpb3JpdHlbXCJIaWdoXCJdID0gMl0gPSBcIkhpZ2hcIjtcbn0pKFByaW9yaXR5IHx8IChleHBvcnRzLlByaW9yaXR5ID0gUHJpb3JpdHkgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dWlkXzEgPSByZXF1aXJlKFwidXVpZFwiKTtcbmNvbnN0IEFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zyb250ZW5kL0FwcFwiKSk7XG5jb25zdCBkYXRhYmFzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zyb250ZW5kL2RhdGFiYXNlXCIpKTtcbmNvbnN0IHRvRG9BcHAgPSAoKCkgPT4ge1xuICAgIC8vIGxldCB0YXNrczogVG9Eb1tdID0gW11cbiAgICAvLyBsZXQgY3VycmVudFRhc2tzOiBUb0RvW10gPSBbXVxuICAgIC8vIGxldCBwcm9qZWN0czogc3RyaW5nW10gPSBbJ0luYm94JywgJ1RvZGF5JywgJ0ljZScsICdTY2hvb2wnXVxuICAgIC8vIGxldCBjdXJyZW50UHJvamVjdDogc3RyaW5nXG4gICAgbGV0IHRhc2tzID0gZGF0YWJhc2VfMS5kZWZhdWx0LmdldFRhc2tzKCk7XG4gICAgbGV0IGN1cnJlbnRUYXNrcyA9IFtdO1xuICAgIGxldCBwcm9qZWN0cyA9IGRhdGFiYXNlXzEuZGVmYXVsdC5nZXRQcm9qZWN0cygpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdDtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGlmIChpc1Byb2plY3ROYW1lVW5pcXVlKHByb2plY3ROYW1lKSlcbiAgICAgICAgICAgIHByb2plY3RzID0gWy4uLnByb2plY3RzLCBwcm9qZWN0TmFtZV07XG4gICAgICAgIGlmIChvblByb2plY3RMaXN0Q2hhbmdlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TmFtZXMoKTtcbiAgICAgICAgICAgIG9uUHJvamVjdExpc3RDaGFuZ2VkKHByb2plY3RMaXN0KTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhYmFzZV8xLmRlZmF1bHQuc2V0UHJvamVjdHMocHJvamVjdHMpO1xuICAgIH07XG4gICAgY29uc3QgaXNQcm9qZWN0TmFtZVVuaXF1ZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuc29tZShwcm9qZWN0ID0+IHByb2plY3QgIT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBcIkluYm94XCIgfHwgcHJvamVjdE5hbWUgPT09IFwiVG9kYXlcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1Byb2plY3RMaXN0ID0gW107XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgIT09IHByb2plY3QpXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RzID0gWy4uLm5ld1Byb2plY3RMaXN0XTtcbiAgICAgICAgaWYgKG9uUHJvamVjdExpc3RDaGFuZ2VkKVxuICAgICAgICAgICAgb25Qcm9qZWN0TGlzdENoYW5nZWQoZ2V0UHJvamVjdE5hbWVzKCkpO1xuICAgICAgICBkYXRhYmFzZV8xLmRlZmF1bHQuc2V0UHJvamVjdHMocHJvamVjdHMpO1xuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gKDAsIHV1aWRfMS52NCkoKTtcbiAgICAgICAgdGFza3MucHVzaChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRvZG8pLCB7IGlkIH0pKTtcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICBkYXRhYmFzZV8xLmRlZmF1bHQuc2V0VGFza3ModGFza3MpO1xuICAgIH07XG4gICAgY29uc3QgZWRpdFRhc2sgPSAoaWQsIHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFza3MgPSB0YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICBpZiAoaWQgPT09IHRhc2suaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9kbyksIHsgaWQgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrcyA9IFsuLi5uZXdUYXNrc107XG4gICAgICAgIHNldEN1cnJlbnRUYXNrcyhnZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgZGF0YWJhc2VfMS5kZWZhdWx0LnNldFRhc2tzKHRhc2tzKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgICAgICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAoaWQgIT09IHRhc2suaWQpXG4gICAgICAgICAgICAgICAgbmV3VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tzID0gWy4uLm5ld1Rhc2tzXTtcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICBkYXRhYmFzZV8xLmRlZmF1bHQuc2V0VGFza3ModGFza3MpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB0YXNrcztcbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZXMgPSAoKSA9PiBwcm9qZWN0cztcbiAgICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGdldEFsbFRhc2tzKCk7XG4gICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tzRm9yRGVsZXRlZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0YXNrKSwgeyBwcm9qZWN0OiBcIkluYm94XCIgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhYmFzZV8xLmRlZmF1bHQuc2V0VGFza3ModGFza3MpO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVRvUHJldmlvdXNQcm9qZWN0ID0gKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgaWYgKGlzUHJvamVjdE5vdEN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0TmFtZXMoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0ID09PSBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdCA9IHByb2plY3RzW2luZGV4IC0gMV07XG4gICAgICAgIGlmIChwcmV2aW91c1Byb2plY3QgPT09IFwiVG9kYXlcIikge1xuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QoXCJUb2RheVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByZXZpb3VzUHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGlzUHJvamVjdE5vdEN1cnJlbnRQcm9qZWN0ID0gKGN1cnJlbnRQcm9qZWN0KSA9PiBjdXJyZW50UHJvamVjdCAhPT0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBnZXRDdXJyZW50VGFza3MgPSAoKSA9PiBjdXJyZW50VGFza3M7XG4gICAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiBjdXJyZW50UHJvamVjdDtcbiAgICBjb25zdCBpc1Byb2plY3RUaGVyZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuc29tZShwcm9qZWN0ID0+IHByb2plY3QgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGlmIChpc1Byb2plY3RUaGVyZShwcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgIH07XG4gICAgY29uc3QgaXNOZXdDdXJyZW50UHJvamVjdFRvZGF5ID0gKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0TmFtZSA9PT0gXCJUb2RheVwiO1xuICAgIGNvbnN0IHNldEN1cnJlbnRUYXNrc0J5VG9kYXkgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PT0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVUYXNrQ29tcGxldGlvbiA9IChpZCkgPT4ge1xuICAgICAgICB0YXNrcyA9IHRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0YXNrKSwgeyBpc0NvbXBsZXRlZDogKHRhc2suaXNDb21wbGV0ZWQgPyBmYWxzZSA6IHRydWUpIH0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGF0YWJhc2VfMS5kZWZhdWx0LnNldFRhc2tzKHRhc2tzKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEN1cnJlbnRUYXNrID0gKGlkKSA9PiB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gaWQpO1xuICAgIGNvbnN0IHNldEN1cnJlbnRUYXNrcyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAoaXNOZXdDdXJyZW50UHJvamVjdFRvZGF5KHByb2plY3ROYW1lKSlcbiAgICAgICAgICAgIHNldEN1cnJlbnRUYXNrc0J5VG9kYXkoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY3VycmVudFRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmIChvblRhc2tMaXN0Q2hhbmdlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0xpc3QgPSBnZXRDdXJyZW50VGFza3MoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICAgICAgb25UYXNrTGlzdENoYW5nZWQodGFza0xpc3QsIHByb2plY3QpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgb25Qcm9qZWN0TGlzdENoYW5nZWQgPSBudWxsO1xuICAgIGNvbnN0IGJpbmRPblByb2plY3RMaXN0Q2hhbmdlZCA9IChjYWxsYmFjaykgPT4geyBvblByb2plY3RMaXN0Q2hhbmdlZCA9IGNhbGxiYWNrOyB9O1xuICAgIGxldCBvblRhc2tMaXN0Q2hhbmdlZCA9IG51bGw7XG4gICAgY29uc3QgYmluZE9uVGFza0xpc3RDaGFuZ2VkID0gKGNhbGxiYWNrKSA9PiB7IG9uVGFza0xpc3RDaGFuZ2VkID0gY2FsbGJhY2s7IH07XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgLy8gdGFza3MucHVzaCh7IHRpdGxlOiBcIkRvIHRoZSBkaXNoZXNcIiwgZHVlRGF0ZTogXCIyMDI0LTA4LTEwXCIsIHByaW9yaXR5OiBQcmlvcml0eS5Ob25lLCBwcm9qZWN0OiBcIkluYm94XCIsIGlkOiB1dWlkdjQoKSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0pXG4gICAgICAgIC8vIHRhc2tzLnB1c2goeyB0aXRsZTogXCJDbGVhbiB5b3VyIHJvb21cIiwgZGVzY3JpcHRpb246IFwiRG8gaXQgc29vbiFcIiwgZHVlRGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSwgcHJpb3JpdHk6IFByaW9yaXR5Lk5vbmUsIHByb2plY3Q6IFwiSW5ib3hcIiwgaWQ6IHV1aWR2NCgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfSlcbiAgICAgICAgLy8gdGFza3MucHVzaCh7IHRpdGxlOiBcIkJ1eSBzb21lIGVnZ3NcIiwgZHVlRGF0ZTogXCIyMDI1LTEyLTExXCIsIHByaW9yaXR5OiBQcmlvcml0eS5Ob25lLCBwcm9qZWN0OiBcIkluYm94XCIsIGlkOiB1dWlkdjQoKSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0pXG4gICAgICAgIC8vIHRhc2tzLnB1c2goeyB0aXRsZTogXCJQYXkgdGF4ZXNcIiwgZHVlRGF0ZTogXCIyMDI0LTAyLTI3XCIsIHByaW9yaXR5OiBQcmlvcml0eS5IaWdoLCBwcm9qZWN0OiBcIlNjaG9vbFwiLCBpZDogdXVpZHY0KCksIGlzQ29tcGxldGVkOiBmYWxzZSB9KVxuICAgICAgICAvLyB0YXNrcy5wdXNoKHsgdGl0bGU6IFwiQ2FsbCBtb21cIiwgZHVlRGF0ZTogXCIyMDI0LTA1LTAyXCIsIHByaW9yaXR5OiBQcmlvcml0eS5Mb3csIHByb2plY3Q6IFwiSWNlXCIsIGlkOiB1dWlkdjQoKSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0pXG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgICAgIGlmIChvblByb2plY3RMaXN0Q2hhbmdlZClcbiAgICAgICAgICAgIG9uUHJvamVjdExpc3RDaGFuZ2VkKGdldFByb2plY3ROYW1lcygpKTtcbiAgICAgICAgc2V0Q3VycmVudFRhc2tzKFwiSW5ib3hcIik7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBpbml0aWFsaXplLCBnZXRQcm9qZWN0TmFtZXMsIGdldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50VGFza3MsXG4gICAgICAgIGVkaXRUYXNrLCBhZGRUYXNrLCBkZWxldGVUYXNrLCBnZXRUYXNrc0J5UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QsXG4gICAgICAgIHNldEN1cnJlbnRUYXNrcywgYmluZE9uUHJvamVjdExpc3RDaGFuZ2VkLCBiaW5kT25UYXNrTGlzdENoYW5nZWQsIHVwZGF0ZVRhc2tzRm9yRGVsZXRlZFByb2plY3QsXG4gICAgICAgIG1vdmVUb1ByZXZpb3VzUHJvamVjdCwgdG9nZ2xlVGFza0NvbXBsZXRpb24sIGdldEN1cnJlbnRUYXNrXG4gICAgfTtcbn0pKCk7XG5jb25zdCBhcHAgPSAoMCwgQXBwXzEuZGVmYXVsdCkodG9Eb0FwcCk7XG5hcHAuaW5pdGlhbGl6ZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNQVhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbmlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3BhcnNlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxVG9WNlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjFUb1YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlRvVjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y2VG9WLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjdcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y2LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmVyc2lvbi5kZWZhdWx0O1xuICB9XG59KTtcbnZhciBfbWF4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXguanNcIikpO1xudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpKTtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjEuanNcIikpO1xudmFyIF92MVRvViA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpKTtcbnZhciBfdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzLmpzXCIpKTtcbnZhciBfdjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y0LmpzXCIpKTtcbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcbnZhciBfdjUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y2LmpzXCIpKTtcbnZhciBfdjZUb1YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y2VG9WMS5qc1wiKSk7XG52YXIgX3Y2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92Ny5qc1wiKSk7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG52YXIgX3ZlcnNpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gJ2ZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZic7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG5cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgdmFyIGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG5cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cblxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG5cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuXG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBtZDU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG4gIC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7XG5cbiAgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBwYXJzZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cblxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IE47ICsrX2kpIHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cbiAgICBmb3IgKHZhciBfdCA9IDE2OyBfdCA8IDgwOyArK190KSB7XG4gICAgICBXW190XSA9IFJPVEwoV1tfdCAtIDNdIF4gV1tfdCAtIDhdIF4gV1tfdCAtIDE0XSBeIFdbX3QgLSAxNl0sIDEpO1xuICAgIH1cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBzaGExOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIC8vXG4gIC8vIE5vdGUgdG8gZnV0dXJlLXNlbGY6IE5vLCB5b3UgY2FuJ3QgcmVtb3ZlIHRoZSBgdG9Mb3dlckNhc2UoKWAgY2FsbC5cbiAgLy8gUkVGOiBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC82NzcjaXNzdWVjb21tZW50LTE3NTczNTEzNTFcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgdmFyIHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdpZnk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZTtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcTtcblxuICAvLyB2MSBvbmx5OiBVc2UgY2FjaGVkIGBub2RlYCBhbmQgYGNsb2Nrc2VxYCB2YWx1ZXNcbiAgaWYgKCFvcHRpb25zLl92Nikge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgbm9kZSA9IF9ub2RlSWQ7XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcTtcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgY2FzZXMgd2hlcmUgd2UgbmVlZCBlbnRyb3B5LiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzXG4gIC8vIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50IHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICAvLyBSYW5kb21pemUgbm9kZVxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBbc2VlZEJ5dGVzWzBdLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG5cbiAgICAgIC8vIHYxIG9ubHk6IGNhY2hlIG5vZGUgdmFsdWUgZm9yIHJldXNlXG4gICAgICBpZiAoIV9ub2RlSWQgJiYgIW9wdGlvbnMuX3Y2KSB7XG4gICAgICAgIC8vIHBlciBSRkM0MTIyIDQuNTogU2V0IE1BQyBtdWx0aWNhc3QgYml0ICh2MSBvbmx5KVxuICAgICAgICBub2RlWzBdIHw9IDB4MDE7IC8vIFNldCBtdWx0aWNhc3QgYml0XG5cbiAgICAgICAgX25vZGVJZCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmFuZG9taXplIGNsb2Nrc2VxXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgICBpZiAoX2Nsb2Nrc2VxID09PSB1bmRlZmluZWQgJiYgIW9wdGlvbnMuX3Y2KSB7XG4gICAgICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHYxICYgdjYgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvIHRpbWUgaXNcbiAgLy8gaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuICByZXR1cm4gYnVmIHx8ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYik7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2MTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHYxVG9WNjtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLyoqXG4gKiBDb252ZXJ0IGEgdjEgVVVJRCB0byBhIHY2IFVVSURcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xVaW50OEFycmF5fSB1dWlkIC0gVGhlIHYxIFVVSUQgdG8gY29udmVydCB0byB2NlxuICogQHJldHVybnMge3N0cmluZ3xVaW50OEFycmF5fSBUaGUgdjYgVVVJRCBhcyB0aGUgc2FtZSB0eXBlIGFzIHRoZSBgdXVpZGAgYXJnXG4gKiAoc3RyaW5nIG9yIFVpbnQ4QXJyYXkpXG4gKi9cbmZ1bmN0aW9uIHYxVG9WNih1dWlkKSB7XG4gIHZhciB2MUJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9wYXJzZS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gIHZhciB2NkJ5dGVzID0gX3YxVG9WNih2MUJ5dGVzKTtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkodjZCeXRlcykgOiB2NkJ5dGVzO1xufVxuXG4vLyBEbyB0aGUgZmllbGQgdHJhbnNmb3JtYXRpb24gbmVlZGVkIGZvciB2MSAtPiB2NlxuZnVuY3Rpb24gX3YxVG9WNih2MUJ5dGVzLCByYW5kb21pemUgPSBmYWxzZSkge1xuICByZXR1cm4gVWludDhBcnJheS5vZigodjFCeXRlc1s2XSAmIDB4MGYpIDw8IDQgfCB2MUJ5dGVzWzddID4+IDQgJiAweDBmLCAodjFCeXRlc1s3XSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1s0XSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzRdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzVdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbNV0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbMF0gJiAweGYwKSA+PiA0LCAodjFCeXRlc1swXSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1sxXSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzFdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzJdICYgMHhmMCkgPj4gNCwgMHg2MCB8IHYxQnl0ZXNbMl0gJiAweDBmLCB2MUJ5dGVzWzNdLCB2MUJ5dGVzWzhdLCB2MUJ5dGVzWzldLCB2MUJ5dGVzWzEwXSwgdjFCeXRlc1sxMV0sIHYxQnl0ZXNbMTJdLCB2MUJ5dGVzWzEzXSwgdjFCeXRlc1sxNF0sIHYxQnl0ZXNbMTVdKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG52YXIgdjMgPSAoMCwgX3YuZGVmYXVsdCkoJ3YzJywgMHgzMCwgX21kLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufVxudmFyIEROUyA9IGV4cG9ydHMuRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG52YXIgVVJMID0gZXhwb3J0cy5VUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmZ1bmN0aW9uIHYzNShuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgX25hbWVzcGFjZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTtcbiAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gIC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG4gIHJldHVybiAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKHJuZHMpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG52YXIgdjUgPSAoMCwgX3YuZGVmYXVsdCkoJ3Y1JywgMHg1MCwgX3NoYS5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHY1OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjY7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjEuanNcIikpO1xudmFyIF92MVRvViA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHsgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgeyB2YWx1ZTogdCwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCB9KSA6IGVbcl0gPSB0LCBlOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSB0eXBlb2YgaSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7VWludDhBcnJheT19IGJ1ZlxuICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXRcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHY2KG9wdGlvbnMgPSB7fSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gIC8vIHY2IGlzIHYxIHdpdGggZGlmZmVyZW50IGZpZWxkIGxheW91dCwgc28gd2Ugc3RhcnQgd2l0aCBhIHYxIFVVSUQsIGFsYmVpdFxuICAvLyB3aXRoIHNsaWdodGx5IGRpZmZlcmVudCBiZWhhdmlvciBhcm91bmQgaG93IHRoZSBjbG9ja19zZXEgYW5kIG5vZGUgZmllbGRzXG4gIC8vIGFyZSByYW5kb21pemVkLCB3aGljaCBpcyB3aHkgd2UgY2FsbCB2MSB3aXRoIF92NjogdHJ1ZS5cbiAgdmFyIGJ5dGVzID0gKDAsIF92LmRlZmF1bHQpKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgX3Y2OiB0cnVlXG4gIH0pLCBuZXcgVWludDhBcnJheSgxNikpO1xuXG4gIC8vIFJlb3JkZXIgdGhlIGZpZWxkcyB0byB2NiBsYXlvdXQuXG4gIGJ5dGVzID0gKDAsIF92MVRvVi5kZWZhdWx0KShieXRlcyk7XG5cbiAgLy8gUmV0dXJuIGFzIGEgYnl0ZSBhcnJheSBpZiByZXF1ZXN0ZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjZUb1YxO1xudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIENvbnZlcnQgYSB2NiBVVUlEIHRvIGEgdjEgVVVJRFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFVpbnQ4QXJyYXl9IHV1aWQgLSBUaGUgdjYgVVVJRCB0byBjb252ZXJ0IHRvIHY2XG4gKiBAcmV0dXJucyB7c3RyaW5nfFVpbnQ4QXJyYXl9IFRoZSB2MSBVVUlEIGFzIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGB1dWlkYCBhcmdcbiAqIChzdHJpbmcgb3IgVWludDhBcnJheSlcbiAqL1xuZnVuY3Rpb24gdjZUb1YxKHV1aWQpIHtcbiAgdmFyIHY2Qnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3BhcnNlLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgdmFyIHYxQnl0ZXMgPSBfdjZUb1YxKHY2Qnl0ZXMpO1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KSh2MUJ5dGVzKSA6IHYxQnl0ZXM7XG59XG5cbi8vIERvIHRoZSBmaWVsZCB0cmFuc2Zvcm1hdGlvbiBuZWVkZWQgZm9yIHY2IC0+IHYxXG5mdW5jdGlvbiBfdjZUb1YxKHY2Qnl0ZXMpIHtcbiAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKHY2Qnl0ZXNbM10gJiAweDBmKSA8PCA0IHwgdjZCeXRlc1s0XSA+PiA0ICYgMHgwZiwgKHY2Qnl0ZXNbNF0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbNV0gJiAweGYwKSA+PiA0LCAodjZCeXRlc1s1XSAmIDB4MGYpIDw8IDQgfCB2NkJ5dGVzWzZdICYgMHgwZiwgdjZCeXRlc1s3XSwgKHY2Qnl0ZXNbMV0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbMl0gJiAweGYwKSA+PiA0LCAodjZCeXRlc1syXSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1szXSAmIDB4ZjApID4+IDQsIDB4MTAgfCAodjZCeXRlc1swXSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzBdICYgMHgwZikgPDwgNCB8ICh2NkJ5dGVzWzFdICYgMHhmMCkgPj4gNCwgdjZCeXRlc1s4XSwgdjZCeXRlc1s5XSwgdjZCeXRlc1sxMF0sIHY2Qnl0ZXNbMTFdLCB2NkJ5dGVzWzEyXSwgdjZCeXRlc1sxM10sIHY2Qnl0ZXNbMTRdLCB2NkJ5dGVzWzE1XSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLyoqXG4gKiBVVUlEIFY3IC0gVW5peCBFcG9jaCB0aW1lLWJhc2VkIFVVSURcbiAqXG4gKiBUaGUgSUVURiBoYXMgcHVibGlzaGVkIFJGQzk1NjIsIGludHJvZHVjaW5nIDMgbmV3IFVVSUQgdmVyc2lvbnMgKDYsNyw4KS4gVGhpc1xuICogaW1wbGVtZW50YXRpb24gb2YgVjcgaXMgYmFzZWQgb24gdGhlIGFjY2VwdGVkLCB0aG91Z2ggbm90IHlldCBhcHByb3ZlZCxcbiAqIHJldmlzaW9ucy5cbiAqXG4gKiBSRkMgOTU2MjpodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTU2Mi5odG1sIFVuaXZlcnNhbGx5IFVuaXF1ZVxuICogSURlbnRpZmllcnMgKFVVSURzKVxuXG4gKlxuICogU2FtcGxlIFY3IHZhbHVlOlxuICogaHR0cHM6Ly93d3cucmZjLWVkaXRvci5vcmcvcmZjL3JmYzk1NjIuaHRtbCNuYW1lLWV4YW1wbGUtb2YtYS11dWlkdjctdmFsdWVcbiAqXG4gKiBNb25vdG9uaWMgQml0IExheW91dDogUkZDIHJmYzk1NjIuNi4yIE1ldGhvZCAxLCBEZWRpY2F0ZWQgQ291bnRlciBCaXRzIHJlZjpcbiAqICAgICBodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTU2Mi5odG1sI3NlY3Rpb24tNi4yLTUuMVxuICpcbiAqICAgMCAgICAgICAgICAgICAgICAgICAxICAgICAgICAgICAgICAgICAgIDIgICAgICAgICAgICAgICAgICAgMyAwIDEgMiAzIDQgNSA2XG4gKiAgIDcgOCA5IDAgMSAyIDMgNCA1IDYgNyA4IDkgMCAxIDIgMyA0IDUgNiA3IDggOSAwIDFcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHwgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXhfdHNfbXMgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqICB8ICAgICAgICAgIHVuaXhfdHNfbXMgICAgICAgICAgIHwgIHZlciAgfCAgICAgICAgc2VxX2hpICAgICAgICAgfFxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfHZhcnwgICAgICAgICAgICAgICBzZXFfbG93ICAgICAgICAgICAgICAgfCAgICAgICAgcmFuZCAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqXG4gKiBzZXEgaXMgYSAzMSBiaXQgc2VyaWFsaXplZCBjb3VudGVyOyBjb21wcmlzZWQgb2YgMTIgYml0IHNlcV9oaSBhbmQgMTkgYml0XG4gKiBzZXFfbG93LCBhbmQgcmFuZG9tbHkgaW5pdGlhbGl6ZWQgdXBvbiB0aW1lc3RhbXAgY2hhbmdlLiAzMSBiaXQgY291bnRlciBzaXplXG4gKiB3YXMgc2VsZWN0ZWQgYXMgYW55IGJpdHdpc2Ugb3BlcmF0aW9ucyBpbiBub2RlIGFyZSBkb25lIGFzIF9zaWduZWRfIDMyIGJpdFxuICogaW50cy4gd2UgZXhjbHVkZSB0aGUgc2lnbiBiaXQuXG4gKi9cblxudmFyIF9zZXFMb3cgPSBudWxsO1xudmFyIF9zZXFIaWdoID0gbnVsbDtcbnZhciBfbXNlY3MgPSAwO1xuZnVuY3Rpb24gdjcob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gaW5pdGlhbGl6ZSBidWZmZXIgYW5kIHBvaW50ZXJcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBVaW50OEFycmF5KDE2KTtcblxuICAvLyBybmRzIGlzIFVpbnQ4QXJyYXkoMTYpIGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlc1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgLy8gbWlsbGlzZWNvbmRzIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDBcbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7XG5cbiAgLy8gc2VxIGlzIHVzZXIgcHJvdmlkZWQgMzEgYml0IGNvdW50ZXJcbiAgdmFyIHNlcSA9IG9wdGlvbnMuc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnNlcSA6IG51bGw7XG5cbiAgLy8gaW5pdGlhbGl6ZSBsb2NhbCBzZXEgaGlnaC9sb3cgcGFydHNcbiAgdmFyIHNlcUhpZ2ggPSBfc2VxSGlnaDtcbiAgdmFyIHNlcUxvdyA9IF9zZXFMb3c7XG5cbiAgLy8gY2hlY2sgaWYgY2xvY2sgaGFzIGFkdmFuY2VkIGFuZCB1c2VyIGhhcyBub3QgcHJvdmlkZWQgbXNlY3NcbiAgaWYgKG1zZWNzID4gX21zZWNzICYmIG9wdGlvbnMubXNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIF9tc2VjcyA9IG1zZWNzO1xuXG4gICAgLy8gdW5sZXNzIHVzZXIgcHJvdmlkZWQgc2VxLCByZXNldCBzZXEgcGFydHNcbiAgICBpZiAoc2VxICE9PSBudWxsKSB7XG4gICAgICBzZXFIaWdoID0gbnVsbDtcbiAgICAgIHNlcUxvdyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgd2UgaGF2ZSBhIHVzZXIgcHJvdmlkZWQgc2VxXG4gIGlmIChzZXEgIT09IG51bGwpIHtcbiAgICAvLyB0cmltIHByb3ZpZGVkIHNlcSB0byAzMSBiaXRzIG9mIHZhbHVlLCBhdm9pZGluZyBvdmVyZmxvd1xuICAgIGlmIChzZXEgPiAweDdmZmZmZmZmKSB7XG4gICAgICBzZXEgPSAweDdmZmZmZmZmO1xuICAgIH1cblxuICAgIC8vIHNwbGl0IHByb3ZpZGVkIHNlcSBpbnRvIGhpZ2gvbG93IHBhcnRzXG4gICAgc2VxSGlnaCA9IHNlcSA+Pj4gMTkgJiAweGZmZjtcbiAgICBzZXFMb3cgPSBzZXEgJiAweDdmZmZmO1xuICB9XG5cbiAgLy8gcmFuZG9tbHkgaW5pdGlhbGl6ZSBzZXFcbiAgaWYgKHNlcUhpZ2ggPT09IG51bGwgfHwgc2VxTG93ID09PSBudWxsKSB7XG4gICAgc2VxSGlnaCA9IHJuZHNbNl0gJiAweDdmO1xuICAgIHNlcUhpZ2ggPSBzZXFIaWdoIDw8IDggfCBybmRzWzddO1xuICAgIHNlcUxvdyA9IHJuZHNbOF0gJiAweDNmOyAvLyBwYWQgZm9yIHZhclxuICAgIHNlcUxvdyA9IHNlcUxvdyA8PCA4IHwgcm5kc1s5XTtcbiAgICBzZXFMb3cgPSBzZXFMb3cgPDwgNSB8IHJuZHNbMTBdID4+PiAzO1xuICB9XG5cbiAgLy8gaW5jcmVtZW50IHNlcSBpZiB3aXRoaW4gbXNlY3Mgd2luZG93XG4gIGlmIChtc2VjcyArIDEwMDAwID4gX21zZWNzICYmIHNlcSA9PT0gbnVsbCkge1xuICAgIGlmICgrK3NlcUxvdyA+IDB4N2ZmZmYpIHtcbiAgICAgIHNlcUxvdyA9IDA7XG4gICAgICBpZiAoKytzZXFIaWdoID4gMHhmZmYpIHtcbiAgICAgICAgc2VxSGlnaCA9IDA7XG5cbiAgICAgICAgLy8gaW5jcmVtZW50IGludGVybmFsIF9tc2Vjcy4gdGhpcyBhbGxvd3MgdXMgdG8gY29udGludWUgaW5jcmVtZW50aW5nXG4gICAgICAgIC8vIHdoaWxlIHN0YXlpbmcgbW9ub3RvbmljLiBOb3RlLCBvbmNlIHdlIGhpdCAxMGsgbWlsbGlzZWNvbmRzIGJleW9uZCBzeXN0ZW1cbiAgICAgICAgLy8gY2xvY2ssIHdlIHdpbGwgcmVzZXQgYnJlYWtpbmcgbW9ub3RvbmljaXR5IChhZnRlciAoMl4zMSkqMTAwMDAgZ2VuZXJhdGlvbnMpXG4gICAgICAgIF9tc2VjcysrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyByZXNldHRpbmc7IHdlIGhhdmUgYWR2YW5jZWQgbW9yZSB0aGFuXG4gICAgLy8gMTBrIG1pbGxpc2Vjb25kcyBiZXlvbmQgc3lzdGVtIGNsb2NrXG4gICAgX21zZWNzID0gbXNlY3M7XG4gIH1cbiAgX3NlcUhpZ2ggPSBzZXFIaWdoO1xuICBfc2VxTG93ID0gc2VxTG93O1xuXG4gIC8vIFtieXRlcyAwLTVdIDQ4IGJpdHMgb2YgbG9jYWwgdGltZXN0YW1wXG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBiW2krK10gPSBfbXNlY3MgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAgJiAweGZmO1xuICBiW2krK10gPSBfbXNlY3MgLyAweDEwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAmIDB4ZmY7XG5cbiAgLy8gW2J5dGUgNl0gLSBzZXQgNCBiaXRzIG9mIHZlcnNpb24gKDcpIHdpdGggZmlyc3QgNCBiaXRzIHNlcV9oaVxuICBiW2krK10gPSBzZXFIaWdoID4+PiA0ICYgMHgwZiB8IDB4NzA7XG5cbiAgLy8gW2J5dGUgN10gcmVtYWluaW5nIDggYml0cyBvZiBzZXFfaGlcbiAgYltpKytdID0gc2VxSGlnaCAmIDB4ZmY7XG5cbiAgLy8gW2J5dGUgOF0gLSB2YXJpYW50ICgyIGJpdHMpLCBmaXJzdCA2IGJpdHMgc2VxX2xvd1xuICBiW2krK10gPSBzZXFMb3cgPj4+IDEzICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gW2J5dGUgOV0gOCBiaXRzIHNlcV9sb3dcbiAgYltpKytdID0gc2VxTG93ID4+PiA1ICYgMHhmZjtcblxuICAvLyBbYnl0ZSAxMF0gcmVtYWluaW5nIDUgYml0cyBzZXFfbG93LCAzIGJpdHMgcmFuZG9tXG4gIGJbaSsrXSA9IHNlcUxvdyA8PCAzICYgMHhmZiB8IHJuZHNbMTBdICYgMHgwNztcblxuICAvLyBbYnl0ZXMgMTEtMTVdIGFsd2F5cyByYW5kb21cbiAgYltpKytdID0gcm5kc1sxMV07XG4gIGJbaSsrXSA9IHJuZHNbMTJdO1xuICBiW2krK10gPSBybmRzWzEzXTtcbiAgYltpKytdID0gcm5kc1sxNF07XG4gIGJbaSsrXSA9IHJuZHNbMTVdO1xuICByZXR1cm4gYnVmIHx8ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYik7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2NzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVnZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuICByZXR1cm4gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTUpLCAxNik7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2ZXJzaW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==