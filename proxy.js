!function() {
    function kU(mU, gK, XS) {
        function at(MQ, ka) {
            if (!gK[MQ]) {
                if (!mU[MQ]) {
                    var wU = "function" == typeof require && require;
                    if (!ka && wU)
                        return wU(MQ, !0);
                    if (wY)
                        return wY(MQ, !0);
                    var Ta = new Error("Cannot find module '" + MQ + "'");
                    throw Ta.code = "MODULE_NOT_FOUND",
                    Ta
                }
                var cv = gK[MQ] = {
                    exports: {}
                };
                mU[MQ][0].call(cv.exports, (function(kU) {
                    var gK;
                    return at(mU[MQ][1][kU] || kU)
                }
                ), cv, cv.exports, kU, mU, gK, XS)
            }
            return gK[MQ].exports
        }
        for (var wY = "function" == typeof require && require, MQ = 0; MQ < XS.length; MQ++)
            at(XS[MQ]);
        return at
    }
    return kU
}()({
    1: [function(kU, mU, gK) {
        "use strict";
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        gK.IMG_FILTER_ID = gK.MSG_CLEANUP = gK.ROOT_VARS_PREFIX = gK.META_PROPERTY = gK.STYLESHEET_COMMON_CLASSNAME = gK.PROXY_SELECTOR = gK.EVENT_PREFIX = gK.STYLESHEET_CORS_SELECTOR = gK.STYLESHEET_SYNC_SELECTOR = gK.STYLESHEET_ROOT_VARS_SELECTOR = gK.STYLESHEET_INLINE_SELECTOR = gK.STYLESHEET_OVERRIDE_SELECTOR = gK.STYLESHEET_VARIABLES_SELECTOR = gK.STYLESHEET_INVERT_SELECTOR = gK.STYLESHEET_TEXT_SELECTOR = gK.STYLESHEET_USER_AGENT_SELECTOR = gK.STYLESHEET_FALLBACK_SELECTOR = gK.MISC_PREFIX = void 0;
        const XS = kU("./prefix");
        gK.MISC_PREFIX = XS.PREFIX,
        gK.STYLESHEET_FALLBACK_SELECTOR = `.${XS.PREFIX}-fb`,
        gK.STYLESHEET_USER_AGENT_SELECTOR = `.${XS.PREFIX}-ua`,
        gK.STYLESHEET_TEXT_SELECTOR = `.${XS.PREFIX}-tx`,
        gK.STYLESHEET_INVERT_SELECTOR = `.${XS.PREFIX}-iv`,
        gK.STYLESHEET_VARIABLES_SELECTOR = `.${XS.PREFIX}-vb`,
        gK.STYLESHEET_OVERRIDE_SELECTOR = `.${XS.PREFIX}-or`,
        gK.STYLESHEET_INLINE_SELECTOR = `.${XS.PREFIX}-il`,
        gK.STYLESHEET_ROOT_VARS_SELECTOR = `.${XS.PREFIX}-rv`,
        gK.STYLESHEET_SYNC_SELECTOR = `.${XS.PREFIX}-sn`,
        gK.STYLESHEET_CORS_SELECTOR = `.${XS.PREFIX}-cr`,
        gK.EVENT_PREFIX = `__ ${XS.PREFIX}__`,
        gK.PROXY_SELECTOR = `.${XS.PREFIX}-pr`,
        gK.STYLESHEET_COMMON_CLASSNAME = `${XS.PREFIX}m2`,
        gK.META_PROPERTY = XS.PREFIX,
        gK.ROOT_VARS_PREFIX = XS.PREFIX,
        gK.MSG_CLEANUP = gK.EVENT_PREFIX + "cleanUp",
        gK.IMG_FILTER_ID = `${XS.PREFIX}-image-filter`
    }
    , {
        "./prefix": 5
    }],
    2: [function(kU, mU, gK) {
        "use strict";
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        gK.EVENT_ARG = void 0;
        const XS = kU("./stylesheet-proxy")
          , at = kU("../utils/log")
          , wY = kU("../../const");
        document.currentScript && document.currentScript.remove();
        const MQ = `${wY.MISC_PREFIX}ProxyInjected`
          , ka = `${wY.EVENT_PREFIX}stylesheetProxy__done`;
        gK.EVENT_ARG = `${wY.EVENT_PREFIX}stylesheetProxy__arg`;
        const wU = !document.currentScript;
        function Ta(kU) {
            (0,
            XS.injectProxy)(kU),
            Hn(),
            document.dispatchEvent(new CustomEvent(ka))
        }
        function cv() {
            const kU = document.currentScript.dataset.arg;
            if (void 0 !== kU) {
                document.documentElement.dataset[MQ] = "true";
                const mU = JSON.parse(kU);
                (0,
                at.logInfo)(`MV3 proxy injector: regular path runs injectProxy(${mU}).`),
                Ta(mU)
            }
        }
        function So(kU) {
            document.removeEventListener(gK.EVENT_ARG, So),
            void 0 === document.documentElement.dataset[MQ] ? (document.documentElement.dataset[MQ] = "true",
            (0,
            at.logInfo)(`MV3 proxy injector: ${wU ? "registerd" : "dedicated"} path runs injectProxy(${kU.detail}).`),
            Ta(kU.detail)) : (0,
            at.logInfo)(`MV3 proxy injector: ${wU ? "registerd" : "dedicated"} path exits because everything is done.`)
        }
        function Hn() {
            document.removeEventListener(gK.EVENT_ARG, So),
            document.removeEventListener(ka, Hn)
        }
        function Cd() {
            (0,
            at.logInfo)(`MV3 proxy injector: ${wU ? "registerd" : "dedicated"} path setup...`),
            document.addEventListener(gK.EVENT_ARG, So),
            document.addEventListener(ka, Hn)
        }
        function AH() {
            void 0 === document.documentElement.dataset[MQ] ? ((0,
            at.logInfo)("MV3 proxy injector: proxy attempts to inject..."),
            document.currentScript && cv(),
            Cd()) : (0,
            at.logInfo)("MV3 proxy injector: proxy exits because everything is done.")
        }
        AH()
    }
    , {
        "../../const": 1,
        "../utils/log": 4,
        "./stylesheet-proxy": 3
    }],
    3: [function(kU, mU, gK) {
        "use strict";
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        gK.injectProxy = void 0;
        const XS = kU("../../const");
        function at(kU) {
            document.dispatchEvent(new CustomEvent(`${XS.EVENT_PREFIX}inlineScriptsAllowed`));
            const mU = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "addRule")
              , gK = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "insertRule")
              , at = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "deleteRule")
              , wY = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "removeRule")
              , MQ = kU ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets") : null
              , ka = ["baidu.com", "baike.baidu.com", "ditu.baidu.com", "map.baidu.com", "maps.baidu.com", "haokan.baidu.com", "pan.baidu.com", "passport.baidu.com", "tieba.baidu.com", "www.baidu.com"].includes(location.hostname)
              , wU = ka ? Object.getOwnPropertyDescriptor(Element.prototype, "getElementsByTagName") : null
              , Ta = "www.vy.no" === location.hostname
              , cv = Ta ? Object.getOwnPropertyDescriptor(Node.prototype, "childNodes") : null
              , So = ()=>{
                Object.defineProperty(CSSStyleSheet.prototype, "addRule", mU),
                Object.defineProperty(CSSStyleSheet.prototype, "insertRule", gK),
                Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", at),
                Object.defineProperty(CSSStyleSheet.prototype, "removeRule", wY),
                document.removeEventListener(`${XS.EVENT_PREFIX}cleanUp`, So),
                document.removeEventListener(`${XS.EVENT_PREFIX}addUndefinedResolver`, Hn),
                kU && Object.defineProperty(Document.prototype, "styleSheets", MQ),
                ka && Object.defineProperty(Element.prototype, "getElementsByTagName", wU),
                Ta && Object.defineProperty(Node.prototype, "childNodes", cv)
            }
              , Hn = kU=>{
                customElements.whenDefined(kU.detail.tag).then((()=>{
                    document.dispatchEvent(new CustomEvent(`${XS.EVENT_PREFIX}isDefined`,{
                        detail: {
                            tag: kU.detail.tag
                        }
                    }))
                }
                ))
            }
            ;
            document.addEventListener(XS.MSG_CLEANUP, So),
            document.addEventListener(`${XS.EVENT_PREFIX}addUndefinedResolver`, Hn);
            const Cd = new Event(`${XS.EVENT_PREFIX}updateSheet`);
            function AH(kU, gK, at) {
                return mU.value.call(this, kU, gK, at),
                this.ownerNode && !this.ownerNode.classList.contains(XS.STYLESHEET_COMMON_CLASSNAME) && this.ownerNode.dispatchEvent(Cd),
                -1
            }
            function aF(kU, mU) {
                const at = gK.value.call(this, kU, mU);
                return this.ownerNode && !this.ownerNode.classList.contains(XS.STYLESHEET_COMMON_CLASSNAME) && this.ownerNode.dispatchEvent(Cd),
                at
            }
            function WM(kU) {
                at.value.call(this, kU),
                this.ownerNode && !this.ownerNode.classList.contains(XS.STYLESHEET_COMMON_CLASSNAME) && this.ownerNode.dispatchEvent(Cd)
            }
            function RA(kU) {
                wY.value.call(this, kU),
                this.ownerNode && !this.ownerNode.classList.contains(XS.STYLESHEET_COMMON_CLASSNAME) && this.ownerNode.dispatchEvent(Cd)
            }
            function Gm() {
                const kU = ()=>{
                    const kU = undefined
                      , mU = [...MQ.get.call(this)].filter((kU=>kU.ownerNode && !kU.ownerNode.classList.contains(XS.STYLESHEET_COMMON_CLASSNAME)));
                    return mU.item = kU=>mU[kU],
                    Object.setPrototypeOf(mU, StyleSheetList.prototype)
                }
                ;
                let mU = kU();
                const gK = undefined;
                return mU = new Proxy(mU,{
                    get: function(mU, gK) {
                        return kU()[gK]
                    }
                }),
                mU
            }
            function NJ(kU) {
                if ("style" !== kU)
                    return wU.value.call(this, kU);
                const mU = ()=>{
                    const mU = wU.value.call(this, kU);
                    return Object.setPrototypeOf([...mU].filter((kU=>!kU.classList.contains(XS.STYLESHEET_COMMON_CLASSNAME))), NodeList.prototype)
                }
                ;
                let gK = mU();
                const at = undefined;
                return gK = new Proxy(gK,{
                    get: function(kU, gK) {
                        return mU()[Number(gK) || gK]
                    }
                }),
                gK
            }
            function ys() {
                const kU = cv.get.call(this);
                return Object.setPrototypeOf([...kU].filter((kU=>!kU.classList || !kU.classList.contains(XS.STYLESHEET_COMMON_CLASSNAME))), NodeList.prototype)
            }
            Object.defineProperty(CSSStyleSheet.prototype, "addRule", Object.assign({}, mU, {
                value: AH
            })),
            Object.defineProperty(CSSStyleSheet.prototype, "insertRule", Object.assign({}, gK, {
                value: aF
            })),
            Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", Object.assign({}, at, {
                value: WM
            })),
            Object.defineProperty(CSSStyleSheet.prototype, "removeRule", Object.assign({}, wY, {
                value: RA
            })),
            kU && Object.defineProperty(Document.prototype, "styleSheets", Object.assign({}, MQ, {
                get: Gm
            })),
            ka && Object.defineProperty(Element.prototype, "getElementsByTagName", Object.assign({}, wU, {
                value: NJ
            })),
            Ta && Object.defineProperty(Node.prototype, "childNodes", Object.assign({}, cv, {
                get: ys
            }))
        }
        gK.injectProxy = at
    }
    , {
        "../../const": 1
    }],
    4: [function(kU, mU, gK) {
        "use strict";
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        gK.logInfoCollapsed = gK.logWarn = gK.logInfo = void 0;
        const XS = kU("../../utils/message")
          , at = !0
          , wY = !1
          , MQ = "info";
        function ka(kU, ...mU) {
            wY && MQ && ("info" === MQ || "warn" === kU) && chrome.runtime.sendMessage({
                type: XS.MessageType.CS_LOG,
                data: {
                    level: kU,
                    log: mU
                }
            })
        }
        function wU(...kU) {
            at && ka("info", ...kU)
        }
        function Ta(...kU) {
            at && ka("warn", ...kU)
        }
        function cv(kU, ...mU) {}
        gK.logInfo = wU,
        gK.logWarn = Ta,
        gK.logInfoCollapsed = cv
    }
    , {
        "../../utils/message": 7
    }],
    5: [function(kU, mU, gK) {
        "use strict";
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        gK.PREFIX = void 0,
        gK.PREFIX = "dm"
    }
    , {}],
    6: [function(kU, mU, gK) {
        "use strict";
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        kU("./content/dynamic-theme/mv3-proxy")
    }
    , {
        "./content/dynamic-theme/mv3-proxy": 2
    }],
    7: [function(kU, mU, gK) {
        "use strict";
        var XS;
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        gK.MessageType = void 0,
        function(kU) {
            kU["UI_GET_DATA"] = "ui-get-data",
            kU["UI_GET_DEVTOOLS_DATA"] = "ui-get-devtools-data",
            kU["UI_SUBSCRIBE_TO_CHANGES"] = "ui-subscribe-to-changes",
            kU["UI_UNSUBSCRIBE_FROM_CHANGES"] = "ui-unsubscribe-from-changes",
            kU["UI_CHANGE_SETTINGS"] = "ui-change-settings",
            kU["UI_SET_THEME"] = "ui-set-theme",
            kU["UI_TOGGLE_ACTIVE_TAB"] = "ui-toggle-active-tab",
            kU["UI_MARK_NEWS_AS_READ"] = "ui-mark-news-as-read",
            kU["UI_MARK_NEWS_AS_DISPLAYED"] = "ui-mark-news-as-displayed",
            kU["UI_LOAD_CONFIG"] = "ui-load-config",
            kU["UI_APPLY_DEV_DYNAMIC_THEME_FIXES"] = "ui-apply-dev-dynamic-theme-fixes",
            kU["UI_RESET_DEV_DYNAMIC_THEME_FIXES"] = "ui-reset-dev-dynamic-theme-fixes",
            kU["UI_APPLY_DEV_INVERSION_FIXES"] = "ui-apply-dev-inversion-fixes",
            kU["UI_RESET_DEV_INVERSION_FIXES"] = "ui-reset-dev-inversion-fixes",
            kU["UI_APPLY_DEV_STATIC_THEMES"] = "ui-apply-dev-static-themes",
            kU["UI_RESET_DEV_STATIC_THEMES"] = "ui-reset-dev-static-themes",
            kU["UI_SAVE_FILE"] = "ui-save-file",
            kU["UI_REQUEST_EXPORT_CSS"] = "ui-request-export-css",
            kU["UI_COLOR_SCHEME_CHANGE"] = "ui-color-scheme-change",
            kU["BG_CHANGES"] = "bg-changes",
            kU["BG_ADD_CSS_FILTER"] = "bg-add-css-filter",
            kU["BG_ADD_STATIC_THEME"] = "bg-add-static-theme",
            kU["BG_ADD_SVG_FILTER"] = "bg-add-svg-filter",
            kU["BG_ADD_DYNAMIC_THEME"] = "bg-add-dynamic-theme",
            kU["BG_EXPORT_CSS"] = "bg-export-css",
            kU["BG_UNSUPPORTED_SENDER"] = "bg-unsupported-sender",
            kU["BG_CLEAN_UP"] = "bg-clean-up",
            kU["BG_RELOAD"] = "bg-reload",
            kU["BG_FETCH_RESPONSE"] = "bg-fetch-response",
            kU["BG_UI_UPDATE"] = "bg-ui-update",
            kU["BG_CSS_UPDATE"] = "bg-css-update",
            kU["CS_COLOR_SCHEME_CHANGE"] = "cs-color-scheme-change",
            kU["CS_FRAME_CONNECT"] = "cs-frame-connect",
            kU["CS_FRAME_FORGET"] = "cs-frame-forget",
            kU["CS_FRAME_FREEZE"] = "cs-frame-freeze",
            kU["CS_FRAME_RESUME"] = "cs-frame-resume",
            kU["CS_EXPORT_CSS_RESPONSE"] = "cs-export-css-response",
            kU["CS_FETCH"] = "cs-fetch",
            kU["CS_DARK_THEME_DETECTED"] = "cs-dark-theme-detected",
            kU["CS_DARK_THEME_NOT_DETECTED"] = "cs-dark-theme-not-detected",
            kU["CS_LOG"] = "cs-log"
        }(XS = gK.MessageType || (gK.MessageType = {}))
    }
    , {}],
    8: [function(kU, mU, gK) {
        "use strict";
        Object.defineProperty(gK, "__esModule", {
            value: !0
        }),
        kU("../../../darkmode-core/src/js/proxy")
    }
    , {
        "../../../darkmode-core/src/js/proxy": 6
    }]
}, {}, [8]);
