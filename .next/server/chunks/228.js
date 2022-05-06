"use strict";
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 6228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(741);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(451);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDmifrQrHHrwOCfFSzjSqa22O08XoilP5o",
    authDomain: "prodcutosjuangranel.firebaseapp.com",
    databaseURL: "https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos.json",
    projectId: "prodcutosjuangranel",
    storageBucket: "prodcutosjuangranel.appspot.com",
    messagingSenderId: "220006501964",
    appId: "1:220006501964:web:897bc51f42e8408994aee9"
};
// Initialize Firebase
const fb = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
const db = fb.firestore();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;