"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/color_logo.151d29c2.svg","height":23,"width":25});

/***/ }),

/***/ 2190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.4ce3fcef.svg","height":53,"width":204});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-burger-menu"
const external_react_burger_menu_namespaceObject = require("react-burger-menu");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/close.svg
/* harmony default export */ const public_close = ({"src":"/_next/static/media/close.9ebe904c.svg","height":320,"width":320});
;// CONCATENATED MODULE: ./components/siderbar.js






/* harmony default export */ const siderbar = ((props)=>{
    return(// Pass on our props
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_burger_menu_namespaceObject.slide, {
        right: true,
        ...props,
        customCrossIcon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: public_close
        }),
        noOverlay: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    onClick: (e)=>{},
                    className: "p-ba",
                    children: "Inicio"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: "/catalogo",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "p-ba",
                    children: "Cat\xe1logo"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: "/articulos",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "p-ba",
                    children: "Articulos"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: "/contacto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "p-ba",
                    children: "Contacto"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: "/pedir",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "p-ba",
                    children: "Pedidos"
                })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./components/bar.js







function Bar() {
    const { user , error , isLoading  } = (0,nextjs_auth0_.useUser)();
    function showSettings(event) {
        event.preventDefault();
    }
    if (isLoading) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "loading"
    });
    if (error) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: error.message
    });
    if (user) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "bar",
                id: "bar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pt",
                        style: {
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: "2vw",
                            width: "15vw"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            layout: "fill",
                            alt: "",
                            objectFit: "contain"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "link-logo",
                            style: {
                                background: "transparent",
                                position: "absolute",
                                zIndex: "10",
                                left: "3vh",
                                top: "1vh",
                                cursor: "pointer",
                                width: "15vw"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(siderbar, {
                        pageWrapId: "page-wrap"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "naver",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Inicio"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/catalogo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Cat\xe1logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/articulos",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Articulos"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/contacto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Contacto"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/pedir",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Pedidos"
                                })
                            }),
                            user.email === "gerorobalino@gmail.com" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        passHref: true,
                                        href: "/manager",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "p-bar",
                                            children: "PM"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        passHref: true,
                                        href: "/managerArticulos",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "p-bar",
                                            children: "AM"
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        ]
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "bar",
                id: "bar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pt",
                        style: {
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: "2vw",
                            width: "15vw"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            layout: "fill",
                            alt: "",
                            objectFit: "contain"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "link-logo",
                            style: {
                                background: "transparent",
                                position: "absolute",
                                zIndex: "10",
                                left: "3vh",
                                top: "1vh",
                                cursor: "pointer"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(siderbar, {
                        pageWrapId: "page-wrap"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "naver",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Inicio"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/catalogo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Cat\xe1logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/articulos",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Articulos"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/contacto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Contacto"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: "/pedir",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-bar",
                                    children: "Pedidos"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: "/api/auth/login",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "login",
                    children: "Entrar"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/dist/client/image.js
var client_image = __webpack_require__(9749);
var client_image_default = /*#__PURE__*/__webpack_require__.n(client_image);
// EXTERNAL MODULE: ./public/img/color_logo.svg
var color_logo = __webpack_require__(9236);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js




















function MyApp({ Component , pageProps  }) {
    const { 0: loading , 1: setloading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        }, 3000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Loading | JuanGranel"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "loader",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "loaderAni"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-2",
                            style: {
                                height: "5vw",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translateX(-50%) translateY(-50%)",
                                width: "5vw",
                                zIndex: "12"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((client_image_default()), {
                                src: color_logo/* default */.Z,
                                layout: "fill",
                                alt: "",
                                objectFit: "cover"
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(nextjs_auth0_.UserProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Bar, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "show",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(nextjs_auth0_.UserProvider, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 93:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,676,884,246,664,675], () => (__webpack_exec__(2190)));
module.exports = __webpack_exports__;

})();